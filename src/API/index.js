// FourSquare API call
// Source: Forrest's tutorial



class Helper{
	static baseURL() {
		return "https://api.foursquare.com/v2/"		
	}
	static auth() {
		const keys = {
			client_id: "QO1QM15Q3UHTTP0BR5J2Q3FB4KMTQGPKPVOPT4KR04SX1MIO",
			client_secret: "EKAYVJTJZCOFQWW0V4BOK1TBAQVASRZBPU0ZWOMOJ225BM2G",
			v:"20181006"
		};

	return Object.keys(keys)
		.map(key => `${key}=${keys[key]}`)
		.join("&");
	}


	static urlBuilder(urlPrams){
		if(!urlPrams){
			return ""
		}
		return Object.keys(urlPrams)
		.map(key => `${key}=${urlPrams[key]}`)
		.join("&");
	}

	static headers() {
		return {
			Accept: "application/json"
		}; 
	}

	static simplefetch(endPoint,method,urlPrams) {
		let requestData = {
			method,
			headers: Helper.headers()
		};
		return fetch(
			`${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(
			urlPrams
			)}`,
			requestData
		).then(res => res.json());
	}
}

export default class SquareAPI {
	static search(urlPrams) {
		return Helper.simplefetch("/venues/search","GET",urlPrams);
	}

	static getVenueDetails(VENUE_ID){
		return Helper.simplefetch(`/venues/${VENUE_ID}`, "GET")
	}

	static getVenuePhotos(VENUE_ID){
		return Helper.simplefetch(`/venues/${VENUE_ID}/photos`, "GET")
	}
}


