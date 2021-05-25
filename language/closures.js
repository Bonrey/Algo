const oper = {
  '+': x => y => x + y,
  '-': x => y => y - x,
  '*': x => y => x * y,
  '/': x => y => y / x
};

const create = arg => arg in oper ? oper[arg] : (op => op ? op(arg) : arg);

const one = create(1);
const five = create(5);
const minus = create('-');

console.log(one(minus(five())));
