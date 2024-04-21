import React, { createContext, useContext, useReducer } from "react";
export const expensesContext = createContext(null);
export default function ExpensesContext({ children }) {
  const [expenses, dispatch] = useReducer(reducer, dumexp);
  return (
    <expensesContext.Provider value={[expenses, dispatch]}>
      {children}
    </expensesContext.Provider>
  );
}

const reducer = (state, action) => {
  const id = action.id;
  if (action.type == "update") {
    const update = state.map((item) => {
      if (item.id == id) {
        console.log("update");
        return action.item;
      }

      return item;
    });
    return update;
  }

  if (action.type == "add") {
    let newdata = { ...action.newdata };

    return [newdata, ...state];
  }

  if (action.type == "delete") {
    return state.filter((item) => item.id !== id);
  }
  if (action.type == "set") {
    console.log("done");
    let inverted = action.expenses.reverse();
    return inverted;
  }
};

const dumexp = [];
