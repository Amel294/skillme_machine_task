import { Disclosure, DisclosurePanel, Transition } from "@headlessui/react";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About us", href: "#", current: false },
  { name: "Portfolio", href: "#", current: false },
  { name: "News", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed top-0 w-full z-[1000]">
      {({ open }) => (
        <>
          <div className="bg-black text-white">
            <div className="mx-auto px-4 sm:px-6 lg:px-20">
              <div className="flex justify-between items-center h-20 relative z-[1001]">
                <div className="flex-shrink-0 text-2xl font-extrabold">LOGO</div>

                <div className="hidden md:flex md:items-center lg:space-x-20 md:space-x-16">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "relative text-white font-semibold"
                          : "text-white hover:text-orange-400",
                        "text-base"
                      )}
                    >
                      {item.name}
                      {item.current && (
                        <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 w-5 h-1 bg-orange-500 rounded-full"></span>
                      )}
                    </a>
                  ))}
                  <div className="hidden md:block">
                    <a
                      href="#"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded"
                    >
                      Contact us
                    </a>
                  </div>
                </div>

                <div className="md:hidden flex items-center">
                  <Disclosure.Button className="text-white inline-flex items-center justify-center p-2 rounded-md hover:text-orange-400 focus:outline-none z-[1002]">
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3BottomLeftIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[900]" />
          </Transition>

          <Transition
            show={open}
            as={Fragment}
            enter="transition transform duration-300 ease-out"
            enterFrom="opacity-0 -translate-y-4"
            enterTo="opacity-100 translate-y-0"
            leave="transition transform duration-200 ease-in"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-4"
          >
            <DisclosurePanel
              static
              className="md:hidden bg-black px-4 pb-4 pt-2 space-y-2 z-[1001] relative"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-orange-500 font-semibold"
                      : "text-white hover:text-orange-400",
                    "block px-3 py-2 rounded-md text-base"
                  )}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#"
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md"
              >
                Contact us
              </a>
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
