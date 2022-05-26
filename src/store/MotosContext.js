import { createContext, useEffect, useState } from "react";

const MotosContext = createContext({
	allMakes: [],
	modelsByMake: {},
});

export function MotosContextProvider(props) {
	const [allMakes, setAllMakes] = useState([]);
	const [modelsByMake, setModelsByMake] = useState({});

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

	const context = {
		allMakes,
		modelsByMake,
	};

	return (
		<MotosContext.Provider value={context}>
			{props.children}
		</MotosContext.Provider>
	);
}

export default MotosContext;
