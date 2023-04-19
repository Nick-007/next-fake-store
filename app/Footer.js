import React from "react";

const Footer = () => {
  const fullYear = new Date().getFullYear();
  return (
    <div className=" bg-[#121212]  shadow-2xl shadow-black max-w-screen-2xl mx-auto  text-white flex justify-center items-center p-7">
      <p>
        &copy; {fullYear} Fakestore
        
      </p>
    </div>
  );
};

export default Footer;
