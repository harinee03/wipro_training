// Mock API for simulating product data
const MOCK_PRODUCTS = [
  { id: 1, name: 'Wireless Headphones', price: 799.99, stock: 25, category: 'Electronics' },
  { id: 2, name: 'Smart Watch', price: 1999.99, stock: 15, category: 'Electronics' },
  { id: 3, name: 'Laptop Stand', price: 499.99, stock: 40, category: 'Accessories' },
  { id: 4, name: 'USB-C Hub', price: 349.99, stock: 30, category: 'Accessories' },
  { id: 5, name: 'Mechanical Keyboard', price: 1299.99, stock: 12, category: 'Electronics' },
  { id: 6, name: 'Ergonomic Mouse', price: 599.99, stock: 20, category: 'Electronics' },
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
  // Fetch all products
  fetchProducts: async () => {
    await delay(800); // Simulate network delay
    return { data: MOCK_PRODUCTS, success: true };
  },

  // Fetch single product by ID
  fetchProductById: async (id) => {
    await delay(500);
    const product = MOCK_PRODUCTS.find(p => p.id === id);
    if (product) {
      return { data: product, success: true };
    }
    return { data: null, success: false, error: 'Product not found' };
  },

  // Update product
  updateProduct: async (id, updates) => {
    await delay(600);
    const productIndex = MOCK_PRODUCTS.findIndex(p => p.id === id);
    if (productIndex !== -1) {
      MOCK_PRODUCTS[productIndex] = { ...MOCK_PRODUCTS[productIndex], ...updates };
      return { data: MOCK_PRODUCTS[productIndex], success: true };
    }
    return { data: null, success: false, error: 'Product not found' };
  },

  // Add new product
  addProduct: async (product) => {
    await delay(600);
    const newProduct = {
      id: Math.max(...MOCK_PRODUCTS.map(p => p.id)) + 1,
      ...product,
    };
    MOCK_PRODUCTS.push(newProduct);
    return { data: newProduct, success: true };
  },

  // Delete product
  deleteProduct: async (id) => {
    await delay(500);
    const index = MOCK_PRODUCTS.findIndex(p => p.id === id);
    if (index !== -1) {
      MOCK_PRODUCTS.splice(index, 1);
      return { success: true };
    }
    return { success: false, error: 'Product not found' };
  },
};
