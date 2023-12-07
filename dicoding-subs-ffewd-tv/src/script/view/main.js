import '../component/banner.js';
import '../component/search-tools.js';
import '../component/tv-shows.js'; // Ganti 'movies.js' dengan 'tv-shows.js'

import DataSource from '../data/data-source.js';

const main = async () => {
    const tvListElement = document.querySelector('tv-list'); // Ganti 'movie-list' dengan 'tv-list'

    if (!tvListElement.tvShows) { // Ganti 'movies' dengan 'tvShows'
        try {
            const data = await DataSource.getvFromMultipleSources();
            const renderTvShows = (data) => {
                if (
                    data.on_the_airtv &&
                    Array.isArray(data.on_the_airtv) &&
                    data.populartv &&
                    Array.isArray(data.populartv) &&
                    data.top_ratedtv &&
                    Array.isArray(data.top_ratedtv)
                ) {
                    const allTvShows = [
                        ...data.on_the_airtv,
                        ...data.populartv,
                        ...data.top_ratedtv,
                    ];

                    tvListElement.tvShows = allTvShows; // Ganti 'movies' dengan 'tvShows'
                } else {
                    console.error('Error loading TV shows. Data structure is unexpected:', data);
                }
            };

            renderTvShows(data);
        } catch (error) {
            const fallbackResult = (e) => {
                tvListElement.innerHTML = `
                    <style>
                        .placeholder {
                            font-weight: lighter;
                            color: rgba(0, 0, 0, 0.5);
                            -webkit-user-select: none;
                            -moz-user-select: none;
                            -ms-user-select: none;
                            user-select: none;
                        }
                    </style>
                    <h2 class="placeholder">${e}</h2>
                `;
            };

            fallbackResult(error);
        }
    }
};

export default main;
