import { FieldValues, useForm } from "react-hook-form";
import "./App.css";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  msg: z
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

type FormData = z.infer<typeof schema>;

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label" htmlFor="Description">
            Description
          </label>

          <input
            id="Description"
            type="text"
            className="form-control"
            {...register("msg")}
            autoComplete="off"
          />
          {errors.msg && <p className="text-danger">{errors.msg.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="Amount" className="form-label">
            Amount
          </label>
          <input
            id="Amount"
            type="number"
            className="form-control"
            {...register("msg2", { valueAsNumber: true })}
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
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
        <button className="btn btn-primary" disabled={!isValid}>
          Submit
        </button>
      </form>

      <div className="drop">
        <select name="" id="" className="form-control ">
          <option value="All Categories">All Categories</option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
      <div className="t">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
