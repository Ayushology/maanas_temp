import React, { useState, useRef, useEffect } from "react";

// --- A SIMPLE DASHBOARD TO SHOW AFTER LOGIN ---
const Dashboard = ({ onLogout }) => (
  <div className="flex flex-col items-center justify-center min-h-screen font-sans bg-gradient-to-br from-green-100 to-blue-100 p-4 text-center">
    <div className="bg-white p-10 rounded-2xl shadow-xl">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Login Successful!
      </h1>
      <p className="text-gray-600 mb-8">Welcome to the Manas Dashboard.</p>
      <button
        onClick={onLogout}
        className="bg-rose-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 shadow-md transform hover:scale-105 active:scale-100 transition duration-300"
      >
        Log Out
      </button>
    </div>
  </div>
);

// --- LOGIN PAGE COMPONENTS ---
const LoginEyeIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const LoginEyeOffIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <line x1="2" x2="22" y1="2" y2="22" />
  </svg>
);

const GoogleIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    ></path>
    <path
      fill="#FF3D00"
      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    ></path>
    <path
      fill="#4CAF50"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    ></path>
    <path
      fill="#1976D2"
      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.022,35.318,44,30.036,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    ></path>
  </svg>
);

const IllustrationPanel = () => (
  <div className="hidden lg:flex w-full h-[92%] mt-[1.5rem] ml-[20px] bg-[#ffe6df] rounded-lg relative">
    <div className="absolute top-1 left-2 text-3xl text-[#d1265b] font-pacifico ">
      Manas
    </div>
    <div>
      <img
        src="../public/assets/second_login.png"
        alt="Friendly character illustration for Manas app"
        className="scale-160 h-auto translate-x-[133px] -translate-y-8"
      />
    </div>
  </div>
);

const LoginFormInput = ({
  id,
  type,
  placeholder,
  value,
  onChange,
  error,
  children,
  disabled,
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-semibold text-gray-600 mb-2"
    >
      {placeholder}
    </label>
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-4 py-3 text-gray-800 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 transition duration-200 disabled:bg-gray-200 ${
          error
            ? "border-red-500 focus:ring-red-400"
            : "border-gray-200 focus:ring-pink-400"
        }`}
      />
      {children}
    </div>
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

const LoginPrimaryButton = ({
  children,
  onClick,
  type = "button",
  disabled = false,
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className="w-full bg-rose-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 shadow-md transform hover:scale-105 active:scale-100 transition duration-300 disabled:bg-rose-300 disabled:cursor-not-allowed flex items-center justify-center"
  >
    {children}
  </button>
);

const GoogleButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-center py-3 px-4 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 shadow-sm transition-all duration-300 transform hover:scale-105 active:scale-100"
  >
    <GoogleIcon />
    <span className="ml-3 font-semibold text-gray-700">
      Continue with Google
    </span>
  </button>
);

const AuthCard = ({ children, screen }) => (
  <div
    key={screen}
    className="w-full max-w-4xl flex bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up"
  >
    <div className="hidden lg:block lg:w-1/2">
      <IllustrationPanel />
    </div>
    <div className="relative z-10 w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
      {children}
    </div>
  </div>
);

const WelcomeScreen = ({ setScreen }) => (
  <AuthCard screen="welcome">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome to <span className="font-pacifico text-rose-500">Manas</span>
      </h1>
      <p className="text-gray-600 mb-8">
        Your friendly guide to a calmer mind. Let's get started.
      </p>
      <LoginPrimaryButton onClick={() => setScreen("signin")}>
        Continue to Login
      </LoginPrimaryButton>
    </div>
  </AuthCard>
);

// --- SignInScreen (unchanged, calls onLoginSuccess on success) ---
const SignInScreen = ({ setScreen, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      if (email === "user@example.com" && password === "password123") {
        onLoginSuccess();
      } else {
        setError("Invalid email or password. Please try again.");
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <AuthCard screen="signin">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Login</h1>
      <form className="space-y-5" onSubmit={handleLogin}>
        <LoginFormInput
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <LoginFormInput
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          error={error}
        >
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <LoginEyeOffIcon className="w-5 h-5" />
            ) : (
              <LoginEyeIcon className="w-5 h-5" />
            )}
          </button>
        </LoginFormInput>
        <div className="text-right">
          <button
            type="button"
            onClick={() => setScreen("forgotpassword")}
            className="text-sm font-semibold text-yellow-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>
        <LoginPrimaryButton type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Log In"}
        </LoginPrimaryButton>
      </form>
      <div className="my-6 flex items-center">
        <span className="flex-grow h-px bg-gray-200"></span>
        <span className="mx-4 text-sm font-medium text-gray-400">Or</span>
        <span className="flex-grow h-px bg-gray-200"></span>
      </div>
      <GoogleButton onClick={onLoginSuccess} />
    </AuthCard>
  );
};

const SignUpScreen = ({ setScreen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AuthCard screen="signup">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Create Account</h1>
      <form className="space-y-5">
        <LoginFormInput
          id="signup-email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LoginFormInput
          id="signup-password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginPrimaryButton>Create Account</LoginPrimaryButton>
      </form>
      <p className="text-sm text-center text-gray-500 mt-8">
        Already have an account?{" "}
        <button
          onClick={() => setScreen("signin")}
          className="font-semibold text-gray-700 hover:underline"
        >
          Login here
        </button>
      </p>
    </AuthCard>
  );
};

// --- Login Page Wrapper ---
const LoginPage = ({ onLoginSuccess }) => {
  const [currentScreen, setCurrentScreen] = useState("welcome");

  const renderScreen = () => {
    switch (currentScreen) {
      case "signin":
        return (
          <SignInScreen
            setScreen={setCurrentScreen}
            onLoginSuccess={onLoginSuccess}
          />
        );
      case "signup":
        return <SignUpScreen setScreen={setCurrentScreen} />;
      default:
        return <WelcomeScreen setScreen={setCurrentScreen} />;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen font-sans bg-gradient-to-br from-pink-100 to-rose-100 p-4">
      {renderScreen()}
    </div>
  );
};

// --- MAIN APP COMPONENT ---
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return isLoggedIn ? (
    <Dashboard onLogout={handleLogout} />
  ) : (
    <LoginPage onLoginSuccess={handleLoginSuccess} />
  );
}
