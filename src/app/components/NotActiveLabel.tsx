import React from 'react';
import s from './NotActiveLabel.module.css';

export interface NotActiveLabelProps {
  children: React.ReactNode;
}

export default function NotActiveLabel({ children }: NotActiveLabelProps) {
  return <span className={s.label}>{children}</span>;
}
