import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  }

  return (
    <>
      <Breadcrumb
        items={[{ label: "Home", to: "/" }, { label: "Pages" }, { label: "Forgot Password" }]}
      />

      <div className="mx-auto max-w-md px-6 py-16">
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-10">
          <h1 className="text-2xl font-extrabold text-brand-600 dark:text-brand-400">
            Reset Password
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Enter your email and we'll send a link to reset your password.
          </p>

          {sent ? (
            <p className="mt-6 rounded-lg bg-brand-50 px-4 py-3 text-sm font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
              If an account exists for {email}, a reset link is on its way.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
              <div>
                <label
                  htmlFor="reset-email"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
                >
                  Email Address
                </label>
                <input
                  id="reset-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Example@gmail.com"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-brand-500 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-600"
              >
                Send Reset Link
              </button>
            </form>
          )}

          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            <Link to="/login" className="font-bold text-brand-600 hover:underline dark:text-brand-400">
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
