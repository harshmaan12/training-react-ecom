import React from "react";

const Banner = () => {
  return (
    <div className="flex bg-gray-200 h-screen gap-6 p-4">
      <div className="w-1/2">
        <img
          src="https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Main Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="w-1/2 flex flex-col gap-5">
        <div className="h-1/2">
          <img
            src="https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Upper Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className=" h-60 flex divide-x gap-6">
          <div className="w-1/2">
            <img
              src="https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Bottom Image 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-1/2">
            <img
              src="https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Bottom Image 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;
