

const Services = () => {
  return (
  <div className="w-10/12 max-sm:w-11/12 mx-auto py-40 opacity-0 translate-y-10 duration-500" id="services">
    <h2 className="text-center text-4xl mb-5 text-[var(--main-color)] font-bold max-lg:text-3xl">ليش تختار صامل؟</h2>
    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-20 mt-20 w-3/4 max-lg:w-full mx-auto">
        <div className="shadow-lg flex justify-center items-center gap-5 flex-col p-5">
        <i className="fa-solid fa-truck-fast text-[var(--main-color)] fa-2x"></i>
        <h3 className="text-2xl text-[var(--main-color)] font-bold">توصيل ولا أسرع</h3>
        <p className="leading-relaxed text-center">نوفر لك خدمة توصيل فورية لباب بيتك وين ما كنت في نفس اليوم أو اليوم التالي.</p>
        </div>
        <div className="shadow-lg flex justify-center items-center gap-5 flex-col p-5">
        <i className="fa-solid fa-credit-card text-[var(--main-color)] fa-2x"></i>
        <h3 className="text-2xl text-[var(--main-color)] font-bold">الدفع مع تمارا</h3>
        <p className="leading-relaxed text-center">مرونة في الدفع تريح بالك، خل تجربتك مع صامل ولا أروع.</p>
        </div>
    </div>
  </div>
);
};

export default Services;
