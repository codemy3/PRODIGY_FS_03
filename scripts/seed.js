import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' });

console.log("📦 Loaded MONGODB_URI:", process.env.MONGODB_URI);

const MONGODB_URI = process.env.MONGODB_URI;

const sampleProducts = [
  {
    name: "Organic Honey",
    description: "Pure, raw organic honey from local farmers.",
    price: 250,
    image: "/images/product1.jpg",
  },
  {
    name: "Handmade Soap",
    description: "Natural handmade soap with lavender scent.",
    price: 100,
    image: "/images/product2.jpg",
  },
  {
    name: "Apple",
    description: "Best quality apple.",
    price: 250,
    image: "/images/product3.jpg",
  },
  {
    name: "shoe",
    description: "Nike Air Max Nuaxis Men's Shoe.",
    price: 8950,
    image: "/images/product4.png",
  },
];

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
});

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    await Product.deleteMany();
    await Product.insertMany(sampleProducts);
    console.log("✅ Database seeded!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
