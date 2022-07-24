import lazyLoading from "../../utils/router/lazyLoading";
import { LOGIN_PATH } from "../../constants/path";

const page = {
  path: LOGIN_PATH,
  page: lazyLoading(() => import("./Login")),
};
export default page;
