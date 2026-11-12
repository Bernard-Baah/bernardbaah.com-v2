import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 50px;
  }

  .hero-button {
    ${({ theme }) => theme.mixins.bigButton};
  }
`;

const StyledTypewriter = styled.h3`
  margin-top: 5px;
  color: var(--slate);
  line-height: 0.9;

  .cursor {
    display: inline-block;
    width: 3px;
    height: 0.75em;
    background-color: var(--green);
    margin-left: 4px;
    vertical-align: middle;
    animation: blink 0.8s step-end infinite;
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [typingDone, setTypingDone] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const fullText = 'I design and build for the cloud.';

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isMounted || prefersReducedMotion) {
      return;
    }

    const startDelay = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.slice(0, i + 1));
          i++;
        } else {
          setTypingDone(true);
          clearInterval(interval);
        }
      }, 40);
      return () => clearInterval(interval);
    }, 600);

    return () => clearTimeout(startDelay);
  }, [isMounted]);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Bernard Buabeng Baah.</h2>;
  const three = (
    <StyledTypewriter className="big-heading">
      {prefersReducedMotion ? fullText : typedText}
      {!typingDone && <span className="cursor" />}
    </StyledTypewriter>
  );
  const four = (
    <>
      <p>
        I design and build AWS architectures in Terraform, then test them against real failures and
        measure the results. By day I'm a Data Center Infrastructure Technician at{' '}
        <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer">
          Amazon Web Services
        </a>
        , so I know the cloud from the rack up.
      </p>
    </>
  );
  const five = (
    <div className="hero-actions">
      <a className="hero-button" href="/#projects">
        View my projects
      </a>
      <a className="hero-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        Resume
      </a>
    </div>
  );
  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
