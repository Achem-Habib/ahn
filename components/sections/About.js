/* eslint-disable react/no-unescaped-entities */

import SectionTitle from "../_child/SectionTitle";
import ScrollAnimation from "../animation/ScrollAnimation";

import Skill from "../Skill";

const informations = [
  {
    label: "Name",
    info: "Achem Habib Nomaer",
  },
  {
    label: "Email",
    info: "achemnomaer@gmail.com",
  },
  {
    label: "Phone",
    info: "+8801889197863",
  },
  {
    label: "Address",
    info: "Sylhet, Bangldesh",
  },
  {
    label: "Freelance",
    info: "Available",
  },
  {
    label: "Birthday",
    info: "15 November 2000",
  },
];

export default function About() {
  return (
    <div className="px-4 mx-auto max-w-6xl sm:px-6 xl:px-0">
      <SectionTitle>About</SectionTitle>
      <div className=" flex flex-col gap-y-8 ">
        <ScrollAnimation>
          <div className="space-y-4  mx-auto">
            <div className="relative overflow-hidden w-fit leading-relaxed text-contentDark dark:text-contentLight">
              <p className="">
                <span className=" bg-primary text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                  H
                </span>
                i there! I’m Achem Habib Nomaer, and I'm from Bangladesh. Even
                though my background is in Biotechnology, my true passion lies
                in coding and creating websites. It all started as a hobby, but
                now it's become my biggest love! I've been teaching myself how
                to make websites, and let me tell you, it's been quite the
                adventure.
              </p>

              <p className="mt-4">
                While I'm still pretty new to the professional world, I'm super
                excited to keep learning and growing. I believe that every
                challenge is an opportunity to get better, and I can't wait to
                see where this coding journey takes me. Let's connect and create
                some cool stuff together!
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 justify-between gap-y-4">
              {informations.map((information, index) => (
                <li className="flex gap-x-8" key={index}>
                  <span className="text-black dark:text-white">
                    {information.label}:
                  </span>
                  <span className="text-contentDark dark:text-contentLight">
                    {information.info}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollAnimation>

        <Skill />
      </div>
    </div>
  );
}
