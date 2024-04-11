import { useState } from "react";
import "./App.css";

import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseForm from "./ExpenseForm";

export const categories = ["Groceries", "Utilities", "Entertainment"];
function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 1000, category: "Utilities" },
    { id: 2, description: "bbb", amount: 1000, category: "Utilities" },
    { id: 3, description: "ccc", amount: 1000, category: "Utilities" },
    { id: 4, description: "ddd", amount: 1000, category: "Utilities" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <ExpenseForm></ExpenseForm>
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
