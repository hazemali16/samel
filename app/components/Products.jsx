import Image from "next/image";
import product1 from "../images/product1.jpg"
import product2 from "../images/product2.jpg"


const Products = () => {
  return (
  <div className="pt-40 w-1/2  max-xl:w-3/4 max-sm:w-11/12 max-sm:px-5 mx-auto opacity-0 translate-y-10 duration-500" id="products">
    <h2 className="text-center text-4xl mb-5 text-[var(--main-color)] font-bold max-lg:text-3xl">محتويات الباكج الاحترافي</h2>
    <p className="text-xl text-center max-lg:text-lg mb-20">باكج شامل بأدوات ذكية تسهل عليك كل صعب وين ما كنت، في بيتك أو مكتبك:</p>
    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-20">
        <div className="shadow-lg rounded-lg">
            <Image src={product1} alt="product1" className="rounded-t-lg h-80 object-cover" />
            <div className="p-5 pb-10">
            <h3 className="text-2xl mb-5 text-[var(--main-color)] font-bold">مفك صامل الذكي</h3>
            <p className="leading-relaxed h-28">رفيقك في كل المواقف، تصميم عملي يريحك من تعب البحث عن المفكات الضايعة، تفك وتركب فيه مع طقم متنوع من 51 رأس، يناسب كل أنواع المسامير.</p>
            </div>
        </div>
        <div className="shadow-lg rounded-lg">
            <Image src={product2} alt="product2" className="rounded-t-lg h-80 object-cover" />
            <div className="p-5 pb-10">
            <h3 className="text-2xl mb-5 text-[var(--main-color)] font-bold">لاصق النانو السحري</h3>
            <p className="leading-relaxed h-28">ابتكار ولا أروع، يلصق لك أي شيء على أي سطح بدون أثر، مع إمكانية غسله وتكرار استخدامه.</p>

            </div>
        </div>
    </div>
    <div className="mt-20 text-center text-2xl text-[var(--main-color)]">
    <p className="mt-5 text-[var(--main-color)] font-bold mb-2">سعرنا الحصري لك: 170 ريال فقط!</p>



    لا تفوت الفرصة، الكمية محدودة والسعر ما يتكرر!


    </div>
  </div>
  );
};

export default Products;
