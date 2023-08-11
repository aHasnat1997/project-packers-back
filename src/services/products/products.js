import { allProducts } from "./products.entity";


export default function products() {
  this.route.get('/products', allProducts(this));
}
