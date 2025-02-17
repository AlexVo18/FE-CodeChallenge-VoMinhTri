const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 1. Using for loop
const sum_to_n_a = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// 2. Using reduce() method
const sum_to_n_b = (n) => {
  return Array.from({ length: n }, (_, i) => i + 1).reduce(
    (total, curr) => total + curr,
    0
  );
};

// 3. Using recursion
const sum_to_n_c = (n) => {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return n + sum_to_n_c(n - 1);
};

rl.question("Enter an integer: ", (input) => {
  const numInput = Number(input);
  if (!Number.isInteger(numInput)) {
    console.log("Invalid input, not an integer");
  } else {
    console.log("1. Using for loop: " + sum_to_n_a(numInput));
    console.log("2. Using reduce() method: " + sum_to_n_b(numInput));
    console.log("1. Using recursion: " + sum_to_n_c(numInput));
  }
  rl.close();
});
