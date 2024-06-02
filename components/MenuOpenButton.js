"use client";

import { HiOutlineBars3BottomRight } from "react-icons/hi2";

// context
import { useNavContext } from "@/context/NavContext";

export default function MenuOpenButton() {
  const { setNavOpen } = useNavContext();
  return (
    <button
      type="button"
      className="relative "
      onClick={() => setNavOpen(true)}
    >
      <span className="absolute -inset-0.5" />
      <span className="sr-only">Open menu</span>
      <HiOutlineBars3BottomRight
        className="text-[40px] text-bold"
        aria-hidden="true"
      />
    </button>
  );
}
