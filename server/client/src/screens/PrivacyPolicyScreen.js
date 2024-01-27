import { motion } from "framer-motion";
import React from "react";
import { MdArrowCircleRight } from "react-icons/md";

const PrivacyPolicyScreen = () => {
  return (
    <>
    <motion.div
        className="bg-[#a4e0a444]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
      <div>
        <div className="md:py-16 px-4 py-10 font-bold text-center font-scnd">
          <h1 className="md:text-5xl text-4xl">Book-N-Go Terms and Conditions</h1>
        </div>
        <hr className="border-2 border-[#22c55e]" />
        <hr className="border-2 mt-2 border-[#22c55e]" />
        <div className="md:p-24 px-4 py-10">
          <div>
            <h1 className="flex gap-10 text-2xl md:text-3xl">
              <MdArrowCircleRight className="mt-1" /> Platform Overview
            </h1>
          </div>

          <h2 className="mt-6 text-justify text-lg">
            Book-N-Go stands as a versatile platform, seamlessly accessible via
            its website and mobile app, designed to unite drivers and passengers
            sharing common destinations. This dynamic service facilitates the
            booking of diverse car trips, ranging from traditional taxis to
            collaborative carpooling initiatives. Operated exclusively by
            authorized drivers, the platform ensures a secure and reliable
            transportation network. Users can conveniently access this
            comprehensive service, enhancing their travel experience by
            providing a variety of options for reaching shared destinations
            efficiently. The platform's commitment to authorized drivers
            underscores its dedication to safety, reliability, and the creation
            of a connected community of commuters.
          </h2>

          <div className=" mt-16">
            <h1 className=" flex gap-10 text-2xl md:text-3xl ">
              <MdArrowCircleRight className=" mt-1" />
              Account Creation
            </h1>
            <h2 className="mt-6 text-justify text-lg">
              To engage with Book-N-Go's services, users are mandated to create
              an 'Account' by providing precise and up-to-date information. This
              commitment extends throughout their association with the platform,
              emphasizing the importance of maintaining current and accurate
              details. This account creation process ensures the reliability and
              effectiveness of the user experience, allowing Book-N-Go to
              deliver personalized and secure services. By requiring accuracy
              and ongoing currency of information, the platform aims to enhance
              user trust, streamline communication between drivers and
              passengers, and ultimately optimize the overall functionality of
              the transportation network it facilitates.
            </h2>
          </div>

          <div className=" mt-16">
            <h1 className=" flex gap-10 text-2xl md:text-3xl ">
              <MdArrowCircleRight className=" mt-1" />
              Adverts and Booking
            </h1>
            <h2 className="mt-6 text-justify text-lg">
              Registered members on Book-N-Go have the opportunity to actively
              participate by creating and posting Carpooling and Car Adverts.
              This feature allows users to share and discover carpooling
              opportunities or available car trips, fostering a dynamic and
              interactive community within the platform. It enhances user
              engagement and contributes to the diversity of transportation
              options available.
            </h2>
            <h2 className="mt-6 text-justify text-lg">
              Book-N-Go's Booking system ensures a smooth experience by enabling
              hassle-free online payments for Cost Contribution in carpooling or
              the specified Price for individual car trips. This streamlined
              process benefits both drivers and passengers, providing a
              convenient and secure transaction mechanism that enhances overall
              efficiency and satisfaction within the platform.
            </h2>
          </div>

          <div className=" mt-16">
            <h1 className=" flex gap-10 text-2xl md:text-3xl ">
              <MdArrowCircleRight className=" mt-1" />
              Responsibilities and Conditions
            </h1>
            <h2 className="mt-6 text-justify text-lg">
              Book-N-Go establishes transparent responsibilities and conditions
              for both Drivers and Passengers. These guidelines encompass
              specific criteria for creating Adverts and emphasize legal
              compliance for Drivers. By providing a clear framework, the
              platform ensures a secure and accountable environment, promoting
              responsible conduct and a positive experience for all users.
            </h2>
            <h2 className="mt-6 text-justify text-lg">
              When passengers book trips on behalf of others, it is imperative
              that they furnish precise details, demonstrating a commitment to
              accuracy. Additionally, strict adherence to cancellation policies
              based on timing and circumstances is required. This practice
              enhances reliability and accountability, contributing to a
              smoother and more efficient booking process for all parties
              involved.
            </h2>
          </div>
          <div className=" mt-16">
            <h1 className=" flex gap-10 text-2xl md:text-3xl ">
              <MdArrowCircleRight className=" mt-1" />
              Fees and Platform Usage
            </h1>
            <h2 className="mt-6 text-justify text-lg">
              Book-N-Go emphasizes transparent fee structures, collecting fees
              covering Cost Contribution, which is determined by the driver.
              This approach ensures clarity for users, fostering trust in the
              platform. The fees are integral to sustaining and improving
              services, enabling a fair and sustainable ecosystem that benefits
              both drivers and passengers.
            </h2>
            <h2 className="mt-6 text-justify text-lg">
              Non-commercial use is a cornerstone of Book-N-Go, with a strong
              emphasis on preventing drivers from requesting contributions
              beyond documented costs. This policy safeguards users from
              exploitation and ensures fair transactions. By discouraging
              profit-seeking practices, the platform maintains a
              community-focused approach, promoting affordability and
              accessibility for all participants.
            </h2>
          </div>
          <div className=" mt-16">
            <h1 className=" flex gap-10 text-2xl md:text-3xl ">
              <MdArrowCircleRight className=" mt-1" />
              Account Suspension
            </h1>
            <h2 className="mt-6 text-justify text-lg">
              Book-N-Go asserts its unequivocal authority to suspend accounts
              that fall short of complying with the outlined terms and
              conditions. This measure is implemented to maintain the integrity
              of the platform, ensuring adherence to established rules and
              fostering a secure and trustworthy environment for all users.
            </h2>
          </div>
          <div className=" mt-16">
            <h1 className=" flex gap-10 text-2xl md:text-3xl ">
              <MdArrowCircleRight className=" mt-1" />
              Intellectual Property Rights
            </h1>
            <h2 className="mt-6 text-justify text-lg">
              Book-N-Go owns the exclusive intellectual property rights for the
              Platform and its content. Unauthorized use is strictly prohibited.
              This legal framework safeguards the company's proprietary
              information, ensuring control over the platform and its content
              while deterring any unauthorized or infringing activities.
            </h2>
          </div>
          <div className=" mt-16">
            <h1 className=" flex gap-10 text-2xl md:text-3xl ">
              <MdArrowCircleRight className=" mt-1" />
              Privacy and Data Processing
            </h1>
            <h2 className="mt-6 text-justify text-lg">
              Our platform ensures robust privacy and data processing measures,
              adhering to our Privacy Policy. Users must acknowledge and accept
              these terms, demonstrating our commitment to safeguarding their
              information. This approach underscores our dedication to
              maintaining the highest standards of confidentiality and ethical
              data handling practices.
            </h2>
          </div>
          <div className=" mt-16">
            <h1 className=" flex gap-10 text-2xl md:text-3xl ">
              <MdArrowCircleRight className=" mt-1" />
              Termination
            </h1>
            <h2 className="mt-6 text-justify text-lg">
              Book-N-Go prioritizes user autonomy by allowing users the freedom
              to terminate their relationships with the service at any time,
              ensuring flexibility and control. This commitment reflects our
              dedication to empowering users with the autonomy to make choices
              that best suit their needs and preferences.
            </h2>
          </div>
          <div className="mt-16">
            <h1 className=" flex gap-10 text-2xl md:text-3xl ">
              <MdArrowCircleRight className=" mt-1" />
              Modifications to Terms and Conditions
            </h1>
            <h2 className="mt-6 text-justify text-lg">
              The platform retains the right to modify the Terms and Conditions,
              with a commitment to notifying users of any changes. Book-N-Go
              explicitly disclaims being a party to user agreements, emphasizing
              its limited liability in this regard. All modifications are
              promptly published on the Platform, accompanied by user
              notifications to ensure awareness
            </h2>
          </div>
          <div className="mt-16">
            <h1 className="text-black text-justify bg-green-400 p-9 shadow-2xl shadow-black border-4 border-black gap-10 text-2xl">
              Our terms and conditions are dynamic, subject to periodic updates.
              Users are strongly encouraged to regularly review them to stay
              informed about any changes. This commitment ensures transparency
              and keeps users abreast of the evolving nature of our terms,
              fostering a proactive and informed user-community relationship.
            </h1>
          </div>
        </div>
      </div>
      </motion.div>
    </>
  );
};

export default PrivacyPolicyScreen;
