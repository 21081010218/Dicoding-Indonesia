/* eslint-disable import/extensions */
import RestoDatbs from '../../data/restaurant_source';
import { restoTemplate } from '../templates/restaurant-template.js';

const Home = {
  async render() {
    return `
        <section id="list-restaurants" class="card-container">
          
        </section>
      `;
  },

  async afterRender() {
    const data = await RestoDatbs.getRestaurantList();
    const restaurantsContainer = document.querySelector('#list-restaurants');
    data.restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += restoTemplate(restaurant);
    });
  },
};

export default Home;
