import CONFIG from '../../global/config';
import star from '../../../public/images/icons/start.png';

const restoDetail = (item) => `
<div tabindex="0">
    <div class="detail">
        <figure class="img__detail">
            <img
            class="lazyload"
            tabindex="0"
            data-src="${CONFIG.IMG_URL_MD}${item.pictureId}"
            alt="${item.name}"
            />
        </figure>
        <div class="detail__content">
            <h2>${item.name}</h2>
            <div class="rating">
            <img class="lazyload" src="${star}" alt="star-rating" />
            <span>${item.rating}</span>
            </div>
            <h3 class="detail__address">${item.city}</h3>
            <p class="detail__address">${item.address}</p>
            <p class="detail__description">${item.description}</p>
            <div class="category">
            ${item.categories
    .map(
      (category) =>
      // eslint-disable-next-line implicit-arrow-linebreak
        `<span class="category">${category.name}</span>`,
    )
    .join(' ')}
            </div>
        </div>
    </div>
    <div class="menu">
      <h2>Menu</h2>
      <div class="detail__menu">
        <div class="detail__food">
          <h4>  Food  :</h4>
          <ul>
            ${item.menus.foods
    .map(
      (food) => `
                  <li class="item__menu">${food.name}</li>
                `,
    )
    .join('')}
          </ul>
        </div>
        <div class="detail__drink">
          <h4>  Drink  :</h4>
          <ul>
            ${item.menus.drinks
    .map(
      (drink) => `
                  <li class="item__menu">${drink.name}</li>
                `,
    )
    .join('')} 
          </ul>
        </div>
      </div>
  </div>
    <h3 class="title__review">Reviews</h3>
    <div class="detail__review">
    ${item.customerReviews
    .map(
      (review) => `
          <div class="detail__review__item">
            <div class="review-header">
              <p class="review__name">${review.name}</p>
              <p class="review__date">${review.date}</p>
              <div class="review__body truncate-review">"${review.review}"</div>
            </div>
          </div>
        `,
    )
    .join('')}
    </div>
</div>
`;

export default restoDetail;
