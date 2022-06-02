import { useContext, useState, useEffect } from "react";

import SearchForm from "../components/search/SearchForm";
import MotosContext from "../store/MotosContext";
import {
	getModelSpecsDB,
	getModelSpecsAPI,
	saveModelSpecsDB,
} from "../components/api/GetModelSpecs";
import SearchedMoto from "../components/search/SearchedMoto";
import {
	getModelsByCategoryMakeAPI,
	postModelsByCategoryMakeDB,
} from "../components/api/ModelsByCategoryMakeAPI";

function SearchPage() {
	const motosContext = useContext(MotosContext);

	const [makeId, setMakeId] = useState("");

	const [makeText, setMakeText] = useState("");
	const [modelText, setModelText] = useState("");
	const [categoryText, setCategoryText] = useState("");

	const [makeFiltered, setMakeFiltered] = useState([]);
	const [modelFiltered, setModelFiltered] = useState([]);
	const [categoryFiltered, setCategoryFiltered] = useState([]);

	const [makeDropDownMenu, setMakeDropDownMenu] = useState(false);
	const [modelDropDownMenu, setModelDropDownMenu] = useState(false);
	const [categoryDropDownMenu, setCategoryDropDownMenu] = useState(false);

	const [disableMakeItem, setDisableMakeItem] = useState(false);
	const [disableModelItem, setDisableModelItem] = useState(false);
	const [disableCategoryItem, setDisableCategoryItem] = useState(false);

	const [disableModelDropDown, setDisableModelDropDown] = useState(true);
	const [disableCategoryDropDown, setDisableCategoryDropDown] = useState(true);

	const [disableSearchButton, setDisableSearchButton] = useState(true);

	const [modelErrorMsg, setModelErrorMsg] = useState("");

	const [loading, setLoading] = useState(true);
	const [loadingMoto, setLoadingMoto] = useState(false);

	const [modelSpecsData, setModelSpecsData] = useState([]);

	useEffect(() => {
		if (
			motosContext.allMakes.length &&
			Object.entries(motosContext.modelsByMake).length &&
			Object.entries(motosContext.allCategories).length
		) {
			setMakeFiltered(() => motosContext.allMakes);
			setCategoryFiltered(
				() => Object.entries(motosContext.allCategories)[0][1]
			);
			setLoading(false);
		} else {
			setLoading(true);
		}
	}, [
		motosContext.allMakes,
		motosContext.modelsByMake,
		motosContext.allCategories,
	]);

	function checkModelInDB(modelTextNoYear) {
		let isModelInArr = false;
		const modelsArr = Object.entries(motosContext.modelsByMake[makeText])[0][1];
		for (const [, make] of modelsArr.entries()) {
			if (make.name === modelTextNoYear) {
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

		if (!modelText) {
			setModelErrorMsg("Select make and model before searching.");
		} else {
			const modelTextNoYear = modelText.endsWith(")")
				? modelText.split("(")[0].slice(0, -1)
				: modelText;
			const modelInArr = checkModelInDB(modelTextNoYear);
			if (modelInArr) {
				let modelSpecsData;
				// check db for specs
				const modelSpecsDB = await getModelSpecsDB(makeText, modelTextNoYear);
				if (!modelSpecsDB) {
					const modelSpecsAPI = await getModelSpecsAPI(
						makeText,
						modelTextNoYear
					);
					await saveModelSpecsDB(makeText, modelTextNoYear, modelSpecsAPI);
					modelSpecsData = modelSpecsAPI;
				} else {
					modelSpecsData = Object.entries(modelSpecsDB)[0][1];
				}
				setModelSpecsData(modelSpecsData);
			} else {
				setModelErrorMsg("Model not found. Select from list.");
			}
		}
		setLoadingMoto(false);
	}

	function getModelsByMake(make) {
		setModelText("");
		if (motosContext.modelsByMake[make]) {
			const modelsArr = Object.entries(motosContext.modelsByMake[make])[0][1];
			setModelFiltered(modelsArr);
		} else {
			setModelFiltered([]);
			setDisableModelDropDown(true);
			setDisableCategoryDropDown(true);
			setCategoryDropDownMenu(false);
		}
	}

	function getModelsByCategoryMake(makeId, category) {
		const modelsByCatMake =
			motosContext.modelsByCategoryMake?.[makeText]?.[category];

		if (category !== "All") {
			if (modelsByCatMake) {
				setModelFiltered(Object.entries(modelsByCatMake)[0][1]);
			} else {
				async function getPostModelsByCategoryMake() {
					const data = await getModelsByCategoryMakeAPI(makeId, category);
					await postModelsByCategoryMakeDB(makeText, category, data);
					setModelFiltered(data);
				}
				getPostModelsByCategoryMake();
			}
		} else {
			getModelsByMake(makeText);
		}
		setCategoryDropDownMenu(false);
		setDisableModelDropDown(false);
		setDisableModelItem(false);
		setModelDropDownMenu(true);
	}

	function filterInputArr(e, arr) {
		return arr.filter((type) => {
			const regex = new RegExp(e.target.value, "gi");
			return type.name.match(regex)?.length > 0;
		});
	}

	function makeInputOnChange(e) {
		const filtered = filterInputArr(e, motosContext.allMakes);
		setMakeFiltered(filtered);
		setMakeText(e.target.value);
		setDisableMakeItem(false);
		setModelText("");
		setCategoryText("");
		setModelDropDownMenu(false);
		setCategoryDropDownMenu(false);
		setCategoryFiltered(Object.entries(motosContext.allCategories)[0][1]);
		setMakeDropDownMenu(true);
		if (e.target.value && filtered.length === 0) {
			setMakeFiltered([{ id: -1, name: "No matches found" }]);
			setDisableMakeItem(true);
		}
		getModelsByMake(e.target.value);
	}

	function modelInputOnChange(e) {
		const modelsArr = Object.entries(motosContext.modelsByMake[makeText])[0][1];
		const filtered = filterInputArr(e, modelsArr);
		setModelFiltered(filtered);
		setModelText(e.target.value);
		if (e.target.value && filtered.length === 0) {
			setModelDropDownMenu(true);
			setModelFiltered([{ id: -1, name: "No matches found" }]);
			setDisableModelItem(true);
		} else {
			setModelDropDownMenu(true);
		}
	}

	function categoryInputOnChange(e) {
		const catArr = Object.entries(motosContext.allCategories)[0][1];
		const filtered = filterInputArr(e, catArr);
		setModelText("");
		setModelDropDownMenu(false);
		setCategoryText(e.target.value);
		setCategoryFiltered(filtered);
		setDisableCategoryItem(false);
		setCategoryDropDownMenu(true);
		if (e.target.value && filtered.length === 0) {
			setCategoryFiltered([{ id: -1, name: "No matches found" }]);
			setDisableCategoryItem(true);
			setDisableModelDropDown(true);
		}
	}

	function dropDownItemSelectHandler(e, type) {
		if (type === "make") {
			setMakeId(e.target.id);
			setCategoryText("");
			setMakeText(e.target.text);
			getModelsByMake(e.target.text);

			setMakeDropDownMenu(false);
			setCategoryDropDownMenu(true);

			setDisableCategoryDropDown(false);
			setDisableModelDropDown(false);

			setDisableModelItem(false);
			setDisableCategoryItem(false);

			setCategoryFiltered(Object.entries(motosContext.allCategories)[0][1]);
			setTimeout(() => {
				if (document.getElementById("categorySearchInput")) {
					document.getElementById("categorySearchInput").focus();
				}
			}, 0);
		} else if (type === "category") {
			setModelText("");
			setCategoryText(e.target.text);
			setCategoryDropDownMenu(false);
			setModelDropDownMenu(true);
			getModelsByCategoryMake(makeId, e.target.text);
			setTimeout(() => {
				if (document.getElementById("modelSearchInput")) {
					document.getElementById("modelSearchInput").focus();
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
			setCategoryDropDownMenu(false);
		} else if (type === "category") {
			setCategoryDropDownMenu(true);
			setModelDropDownMenu(false);
			setMakeDropDownMenu(false);
		} else if (type === "model") {
			setModelDropDownMenu(true);
			setMakeDropDownMenu(false);
			setCategoryDropDownMenu(false);
		}
	}

	function dropDownClickHandler(_, type) {
		if (type === "make") {
			setMakeDropDownMenu((prev) => !prev);
			setCategoryDropDownMenu(false);
			setModelDropDownMenu(false);
		} else if (type === "category") {
			setCategoryDropDownMenu((prev) => !prev);
			setMakeDropDownMenu(false);
			setModelDropDownMenu(false);
		} else if (type === "model") {
			setModelDropDownMenu((prev) => !prev);
			setMakeDropDownMenu(false);
			setCategoryDropDownMenu(false);
		}
	}

	document.addEventListener("click", (e) => {
		if (
			!e.target.matches(".form-toggle") &&
			!/DropDownMenu/.test(e.target.id)
		) {
			setMakeDropDownMenu(false);
			setModelDropDownMenu(false);
			setCategoryDropDownMenu(false);
		}
	});

	document.addEventListener("keydown", (e) => {
		const searchInputs = {
			makeSearchInput: "make",
			categorySearchInput: "category",
			modelSearchInput: "model",
		};

		if (searchInputs[e.target.id] && e.key === "ArrowDown") {
			e.preventDefault();
			document
				.getElementById(`${searchInputs[e.target.id]}DropDownMenu`)
				.childNodes[0].focus();
		}
	});

	return (
		<div>
			<SearchForm
				submitHandler={submitHandler}
				makeText={makeText}
				modelText={modelText}
				categoryText={categoryText}
				makeInputOnChange={makeInputOnChange}
				modelInputOnChange={modelInputOnChange}
				categoryInputOnChange={categoryInputOnChange}
				makeFiltered={makeFiltered}
				modelFiltered={modelFiltered}
				categoryFiltered={categoryFiltered}
				makeDropDownMenu={makeDropDownMenu}
				modelDropDownMenu={modelDropDownMenu}
				categoryDropDownMenu={categoryDropDownMenu}
				disableMakeItem={disableMakeItem}
				disableModelItem={disableModelItem}
				disableCategoryItem={disableCategoryItem}
				disableModelDropDown={disableModelDropDown}
				disableCategoryDropDown={disableCategoryDropDown}
				disableSearchButton={disableSearchButton}
				dropDownItemSelectHandler={dropDownItemSelectHandler}
				dropDownClickHandler={dropDownClickHandler}
				dropDownMenu={dropDownMenu}
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
