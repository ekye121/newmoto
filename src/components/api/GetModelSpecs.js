const API_KEY = process.env.REACT_APP_API_KEY;

// check if specs in db
export async function getModelSpecsDB(make, model) {
	try {
		const url = `https://newmoto-3d5a9-default-rtdb.firebaseio.com/model-specs/${make}/${model}/.json`;
		const res = await fetch(url);
		const data = await res.json();
		return data;
	} catch (err) {
		console.error(err);
	}
}
// if not get data
export async function getModelSpecsAPI(make, model) {
	try {
		const options = {
			headers: {
				"X-RapidAPI-Host": "motorcycle-specs-database.p.rapidapi.com",
				"X-RapidAPI-Key": API_KEY,
			},
		};
		const url = `https://motorcycle-specs-database.p.rapidapi.com/make/${make}/model/${model}`;
		const res = await fetch(url, options);
		const data = await res.json();
		return data;
	} catch (err) {
		console.error(err);
	}
}
// if we fetch api, save data
export async function saveModelSpecsDB(make, model, modelSpecs) {
	try {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(modelSpecs),
		};
		const url = `https://newmoto-3d5a9-default-rtdb.firebaseio.com/model-specs/${make}/${model}/.json`;
		const res = await fetch(url, options);
		const data = await res.json();
		return data;
	} catch (err) {
		console.error(err);
	}
}
