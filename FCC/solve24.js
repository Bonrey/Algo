// https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/24-game

function solve24 (numStr) {
  const operations = ['+', '-', '*', '/'];
  const bracketPos = [[0, 4], [2, 6], [4, 8], [0, 6], [2, 8], [0, 4, 6, 10]];
  let solution = 'no solution exists';
  
  function solve(numbers, curr) {
    if (/\d/.test(solution)) return;

    if (!numbers.length) {
      for (let pos of bracketPos) {
        let currSplit = curr.split('');
        for (let i = 0; i < pos.length; i++) {
          currSplit.splice(pos[i], 0, i % 2 ? ')' : '(');
        }

        let expr = currSplit.join('');
        if (eval(expr) === 24) {
          solution = expr;
        }
      }
    }

    numbers.forEach((n, i) => {
      let next = numbers.slice(0, i).concat(numbers.slice(i + 1));
      if (curr) {
        operations.forEach(op => solve(next, curr + op + n));
      } else {
        solve(next, n);
      }
    });
  }

  solve(numStr.split(''), '');
  return solution;
}
