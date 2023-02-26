import { classNames } from "@/Helpers/Functions/functions";
import { useRouter } from "next/router";
import Image from "next/image";
import FemaleAuto from "@/assets/images/LogInSignUp/FemaleAuto.jpg";
import Logo from "@/assets/images/Logo.svg";
type T_Props = {
  isSignUp: boolean;
};
export default function LogInSignUp({ isSignUp }: T_Props) {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <>
      <div className="min-h-screen flex">
        <div className="flex-1 flex flex-col justify-start py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto  w-full max-w-sm lg:w-96">
            <div>
              {/* <img
                className={classNames(
                  isSignUp ? "h-12 w-auto  mb-10" : "h-12 w-auto  mb-24"
                )}
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
                onClick={handleClick}
              /> */}
              <Image
                src={Logo}
                onClick={handleClick}
                alt="logo"
                className={classNames(
                  isSignUp ? "h-14 w-auto  mb-10" : "h-12 w-auto  mb-24"
                )}
              />

              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                {isSignUp ? "Գրանցվել" : "Մուտք գործել"}
              </h2>
            </div>

            <div className="mt-8">
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2  bg-white text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 animate-spin"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  {isSignUp && (
                    <div className="flex  justify-between">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Անուն
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="number"
                          required
                          className="appearance-none block  px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="surname"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Ազգանուն
                        </label>
                        <input
                          id="surname"
                          name="surname"
                          type="text"
                          autoComplete="number"
                          required
                          className="appearance-none block  px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  )}

                  {isSignUp && (
                    <div>
                      <label
                        htmlFor="number"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Հեռախոսահամար
                      </label>
                      <div className="mt-1">
                        <input
                          id="number"
                          name="number"
                          type="text"
                          autoComplete="number"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Էլեկտրոնային հասցե
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Գաղտնաբառ
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    {!isSignUp && (
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Հիշել ինձ
                        </label>
                      </div>
                    )}

                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {isSignUp ? "" : " Մոռացե՞լ եք գաղտանաբառը"}
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {isSignUp ? "Գրանցվել" : "Մուտք"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          {/* <img
            className="absolute inset-0 h-full w-full object-cover"
            src={FemaleAuto}
            alt=""
          /> */}
          <Image
            alt="sorry"
            src={FemaleAuto}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
