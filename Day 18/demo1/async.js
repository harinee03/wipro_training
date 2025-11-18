// USER STORY 3 — ASYNC/AWAIT

function generateInvoice(paymentMessage) {
  return new Promise(resolve => {
    console.log("Generating invoice...");

    setTimeout(() => {
      resolve({
        invoiceId: "INV1001",
        status: "Generated",
        message: paymentMessage
      });
    }, 1000);
  });
}

async function runInvoice() {
  const invoice = await generateInvoice("Payment successful for ₹300");
  console.log("Invoice Generated Using Async/Await:", invoice);
}

runInvoice();
