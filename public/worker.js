// worker.js
self.onmessage = function(e) {
  let limit = e.data;
  for (let i = 0; i < limit; i++ ) {
    console.log(i);
  }
}
