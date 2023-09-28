"use client"

// Importing the necessary libraries and types.
import { Fragment, useState } from "react";
import Image from "next/image";

import { Listbox, Transition } from "@headlessui/react";

import { CustomFilterProps } from "@/types";

// Definition of the CustomFilter component.
export default function CustomFilter<T>({ options, setFilter }: CustomFilterProps<T>) {
  // State to store the selected option.
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e); // Updating the selected option in the state.
          setFilter(e.value as unknown as T); // Updating the selected option in the state
        }}
      >
        <div className='relative w-fit z-10'>
          {/* Button to open the dropdown list. */}
          <Listbox.Button className='custom-filter__btn'>
            <span className='block truncate'>{selected.title}</span>
            <Image src='/chevron-up-down.svg' width={20} height={20} className='ml-4 object-contain' alt='chevron_up-down' />
          </Listbox.Button>

          {/* Transition to display the options. */}
          <Transition
            as={Fragment} //  Grouping multiple elements without introducing an additional DOM node,
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='custom-filter__options'>
              {/* Iterating through the options and displaying them as dropdown list options. */}
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`} >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}