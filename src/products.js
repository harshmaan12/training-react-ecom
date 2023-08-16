import React from "react";

const Product = () => {
  return (
    <div>
      <div className=" grid grid-cols-4 mt-16">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            alt="image 1"
            className=" h-64 w-64 rounded-xl"
          />
          <div className="absolute bottom-6 left-10">
            <h1 className="text-xl font-bold bg-white text-black w-44 px-6">
              Best Seller
            </h1>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="image 2"
            className="h-64 w-64 rounded-xl"
          />
          <div className="absolute bottom-6 left-10">
            <h1 className="text-xl font-bold bg-white text-black w-44 px-6">
              Shop Men
            </h1>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            alt="image 3"
            className="h-64 w-64 rounded-xl"
          />
          <div className="absolute bottom-6 left-10">
            <h1 className="text-xl font-bold bg-white text-black w-44 px-6">
              Shop Women
            </h1>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1543132220-c6440149c632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNhc3VhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="image 4"
            className="h-64 w-64 rounded-xl"
          />
          <div className="absolute bottom-6 left-10">
            <h1 className="text-xl font-bold bg-white text-black w-44 px-6">
              Shop Casual
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
