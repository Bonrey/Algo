function partitions(num) {
  let result = [];

  function solve(n, mn, curr) {
    if (n === 0) {
      result.push(curr.join('+'));
    }

    for (let i = mn; i <= n; i++) {
      solve(n - i, i, [...curr, i]);
    }
  }

  solve(num, 1, []);
  return result;
}
