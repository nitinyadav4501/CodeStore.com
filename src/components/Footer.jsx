import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-sky-800 text-white py-2">
      <div className="py-5 flex justify-around flex-wrap">
        <div>
          <div className="text-gray-300 font-bold">
            <h1 className="text-2xl">CodeStore</h1>
            <p className="text-xs">By Nitin Yadav</p>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-xl text-gray-200 font-bold">SOCIAL</h1>
          <div className="flex gap-x-5 text-xl">
            <FaTwitter className="hover:scale-125 cursor-pointer transition-all" />
            <FaFacebook className="hover:scale-125 cursor-pointer transition-all" />
            <FaYoutube className="hover:scale-125 cursor-pointer transition-all" />
          </div>
        </div>
      </div>
      <div className="text-center text-xs py-3">
        Copyright © 2024 - All right reserved by Nitin Yadav
      </div>
    </div>
  );
}

export default Footer;
