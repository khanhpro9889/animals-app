import lazyLoading from "../../utils/router/lazyLoading";
import { ANIMALS_PATH } from "../../constants/path";

const page = {
  path: ANIMALS_PATH,
  page: lazyLoading(() => import("./Animal")),
};

export default page;
