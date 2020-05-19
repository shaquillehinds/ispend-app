export default (expenses) => {
  let reduced = 0;
  expenses.forEach((expense) => (reduced += parseInt(expense.amount)));
  return reduced;
};
