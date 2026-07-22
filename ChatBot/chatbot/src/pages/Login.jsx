import "./Login.css";

function Login() {
  return (
    <div className="login-container">

      <div className="login-card">

        <h1>AI Chatbot</h1>

        <p>Welcome Back</p>

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>
          Login
        </button>

        <button className="google">
          Continue with Google
        </button>

        <p>
          Don't have an account?
          <span> Register</span>
        </p>

      </div>

    </div>
  );
}

export default Login;