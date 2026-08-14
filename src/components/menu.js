import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { navLinks } from '@config';
import { useOnClickOutside } from '@hooks';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setMenuOpen(false));

  useEffect(() => {
    const onResize = e => {
      if (e.currentTarget.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div ref={wrapperRef} style={{ display: 'block' }}>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>

      {/* Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
          background: 'none',
          border: '1px solid var(--green)',
          borderRadius: '4px',
          cursor: 'pointer',
          padding: '8px 10px',
          zIndex: 10,
          position: 'relative',
        }}>
        <span style={{
          display: 'block',
          width: '22px',
          height: '2px',
          background: 'var(--green)',
          borderRadius: '2px',
          transition: 'all 0.3s ease',
          transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
        }} />
        <span style={{
          display: 'block',
          width: '22px',
          height: '2px',
          background: 'var(--green)',
          borderRadius: '2px',
          transition: 'all 0.3s ease',
          opacity: menuOpen ? 0 : 1,
        }} />
        <span style={{
          display: 'block',
          width: '22px',
          height: '2px',
          background: 'var(--green)',
          borderRadius: '2px',
          transition: 'all 0.3s ease',
          transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
        }} />
      </button>

      {/* Sidebar */}
      <div style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: 0,
        width: '75vw',
        maxWidth: '400px',
        height: '100vh',
        background: 'var(--light-navy)',
        boxShadow: '-10px 0 30px -15px var(--navy-shadow)',
        zIndex: 9,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
        padding: '50px 10px',
      }}>
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          fontFamily: 'var(--font-mono)',
          textAlign: 'center',
        }}>
          <ol style={{ padding: 0, margin: '0 0 30px 0', listStyle: 'none', width: '100%', counterReset: 'item 0' }}>
            {navLinks && navLinks.map(({ url, name }, i) => (
              <li key={i} style={{ margin: '0 auto 20px', fontSize: 'clamp(14px, 4vw, 18px)' }}>
                <span style={{ display: 'block', marginBottom: '5px', color: 'var(--green)', fontSize: '13px' }}>
                  0{i + 1}.
                </span>
                <Link
                  to={url}
                  onClick={() => setMenuOpen(false)}
                  style={{ color: 'var(--lightest-slate)', textDecoration: 'none', padding: '3px 20px 20px', display: 'block' }}>
                  {name}
                </Link>
              </li>
            ))}
          </ol>

          <a
            href="https://docs.google.com/viewer?url=https://www.bernardbaah.com/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--green)',
              border: '1px solid var(--green)',
              borderRadius: '4px',
              padding: '18px 50px',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              textDecoration: 'none',
              marginTop: '10%',
            }}>
            Resume
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
