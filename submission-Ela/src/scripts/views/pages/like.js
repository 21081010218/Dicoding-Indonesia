/* eslint-disable import/extensions */
import favoriteRestaurant from '../../data/restaurant_favorite';
import { restoTemplate } from '../templates/restaurant-template.js';

const Like = {
  async render() {
    return `
    <section id="favorite-restaurants" class="card-container">
    </section>
    `;
  },

  async afterRender() {
    const restaurant = await favoriteRestaurant.getAllRestaurant();
    const restaurantFavoriteContainer = document.querySelector(
      '#favorite-restaurants',
    );
    restaurant.forEach((data) => {
      restaurantFavoriteContainer.innerHTML += restoTemplate(data);
    });
  },
};

export default Like;
