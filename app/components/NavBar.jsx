import Image from "next/image";
import logo from '../images/logo.png'


const NavBar = () => {
  return (
  <div className="p-5 absolute top-0 left-0 w-full z-20">
    <div className="w-10/12 mx-auto flex items-center justify-between max-md:flex-col max-md:w-full max-md:gap-2">
        <a href="#" className="w-20">
            <Image src={logo} alt="logo" />
        </a>
        <ul className="flex items-center gap-5 max-sm:gap-3 text-white">
            <li><a href="#hero">الرئيسية</a></li>
            <li><a href="#products">منتجاتنا</a></li>
            <li><a href="#order">اطلبه الآن</a></li>
            <li><a href="#services">مميزاتنا</a></li>
        </ul>
    </div>
  </div>
  );
};

export default NavBar;
