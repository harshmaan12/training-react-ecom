 import React from 'react';

const Brand = ({imageUrls}) => {
   return (
    <div className="text-left">
      <div className="relative lg:flex  ">
       <h1 className="text-4xl font-extrabold mb-4 px-2 mt-2 lg:absolute">Brands</h1>
         <div className="flex overflow-x-auto py-10 m-4  gap-12  space-x-2 lg:overflow-x-hidden ">
        {
        imageUrls?.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt= "Brand"
            className="w-24 h-20 m-3"
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Brand;
