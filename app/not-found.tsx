import NyanCat from "@/components/ui/nyan-cat";
import { cn } from "@/utils/cn";
import Spline from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import React, { Suspense } from "react";

const NotFoundPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="/404.spline" style={{ height: "100vh" }} />
      </Suspense>
    </>
  );
};

export default NotFoundPage;
