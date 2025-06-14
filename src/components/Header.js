import React, { useState } from "react";
import SocialMediaLink from "./SocialMediaLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import NavLink from "./NavLink";

function Header({
  headerRef,
  scrollToSection,
  projectsRef,
  contactRef,
  showHeader,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onClickMenuItem = (ref) => {
    scrollToSection(ref);
    toggleMobileMenu();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      ref={headerRef}
      className={`relative flex flex-wrap justify-between items-center px-5 py-4 bg-dark-blue-gray text-white sticky top-0 z-50 transition-transform duration-300 ease-in-out ${
        showHeader || isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Social Media Links */}
      <div className="flex gap-5">
        <SocialMediaLink
          href="https://linkedin.com/in/pradeepkumarawm"
          ariaLabel="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialMediaLink>
        <SocialMediaLink
          href="https://github.com/kumarawmpapp"
          ariaLabel="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </SocialMediaLink>
        <SocialMediaLink
          href="https://www.coursera.org/user/7d15ea78902cfeb3ece4cfed4c38fab7"
          ariaLabel="Facebook"
        >
          <FontAwesomeIcon icon={faDev} />
        </SocialMediaLink>
      </div>

      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden text-white text-2xl focus:outline-none"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </button>

      {/* Right Navigation Links */}
      <nav
        className={`
          ${isMobileMenuOpen ? "flex" : "hidden"}
          md:flex flex-col md:flex-row md:static md:w-auto md:bg-transparent
          absolute top-full right-0 w-fit px-10 bg-dark-blue-gray
          items-center gap-6 py-4 md:py-0
          shadow-lg md:shadow-none z-40
        `}
      >
        <NavLink text="Projects" onClick={() => onClickMenuItem(projectsRef)} />
        <NavLink text="Contact" onClick={() => onClickMenuItem(contactRef)} />
      </nav>
    </header>
  );
}

export default Header;
