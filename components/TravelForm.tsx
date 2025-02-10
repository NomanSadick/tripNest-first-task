"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";

// Explicitly define the form payload interface
interface IFormPayload {
  name: string;
  email: string;
  phone: string;
  destination: string;
  noOfPeople: number;
  travelDate: string;
  notes: string;
}

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{11}$/, "Phone number must be 11 digits")
    .required("Phone number is required"),
  destination: yup.string().required("Destination is required"),
  noOfPeople: yup
    .number()
    .typeError("Number of people must be a number")
    .required("Number of people is required"),
  travelDate: yup
    .date()
    .typeError("Travel date must be a valid date")
    .required("Travel date is required"),
  notes: yup.string().optional(),
});

const NativeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormPayload>({
    resolver: yupResolver(validationSchema),
  });

  const handleOnSubmit = (data: IFormPayload) => {
    console.log("Form Data:", data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="w-full flex justify-center items-center bg-white rounded-xl border mt-10">
      <div className="w-[85%] mx-auto space-y-4">
        <p className="mt-4 mb-4 text-[#146B83] text-2xl font-semibold">Customize Your Trip</p>
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="flex flex-col gap-4 w-[100%] mx-auto text-gray-700"
        >
          {/* Name Field */}
          <div className="flex flex-col">
            <input
              type="text"
              className="p-2 border"
              placeholder="Name"
              {...register("name")}
            />
            <ErrorMessage
              errors={errors}
              name={"name"}
              render={(m) => <p className="text-red-500">{m.message}</p>}
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <input
              type="email"
              className="p-2 border"
              placeholder="Email"
              {...register("email")}
            />
            <ErrorMessage
              errors={errors}
              name={"email"}
              render={(m) => <p className="text-red-500">{m.message}</p>}
            />
          </div>

          {/* Phone Field */}
          <div className="flex flex-col">
            <input
              type="text"
              className="p-2 border"
              placeholder="Phone"
              {...register("phone")}
            />
            <ErrorMessage
              errors={errors}
              name={"phone"}
              render={(m) => <p className="text-red-500">{m.message}</p>}
            />
          </div>

          {/* Destination Field */}
          <div className="flex flex-col">
            <input
              type="text"
              className="p-2 border"
              placeholder="Destination"
              {...register("destination")}
            />
            <ErrorMessage
              errors={errors}
              name={"destination"}
              render={(m) => <p className="text-red-500">{m.message}</p>}
            />
          </div>

          {/* No. of People Field */}
          <div className="flex flex-col">
            <input
              type="number"
              className="p-2 border"
              placeholder="No. of People"
              {...register("noOfPeople", { valueAsNumber: true })}
            />
            <ErrorMessage
              errors={errors}
              name={"noOfPeople"}
              render={(m) => <p className="text-red-500">{m.message}</p>}
            />
          </div>

          {/* Travel Date Field */}
          <div className="flex flex-col">
            <input
              type="date"
              className="p-2 border"
              placeholder="Travel Date"
              {...register("travelDate")}
            />
            <ErrorMessage
              errors={errors}
              name={"travelDate"}
              render={(m) => <p className="text-red-500">{m.message}</p>}
            />
          </div>

          {/* Notes Field */}
          <div className="flex flex-col">
            <textarea
              className="p-2 border"
              placeholder="Notes"
              {...register("notes")}
            />
            <ErrorMessage
              errors={errors}
              name={"notes"}
              render={(m) => <p className="text-red-500">{m.message}</p>}
            />
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-center pb-4">
            <button className=" text-[#ff6b00] px-8 py-2 rounded-lg border-2 border-[#ff6b00] w-full">
              Get Customized Trip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NativeForm;
