/* eslint-disable no-undef */
Feature('Liking Restaurant');

Scenario('Menyukai salah satu restaurant dan membatalkannya', async ({ I }) => {
  I.amOnPage('/');
  I.wait(2);
  I.seeElement('.to_detail');
  await I.grabTextFrom(locate('.to_detail').first());
  I.click(locate('.to_detail').first());
  I.wait(2);
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.click(locate('.to_detail').first());
  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.dontSeeElement('.to_detail');
});
