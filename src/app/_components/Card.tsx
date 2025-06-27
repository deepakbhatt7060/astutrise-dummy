import React from 'react';
import styles from '../page.module.css';

interface CardProps {
  title: string;
  style?: React.CSSProperties;
}

const Card = ({ title, style }:CardProps) => {
  return (
    <div style={{...style,fontSize:16}} className={styles.card}>
      {title}
    </div>
  );
}

export default Card;
