import Image from "next/image";
import order_image from "../images/order.jpg";

const Order = () => {
  return (
  <div className="mt-40 relative p-10 opacity-0 translate-y-10 duration-500">
      <div className="absolute w-full h-full top-0 left-0 " id="order">
        <Image className="w-full h-full object-cover" src={order_image} alt="order_image" />
      </div>
      <div className="z-20 relative text-center">
        <h2 className="text-4xl mb-5 text-[var(--main-color)] font-bold max-lg:text-3xl">لا تفكر كثير!</h2>
        <p className="leading-relaxed text-white text-xl max-lg:text-lg max-sm:text-base">اطلب الباكيج الحين وخل أدواتك الفعالة دايماً معك، وسهل مهامك اليومية بلمسة احترافية من متجرنا. </p>
        <a href="https://samelstore.com/products/Founding-Day-Offer" className="bg-black my-5 px-5 py-2 rounded-lg block w-fit mx-auto text-[var(--main-color)] ">اطلبه الآن</a> 
      </div>
  </div>
);
};

export default Order;
