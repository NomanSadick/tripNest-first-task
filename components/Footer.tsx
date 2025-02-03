import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#00232D] pt-12 pb-6">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 text-white justify-items-center">
          <div className="flex flex-col gap-4 ml-60">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={1000}
              height={1000}
              className="object-cover w-[30%]"
            />
            <div className="flex flex-col ">
              <h3 className="text-lg font-semibold">Travel, your way!</h3>
              <p className="max-w-sm text-gray-300">
                TripNest simplifies travel planning, turning trips into
                personalized experiences. Founded by travel enthusiasts, we aim
                to make every journey enjoyable and stress-free for Bangladeshi
                tourists.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Resources
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="https://flowbite.com/" className="hover:underline">
                  Flowbite
                </Link>
              </li>
              <li>
                <Link
                  href="https://tailwindcss.com/"
                  className="hover:underline"
                >
                  Tailwind CSS
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Resources
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="https://flowbite.com/" className="hover:underline">
                  Flowbite
                </Link>
              </li>
              <li>
                <Link
                  href="https://tailwindcss.com/"
                  className="hover:underline"
                >
                  Tailwind CSS
                </Link>
              </li>
            </ul>
          </div>
          <div className="justify-self-start">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Resources
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="https://flowbite.com/" className="hover:underline">
                  Flowbite
                </Link>
              </li>
              <li>
                <Link
                  href="https://tailwindcss.com/"
                  className="hover:underline"
                >
                  Tailwind CSS
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <Image
            src="/images/footer.png"
            alt="logo"
            width={1000}
            height={1000}
            className="object-cover w-[75%] mx-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
