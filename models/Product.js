// models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);
