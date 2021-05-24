function getAllSubsets(arr) {
  let subsets = [];

  function solve(len, curr = arr, res = []) {
    if (!len) {
      subsets[subsets.length - 1].push(res);
      return;
    }

    for (let i = 0; i < curr.length; i++) {
      solve(len - 1, curr.slice(i + 1), [...res, curr[i]]);
    }
  }

  for (let i = 1; i <= arr.length; i++) {
    subsets.push([]);
    solve(i);
  }

  return subsets;
}
