"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import Spinner from "../Spinner/Spinner";

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-64 mx-auto border bg-transparent text-primary px-2 py-6 relative overflow-hidden group hover:text-white"
    >
      {pending ? (
        <Spinner />
      ) : (
        <>
          <span className="z-10 relative">Submit</span>
          <span className="absolute top-0 left-0 h-full w-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
        </>
      )}
    </button>
  );
};

export default FormButton;

