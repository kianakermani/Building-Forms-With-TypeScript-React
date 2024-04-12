import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import categories from "./categories";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  onSelectCategory: (category: string) => void;
  expenses: Expense[];
}

const ExpenseFilter = ({ expenses, onSelectCategory }: Props) => {
  if (expenses.length === 0) return null;
  return (
    <div>
      <select
        className="form-select sel "
        onChange={(event) => onSelectCategory(event?.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
