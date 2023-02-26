/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { FC, Fragment, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { classNames } from "@/Helpers/Functions/functions";
import { LocationMarkerIcon, PhoneIcon } from "@heroicons/react/outline";
const product = {
  name: "Women's Basic Tee",
  price: "$32",
  rating: 3.9,
  reviewCount: 512,
  href: "#",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
  imageAlt: "Back of women's Basic Tee in black.",
  //   colors: [
  //     { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
  //     {
  //       name: "Heather Grey",
  //       bgColor: "bg-gray-400",
  //       selectedColor: "ring-gray-400",
  //     },
  //   ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "XXL", inStock: false },
  ],
};

type T_Props = {
  openProductView: boolean;
  setOpenProductView: (argument: boolean) => void;
  img: string;
  name: string;
  price: string;
};
const ProductView: FC<T_Props> = ({
  openProductView,
  setOpenProductView,
  img,
  name,
  price,
}) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <Transition.Root show={openProductView} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpenProductView}
      >
        <div
          className="flex min-h-screen text-center md:block md:px-2 lg:px-4"
          style={{ fontSize: 0 }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden md:inline-block md:align-middle md:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enterTo="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 md:scale-100"
            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          >
            <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
              <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                  onClick={() => setOpenProductView(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:items-center lg:gap-x-8">
                  <div className="aspect-w-2 aspect-h-3 rounded-lg overflow-hidden sm:col-span-4 lg:col-span-5">
                    <img
                      src={img}
                      alt={product.imageAlt}
                      className="object-center object-cover"
                    />
                    {/* Reviews */}
                    <div className="mt-4  ">
                      <h4 className="sr-only">Reviews</h4>
                      <div className="flex items-center">
                        <p className="text-sm text-gray-700">
                          {product.rating}
                          <span className="sr-only"> out of 5 stars</span>
                        </p>
                        <div className="ml-1 flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                product.rating > rating
                                  ? "text-yellow-400"
                                  : "text-gray-200",
                                "h-5 w-5 flex-shrink-0"
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-xl font-medium text-gray-900 sm:pr-12">
                      {name}
                    </h2>

                    <section
                      aria-labelledby="information-heading"
                      className=""
                    >
                      <p className="font-medium text-gray-900">{price} դրամ</p>

                      <p className="font-small text-xs text-gray-400">
                        Ապրանքի նկարագիր Ապրանքի նկարագիր Ապրանքի նկարագիր
                        Ապրանքի նկարագիրԱպրանքի նկարագիրԱպրանքի նկարագիր
                      </p>
                    </section>

                    <section aria-labelledby="options-heading" className="mt-8">
                      <form className="flex flex-col gap-1">
                        <img
                          className="inline-block h-12 w-12 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />

                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            {" "}
                            Ավտոպահեստամասերի խանութի անունը
                          </h4>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <PhoneIcon
                              className="h-6 w-6 text-gray-900"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="ml-3 text-base text-gray-900">
                            <p>+1 (555) 123 4567</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900"></h4>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <LocationMarkerIcon
                              className="h-6 w-6 text-gray-900"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="ml-3 text-base text-gray-900">
                            <p>Տեցի կռուգ</p>
                          </div>
                        </div>

                        <p className="absolute top-4 left-4 text-center sm:static sm:mt-8">
                          <a
                            href={product.href}
                            className="font-medium text-white hover:text-indigo-500 mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Այցելել խանութ
                          </a>
                        </p>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ProductView;
