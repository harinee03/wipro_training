function step1() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Step 1 done"), 1000);
  });
}

function step2() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Step 2 done"), 1000);
  });
}

function step3() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Step 3 done"), 1000);
  });
}
step1()
  .then(result => {
    console.log(result);
    return step2();
  })
  .then(result => {
    console.log(result);
    return step3();
  })
  .then(result => {
    console.log(result);
  });
