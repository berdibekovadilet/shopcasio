import React from 'react';
import {Disclosure, Transition} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/20/solid";

interface Accordion {
  title: string,
  description: string,
}

export const Accordion = ({title, description}: Accordion) => {
  return (
    <div className='my-3 px-2'>
      <Disclosure>
        {({open}) => (
          <>
            <Disclosure.Button
              className="flex w-full justify-between rounded-lg bg-zinc-100 px-4 py-2 text-left text-sm font-medium text-zinc-900 hover:bg-zinc-200 focus:outline-none focus-visible:ring focus-visible:ring-zinc-500 focus-visible:ring-opacity-75">
              <span>{title}</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-zinc-500`}
              />
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {description}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

