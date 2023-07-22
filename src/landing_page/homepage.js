import React from "react";
import Header from "../components/header";

const HomePage = () => {
  return (
    <div className="relative h-screen bg-[#071E3E] overflow-hidden">
      <Header />
      <div
        className="absolute inset-0 bg-[#071E3E]"
        style={{
          background: "url('/hero-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2, 
        }}
      />

      {/* Hero Text */}
      <div className="absolute inset-0 flex flex-col mt-16 max-w-screen-2xl mx-auto justify-center h-auto"
      >
        <p className="text-white text-xl md:text-2xl lg:text-[4rem] px-4 max-w-6xl font-medium leading-loose tracking-wide h-auto"
        style={{ lineHeight: '1.15' }}>
          Young Freed Delivered (YFD) is a community of young believers who are
          passionate about living their faith, growing together, and sharing the
          love of Christ with others.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
