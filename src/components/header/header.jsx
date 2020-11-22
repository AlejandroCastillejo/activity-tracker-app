import React, { useEffect, useState } from "react";

import "./header.scss";

function Header() {
  const [scrolledDown, setScrolledDown] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY > 20) {
      setScrolledDown(true);
    } else {
      setScrolledDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div className={`header ${scrolledDown && "scrolled"}`}>
      <div className="tittle">My 2020 activities</div>
    </div>
  );
}

export default Header;
