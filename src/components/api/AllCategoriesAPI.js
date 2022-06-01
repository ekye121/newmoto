const API_KEY = process.env.REACT_APP_API_KEY;

export async function getAllCategoriesAPI() {
	try {
		const options = {
			headers: {
				"X-RapidAPI-Host": "motorcycle-specs-database.p.rapidapi.com",
				"X-RapidAPI-Key": API_KEY,
			},
		};
		const url = "https://motorcycle-specs-database.p.rapidapi.com/category";
		const res = await fetch(url, options);
		const data = res.json();
		return data;
	} catch (err) {
		console.error(err);
	}
}

export async function postAllCategoriesDB(allCategoriesData) {
	try {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(allCategoriesData),
		};
		const url = `https://newmoto-3d5a9-default-rtdb.firebaseio.com/all-categories/.json`;
		const res = await fetch(url, options);
		const data = res.json();
		return data;
	} catch (err) {
		console.error(err);
	}
}
