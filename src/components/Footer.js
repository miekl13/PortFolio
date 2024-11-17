import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useFooterReveal } from "../hooks/gsap";

const Footer = () => {
  const footerRef = useRef(null);

  useFooterReveal(footerRef);

  return (
    <footer className='footer py-40 text-center text-white/50 overflow-hidden'>
      <p ref={footerRef}>
        &copy; {new Date().getFullYear()}{" "}
        <HashLink
          smooth
          to='#hero'
          className='link-item hover:text-white duration-500'
        >
          Miguel Angel Jimenez Montemayor
        </HashLink>
        . Proudly crafted by me
      </p>
    </footer>
  );
};

export default Footer;
