import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID 8oQ4xsbVsUH7SjX0BdWEOtdbIktuxcCdhmpjAw3LI0E"
  }
});

export default {
  getImages(searchTerm) {
    return apiClient.get(`search/photos/?query=${searchTerm}`);
  }
};
