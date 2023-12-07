class TvItem extends HTMLElement {
  set tv(tv) {
    this._tv = tv;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="tv-item card card-content">
        <img src="https://image.tmdb.org/t/p/w500/${this._tv.poster_path}" class="card-img-top card-img" alt="${this._tv.name}" loading="lazy">
        <div class="card-body">
          <h5 class="card-title text-truncate">${this._tv.name}</h5>
          <div class="row card-text">
            <div class="col-8">
              <span>${this._tv.first_air_date}</span>
            </div>
            <div class="col-4">
              <span class="ratings">
                <i class="bi bi-star-fill"></i>
                ${this._tv.vote_average}
              </span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('tv-item', TvItem);
