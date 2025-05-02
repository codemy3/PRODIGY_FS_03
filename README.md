# 🛍️ Local Store E-commerce Platform

This is a full-stack e-commerce platform for a local store built with **Next.js** and **MongoDB (Mongoose)**. It allows users to browse products, add them to a cart, and proceed to a checkout page.

## 🚀 Features

- Product listing with images, descriptions, and prices.
- Add to Cart functionality with local storage support.
- Basic checkout page displaying cart items.
- Seed script to populate MongoDB with sample products.

## 📁 Project Structure

```
local-store/
│
├── pages/                # Next.js pages
│   ├── api/              # API routes
│   │   └── products.js   # API to fetch products
│   ├── index.js          # Homepage with product listing & cart
│   └── checkout.js       # Checkout page
│
├── public/images/        # Product images
│   ├── product1.jpg
│   ├── product2.jpg
│   └── product3.jpg
│
├── scripts/
│   └── seed.js           # MongoDB seed script
│
├── styles/
│   └── Home.module.css   # Styling
│
├── utils/
│   └── dbConnect.ts      # MongoDB connection utility
│
├── .env.local            # Environment variables (MONGODB_URI)
└── package.json
```

## 🛠️ Setup Instructions

1. **Clone the Repository**:
```bash
git clone https://github.com/your-username/local-store.git
cd local-store
```

2. **Install Dependencies**:
```bash
npm install
```

3. **Set up Environment Variables**: Create a `.env.local` file and add:
```env
MONGODB_URI=your-mongodb-connection-string
```

4. **Seed the Database**:
```bash
node scripts/seed.js
```

5. **Run the Development Server**:
```bash
npm run dev
```

6. **Open the App**:
Visit `http://localhost:3000` in your browser.

## 🖼️ Notes

- Ensure the product images are placed inside `public/images/` with filenames `product1.jpg`, `product2.jpg`, and `product3.jpg`.
- Make sure MongoDB is running and accessible.

## 📌 Future Improvements

- Remove items from cart.
- Persist cart in MongoDB for authenticated users.
- Add authentication, payment gateway, and order history.
![image](https://github.com/user-attachments/assets/a6c49efa-3a22-47bb-a2ba-9345a4d185dd)

---

Made with 💖 by Maithri.
