import lazyLoading from "../../utils/router/lazyLoading";
import { HOME_PATH } from "../../constants/path";

const page = {
  path: HOME_PATH,
  page: lazyLoading(() => import("./Home")),
};

export default page;
