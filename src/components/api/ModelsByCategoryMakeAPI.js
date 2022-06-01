const API_KEY = process.env.REACT_APP_API_KEY;

export async function getModelsByCategoryMakeAPI(makeId, category) {
	try {
		const options = {
			headers: {
				"X-RapidAPI-Host": "motorcycle-specs-database.p.rapidapi.com",
				"X-RapidAPI-Key": API_KEY,
			},
		};
		const url = `https://motorcycle-specs-database.p.rapidapi.com/model/make-id/${makeId}/category/${category}`;
		const res = await fetch(url, options);
		const data = res.json();
		return data;
	} catch (err) {
		console.error(err);
	}
}

export async function postModelsByCategoryMakeDB(
	make,
	category,
	modelsByCategoryMakeData
) {
	try {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(modelsByCategoryMakeData),
		};
		const url = `https://newmoto-3d5a9-default-rtdb.firebaseio.com/models-by-category-make/${make}/${category}/.json`;
		const res = await fetch(url, options);
		const data = res.json();
		return data;
	} catch (err) {
		console.error(err);
	}
}
