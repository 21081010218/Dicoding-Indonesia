const API_URL = 'https://api.themoviedb.org/3/';
const KEY = 'api_key=b4d3ca8eb2315fd4299cde8cd290e2d7';
const imageBaseURL = "https://image.tmdb.org/t/p/";

const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data, optionalParam));
};

export { imageBaseURL, KEY, fetchDataFromServer };

class DataSource {
    static getvFromMultipleSources() {
        const on_the_airtvRequest = fetch(`${API_URL}/tv/on_the_air?${KEY}&language=en-US&page=1`)
            .then((response) => response.json());

        const populartvRequest = fetch(`${API_URL}/tv/popular?${KEY}&language=en-US&page=1`)
            .then((response) => response.json());

        const top_ratedtvRequest = fetch(`${API_URL}/tv/top_rated?${KEY}&language=en-US&page=1`)
            .then((response) => response.json());

        return Promise.all([on_the_airtvRequest, populartvRequest, top_ratedtvRequest])
            .then(([on_the_airtv, populartv, top_ratedtv]) => {
                return {
                    on_the_airtv: on_the_airtv.results,
                    populartv: populartv.results,
                    top_ratedtv: top_ratedtv.results,
                };
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    }

    static searchtv(keyword) {
        return fetch(`${API_URL}/search/tv?${KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            });
    }

    static genretv(id) {
        return fetch(`${API_URL}/discover/tv?${KEY}&with_genres=${id}`)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${id} is not found`);
                }
            });
    }

    static on_the_airtv() {
        return fetch(`${API_URL}/tv/on_the_air?${KEY}&language=en-US&page=1`)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject('tv not found');
                }
            });
    }

    static populartv() {
        return fetch(`${API_URL}/tv/popular?${KEY}&language=en-US&page=1`)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject('tv not found');
                }
            });
    }

    static top_ratedtv() {
        return fetch(`${API_URL}/tv/top_rated?${KEY}&language=en-US&page=1`)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject('tv not found');
                }
            });
    }
}

export default DataSource;
