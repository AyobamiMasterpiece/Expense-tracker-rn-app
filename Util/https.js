import axios from "axios";
const url = "https://expensesapp-928d4-default-rtdb.firebaseio.com";
export async function SendExpenses(expenses) {
  let data = await axios.post(
    "https://expensesapp-928d4-default-rtdb.firebaseio.com/expenses.json",
    expenses
  );

  return data.data.name;

  //   data.then((e) => {
  //     console.log(e, "sile");
  //   }),
  //     () => {
  //       console.log(Tor);
  //     };
}

export async function getExpenses() {
  let data = await axios.get(
    "https://expensesapp-928d4-default-rtdb.firebaseio.com/expenses.json"
  );

  const expenses = [];
  for (const key in data.data) {
    let obj = {
      id: key,
      amount: data.data[key].amount,
      date: new Date(data.data[key].date),

      description: data.data[key].description,
    };
    expenses.push(obj);
  }
  return expenses;
}

export function updateExpenses(id, expensesData) {
  try {
    return axios.put(url + `/expenses/${id}.json`, expensesData);
  } catch (error) {
    console.log(error);
  }
}

export function deleteExpenses(id) {
  try {
    return axios.delete(url + `/expenses/${id}.json`);
  } catch (error) {
    console.log(error, "peaceorwar");
  }
}
