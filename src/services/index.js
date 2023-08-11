import demo from './demo/demo';
import user from './user/user';
import products from './products/products';

export const services = (app) => {
  app.configure(demo);
  app.configure(user);
  app.configure(products);
};
