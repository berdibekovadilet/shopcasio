import React from 'react';
import {Link} from "@remix-run/react";

export const TopMenu = () => {
  return (
    <div className='bg-primary dark:bg-contrast'>
      <ul className='text-md text-white px-4 py-3 flex space-x-3 place-content-end'>
        <li><Link to='/warranty'>Гарантия</Link></li>
        <li><Link to='/delivery'>Доставка</Link></li>
        <li><Link to='/contact'>Контакты</Link></li>
      </ul>
    </div>
  );
};

