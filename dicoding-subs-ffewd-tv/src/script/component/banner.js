import DataSource from '../data/data-source.js';

class TvBanner extends HTMLElement{
    async connectedCallback() {
        try {
            const popularTv = await DataSource.populartv(); // Mengambil data Popular TV

            this.innerHTML = `
                <div class="banner">
                    <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            ${popularTv.map((tv, index) => `
                                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                                    <img src="https://image.tmdb.org/t/p/original${tv.backdrop_path}" class="d-block w-100" alt="${tv.name}" style="height: 600px; border-radius: 50px; object-fit: cover; loading="lazy">
                                    <div class="carousel-caption">
                                        <h1>${tv.name}</h1>
                                        <p class="lead">${tv.overview}</p>
                                        <a class="btn btn-danger btn-lg">
                                            <i class="bi bi-play-circle"></i> Watch Now
                                        </a>
                                    </div>
                                </div>
                            `).join('')}
                        </div>

                        <div class="carousel-thumbnails-container">
                            ${popularTv.slice(0, 5).map((tv, index) => `
                                <div class="carousel-thumbnail ${index === 0 ? 'active' : ''}">
                                    <img src="https://image.tmdb.org/t/p/original${tv.poster_path}" alt="${tv.name}" style="border-radius: 10px; width: 100px; height: auto;" loading="lazy">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>`;

            const thumbnails = this.querySelectorAll('.carousel-thumbnail');
            thumbnails.forEach((thumbnail, index) => {
                thumbnail.addEventListener('click', () => {
                    const carousel = new bootstrap.Carousel(carouselElement, {
                        interval: carouselInterval,
                        wrap: false
                    });
                    carousel.to(index);
                });
            });

            const carouselElement = this.querySelector("#heroCarousel");
            const carouselInterval = 5000;
        } catch (error) {
            console.error('Error rendering hero image:', error);
        }
    }
}

customElements.define('tv-hero-image', TvBanner);
