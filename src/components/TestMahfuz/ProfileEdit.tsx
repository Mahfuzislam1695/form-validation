"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import ImagePart from "./ImagePart";
import UserProfileSchema from "./UserProfileSchema";

interface IFormInput {
  firstName: string;
  lastName: string;
}

const ProfileEdit = () => {
  const [selectedImage, setSelectedImage] = useState<any>();
  const resolver = yupResolver(UserProfileSchema);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({ resolver });
  const onSubmit = (data: IFormInput) => {
    console.log("dddd");

    console.log("data", data);
    alert(JSON.stringify(data));
  };
  return (
    <section className="bg-bgPrimary">
      <div className="container p-4">
        {/* ------------------------------------- Heading ----------------------------------- */}
        <div className="text-brandPrimary font-normal ">
          <h1 className="text-3xl mb-4">Registration Form</h1>
          {/* ------------------------------ LOGIN OPTION ----------------------------------------------- */}
          <p className="text-base">
            Already have an account? &nbsp;
            <span className="text-link cursor-pointer hover:underline">
              Click here to login
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
          <ImagePart selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
          </div>
          <InputField
            inputType="text"
            placeholderText="Enter your last name"
            name="firstName"
            errors={errors}
            register={register}
          />

          <InputField
            inputType="text"
            placeholderText="Enter your last name"
            name="lastName"
            errors={errors}
            register={register}
          />

          <button type="submit"> submit</button>
        </form>
      </div>
    </section>
  );
};

export default ProfileEdit;

// const InputField: React.FC<FieldInfo> = ({
//   inputType,
//   placeholderText,
//   name,
//   errors,
//   register
// }) => {
//   // console.log(inputType, placeholderText)
//   return (
//     <div className="mb-5">
//       <label className="text-brandPrimary text-sm pl-6">{name}</label>
//       <input
//         className="mt-1 block outline-none placeholder:text-[#cacaca] text-base py-2 pl-6 border border-brandLsPrimary rounded-3xl w-full"
//         type={inputType}
//         placeholder={placeholderText}
//         name={name}
//         {...register("firstName")}
//         // ref={register}
//         // inputRef={firstName.ref}
//       />

//       <p className="text-sm text-red-800">{errors?.[name]?.message}</p>
//     </div>
//   );
// };
