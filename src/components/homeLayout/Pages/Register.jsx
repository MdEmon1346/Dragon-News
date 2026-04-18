import React from "react";
import { Link } from "react-router";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ name, photo, email, password });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <div>
          <h2 className="font-semibold text-2xl text-center">
            Register your account
          </h2>
        </div>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            <label className="label">Photo Url</label>
            <input
              name="photo"
              type=""
              className="input"
              placeholder="Photo Url"
              required
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <button className="btn btn-neutral mt-4" type="submit">
              Register
            </button>
            <div>
              <p className="font-semibold text-center">
                Already Have an Account?{" "}
                <Link className="text-secondary" to="/auth/login">
                  {" "}
                  Log In
                </Link>
              </p>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
