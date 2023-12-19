"use client";

import { useFormStatus } from "react-dom";
import Spinner from "../Spinner/Spinner";

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="w-full">
      {pending ? <Spinner /> : "Submit"}
    </button>
  );
};

export default FormButton;