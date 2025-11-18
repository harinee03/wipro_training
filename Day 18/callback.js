function step1(cb) {
  setTimeout(() => cb(null, "Step 1 done"), 1000);
}
function step2(cb) {
  setTimeout(() => cb(null, "Step 2 done"), 1000);
}
function step3(cb) {
  setTimeout(() => cb(null, "Step 3 done"), 1000);
}

step1((err, res1) => {
  console.log(res1);
  step2((err, res2) => {
    console.log(res2);
    step3((err, res3) => {
      console.log(res3);
    });
  });
});