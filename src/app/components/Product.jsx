'use client'
import { bigImages, smallImages } from "../constants"
import  { useState } from 'react';
import ImageGallery from "./ImageGallery"
import Purchase from "./Purchase"
const Product = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
    return (
        
    <div className=" product-main  md:container md:mx-auto md:max-w-7xl md:py-20  md:grid md:grid-cols-2   sm:flex  sm:flex-col   ">
      <ImageGallery smallImages={smallImages} bigImages={bigImages} lightboxOpen={lightboxOpen} setLightboxOpen={setLightboxOpen} />

      <div className=" product_description md:mt-10  md:container md:max-w-lg max-[900px]:px-6">
      <p className=" text-[15px] font-bold tracking-widest uppercase mb-4 text-orange-e">Sneaker Company </p>
      <h1 className="text-5xl font-bold mb-10 text-black max-[900px]:text-3xl max-[900px]:mb-6">Fall Limited Edition Sneakers </h1>
      <p className="  text-grayish-blue mb-8">
      These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>

      <div className="max-[900px]:flex max-[900px]:flex-row max-[900px]:items-center max-[900px]:justify-between max-[900px]:mb-8">
      <div className=" price flex flex-row items-center">
      <p className=" font-bold text-3xl text-black">$125.00</p>
      <span className="font-bold text-orange-e bg-orange-p rounded-md px-3 ml-3">50%</span>
      </div>

      <div className={`old-price relative ${lightboxOpen ? '-z-10' : ''} `}>
      <p className="text-grayish-blue mb-8 max-[900px]:mb-2"><span className="strike-line"/>$250.00</p>
      </div>

      </div>
      <Purchase lightBoxOpen={lightboxOpen} />
     
      </div>
    </div>
    )
}
export default Product