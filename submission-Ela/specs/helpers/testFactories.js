/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestaurant from '../../src/scripts/data/restaurant_favorite';

const createLikeButtonInitiatorWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurant,
    restaurant,
  });
};

export { createLikeButtonInitiatorWithRestaurant };
