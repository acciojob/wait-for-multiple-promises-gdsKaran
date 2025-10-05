//your JS code here. If required.
const output = document.getElementById('output');

// Step 1: Show Loading row initially
const loadingRow = document.createElement('tr');
loadingRow.id = "loading";
loadingRow.innerHTML = `<td colspan="2" class="text-center">Loading...</td>`;
output.appendChild(loadingRow);

// Utility function to create a promise that resolves after random time
function createRandomPromise(name) {
  const delay = Math.random() * 2 + 1; // 1 to 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, time: delay });
    }, delay * 1000);
  });
}

// Step 2: Create 3 promises
const promises = [
  createRandomPromise('Promise 1'),
  createRandomPromise('Promise 2'),
  createRandomPromise('Promise 3')
];

// Step 3: Wait for all promises
const startTime = performance.now();
Promise.all(promises).then(results => {
  const totalTime = (performance.now() - startTime) / 1000; // in seconds

  // Remove Loading row
  output.innerHTML = '';

  // Add individual promise results
  results.forEach(result => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${result.name}</td><td>${result.time.toFixed(3)}</td>`;
    output.appendChild(row);
  });

  // Add total row
  const totalRow = document.createElement('tr');
  totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`;
  output.appendChild(totalRow);
});
