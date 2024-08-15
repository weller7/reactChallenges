import * as React from "react";

//Context only transports the state but doesn't manage it
const authContext = React.createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {}
});

//Here is where we manage the state
function AuthProvider ({ children }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    //To make the values available in our component tree we need to pass them
    //to our value prop
    <authContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </authContext.Provider>
  );
}

function LoginForm() {
  //Here we use UseContext to get the values and destructure the ones we need
  const { login } = React.useContext(authContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
    login(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          required
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          required
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </div>
      <button className="primary" type="submit">
        Login
      </button>
    </form>
  );
}

function NavBar() {
  //We use useContext to get the values that we need and desructure them to use them
  const { logout, isAuthenticated } = React.useContext(authContext);

  return (
    <nav>
      <span role="img" aria-label="Money bags emoji">
        💰
      </span>
      {isAuthenticated && (
        <button className="link" onClick={logout}>
          Logout
        </button>
      )}
    </nav>
  );
}

function Main() {
  //Here we do the same with useContext
  const { isAuthenticated } = React.useContext(authContext);

  return <main>{isAuthenticated ? <Dashboard /> : <LoginForm />}</main>;
}

export default function App() {
  return (
    //The auth providers wraps the app so anywhere inside it that needs to get
    //something that was inside the value prop can get it using React.useContext
    <AuthProvider>
      <NavBar />
      <Main />
    </AuthProvider>
  );
}
