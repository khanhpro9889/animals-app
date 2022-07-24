import React, { Suspense } from "react";
import Loading from "../../components/Loading";
const lazyLoading = (func) => {
  const Page = React.lazy(func);
  return (
    <Suspense fallback={<Loading />}>
      <Page />
    </Suspense>
  );
};

export default lazyLoading;
