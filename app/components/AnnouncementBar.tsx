import React from 'react';
import {Link} from "@remix-run/react";

export const AnnouncementBar = () => {
  return (
    <div className='bg-zinc-100 dark:bg-contrast'>
      <ul className='text-sm px-4 py-3 flex space-x-3 place-content-end'>
        <li><Link to='/warranty'>Гарантия</Link></li>
        <li><Link to='/delivery'>Доставка</Link></li>
        <li><Link to='/contact'>Контакты</Link></li>
      </ul>
    </div>
  );
};

