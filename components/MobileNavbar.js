"use client";

import { useNavContext } from "@/context/NavContext";
import navLinks from "@/lib/data/navLinks";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiXMark } from "react-icons/hi2";
import { MenuItem } from "./MenuItem";
import Socials from "./_child/Socials";

export default function MobileNavbar() {
  const { navOpen, setNavOpen } = useNavContext();

  return (
    <Transition.Root show={navOpen} as={Fragment}>
      <Dialog className="relative z-50 lg:hidden" onClose={setNavOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setNavOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <HiXMark className="h-10 w-10" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="relative flex h-full flex-col overflow-y-scroll bg-neutral-100 dark:bg-neutral-900 py-6 shadow-xl">
                    <div className="px-4 mx-auto my-auto">
                      <ul className="flex flex-col gap-y-12">
                        {navLinks.map((menu, index) => (
                          <MenuItem menu={menu} key={index} />
                        ))}
                      </ul>
                    </div>

                    <div className="justify-end mx-auto">
                      <div className="w-full mx-auto">
                        <Socials />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
