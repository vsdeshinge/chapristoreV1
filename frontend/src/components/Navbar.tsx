import { FC } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { setCartState } from "../redux/features/cartSlice";
import { updateModal } from "../redux/features/authSlice";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import CustomPopup from "./CustomPopup";
import logo from '../assets/Group 2.svg'
import './Navbar.css'

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(
    (state) => state.cartReducer.cartItems.length
  );
  const username = useAppSelector((state) => state.authReducer.username);
  const { requireAuth } = useAuth();

  const showCart = () => {
    requireAuth(() => dispatch(setCartState(true)));
  };

  return (
    <div className="py-4 bg-white top-0 sticky z-10 shadow-lg font-karla">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-4xl font-bold" data-test="main-logo">
            <div className="logo">
            <img src={logo} alt="" />
            </div>
            
          </Link>
          <div className="lg:flex hidden w-full max-w-[500px]">
            <input
              type="text"
              placeholder="Search for a product..."
              className="border-2 border-[#C5F42C] px-6 py-2 w-full"
            />
            <div className="bg-[#C5F42C] text-white text-[26px] grid place-items-center px-4">
              <BsSearch />
            </div>
          </div>

          <div className="flex gap-4 md:gap-8 items-center ">


          <Link
              to="/products"
              className="text-xl font-bold "
              data-test="main-products"
            >
              men
            </Link>
            <Link
              to="/products"
              className="text-xl font-bold"
              data-test="main-products"
            >
              women
            </Link>

            <Link
              to="/products"
              className="text-xl font-bold"
              data-test="main-products"
            >
              mobilecover
            </Link>











            <Link
              to="/products"
              className="text-xl font-bold"
              data-test="main-products"
            >
              Products
            </Link>
            
            <div className="flex items-center gap-2">
                {username !== "" ? (
                  <img
                    src="./public/Asset.png"
                    alt="avatar"
                    className="w-6"
                  />
                ) : (
                  <FaUser className="text-gray-500 text-2xl" />
                )}
                <div className="text-gray-500 text-2xl">
                  {username !== "" ? (
                    <CustomPopup />
                  ) : (
                    <div className="login-button">
                      <span
                        className="cursor-pointer hover:opacity-85"
                        onClick={() => dispatch(updateModal(true))}
                        data-test="login-btn"
                      >
                        <Link
                          
                          className=" text-2xl font-bold m-4 "
                          data-test="main-products">
                          login
                      </Link>
                      </span>
                    </div>
                  )}
                </div>
              </div>

            <div
              className="text-gray-500 text-[32px] relative hover:cursor-pointer hover:opacity-80"
              onClick={showCart}
              data-test="cart-btn"
            >
              <AiOutlineShoppingCart />
              <div
                className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center"
                data-test="cart-item-count"
              >
                {cartCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
