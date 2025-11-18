// USER STORY 2 — PROMISES

function processPayment(order) {
  console.log("Processing payment...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve(`Payment successful for ₹${order.price}`);
      } else {
        reject("Payment failed due to insufficient balance");
      }
    }, 1000);
  });
}

// Test Promise
processPayment({ price: 300 })
  .then(msg => console.log("Promise Result:", msg))
  .catch(err => console.log("Promise Error:", err));
