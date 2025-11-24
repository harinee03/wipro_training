// 1. Callback version
function fetchDataCallback(callback) {
  setTimeout(() => {
    callback("Data received (Callback)");
  }, 1000);
}

fetchDataCallback((result) => {
  console.log(result);
});

// 2. Promise version
function fetchDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received (Promise)");
    }, 1000);
  });
}

fetchDataPromise().then((result) => {
  console.log(result);
});

// 3. Async/Await version
function fetchDataAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received (Async/Await)");
    }, 1000);
  });
}

async function getData() {
  const result = await fetchDataAsync();
  console.log(result);
}

getData();
