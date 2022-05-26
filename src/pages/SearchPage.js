import { useContext, useState, useEffect } from "react";

import SearchForm from "../components/search/SearchForm";
import MotosContext from "../store/MotosContext";
import {
	getModelSpecsDB,
	getModelSpecsAPI,
	saveModelSpecsDB,
} from "../components/api/GetModelSpecs";
import SearchedMoto from "../components/search/SearchedMoto";

const test_data = {
	articleCompleteInfo: {
		articleID: 596204,
		makeName: "Aprilia",
		modelName: "Dorsoduro 1200",
		categoryName: "Sport touring",
		yearName: 2015,
	},
	articleImage: {
		imageName: "Aprilia Dorsoduro 1200 2015.jpg",
		link: "http://api-motorcycle.makingdatameaningful.com/files/Aprilia/2015/Dorsoduro 1200/Aprilia_2015_Dorsoduro 1200.jpg",
	},
	engineAndTransmission: {
		displacementName: "1197.00 ccm (73.04 cubic inches)",
		engineTypeName: "Longitudinal 90° V-twin",
		engineDetailsName: "V2, four-stroke",
		powerName: "130.00 HP (94.9  kW)) @ 8500 RPM",
		torqueName: "115.00 Nm (11.7 kgf-m or 84.8 ft.lbs) @ 6500 RPM",
		compressionName: "12.0:1",
		boreXStrokeName: "106.0 x 67.8 mm (4.2 x 2.7 inches)",
		valvesPerCylinderName: "4",
		fuelSystemName: "Injection",
		lubricationSystemName: "Wet sump",
		coolingSystemName: "Liquid",
		gearboxName: "6-speed",
		transmissionTypeFinalDriveName: "Chain",
		clutchName: "Multiplate wet clutch, hydraulically operated",
		drivelineName: "Drive ratio: 16/40",
		exhaustSystemName:
			"100% stainless steel 2-in-1 exhaust system with dual catalytic converters and double oxygen sensor",
	},
	chassisSuspensionBrakesAndWheels: {
		frameTypeName:
			"Modular tubular steel frame fastened to aluminium side plates by high strength bolts. Removable steel rear subframe.",
		frontBrakesName: "Double disc. Bremo. ABS.",
		frontBrakesDiameterName: "320 mm (12.6 inches)",
		frontSuspensionName:
			"Sachs upside-down front fork with fully adjustable compression and rebound damping and spring preload. Wheel travel 167 mm. ",
		frontTyreName: "120/70-ZR17 ",
		frontWheelTravelName: "160 mm (6.3 inches)",
		rakeName: "27.3°",
		rearBrakesName: "Single disc. Bremo. ABS.",
		rearBrakesDiameterName: "240 mm (9.4 inches)",
		rearSuspensionName:
			"Aluminium alloy swingarm Sachs hydraulic shock absorber with adjustable rebound and preload. ",
		rearTyreName: "190/55-ZR17 ",
		rearWheelTravelName: "155 mm (6.1 inches)",
		trailName: "118 mm (4.6 inches)",
	},
	physicalMeasuresAndCapacities: {
		dryWeightName: "212.0 kg (467.4 pounds)",
		fuelCapacityName: "15.00 litres (3.96 gallons)",
		overallHeightName: "1,205 mm (47.4 inches)",
		overallLengthName: "2,248 mm (88.5 inches)",
		overallWidthName: "925 mm (36.4 inches)",
		powerWeightRatioName: "0.6132 HP/kg",
		reserveFuelCapacityName: "2.50 litres (0.66 gallons)",
		seatHeightName: "870 mm (34.3 inches) If adjustable, lowest setting.",
	},
	otherSpecifications: {
		colorOptionsName: "White, red",
		commentsName:
			"Two channel Continental ABS with Aprilia Traction Control. Integrated engine management system. Triple map Ride by Wire throttle management: Sport (S), Touring (T), Rain (R). Sold in Australia.",
		factoryWarrantyName: "2-year unlimited-mileage warranty",
		starterName: "Electric",
	},
};

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
		const modelInArr = checkModelInDB();
		if (modelInArr) {
			console.log("model in arr");
			let modelSpecsData;
			// check db for specs
			const modelSpecsDB = await getModelSpecsDB();
			if (!modelSpecsDB) {
				const modelSpecsAPI = await getModelSpecsAPI(makeText, modelText);
				await saveModelSpecsDB(makeText, modelText, modelSpecsAPI);
				modelSpecsData = modelSpecsAPI;
			} else {
				modelSpecsData = modelSpecsDB;
			}
			setModelSpecsData(modelSpecsData);
			// display data
			console.log(`modelSpecsData ~~~>`, modelSpecsData);
		} else {
			setModelErrorMsg("Model not found. Select from list.");
		}
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
		} else if (type === "model") {
			setModelText(e.target.text);
			setModelDropDownMenu(false);
			setDisableSearchButton(false);
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
			{modelSpecsData.length > 0 && <SearchedMoto data={modelSpecsData[0]} />}
		</div>
	);
}

export default SearchPage;
