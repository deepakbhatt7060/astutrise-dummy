import React, { useEffect, useRef, useState, useMemo } from 'react';
import styles from "./page.module.css";
import Card from "./_components/Card";
import { isMobile } from 'react-device-detect';

export type CardContainerProps = {
  check?: boolean;
};

const MemoizedCard = React.memo(Card);

const CardContainer = (props: CardContainerProps) => {
  const [cardIndex, setCardIndex] = useState(0);

  const cards =useMemo(()=>[
    "Website Designing",
    "Website Development",
    "Search Engine Optimization",
    "Website Migration",
    "Website Maintainance",
  ],[]);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isMobile) return;
    const container = containerRef.current;
    if (!container) return;

    const intervalId = setInterval(() => {
      container.style.transition = 'transform 0.5s ease-out';
      container.style.transform = 'translateX(-220px)';

      setTimeout(() => {
        container.style.transition = 'none';
        container.style.transform = 'translateX(0)';
        setCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }, 500);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [cards]);

  const memoizedRenderCards = useMemo(() =>(
    <>
      {cards.map((title, index) => (
        <MemoizedCard 
          key={`${title}`} 
          title={cards[(index + cardIndex) % cards.length]} 
        />
      ))}
    </>
  ), [cards, cardIndex]);
  return (
    <div
      className={`${styles.divContainer} ${styles.ccContainer}`}
      style={{
        height: props.check ? "calc(25vh + 15px)" : "25vh",
        width: "100vw",
        overflowX: "hidden"
      }}
    >
      <div
        className={`${styles.centerAdjust} ${styles.contentStyles} ${styles.cardContainer}`}
        ref={containerRef}
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease-out',
        }}
      >
        {isMobile ? memoizedRenderCards : (
          <>
            {cards.map((title, index) => (
              <MemoizedCard key={`${title}`} title={title} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default React.memo(CardContainer);