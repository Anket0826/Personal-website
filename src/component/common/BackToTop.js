import React, { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";
import "../../styles/BackToTop.scss";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-to-top-btn ${visible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <FiChevronUp />
    </button>
  );
};

export default BackToTop;
