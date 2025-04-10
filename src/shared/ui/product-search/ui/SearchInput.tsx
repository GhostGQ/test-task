'use client';

import React from 'react';
import styles from './styles.module.scss';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput: React.FC<Props> = ({value, onChange}) => {
  return (
    <input
      type='text'
      placeholder='Поиск по названию...'
      value={value}
      onChange={e => onChange(e.target.value)}
      className={styles.search}
    />
  );
};
