"use client";
import React from "react";
import Image from "next/image";
import ToggleButton from "@/components/ToggleButton";
import { useState } from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="absolute left-3 top-3">
        <Link href="/">Back</Link>
      </div>
      <div className="absolute right-3 top-3">Toggle</div>
    </div>
  );
};

export default page;
