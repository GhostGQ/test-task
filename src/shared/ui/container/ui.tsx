import {ReactNode} from 'react';
import styles from './styles.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({children, className = ''}: ContainerProps) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};
