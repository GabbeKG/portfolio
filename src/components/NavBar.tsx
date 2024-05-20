import React from 'react'; // Import React for using functional components

export default function NavBar({ onSectionChange }) {
  const handleClick = (sectionName) => {
    onSectionChange(sectionName); // Call the prop function with section name
  };

  return (
      <>
          
      <header id="Header">
        <nav style={{ position: 'relative' }}>
          <ul style={{ position: 'relative' }}>
            <li onClick={() => handleClick('presentation')}>Start</li>
            <li onClick={() => handleClick('skills')}>Skills (Not Implemented Yet)</li>
            <li onClick={() => handleClick('portfolio')}>Showcase</li>
            <li onClick={() => handleClick('about')}>About Me (Not Implemented Yet)</li>
            <li onClick={() => handleClick('contact')}>Contact (Not Implemented Yet)</li>
          </ul>
        </nav>
      </header>
    </>
  );
}