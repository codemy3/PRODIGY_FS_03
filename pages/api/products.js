// pages/api/products.js
import dbConnect from '../../lib/dbConnect';
import Product from '../../models/Product';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch products.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
