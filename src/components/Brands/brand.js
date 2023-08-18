 import React from 'react';

const Brand = () => {
  const imageUrls = [
   
    'https://horseyhooves.com/wp-content/uploads/2022/03/Hermes-logo.png.webp',
    'https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png',
    'https://bcassetcdn.com/public/blog/wp-content/uploads/2021/11/10190851/Louis-Vuitton-1.png',
    'https://1000logos.net/wp-content/uploads/2019/10/Chanel-logo.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQoKBYqUGBfW5PeMZ-Y-dL3_kim1XRLESdyg&usqp=CAU',
    'https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21170639/BODE.png',
    'https://1.bp.blogspot.com/-U-Vl_Et67SE/T7JUkBXMQrI/AAAAAAAACnA/--yGCi8frRQ/s1600/logo-radley-large.jpeg',
    'https://mbluxury1.s3.amazonaws.com/2022/02/25172934/DG-Dolce-Gabbana.jpg',
  ];

  return (
    <div className="text-left">
      <div className="relative lg:flex  ">
    
        <h1 className="text-3xl font-bold mb-4 px-12 lg:absolute">Brands</h1>

       <div className="flex overflow-x-auto p-7 m-2 gap-14 space-x-2 lg:overflow-x-hidden ">
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt="Brand image"
            className="w-24 h-20 m-3"
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Brand;
