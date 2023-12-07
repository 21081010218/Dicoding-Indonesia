import UrlParser from '../../routes/url-parser';
import RestoDatbs from '../../data/restaurant_source';
import restoDetail from '../templates/restaurant-detail';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurant from '../../data/restaurant_favorite';

const Detail = {
  async render() {
    return `
        <section id="detail-restaurant">
        </section>
        <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestoDatbs.getRestaurantDetail(url.id);
    const { restaurant } = data;
    const detailContainer = document.querySelector('#detail-restaurant');
    detailContainer.innerHTML = restoDetail(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      favoriteResto: FavoriteRestaurant,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default Detail;
