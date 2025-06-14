import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import LandingArea from './components/LandingArea';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import {projects} from './data'

function App() {
  // Refs to scroll to sections
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const headerRef = useRef(null);

  // State to store header height for dynamic landing area height
  const [headerHeight, setHeaderHeight] = useState(0);
  // State for header visibility
  const [showHeader, setShowHeader] = useState(true);
  // State to track last scroll position
  const [lastScrollY, setLastScrollY] = useState(0);

  // Effect to measure header height on mount and resize
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight(); // Set initial height
    window.addEventListener('resize', updateHeaderHeight); // Update on resize

    return () => window.removeEventListener('resize', updateHeaderHeight); // Cleanup
  }, []);

  // Effect to handle scroll-based header visibility
  useEffect(() => {
    const handleScroll = () => {
      // Don't hide header if mobile menu is open
      // This logic will be handled by the Header component internally
      // and will prioritize keeping the menu open.

      const currentScrollY = window.scrollY;
      const scrollThreshold = 100; // Pixels to scroll before hiding/showing

      if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
        // Scrolling down and past the threshold
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY || currentScrollY < scrollThreshold) {
        // Scrolling up or at the very top of the page
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]); // Re-run effect when lastScrollY changes

  // Function for smooth scrolling
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };  

  return (
    <div className="font-inter antialiased">
      <Header
        headerRef={headerRef}
        scrollToSection={scrollToSection}
        projectsRef={projectsRef}
        contactRef={contactRef}
        showHeader={showHeader}
      />
      <LandingArea headerHeight={headerHeight} />
      <ProjectsSection projectsRef={projectsRef} projects={projects} />
      <ContactSection contactRef={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
