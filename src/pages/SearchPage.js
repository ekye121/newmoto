import { useContext, useState, useEffect } from "react";

import SearchForm from "../components/search/SearchForm";
import MotosContext from "../store/MotosContext";
import {
	getModelSpecsDB,
	getModelSpecsAPI,
	saveModelSpecsDB,
} from "../components/api/GetModelSpecs";
import SearchedMoto from "../components/search/SearchedMoto";

function SearchPage() {
	const motosContext = useContext(MotosContext);
	const [makeText, setMakeText] = useState("");
	const [modelText, setModelText] = useState("");
	const [makesFiltered, setMakesFiltered] = useState([]);
	const [modelsFiltered, setModelsFiltered] = useState([]);
	const [makeDropDownMenu, setMakeDropDownMenu] = useState(false);
	const [modelDropDownMenu, setModelDropDownMenu] = useState(false);
	const [disableMakeItem, setDisableMakeItem] = useState(false);
	const [disableModelItem, setDisableModelItem] = useState(false);
	const [disableModelDropDown, setDisableModelDropDown] = useState(true);
	const [disableSearchButton, setDisableSearchButton] = useState(true);
	const [modelErrorMsg, setModelErrorMsg] = useState("");
	const [loading, setLoading] = useState(true);
	const [modelSpecsData, setModelSpecsData] = useState([]);
	const [loadingMoto, setLoadingMoto] = useState(false);

	useEffect(() => {
		if (
			motosContext.allMakes.length &&
			Object.entries(motosContext.modelsByMake).length
		) {
			setMakesFiltered(() => motosContext.allMakes);
			setLoading(false);
		} else {
			setLoading(true);
		}
	}, [motosContext.allMakes, motosContext.modelsByMake]);

	function checkModelInDB() {
		let isModelInArr = false;
		const modelsArr = Object.entries(motosContext.modelsByMake[makeText])[0][1];
		for (const [, make] of modelsArr.entries()) {
			if (make.name === modelText) {
				isModelInArr = true;
				break;
			}
		}
		return isModelInArr;
	}

	async function submitHandler(e) {
		e.preventDefault();
		setModelErrorMsg("");
		setLoadingMoto(true);
		const modelInArr = checkModelInDB();
		if (modelInArr) {
			let modelSpecsData;
			// check db for specs
			const modelSpecsDB = await getModelSpecsDB(makeText, modelText);
			if (!modelSpecsDB) {
				const modelSpecsAPI = await getModelSpecsAPI(makeText, modelText);
				await saveModelSpecsDB(makeText, modelText, modelSpecsAPI);
				modelSpecsData = modelSpecsAPI;
			} else {
				modelSpecsData = Object.entries(modelSpecsDB)[0][1];
			}
			setModelSpecsData(modelSpecsData);
		} else {
			setModelErrorMsg("Model not found. Select from list.");
		}
		setLoadingMoto(false);
	}

	function getModelsByMake(make) {
		setModelText("");
		if (motosContext.modelsByMake[make]) {
			const modelsArr = Object.entries(motosContext.modelsByMake[make])[0][1];
			setModelsFiltered(modelsArr);
			setMakeDropDownMenu(false);
			setDisableModelDropDown(false);
			setDisableModelItem(false);
			setModelDropDownMenu(true);
		} else {
			setModelsFiltered([]);
			setDisableModelDropDown(true);
		}
	}

	function makeInputOnChange(e) {
		const filtered = motosContext.allMakes.filter((make) => {
			const regex = new RegExp(e.target.value, "gi");
			return make.name.match(regex)?.length > 0;
		});
		setMakesFiltered(filtered);
		setMakeText(e.target.value);
		setDisableMakeItem(false);
		setModelText("");
		setModelDropDownMenu(false);
		if (e.target.value && filtered.length === 0) {
			setMakeDropDownMenu(true);
			setMakesFiltered([{ id: -1, name: "No matches found" }]);
			setDisableMakeItem(true);
		} else {
			setMakeDropDownMenu(true);
		}
		getModelsByMake(e.target.value);
	}

	function modelInputOnChange(e) {
		const modelsArr = Object.entries(motosContext.modelsByMake[makeText])[0][1];
		const filtered = modelsArr.filter((make) => {
			const regex = new RegExp(e.target.value, "gi");
			return make.name.match(regex)?.length > 0;
		});
		setModelsFiltered(filtered);
		setModelText(e.target.value);
		setDisableModelItem(false);
		if (e.target.value && filtered.length === 0) {
			setModelDropDownMenu(true);
			setModelsFiltered([{ id: -1, name: "No matches found" }]);
			setDisableModelItem(true);
		} else {
			setModelDropDownMenu(true);
		}
	}

	function dropDownItemClickHandler(e, type) {
		if (type === "make") {
			setMakeText(e.target.text);
			setMakeDropDownMenu(false);
			getModelsByMake(e.target.text);
			setTimeout(() => {
				if (document.getElementById("modelDropDownMenu")) {
					document.getElementById("modelDropDownMenu").childNodes[0].focus();
				}
			}, 0);
		} else if (type === "model") {
			setModelText(e.target.text);
			setModelDropDownMenu(false);
			setDisableSearchButton(false);
			document.getElementById("buttonSearchMoto").focus();
		}
	}

	function dropDownMenu(_, type) {
		if (type === "make") {
			setMakeDropDownMenu(true);
			setModelDropDownMenu(false);
		} else if (type === "model") {
			setModelDropDownMenu(true);
			setMakeDropDownMenu(false);
		}
	}

	function dropDownClickHandler(_, type) {
		if (type === "make") {
			setMakeDropDownMenu((prev) => !prev);
			setModelDropDownMenu(false);
		} else if (type === "model") {
			setModelDropDownMenu((prev) => !prev);
			setMakeDropDownMenu(false);
		}
	}

	document.addEventListener("click", (e) => {
		if (!e.target.matches(".form-toggle")) {
			setMakeDropDownMenu(false);
			setModelDropDownMenu(false);
		}

		if (e.target.id === "makeSearchInput") {
			e.target.addEventListener("keydown", (e) => {
				if (e.key === "ArrowDown") {
					e.preventDefault();
					document.getElementById("makeDropDownMenu").childNodes[0].focus();
				}
			});
		}
	});

	return (
		<div>
			<SearchForm
				submitHandler={submitHandler}
				makeText={makeText}
				modelText={modelText}
				makeInputOnChange={makeInputOnChange}
				modelInputOnChange={modelInputOnChange}
				makesFiltered={makesFiltered}
				modelsFiltered={modelsFiltered}
				makeDropDownMenu={makeDropDownMenu}
				modelDropDownMenu={modelDropDownMenu}
				dropDownItemClickHandler={dropDownItemClickHandler}
				disableMakeItem={disableMakeItem}
				disableModelItem={disableModelItem}
				dropDownClickHandler={dropDownClickHandler}
				disableModelDropDown={disableModelDropDown}
				dropDownMenu={dropDownMenu}
				disableSearchButton={disableSearchButton}
				modelErrorMsg={modelErrorMsg}
				loading={loading}
			/>
			<hr />
			{modelSpecsData.length > 0 && (
				<SearchedMoto data={modelSpecsData[0]} loadingMoto={loadingMoto} />
			)}
		</div>
	);
}

export default SearchPage;
