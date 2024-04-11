import { useState } from "react";
import "./App.css";

import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseForm from "./ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "First", amount: 1000, category: "Groceries" },
    { id: 2, description: "Second", amount: 2000, category: "Utilities" },
    { id: 3, description: "Third", amount: 2000, category: "Entertainment" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([
            ...expenses,
            {
              ...expense,
              id: expenses.length + 1,
            },
          ])
        }
      ></ExpenseForm>
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      ></ExpenseFilter>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </>
  );
}

export default App;
