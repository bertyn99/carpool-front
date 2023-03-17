import React, { FC, InputHTMLAttributes } from 'react';

interface props extends InputHTMLAttributes<HTMLInputElement> { type: string; icons: boolean; }

const Trips: FC<props> = ({ type, icons }) => {
  return <div>Voyages</div>
}

export default Trips