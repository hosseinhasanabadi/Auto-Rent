import React from "react";

function About() {
  return (
    <section className="w-full flex justify-center py-10">
      <div
        className="w-3/4 bg-center rounded-2xl p-8 bg-cover bg-no-repeat relative flex flex-col items-center"
        style={{ backgroundImage: "url('/About.png')", maxHeight: "500px " ,backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="text-center">
          <h1 className="font-bold text-amber-300 text-2xl">چــــــرا اُتو رِنت؟</h1>
          <p className="text-white mx-auto max-w-2xl">
            اجاره خودرو از یک شرکت اجاره خودرو با سابقه به شما کمک می‌کند تا در
            مسافرت‌ها، قرار ملاقات‌های مهم، مجالس و مراسم‌های خانوادگی ماشین
            مناسب خود را در اختیار داشته باشید. اگر شما اصلا خودرویی در اختیار
            ندارید یا خودروی شما مطمئن نیست، می‌توانید از سوییچ، خودروی مناسب
            خود را کرایه کرده و با آسودگی به سفر بروید.
          </p>
        </div>

        <div className="relative mt-10 w-full flex sm:-bottom-5 md:-bottom-24  justify-center">
          <div className="flex flex-wrap gap-6 justify-center items-center w-full max-w-3xl">
            <div className="w-full sm:w-60 border rounded-2xl bg-white shadow text-center p-4">
              <img src="/icon.png" className="mx-auto w-12 h-12" alt="تحویل در محل" />
              <h2 className="font-bold mb-2">تحویل در محل</h2>
              <p className="text-gray-500 text-sm">
                تحویل خودرو در زمان و مکان تعیین شده توسط شما خواهد بود.
              </p>
            </div>

            <div className="w-full sm:w-60 border rounded-2xl bg-white shadow text-center p-4">
              <img src="/icon.png" className="mx-auto w-12 h-12" alt="پشتیبانی ۲۴ ساعته" />
              <h2 className="font-bold mb-2">پشتیبانی ۲۴ ساعته</h2>
              <p className="text-gray-500 text-sm">
                در هر ساعت از شبانه‌روز می‌توانید با پشتیبانی تماس بگیرید.
              </p>
            </div>

            <div className="w-full sm:w-60 border rounded-2xl bg-white shadow text-center p-4">
              <img src="/icon.png" className="mx-auto w-12 h-12" alt="قیمت مناسب" />
              <h2 className="font-bold mb-2">قیمت مناسب</h2>
              <p className="text-gray-500 text-sm">
                بهترین قیمت‌ها برای اجاره خودرو را ارائه می‌دهیم.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
