// Fetch and display products with filtering functionality
const productList = document.getElementById('product-list');
const loadingEl = document.getElementById('loading');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
let products = [];
// Fetch products from JSON file
async function fetchProducts() {
  loadingEl.style.display = 'inline';
  try {
    const res = await fetch('products.json'); 
    if (!res.ok) throw new Error('Network response was not ok');
    products = await res.json();
    populateCategoryOptions(products);
    renderProducts(products);
  } catch (err) {
    productList.innerHTML = `<div class="col-12"><div class="alert alert-danger">Failed to load products: ${err.message}</div></div>`;
    console.error(err);
  } finally {
    loadingEl.style.display = 'none';
  }
}
// Category filter options
function populateCategoryOptions(items) {
  const cats = Array.from(new Set(items.map(p => p.category)));
  cats.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    categoryFilter.appendChild(opt);
  });
}
// Render products to the DOM
function renderProducts(items) {
  productList.innerHTML = '';
  if (items.length === 0) {
    productList.innerHTML = '<div class="col-12"><p>No products found.</p></div>';
    return;
  }
  for (const p of items) {
    const col = document.createElement('div');
    col.className = 'col-sm-6 col-md-4 mb-4';
    col.innerHTML = `
      <div class="card h-100">
        <img src="${p.image}" class="card-img-top" alt="${p.name}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text fw-bold">₹${p.price}</p>
          <p class="text-muted mb-2">${p.category}</p>
          <div class="mt-auto"><button class="btn btn-sm btn-primary">Buy</button></div>
        </div>
      </div>
    `;
    productList.appendChild(col);
  }
}
// Apply filters based on user selection
function applyFilters() {
  let filtered = [...products];
  const cat = categoryFilter.value;
  const price = priceFilter.value;
  if (cat !== 'all') filtered = filtered.filter(p => p.category === cat);
  if (price !== 'all') {
    filtered = filtered.filter(p => {
      if (price === 'budget') return p.price < 1000;
      if (price === 'midrange') return p.price >= 1000 && p.price <= 4000;
      if (price === 'premium') return p.price > 4000;
    });
  }
  renderProducts(filtered);
}
// Event listeners
categoryFilter.addEventListener('change', applyFilters);
priceFilter.addEventListener('change', applyFilters);

// initial load
fetchProducts();
