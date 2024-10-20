import React from "react";
import { Meteors } from "@/components/ui/meteors";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";

function page() {
  return (
    <div className="min-h-[40rem] w-full">
      <div className=" w-full relative h-full">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 blur-3xl" />
        <div className="relative shadow-xl w-full bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden  flex flex-col justify-center items-center">
          <div className="h-auto mt-8 py-20  flex flex-col gap-5">
            <h1 className="font-bold text-4xl max-md:text-2xl text-white mb-4 relative ">
              Contact Us:
            </h1>
            <Input label="Name:" type="text" />
            <Input label="Email:" type="email" />
            <TextArea label="Your Message:" className="h-40" />
            <button className="border px-4 py-3 rounded-lg  border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white">
              Submit
            </button>
          </div>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}

export default page;




