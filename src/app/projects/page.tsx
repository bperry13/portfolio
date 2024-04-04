import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <section>
        <div className="absolute left-3 top-3">
          <Link href="/">Home</Link>
        </div>
        <div className="absolute right-3 top-3">
          <Link href="/contact">Contact</Link>
        </div>
      </section>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <div className="text-4xl font-burtons">Projects</div>
          <div className="text-2xl">Under Construction</div>
        </div>
      </div>
    </div>
  );
};

export default page;
