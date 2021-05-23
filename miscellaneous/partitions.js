function partitions(num) {
  const result = [];

  function solve(n, curr) {
    if (n === 0) {
      result.push(curr.join('+'));
    }

    for (let i = 1; i <= n; i++) {
      solve(n - i, [...curr, i]);
    }
  }

  solve(num, []);
  return result;
}

// Example
partitions(5).forEach(expr => console.log(expr));
