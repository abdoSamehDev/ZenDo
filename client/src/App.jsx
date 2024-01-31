import React from "react";
import { BrowserRouter } from "react-router-dom";
// import Header from "./layout/Header";
// import LandingPage from "./pages/LandPage";
// import SignInPage from "./pages/SignInPage";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
// import SignUpPage from "./pages/SignUpPage";
// import HomePage from "./pages/HomePage";
// import { Provider } from "react-redux";
// import store, { persistor } from "./store";
// import { Cookies } from "react-cookie";
import AppRoutes from "./routes/AppRoutes";
// import { PersistGate } from "redux-persist/integration/react";

function App() {
  // useEffect(() => {
  //   persistor.subscribe((state) => {
  //     // Check for authentication after rehydration
  //     if (state.user.isLoggedIn) {
  //       // Redirect to protected route or display user content
  //     } else {
  //       // Redirect to login page
  //     }
  //   });
  // }, []);
  return (
    // <Provider store={store}>
    // <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
    // </PersistGate>
    // </Provider>
  );
}

export default App;
