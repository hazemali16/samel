import logo from '../images/logo.png'
import Image from "next/image";
import footer_image from "../images/footer.jpg";


const Footer = () => {
  return (
    <div className="p-5 footer text-[var(--main-color)] relative">
            <div className="absolute w-full h-full top-0 left-0">
        <Image className="w-full h-full object-cover" src={footer_image} alt="footer_image" />
      </div>
      <div className="flex justify-between items-center max-md:flex-col max-md:gap-5 font-bold relative z-20">
      <a href="#" className="w-40">
            <Image src={logo} alt="logo" />
        </a>
    <div className="flex gap-20 max-md:flex-col max-md:gap-5">
      <div className="">
      <h3 className="mt-5 text-lg">فريقنا جاهز لخدمتك:</h3>
        <div className="flex items-center gap-3 mt-5 flex-col">
        <a href="https://wa.me/+9660550982128" className="flex gap-2 items-center" target="_blank">0550982128 <i className="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
      </div>
  </div>
  );
};

export default Footer;
