//بدون ریکت هوک فرم

// import React from "react";
// import { Link } from "react-router";
// function Login() {
//   return (
//     <section class="bg-gray-50 dark:bg-gray-900">
//       <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <Link
//           to={'/login'}
//           class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
//         >
//           ثبت نام
//         </Link>
//         <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//               وارد اکانت خود شوید
//             </h1>
//             <form class="space-y-4 md:space-y-6" action="#">
//               <div>
//                 <label
//                   for="email"
//                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   ایمیل خود را وارد کنید{" "}
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="name@company.com"
//                   required=""
//                 />
//               </div>
//               <div>
//                 <label
//                   for="password"
//                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   رمز عبور
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   placeholder="••••••••"
//                   class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   required=""
//                 />
//               </div>
//               <div class="flex items-center justify-between">
//                 <div class="flex items-start">
//                   <div class="flex items-center h-5">
//                     <input
//                       id="remember"
//                       aria-describedby="remember"
//                       type="checkbox"
//                       class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//                       required=""
//                     />
//                   </div>
//                   <div class="ml-3 text-sm">
//                     <label
//                       for="remember"
//                       class="text-gray-500 dark:text-gray-300"
//                     >
//                       من. به خاطر بسپار
//                     </label>
//                   </div>
//                 </div>
//                 <Link
//                   to={'/login'}
//                   class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
//                 >
//                   رمز عبور را فراموش کردی?
//                 </Link>
//               </div>
//               <button
//                 type="submit"
//                 class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//               >
//                 {" "}
//                 ورود
//               </button>
//               <p class="text-sm font-light text-gray-500 dark:text-gray-400">
//                 وارد شوید هنوز حساب کاربری ندارید؟{" "}
//                 <Link
//                   to={'/register'}
//                   class="font-medium text-primary-600 hover:underline dark:text-primary-500"
//                 >
//                   ثبت نام{" "}
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Login;
import React from "react";
import { Link } from "react-router";
import FormComponent from "../../components/form/FormComponent";
const Login = () => {
  const handleLogin = (data) => {
    console.log("Login Data:", data);
    // اینجا درخواست API را برای ورود ارسال کن
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">ورود</h1>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              وارد اکانت خود شوید
            </h1>
            <FormComponent onSubmit={handleLogin} buttonText="ورود" />
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    من را به خاطر بسپار
                  </label>
                </div>
              </div>
              <Link
                to={'/forgot-password'}
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                رمز عبور را فراموش کردی؟
              </Link>
            </div>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              هنوز حساب کاربری ندارید؟{' '}
              <Link
                to={'/register'}
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                ثبت نام
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;