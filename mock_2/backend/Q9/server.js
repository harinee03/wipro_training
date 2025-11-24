const express = require("express");
const { body, validationResult } = require("express-validator");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
});


let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 500 }
];


app.get("/products", (req, res) => {
  res.json(products);
});


app.post(
  "/products",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be a number greater than 0")
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, price } = req.body;
    const newProduct = {
      id: products.length + 1,
      name,
      price
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
  }
);

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
