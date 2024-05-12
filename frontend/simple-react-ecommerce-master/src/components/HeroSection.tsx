import { FC } from "react";
import { Link } from "react-router-dom";
import './footer.css' 
const HeroSection: FC = () => {
  return (
    <div className="bg-[#e3edf6] font-lora">
      <div className="container px-4 grid md:grid-cols-2 py-8 mx-auto">
        <div className="flex items-center">
          <div className="max-w-[450px] space-y-4">
            <p className="text-black">
              Starting At <span className="font-bold">₹999</span>
            </p>
            <h2 className="text-black font-bold text-4xl md:text-5xl">
              The best notebook collection 2024
            </h2>
            <h3 className="text-2xl">
              Exclusive offer <span className="text-red-600">-10%</span> off
              this week
            </h3>
            <div className="bttn">
            <Link
            
              to="/product/6"
              data-test="hero-btn"
              // className="inline-block bg-white rounded-md px-6 py-3 hover:bg-blue-500 hover:text-white"
            >
              Shop Now
            </Link>
            </div>
          </div>
        </div>
        <div>
          <img src="/hero.png" alt="hero" className="ml-auto" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
