import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  return (
    <ScrollToTop
      smooth
      style={{
        backgroundColor: "transparent",
        border: "3px solid",
        boxShadow: "none",
        borderRadius: "50%",
        padding: "2px",
      }}
      component={<FaArrowUp size={"100%"} />}
    />
  );
};

export default ScrollTop;
