import Routers from "./page";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserProfile } from "./store/users/actions";
import Loading from "./components/Loading";

function App() {
  const dispatch = useDispatch();
  const userStore = useSelector(({ UserReducer }) => UserReducer);
  useEffect(() => {
    dispatch(getUserProfile());
    // eslint-disable-next-line
  }, []);

  if (userStore.isLoadingUser) {
    return <Loading />;
  }

  return <Routers />;
}

export default App;
