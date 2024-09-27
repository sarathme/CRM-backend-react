import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const user = localStorage.getItem("crm-user");

    if (!user || user === null) {
      dispatch({ type: "logout" });
    } else {
      dispatch({ type: "login", payload: JSON.parse(user) });
    }
  }, []);

  async function login({ empCode, password }) {
    const url = `${import.meta.env.VITE_API_URL}/api/v1/users/login`;

    try {
      const res = await axios.post(
        url,
        { empCode, password },
        { headers: { "Content-Type": "application/json" } }
      );
      localStorage.setItem("crm-user", JSON.stringify(res.data.data.user));
      localStorage.setItem("crm-token", res.data.token);

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("crm-token")}`;

      dispatch({ type: "login", payload: res.data.data.user });
    } catch (err) {
      console.error(err);
      throw new Error(err.response.data.message);
    }
  }

  function logout() {
    localStorage.removeItem("crm-user");
    localStorage.removeItem("crm-token");
    toast.success("User logged out");
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ login, user, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const userCtx = useContext(AuthContext);

  if (userCtx === undefined) {
    throw new Error("User Context is used outside of AuthContext");
  }

  return userCtx;
}

export { AuthProvider, useAuth };
