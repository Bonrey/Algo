// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

function checkCashRegister(price, cash, cid) {
  let changeSize = (cash - price).toFixed(4);
  let cidPos = cid.length - 1;
  let result = {status: "OPEN", change: []};
  let cidCurrencyValues = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

  while (changeSize > 0 && cidPos >= 0) {
    if (changeSize >= cidCurrencyValues[cidPos]) {
      let current_n = Math.trunc(changeSize / cidCurrencyValues[cidPos]);
      let currentValue = Math.min(current_n * cidCurrencyValues[cidPos], cid[cidPos][1]);

      changeSize = (changeSize - currentValue).toFixed(4);
      result.change.push([cid[cidPos][0], currentValue]);
    }

    cidPos--;
  }

  if (changeSize > 0 && cidPos < 0) {
    result = {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (cid.map(item => item[1]).reduce((acc, current) => acc + current).toFixed(4) == cash - price) {
    result = {status: "CLOSED", change: cid};
  }

  return result;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
