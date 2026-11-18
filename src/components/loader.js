import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';
import { IconLoader } from '@components/icons';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    opacity: ${props => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      overflow: visible;
      .node {
        opacity: 0;
        transform-box: fill-box;
        transform-origin: center;
      }
      .edge {
        opacity: 0;
        stroke-dasharray: 1;
        stroke-dashoffset: 1;
      }
    }
  }
`;

// The intro plays once per browser tab; later visits to the home page skip straight to the content.
const INTRO_SEEN_KEY = 'intro-seen';

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    // Nodes appear, the links draw between them, a signal runs through the path, then the mark exits.
    loader
      .add(
        {
          targets: '#logo .node',
          opacity: [0, 1],
          scale: [0, 1],
          duration: 350,
          delay: anime.stagger(70),
          easing: 'easeOutBack',
        },
        100,
      )
      .add(
        {
          targets: '#logo .edge',
          strokeDashoffset: [1, 0],
          opacity: { value: [0, 1], duration: 1 },
          duration: 1000,
          easing: 'easeInOutCubic',
        },
        600,
      )
      .add(
        {
          targets: '#logo .node',
          fill: [
            { value: '#64ffda', duration: 180 },
            { value: '#020c1b', duration: 260 },
          ],
          delay: anime.stagger(60),
          easing: 'linear',
        },
        1600,
      )
      .add(
        {
          targets: '#logo',
          duration: 300,
          easing: 'easeInOutQuart',
          opacity: 0,
          scale: 0.1,
        },
        2400,
      )
      .add(
        {
          targets: '.loader',
          duration: 200,
          easing: 'easeInOutQuart',
          opacity: 0,
          zIndex: -1,
        },
        2700,
      );
  };

  useEffect(() => {
    let seen = false;
    try {
      seen = window.sessionStorage.getItem(INTRO_SEEN_KEY) === '1';
      window.sessionStorage.setItem(INTRO_SEEN_KEY, '1');
    } catch (e) {
      // Storage can be unavailable (private mode, blocked site data); play the intro.
    }
    const reduceMotion =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (seen || reduceMotion) {
      finishLoading();
      return undefined;
    }

    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <div className="logo-wrapper">
        <IconLoader />
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
