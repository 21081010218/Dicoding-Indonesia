export function createTvCard(tv)  {
  const { poster_path, name, vote_average, first_air_date } = tv;

  const card = document.createElement("div");
  card.classList.add("tv-item", "card", "card-content");

  card.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500/${poster_path}" class="card-img-top card-img" alt="${name}" loading="lazy">
    <div class="card-body">
      <h5 class="card-title text-truncate">${name}</h5>
      <div class="row card-text">
        <div class="col-8">
          <span>${first_air_date}</span>
        </div>
        <div class="col-4">
          <span class="ratings">
            <i class="bi bi-star-fill"></i>
            ${vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  `;

  return card;
}
