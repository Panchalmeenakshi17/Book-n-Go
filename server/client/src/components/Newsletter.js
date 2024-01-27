import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="md:pb-28 pb-10">
        <div className="bg-[#9ae595] px-4 py-10 md:p-32">
          <div className="p-8 w-full border-4 border-black container rounded-3xl font-scnd md:w-2/3 xl:w-auto mx-auto flex flex-col xl:items-stretch justify-between xl:flex-row">
            <div className="xl:w-1/2 rounded-l-3xl md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
              <img
                src="https://cdn.tuk.dev/assets/components/26May-update/newsletter-1.png"
                alt="Envelope with a newsletter"
                className="h-full xl:w-full lg:w-1/2 w-full"
              />
            </div>
            <div className="w-full rounded-r-3xl p-6 xl:w-1/2 xl:pl-40 xl:py-28">
              <h1 className="md:text-6xl text-center text-5xl font-bold">Subscribe</h1>
              <p className="text-2xl text-justify leading-normal text-gray-800 mt-7 xl:text-left">
                Never Miss an Update! Subscribe to our newsletter to get weekly
                or monthly updates on a regular basis.
              </p>
              <div className="flex items-stretch mt-12">
                <input
                  className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500"
                  type="email"
                  placeholder="Your Email"
                />
                <button className="w-32 rounded-l-none hover:bg-indigo-600 bg-indigo-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
                  subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
