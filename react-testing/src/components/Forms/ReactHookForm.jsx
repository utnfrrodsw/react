import React from "react";
import { useForm } from "react-hook-form";

export default function ComplexForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      country: "us",
      terms: false,
    },
  });

  const [submitted, setSubmitted] = React.useState(null);

  const onSubmit = (data) => {
    setSubmitted(data);
    reset();
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span role="alert">{errors.name.message}</span>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <span role="alert">{errors.email.message}</span>}
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country">Country</label>
          <select id="country" {...register("country")}>
            <option value="us">United States</option>
            <option value="ar">Argentina</option>
            <option value="es">Spain</option>
          </select>
        </div>

        {/* Terms */}
        <div>
          <label>
            <input
              type="checkbox"
              {...register("terms")}
            />
            Accept terms and conditions
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Submitted data */}
      {submitted && (
        <div data-testid="result">
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Country: {submitted.country}</p>
          <p>Terms accepted: {submitted.terms ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}
