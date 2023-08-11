import Products from './products.schema';

const allowedQuery = new Set(['page', 'limit', 'id', 'paginate', 'role']);

export const allProducts = ({ db }) => async (req, res) => {
  try {
    const products = await db.find({ table: Products, key: { query: req.query, allowedQuery: allowedQuery} });
    if(!products) return res.status(400).send('error');
    res.status(200).send(products);
  }
  catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong');
  }
};
