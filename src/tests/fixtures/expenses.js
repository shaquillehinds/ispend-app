const moment = require.requireActual("moment");

const date1 = new Date().setDate(9);
const date2 = new Date().setDate(18);
const date3 = new Date().setDate(27);

const dates = [date1, date2, date3];

const expenses = [
  {
    id: "1",
    description: "light bill",
    note: "pay the light bill",
    amount: 10000,
    createdAt: date2,
  },
  {
    id: "2",
    description: "water bill",
    note: "pay the water bill",
    amount: 7200,
    createdAt: date3,
  },
  {
    id: "3",
    description: "phone bill",
    note: "pay the phone bill",
    amount: 3000,
    createdAt: date1,
  },
];
const expensesStatic = [
  {
    id: "1",
    description: "light bill",
    note: "pay the light bill",
    amount: 10000,
    createdAt: 2000,
  },
  {
    id: "2",
    description: "water bill",
    note: "pay the water bill",
    amount: 7200,
    createdAt: 3000,
  },
  {
    id: "3",
    description: "phone bill",
    note: "pay the phone bill",
    amount: 3000,
    createdAt: 1000,
  },
];
const filter = (
  text = "",
  sortBy = "amount",
  startDate = moment().startOf("month"),
  endDate = moment().endOf("month")
) => ({
  text,
  sortBy,
  startDate,
  endDate,
});

export { expenses, filter, dates, expensesStatic };
