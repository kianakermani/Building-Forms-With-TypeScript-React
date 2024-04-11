import "./App.css";
import { categories } from "./App";

const ExpenseForm = () => {
  return (
    <div>
      <form action="" className="form">
        <div className="mb-3">
          <label className="form-label" htmlFor="Description">
            Description
          </label>

          <input
            id="Description"
            type="text"
            className="form-control"
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Amount" className="form-label">
            Amount
          </label>
          <input
            id="Amount"
            type="number"
            className="form-control"
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Category" className="form-label">
            Category
          </label>
          <select name="" id="Category" className="form-control">
            <option value=""></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
