import { categories } from "./App";
import { useForm } from "react-hook-form";
import "./App.css";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Your Description Should Be More Than 3 Characters !" }),
  msg2: z
    .number({
      invalid_type_error: "Your Amount Is Requierd",
    })
    .min(1000, {
      message: "Your Amount Should Be At Least 1000 Toman !",
    }),
});
type ExpenseFormData = z.infer<typeof schema>;
const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  return (
    <div>
      <form
        action=""
        className="form"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <div className="mb-3">
          <label className="form-label" htmlFor="Description">
            Description
          </label>

          <input
            id="Description"
            {...register("description")}
            type="text"
            className="form-control"
            autoComplete="off"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="Amount" className="form-label">
            Amount
          </label>
          <input
            id="Amount"
            {...register("msg2", { valueAsNumber: true })}
            type="number"
            className="form-control"
            autoComplete="off"
          />
          {errors.msg2 && <p className="text-danger">{errors.msg2.message}</p>}
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
