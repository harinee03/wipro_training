
// USER STORY 1 - CALLBACKS

function fetchOrder(orderId, callback) {
  console.log("Fetching order...");

  setTimeout(() => {
    const order = { id: orderId, item: "Pizza", price: 300 };
    const error = null;

    if (error) {
      callback("Failed to fetch order", null);
    } else {
      callback(null, order);
    }
  }, 1000);
}

// USER STORY 2 - PROMISES

function processPayment(order) {
  console.log("Processing payment...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; 

      if (success) {
        resolve(`Payment successful for ₹${order.price}`);
      } else {
        reject("Payment failed!");
      }
    }, 1000);
  });
}

// USER STORY 3 - ASYNC/AWAIT

function generateInvoice(paymentInfo) {
  return new Promise(resolve => {
    console.log("Generating invoice...");

    setTimeout(() => {
      resolve({
        invoiceId: "INV1001",
        status: "Generated",
        message: paymentInfo
      });
    }, 1000);
  });
}

// FULL FLOW 

fetchOrder(101, (err, order) => {
  if (err) return console.log("Error:", err);

  console.log("Order fetched:", order);

  processPayment(order)
    .then(paymentMsg => {
      console.log(paymentMsg);
      return generateInvoice(paymentMsg);
    })
    .then(invoice => {
      console.log("Invoice Generated:", invoice);
    })
    .catch(err => console.log("Error:", err));
});
