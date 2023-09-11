"use client";
import { useState } from "react";
import Image from "next/image";

const ImageGallery = ({
  smallImages,
  bigImages,
  setLightboxOpen,
  lightboxOpen,
}) => {
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    if (window.innerWidth > 900) { // Verifica a largura da tela
      setLightboxIndex(index);
      setLightboxOpen(true);
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handleBigImageDisplay = (index) => {
    setLightboxIndex(index);
  };

  const handleNextImg = () =>{
    const newIndex = (lightboxIndex + 1) % bigImages.length; 
    setLightboxIndex(newIndex);
  }

  const handlePrevImg = () =>{
    const newIndex = (lightboxIndex - 1 + bigImages.length) % bigImages.length; 
    setLightboxIndex(newIndex);
  }

  return (
    <div className=" gallery-container max-w-lg w-full flex flex-col items-center  ">
      <div className="actual-img-disp mb-4">
        
        {lightboxOpen && (
          <div className=" img-box-bg fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="lightbox-disp flex flex-col justify-center items-center w-auto max-h-2/3 ">
             <div className="close-box-wrapper w-2/4 flex flex-row-reverse items-end ">
             <div className="close-box flex flex-row items-center justify-end mb-6">
               <button className=" bg-transparent" onClick={closeLightbox}><div className="close-box"></div></button>
              </div>
             </div>
              <div className="big-img-wrapper flex flex-row items-center justify-center">
              <div className=" -mr-6 z-10 ">
               <button className=" rounded-full p-3 bg-white" onClick={() => handlePrevImg()} >
               <div className="prev-img-btn p-1 "></div>
                </button>
               </div>
              <Image
                src={bigImages[lightboxIndex]}
                alt="Lightbox Image"
                className=" rounded-2xl md:w-1/2 h-auto mb-4"
              />
              <div className=" -ml-6">
               <button className=" rounded-full p-3 bg-white " onClick={() => handleNextImg()}>
               <div className="next-img-btn p-1"></div>
                </button>
               </div>
              </div>
              <div className="small-imgs-row flex space-x-6 mt-4 max-[1024px]:hidden">
              {smallImages.map((image, index) => (
              <div key={index} className={`relative  hover:bg-white rounded-xl`}>
              <Image
              src={image}
              alt={`Thumbnail ${index}`}
              onClick={() => handleBigImageDisplay(index)}
              className={`cursor-pointer rounded-xl hover:opacity-50 ${lightboxIndex === index ? " bg-white opacity-80":""}`}
              width={80}
              height={80}
              
            />
            {lightboxIndex === index && (
              <div className={`absolute inset-0 border-solid border-[2.8px] border-orange-e rounded-xl bg-white opacity-50`} />
            )}
          </div>
        ))}
              </div>
            </div>
          </div>
        )}

       <div className="big-img-nobox flex flex-row items-center justify-center">
       <div className=" -mr-12 z-10 hidden max-[900px]:block ">
        <button className=" rounded-full p-1 bg-white" onClick={() => handlePrevImg()} >
        <div className="prev-img-btn "></div>
        </button>
        </div>
       <Image
          src={bigImages[lightboxIndex]}
          alt="Sneakers"
          onClick={() => openLightbox(lightboxIndex)}
          className={`cursor-pointer md:rounded-3xl `}
          width={450}
          height={450}
        />

        <div className=" -ml-12 z-10 hidden max-[900px]:block ">
        <button className=" rounded-full p-1 bg-white" onClick={() => handleNextImg()} >
        <div className="next-img-btn  "></div>
        </button>
        </div>

       </div>

      </div>
      <div className="small-imgs-row flex space-x-6 mb-4 max-[900px]:hidden">
        {smallImages.map((image, index) => (
          <div key={index} className={`relative ${lightboxOpen ? "-z-10" : ""}`}>
            <Image
              src={image}
              alt={`Thumbnail ${index}`}
              onClick={() => handleBigImageDisplay(index)}
              className={`cursor-pointer rounded-xl hover:opacity-50 ${lightboxIndex === index ? " opacity-40":""}`}
              width={90}
              height={90}
              
            />
            {lightboxIndex === index && (
              <div className={`absolute inset-0 border-solid border-[2.8px] border-orange-e rounded-xl `} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
