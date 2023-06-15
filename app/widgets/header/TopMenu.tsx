import React from 'react';
import {Link} from "@remix-run/react";

export const TopMenu = () => {
  return (
    <div className='bg-zyan-200 dark:bg-contrast shadow-darkHeader'>
      <ul className='text-sm flex space-x-3 gap-3 place-content-end py-4 px-6 md:px-12'>
        <li className='transition-all duration-[0.2s] ease-[ease] hover:scale-[1.1]'><Link
          to='/warranty'>Гарантия</Link></li>
        <li className='transition-all duration-[0.2s] ease-[ease] hover:scale-[1.1]'><Link
          to='/delivery'>Доставка</Link></li>
        <li className='transition-all duration-[0.2s] ease-[ease] hover:scale-[1.1]'><Link to='/contact'>Контакты</Link>
        </li>
      </ul>
    </div>
  );
};

