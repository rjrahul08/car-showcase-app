"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import SearchManufacturer from './SearchManufacture'
import { SearchBarProps } from "@/types";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"loupe"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchBar = ({ setManufacturer, setModel }: SearchBarProps) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer.trim() === "" && searchModel.trim() === "") {
      return alert("Please fill out the search bar.");
    }

    setModel(searchModel);
    setManufacturer(searchManufacturer);
  };

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      {/* The first section of the search bar */}
      <div className='searchbar__item'>
        {/* SearchManufacturer component for selecting the manufacturer. */}
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        {/* Search button (visible in mobile mode). */}
        <SearchButton otherClasses='sm:hidden' />
      </div>
      {/* The second section of the search bar */}
      <div className='searchbar__item'>
        {/* Car model search icon */}
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='recherche de modèle de voiture'
        />
        {/* Car model input field */}
        <input
          type='text'
          name='searchModel'
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder='Tiguan...'
          className='searchbar__input'
        />
        {/* Search button (visible in mobile mode) */}
        <SearchButton otherClasses='sm:hidden' />
      </div>
      {/* Search button (visible on large screen mode) */}
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;