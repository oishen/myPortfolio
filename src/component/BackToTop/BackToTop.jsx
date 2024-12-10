import { useState, useEffect } from "react";

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  // Monitor scroll position to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          style={{
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}

          className="btn btn-warning ps-3 pe-3 rounded-pill"
        >
          Back To Top
        </button>
      )}
    </>
  );
}

export default BackToTop;
