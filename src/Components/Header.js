import { useEffect } from "react";
import Signature from "../Image/Signature.png";
import Rainbow from "../Image/Rainbow.avif";

function Header() {
  const header = document.querySelector("#header");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 64) {
        header.className.add("scale-y-75");
    return () => {
      window.removeEventListenerheader("scale-y-75");
    };
  });
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 64) {
      header.className.add("scale-y-75");
    } else {
      header.className.remove("scale-y-75");
    }
  });

  return (
    <div>
      <img
        id="header"
        className="fixed top-0 w-full transition-all"
        src={Signature}
        alt="Signature"
      />
      <img className="w-full" src={Rainbow} alt="Rainbow" />
    </div>
  );
}

export default Header;
