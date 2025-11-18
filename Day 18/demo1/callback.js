// USER STORY 1 — CALLBACKS
function fetchOrder(orderId, callback) {
  console.log("Fetching order...");

  setTimeout(() => {
    const error = null; 
    const order = { id: orderId, item: "Pizza", price: 300 };

    if (error) {
      callback(error, null);  
    } else {
      callback(null, order);  
    }
  }, 1000);
}

// Test Callback
fetchOrder(101, (err, order) => {
  if (err) {
    console.log("Error fetching order:", err);
  } else {
    console.log("Order fetched using Callback:", order);
  }
});
