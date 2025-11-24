import { useEffect, useState } from "react";

const withWindowWidth = (WrappedComponent) => {
  return function () {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <WrappedComponent windowWidth={width} />;
  };
};

export default withWindowWidth;
