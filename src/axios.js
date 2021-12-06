import axios from "axios";

const instance = axios.create({
	// THE API (cloud function) URL
	baseURL: "https://us-central1-clone-e4e44.cloudfunctions.net/api",
	// baseURL: "http://localhost:5001/clone-e4e44/us-central1/api",
});

export default instance;
