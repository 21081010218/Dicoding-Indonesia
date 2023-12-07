import home from '../views/pages/home';
import like from '../views/pages/like';
import detail from '../views/pages/detail';

const routes = {
  '/': home,
  '/like': like,
  '/detail/:id': detail,
};

export default routes;
