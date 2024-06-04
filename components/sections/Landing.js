"use client";
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Image from "next/image";
import DrawOutlineButton from "../_child/DrawOutlineButton";
import NeuButton from "../_child/NeuButton";
import { fadeIn } from "../animation/variants";

const Landing = () => {
  return (
    <div
      name="home"
      className="px-4 mx-auto max-w-6xl sm:px-6 xl:px-0 pt-32 lg:pt-0"
    >
      <div className="flex w-full min-h-screen ">
        <div className="w-full flex flex-col-reverse gap-y-6 lg:flex-row lg:gap-x-6 justify-between my-auto ">
          {/* A bit about me */}
          <div className="my-auto mb-8 lg:w-1/2 items-center">
            <div className="">
              <motion.div
                variants={fadeIn("down", 0.01)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex items-center gap-1"
              >
                <Image
                  unoptimized={true}
                  alt="waving-hand"
                  width={30}
                  height={30}
                  src="/image/waving-hand.gif"
                />
                <p className="text-lg md:text-xl mt-2 md:mt-1.5 text-black dark:text-white">
                  Hello, I am
                </p>
              </motion.div>

              <motion.h2
                className="text-black dark:text-white text-xl xs:text-2xl sm:text-3xl  capitalize font-semibold leading-[39px] mb-[20px]"
                variants={fadeIn("down", 0.02)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Achem Habib Nomaer
              </motion.h2>

              <motion.h1
                variants={fadeIn("down", 0.03)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-primary text-2xl xs:text-3xl sm:text-4xl  capitalize font-extrabold leading-[39px] mb-[20px]"
              >
                Full Stack Developer
              </motion.h1>
              <motion.p
                variants={fadeIn("down", 0.04)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-contentDark dark:text-contentLight text-[19px] capitalize font-normal leading-[33px]"
              >
                I build websites from scratch, making them look good and work
                smoothly. Whether you need a new site or an upgrade, I've got
                you covered. Let's chat!
              </motion.p>
            </div>

            <motion.div
              variants={fadeIn("down", 0.05)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mt-8 flex flex-wrap space-x-4 gap-y-4 items-center"
            >
              <NeuButton both>Resume</NeuButton>
              <DrawOutlineButton>See my work</DrawOutlineButton>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("up", 0.05)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="lg:my-auto lg:w-1/2 grid place-items-center lg:place-items-end"
          >
            <Image
              className="rounded-full lg:rounded-lg border-2 border-primary"
              src="/image/cover.png"
              width={400}
              height={400}
              quality={100}
              alt="my-photo"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
