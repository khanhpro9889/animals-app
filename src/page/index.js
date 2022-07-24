import Animal from "./Animals";
import Login from "./Login";
import Home from "./Home";
import NotFound from "./NotFound";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout/AppLayout";
import ProctectUserNotLogin from "../utils/router/ProtectUserNotLogin";
import ProctectUserLogin from "../utils/router/ProtectUserLogin";
const Router = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          {[Login, Home].map((item) => {
            return (
              <Route
                key={item.path}
                exact
                path={item.path}
                element={item.page}
              />
            );
          })}
          {[Login].map((item) => {
            return (
              <Route
                key={item.path}
                exact
                path={item.path}
                element={<ProctectUserLogin />}
              >
                <Route exact path={item.path} element={item.page} />
              </Route>
            );
          })}
          {[Animal].map((item) => {
            return (
              <Route
                key={item.path}
                exact
                path={item.path}
                element={<ProctectUserNotLogin />}
              >
                <Route exact path={item.path} element={item.page} />
              </Route>
            );
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default Router;
