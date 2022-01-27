import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { Actions } from "constants";
import { Storage } from "utils";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case Actions.Loading:
          return { ...prevState, isLoading: action.payload };
        case Actions.Login:
          return {
            ...prevState,
            isLoading: false,
            isLoggedIn: true,
            user: action.payload,
          };
        case Actions.Logout:
          return {
            ...prevState,
            isLoading: false,
            isLoggedIn: false,
            user: {},
          };
        default:
          return prevState;
      }
    },
    {
      isLoading: true,
      isLoggedIn: false,
      user: {},
    }
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const user = Storage.get("user");
        if (user) {
          return dispatch({ type: Actions.Login, payload: user });
        }
        dispatch({ type: Actions.Loading, payload: false });
      } catch (e) {
        console.log("error: ", e);
        dispatch({ type: Actions.Loading, payload: false });
      }
    };

    bootstrapAsync();
  }, []);

  const authFuncs = useMemo(
    () => ({
      loading: (params) => dispatch({ type: Actions.Loading, payload: params }),
      signIn: async (data, callback) => {
        Storage.set("user", data);
        dispatch({ type: Actions.Login, payload: data });
        callback();
      },
      signOut: () => {
        Storage.clear();
        dispatch({ type: Actions.Logout });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={{ state, ...authFuncs }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => {
  return useContext(AuthContext);
};
