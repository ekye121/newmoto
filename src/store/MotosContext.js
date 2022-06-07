import { createContext, useEffect, useState } from "react";

const MotosContext = createContext({
	allMakes: [],
	modelsByMake: {},
	allCategories: {},
	modelsByCategoryMake: {},
	userSavedData: {},
});

export function MotosContextProvider(props) {
	const [allMakes, setAllMakes] = useState([]);
	const [modelsByMake, setModelsByMake] = useState({});
	const [allCategories, setAllCategories] = useState([]);
	const [modelsByCategoryMake, setModelsByCategoryMake] = useState({});

	useEffect(() => {
		const url =
			"https://newmoto-3d5a9-default-rtdb.firebaseio.com/all-makes.json";
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setAllMakes(Object.entries(data)[0][1]);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	useEffect(() => {
		async function getModelsByMakeFromDB() {
			try {
				const url =
					"https://newmoto-3d5a9-default-rtdb.firebaseio.com/models-by-make.json";
				const res = await fetch(url);
				const data = await res.json();
				setModelsByMake(data);
				return data;
			} catch (err) {
				console.error(err);
			}
		}
		getModelsByMakeFromDB();
	}, []);

	useEffect(() => {
		async function getAllCategoriesDB() {
			try {
				const url =
					"https://newmoto-3d5a9-default-rtdb.firebaseio.com/all-categories.json";
				const res = await fetch(url);
				const data = await res.json();
				setAllCategories(data);
				return data;
			} catch (err) {
				console.error(err);
			}
		}
		getAllCategoriesDB();

		// async function getPostAllCategories() {
		// 	const data = await getAllCategoriesAPI();
		// 	await postAllCategoriesDB(data);
		// }

		// getAllCategoriesDB()
		// 	.then((data) => {
		// 		console.log(`data ~~~>`, data);
		// 		if (!data) {
		// 			// getPostAllCategories();
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		console.error(err);
		// 	});
	}, []);

	useEffect(() => {
		async function getModelsByCategoryMakeDB() {
			try {
				const url =
					"https://newmoto-3d5a9-default-rtdb.firebaseio.com/models-by-category-make.json";
				const res = await fetch(url);
				const data = await res.json();
				setModelsByCategoryMake(data);
				return data;
			} catch (err) {
				console.error(err);
			}
		}
		getModelsByCategoryMakeDB();
	}, []);

	const context = {
		allMakes,
		modelsByMake,
		allCategories,
		modelsByCategoryMake,
	};

	return (
		<MotosContext.Provider value={context}>
			{props.children}
		</MotosContext.Provider>
	);
}

export default MotosContext;
