import React, { useState } from 'react';
import catWikiLogo from "../assets/CatwikiLogo.svg";
import { Link } from 'react-router-dom';
import Image from './Image';
import Search from './Search';


function Hero() {

  const [catWikiData] = useState([
    {
      id: "a8nIYvs6S",
      name: "Savannah",
      url: "https://cdn2.thecatapi.com/images/a8nIYvs6S.jpg"
    },
    {
      id: "s4wQfYoEk",
      name: "British Shorthair",
      url: "https://cdn2.thecatapi.com/images/s4wQfYoEk.jpg"
    },
    {
      id: "OOD3VXAQn",
      name: "Maine Coon",
      url: "https://cdn2.thecatapi.com/images/OOD3VXAQn.jpg"
    },
    {
      id: "06dgGmEOV",
      name: "Norwegian Forest Cat",
      url: "https://cdn2.thecatapi.com/images/06dgGmEOV.jpg"
    }
  ])


  return (
    <div>
      <div className='mt-4 bg-black curve-top'>
        <div className='responsive-img  flex flex-col justify-center items-start'>
          <div className='inline-flex flex-col ml-12'>
            <img className='white-svg' src={catWikiLogo} alt="CatWiki Logo" />
            <p className='text-white mt-2'>Get to know more about</p>
            <p className='text-white mb-4'>your cat breed</p>
            <Search />
          </div>
        </div>
      </div>
      <div className='responsive-section bg-gray-200 md:px-16 pt-8 pb-16 sm:px-8'>
        <p className='text-sm inline my-1 border-b border-b-2 border-black'>Most Searched Breeds</p>
        <h2 className='font-bold text-2xl mt-2'>66+ Breeds for you</h2>
        <div className='flex justify-between'>
          <h2 className='font-bold text-2xl mb-4'>to discover</h2>
          <Link to={'/cat-list'}>
            <span className='font-semibold text-xs text-slate-500 text-right'>SEE MORE →</span>
          </Link>
        </div>
        <div className='grid gap-y-2 gap-x-2 grid-cols-2 grid-rows-2 md:grid-rows-1  md:grid-cols-4 md:gap-x-4' >
          {catWikiData.map((catWikiDatum) => {
            return <Image key={catWikiDatum.id} id={catWikiDatum.id} url={catWikiDatum.url} name={catWikiDatum.name} />
          })}
        </div>
      </div>
      <div className='grid md:grid-cols-3 md:grid-rows-1 grid-rows-2 my-4 md:mx-24 items-center justify-center'>
        <div className='mt-4 col-span-1 row-span-1'>
          <h1 className='font-bold text-4xl'>Why should you</h1>
          <h1 className='font-bold text-4xl mb-4'>have a cat?</h1>
          <p className='mb-4'>Having a cat around you can actually trigger the
            release of calming chemicals in your body which
            lower your stress and anxiety leaves
          </p>
          <span className='font-semibold text-xs text-slate-500 text-right'>READ MORE →</span>
        </div>
        <div className='grid-image-panel col-span-2 row-span-1 gap-x-2 gap-y-2'>
          <div className='cat-image-1'></div>
          <div className='cat-image-2'></div>
          <div className='cat-image-3'></div>
        </div>
      </div>
    </div>
  )
}

export default Hero