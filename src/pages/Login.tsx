import { useState, type FormEvent } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import LoginIllustration from "../components/LoginIllustration";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const redirectTo = (location.state as { from?: string } | null)?.from ?? "/profile/account-info";

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      setError("Enter your email and password to continue.");
      return;
    }
    const result = login(email, password);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setError("");
    navigate(redirectTo, { replace: true });
  }

  return (
    <>
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Pages" }, { label: "Login" }]} />

      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <div className="grid items-center gap-12 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-10 lg:grid-cols-2 lg:p-14">
          <div className="hidden justify-center lg:flex">
            <LoginIllustration />
          </div>

          <div className="mx-auto w-full max-w-sm">
            <h1 className="text-3xl font-extrabold text-brand-600 dark:text-brand-400">
              Welcome Back
            </h1>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Login to continue
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Example@gmail.com"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 pr-11 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <div className="mt-3 text-right">
                  <Link
                    to="/forgot-password"
                    className="text-sm text-gray-500 underline hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400"
                  >
                    Forget Password ?
                  </Link>
                </div>
              </div>

              {error && (
                <p role="alert" className="text-sm font-medium text-red-500">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-lg bg-brand-500 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-600"
              >
                Login
              </button>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                New user ?{" "}
                <Link
                  to="/signup"
                  className="font-bold text-brand-600 hover:underline dark:text-brand-400"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
