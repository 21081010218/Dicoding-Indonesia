import "./tv-item.js";
import DataSource from "../data/data-source.js";

class TvList extends HTMLElement {
    async connectedCallback() {
        if (!this.hasChildNodes() && !this._tvShows) {
            try {
                const dataList = this.getAttribute("data-list");

                let tvShows;
                if (dataList === "onTheAirTv") {
                    tvShows = await DataSource.on_the_airtv();
                } else if (dataList === "popularTv") {
                    tvShows = await DataSource.populartv();
                } else if (dataList === "topRatedTv") {
                    tvShows = await DataSource.top_ratedtv();
                }

                this.tvShows = tvShows;
            } catch (error) {
                console.error(error);
            }
        }
    }

    set tvShows(tvShows) {
        this._tvShows = tvShows;
        this.render();
    }

    render() {
        if (!this._tvShows) {
            return;
        }

        const tvListContainer = document.createElement("div");
        tvListContainer.className = "tv-list-container";
        this.appendChild(tvListContainer);

        this._tvShows.forEach((tvShow) => {
            const tvItemElement = document.createElement("tv-item");
            tvItemElement.tv = tvShow;
            tvListContainer.appendChild(tvItemElement);
        });
    }
}

customElements.define('tv-list', TvList);
