"use client";
import { useRef, useState } from "react";
import { GoCheckbox } from "react-icons/go";
import {
  MdDelete,
  MdEdit,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import RegistrationInputField from "../LoginRegistration/ProfileInfoEdit/RegistrationInputField/RegistrationInputField";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { SubmitHandler, useForm } from "react-hook-form";
import UserProfileSchema from "../Validation/ProfileValidation/UserProfileValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "./InputField";

type Inputs = {
  firstName: string;
};

const TestMahfuz = () => {
  // ------------------------------------ BUTTON STATE INITIALIZED -------------------------------
  const [sameAddress, setSameAddress] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [selectedImage, setSelectedImage] = useState<any>();
  const fileInputRef = useRef(null);

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(UserProfileSchema),
  });

  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current;
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage(null);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
    console.log(data);
  };

  console.log("selectedImage", selectedImage);

  return (
    <section className="bg-bgPrimary">
      <main className="container my-8">
        {/* ------------------------------------- Heading ----------------------------------- */}
        <div className="text-brandPrimary font-normal ">
          <h1 className="text-3xl mb-4">Registration Form</h1>
          {/* ------------------------------ LOGIN OPTION ----------------------------------------------- */}
          <p className="text-base">
            Already have an account?{" "}
            <span className="text-link">Click here to login</span>
          </p>
        </div>

        {/* ------------------------------------ REGISTRATION FORM ---------------------------------------- */}
        <form
          action="submit"
          className="border border-brandLsPrimary rounded-lg px-6 py-3 mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* ----------------------------- Personal Information ------------------------------------- */}
          <div>
            <h1 className="pb-4  border-b border-brandLsPrimary text-brandPrimary text-base font-bold ">
              Personal Information
            </h1>
            <div className="flex gap-8 mt-4 mb-4">
              <div className="basis-1/2">
                <div className="h-full flex flex-col gap-2 ">
                  <label className="text-brandPrimary text-sm pl-6">
                    Upload Image
                  </label>
                  <div className="h-full border border-[#EEDDF5]  rounded-lg bg-white">
                    {!selectedImage && (
                      <div className="flex justify-center items-center h-full w-full p-8 gap-4">
                        <Image
                          src={`/assets/images/profile/inputImage.png`}
                          width={74}
                          height={45}
                          alt="input file"
                          className="w-auto h-11"
                        />
                        <div className="text-center text-brandPrimary text-sm ">
                          <p>Drag your profile images here</p>
                          <p>
                            or{" "}
                            <span
                              className="text-link text-base font-normal hover:underline cursor-pointer"
                              onClick={handleUploadClick}
                            >
                              Upload a file
                              <input
                                ref={fileInputRef}
                                hidden
                                accept="image/*"
                                type="file"
                                onChange={imageChange}
                              />
                            </span>
                          </p>
                        </div>
                      </div>
                    )}
                    {selectedImage && (
                      <div className="flex justify-center items-center h-full w-full p-2 gap-6">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger type="button">
                              <div onClick={handleUploadClick}>
                                <MdEdit
                                  fontSize={24}
                                  className="cursor-pointer"
                                  onClick={imageChange}
                                />
                                <input
                                  ref={fileInputRef}
                                  hidden
                                  accept="image/*"
                                  type="file"
                                  onChange={imageChange}
                                />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Chang this image</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        <Image
                          src={URL.createObjectURL(selectedImage)}
                          width={300}
                          height={300}
                          alt="input file"
                          className="w-auto h-28 max-w-56"
                        />

                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger type="button">
                              <MdDelete
                                fontSize={24}
                                className="cursor-pointer"
                                onClick={removeSelectedImage}
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Delete this image</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className=" basis-1/2">
                {/* <InputField
                  inputType="text"
                  placeholderText="Enter your first name"
                  errors={errors}
                  {...register('firstName')}
                /> */}
                <div className="">
                  <label className="text-brandPrimary text-sm pl-6">
                    Last Name
                  </label>
                  <input
                    className="mt-1 block outline-none placeholder:text-[#cacaca] text-base py-2 pl-6 border border-brandLsPrimary rounded-3xl w-full"
                    type="text"
                    placeholder="Enter your last name"
                    {...register("lastName")}
                  />
                  {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
              </div>
            </div>

            <div className="flex justify-evenly items-start gap-8 max-md:gap-0 max-md:flex-col">
              {/* ------------------------------------ LEFT SIDE INPUT FIELD ------------------------------- */}
              {/* ------------------------------ phone & user name --------------------------------- */}
              <div className="w-1/2 max-md:w-full "></div>
              {/* ------------------------------------ RIGHT SIDE INPUT FIELD ------------------------------- */}
              {/* ----------------------------- email ------------------------------------ */}
              <div className="w-1/2 max-md:w-full"></div>
            </div>
          </div>

          {/* *************************************************************************************************** */}
          {/* ---------------------------------------------------- Delivary Address ----------------------------------------------------- */}
          <div>
            <h1 className="pb-4 border-b border-brandLsPrimary text-brandPrimary text-base font-bold">
              Delivery Address
            </h1>
            <div className="flex justify-evenly items-center gap-8 mt-4">
              {/* ------------------------------------ LEFT SIDE INPUT FIELD ------------------------------- */}
              <div className="w-1/2"></div>
              {/* ------------------------------------ RIGHT SIDE INPUT FIELD ------------------------------- */}
              <div className="w-1/2"></div>
            </div>
          </div>

          {/* *************************************************************************************** */}
          {/* ------------------------------------- Billing Address -------------------------------------- */}
          <div>
            <h1 className="pb-4 border-b border-brandLsPrimary text-brandPrimary text-base font-bold">
              Billing Address
            </h1>
            <div className="flex justify-evenly items-center gap-8 mt-4">
              {/* ------------------------------------ LEFT SIDE INPUT FIELD Billing Address------------------------------- */}
              <div className="w-1/2"></div>
              {/* ------------------------------------ RIGHT SIDE INPUT FIELD Billing Address------------------------------- */}
              <div className="w-1/2"></div>
            </div>
            <div className="flex text-brandPrimary mb-4 px-6">
              <button
                onClick={() => setSameAddress(!sameAddress)}
                type="button"
              >
                {sameAddress ? (
                  <GoCheckbox />
                ) : (
                  <MdOutlineCheckBoxOutlineBlank />
                )}
              </button>
              <p className="text-base pl-2">
                My Delivery and billing address are the same
              </p>
            </div>
          </div>

          {/* ---------------------------------------------------- Billing and Payment ----------------------------------------------------- */}
          <div>
            <h1 className="pb-4 mb-4 border-b border-brandLsPrimary text-brandPrimary text-base font-bold">
              Billing and Payment
            </h1>
            <div>
              <h1 className="ml-12 mt-6 text-brandPrimary px-6">Credit Card</h1>
            </div>
            <div className="flex justify-evenly items-center gap-8 mt-4">
              {/* ------------------------------------ LEFT SIDE INPUT FIELD Billing and Payment------------------------------- */}
              <div className="w-1/2"></div>
              {/* ------------------------------------ RIGHT SIDE INPUT FIELD Billing and Payment------------------------------- */}
            </div>
          </div>

          {/* ---------------------------------------------------- Security & Password ----------------------------------------------------- */}
          <div>
            <h1 className="pb-4 border-b border-brandLsPrimary text-brandPrimary text-base font-bold">
              Security & Password
            </h1>

            <div className="flex justify-evenly items-center gap-8 mt-4">
              {/* ------------------------------------ LEFT SIDE INPUT FIELD ------------------------------- */}
              <div className="w-1/2">
                <div className="mb-5">
                  <label className="text-brandPrimary text-sm pl-6">
                    Password
                  </label>
                  <div className="border border-brandLsPrimary rounded-3xl w-full flex justify-between items-center px-6">
                    <input
                      className="mt-1 block outline-none placeholder:text-[#cacaca] text-base py-2 w-full "
                      type={showPassword ? "text" : "password"}
                      placeholder="Type your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-[#cacaca]"
                    >
                      {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </button>
                  </div>
                </div>
              </div>
              {/* ------------------------------------ RIGHT SIDE INPUT FIELD ------------------------------- */}
              <div className="w-1/2">
                <div className="mb-5">
                  <label className="text-brandPrimary text-sm pl-6">
                    Confirm Password
                  </label>
                  <div className="border border-brandLsPrimary rounded-3xl w-full flex justify-between items-center px-6">
                    <input
                      className="mt-1 block outline-none placeholder:text-[#cacaca] text-base py-2 w-full"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="text-[#cacaca]"
                    >
                      {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------- button section ------------------------------------------- */}
          <div className="w-full">
            <input
              type="submit"
              value="Submit"
              className="font-medium text-lg text-bgSecondary bg-link px-8 py-2 rounded-3xl cursor-pointer"
            />
            {/* ------------------------------------------ clear form --------------------------------- */}
            <div className="inline px-6">
              <button className="text-link text-base px-6" >Clear</button>
            </div>
          </div>
        </form>
      </main>
    </section>
  );
};

export default TestMahfuz;
// "use client";
// import { useRef, useState } from "react";
// import { GoCheckbox } from "react-icons/go";
// import {
//   MdDelete,
//   MdEdit,
//   MdOutlineCheckBoxOutlineBlank,
// } from "react-icons/md";
// import Image from "next/image";
// import { FaRegEye } from "react-icons/fa";
// import { FaRegEyeSlash } from "react-icons/fa";
// import RegistrationInputField from "../LoginRegistration/ProfileInfoEdit/RegistrationInputField/RegistrationInputField";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "../ui/tooltip";
// import { SubmitHandler, useForm } from "react-hook-form";
// import UserProfileSchema from "../Validation/ProfileValidation/UserProfileValidation";
// import { yupResolver } from "@hookform/resolvers/yup";

// type Inputs = {
//   firstName: string;
// };

// const TestMahfuz = () => {
//   // ------------------------------------ BUTTON STATE INITIALIZED -------------------------------
//   const [sameAddress, setSameAddress] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [selectedImage, setSelectedImage] = useState<any>();
//   const fileInputRef = useRef(null);

//   const {
//     register,
//     control,
//     formState: { errors },
//     handleSubmit,
//   } = useForm({
//     resolver: yupResolver(UserProfileSchema),
//   });

//   const imageChange = (e: any) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setSelectedImage(e.target.files[0]);
//     }
//   };

//   const handleUploadClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const removeSelectedImage = () => {
//     setSelectedImage(null);
//   };

//   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

//   console.log("selectedImage", selectedImage);

//   return (
//     <section className="bg-bgPrimary">
//       <main className="container my-8">
//         {/* ------------------------------------- Heading ----------------------------------- */}
//         <div className="text-brandPrimary font-normal ">
//           <h1 className="text-3xl mb-4">Registration Form</h1>
//           {/* ------------------------------ LOGIN OPTION ----------------------------------------------- */}
//           <p className="text-base">
//             Already have an account?{" "}
//             <span className="text-link">Click here to login</span>
//           </p>
//         </div>

//         {/* ------------------------------------ REGISTRATION FORM ---------------------------------------- */}
//         <form
//           action="submit"
//           className="border border-brandLsPrimary rounded-lg px-6 py-3 mt-4"
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           {/* ----------------------------- Personal Information ------------------------------------- */}
//           <div>
//             <h1 className="pb-4  border-b border-brandLsPrimary text-brandPrimary text-base font-bold ">
//               Personal Information
//             </h1>
//             <div className="flex gap-8 mt-4 mb-4">
//               <div className="basis-1/2">
//                 <div className="h-full flex flex-col gap-2 ">
//                   <label className="text-brandPrimary text-sm pl-6">
//                     Upload Image
//                   </label>
//                   <div className="h-full border border-[#EEDDF5]  rounded-lg bg-white">
//                     {!selectedImage && (
//                       <div className="flex justify-center items-center h-full w-full p-8 gap-4">
//                         <Image
//                           src={`/assets/images/profile/inputImage.png`}
//                           width={74}
//                           height={45}
//                           alt="input file"
//                           className="w-auto h-11"
//                         />
//                         <div className="text-center text-brandPrimary text-sm ">
//                           <p>Drag your profile images here</p>
//                           <p>
//                             or{" "}
//                             <span
//                               className="text-link text-base font-normal hover:underline cursor-pointer"
//                               onClick={handleUploadClick}
//                             >
//                               Upload a file
//                               <input
//                                 ref={fileInputRef}
//                                 hidden
//                                 accept="image/*"
//                                 type="file"
//                                 onChange={imageChange}
//                               />
//                             </span>
//                           </p>
//                         </div>
//                       </div>
//                     )}
//                     {selectedImage && (
//                       <div className="flex justify-center items-center h-full w-full p-2 gap-6">
//                         <TooltipProvider>
//                           <Tooltip>
//                             <TooltipTrigger type="button">
//                               <div onClick={handleUploadClick}>
//                                 <MdEdit
//                                   fontSize={24}
//                                   className="cursor-pointer"
//                                   onClick={imageChange}
//                                 />
//                                 <input
//                                   ref={fileInputRef}
//                                   hidden
//                                   accept="image/*"
//                                   type="file"
//                                   onChange={imageChange}
//                                 />
//                               </div>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                               <p>Chang this image</p>
//                             </TooltipContent>
//                           </Tooltip>
//                         </TooltipProvider>

//                         <Image
//                           src={URL.createObjectURL(selectedImage)}
//                           width={300}
//                           height={300}
//                           alt="input file"
//                           className="w-auto h-28 max-w-56"
//                         />

//                         <TooltipProvider>
//                           <Tooltip>
//                             <TooltipTrigger type="button">
//                               <MdDelete
//                                 fontSize={24}
//                                 className="cursor-pointer"
//                                 onClick={removeSelectedImage}
//                               />
//                             </TooltipTrigger>
//                             <TooltipContent>
//                               <p>Delete this image</p>
//                             </TooltipContent>
//                           </Tooltip>
//                         </TooltipProvider>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className=" basis-1/2">
//                 <RegistrationInputField
//                   inputType="text"
//                   labelName="First Name"
//                   placeholderText="Enter your first name"
//                   // fieldName="firstName"
//                   // errors={errors}
//                 />
//                 <div className="">
//                   <label className="text-brandPrimary text-sm pl-6">
//                     Last Name
//                   </label>
//                   <input
//                     className="mt-1 block outline-none placeholder:text-[#cacaca] text-base py-2 pl-6 border border-brandLsPrimary rounded-3xl w-full"
//                     type="text"
//                     placeholder="Enter your last name"
//                     {...register("lastName")}
//                   />
//                   {errors.firstName && <p>{errors.firstName.message}</p>}
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-evenly items-start gap-8 max-md:gap-0 max-md:flex-col">
//               {/* ------------------------------------ LEFT SIDE INPUT FIELD ------------------------------- */}
//               {/* ------------------------------ phone & user name --------------------------------- */}
//               <div className="w-1/2 max-md:w-full ">
//                 <RegistrationInputField
//                   inputType={"text"}
//                   labelName={"Phone"}
//                   placeholderText={"Ex. 01xxxxxxxx"}
//                 />
//                 <RegistrationInputField
//                   inputType="text"
//                   labelName="Username"
//                   placeholderText="Enter your username"
//                 />
//               </div>
//               {/* ------------------------------------ RIGHT SIDE INPUT FIELD ------------------------------- */}
//               {/* ----------------------------- email ------------------------------------ */}
//               <div className="w-1/2 max-md:w-full">
//                 <RegistrationInputField
//                   inputType="email"
//                   labelName="Email"
//                   placeholderText="Enter your email"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* *************************************************************************************************** */}
//           {/* ---------------------------------------------------- Delivary Address ----------------------------------------------------- */}
//           <div>
//             <h1 className="pb-4 border-b border-brandLsPrimary text-brandPrimary text-base font-bold">
//               Delivery Address
//             </h1>
//             <div className="flex justify-evenly items-center gap-8 mt-4">
//               {/* ------------------------------------ LEFT SIDE INPUT FIELD ------------------------------- */}
//               <div className="w-1/2">
//                 <RegistrationInputField
//                   inputType={"text"}
//                   labelName={"Address"}
//                   placeholderText={"Ex. House number and street name"}
//                 />
//                 <RegistrationInputField
//                   inputType="text"
//                   labelName="City"
//                   placeholderText="Ex. Dhaka-north"
//                 />
//               </div>
//               {/* ------------------------------------ RIGHT SIDE INPUT FIELD ------------------------------- */}
//               <div className="w-1/2">
//                 <RegistrationInputField
//                   inputType="text"
//                   labelName="Area"
//                   placeholderText="Ex. Banani"
//                 />
//                 <RegistrationInputField
//                   inputType="text"
//                   labelName="Zip Code"
//                   placeholderText="Ex. 1230"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* *************************************************************************************** */}
//           {/* ------------------------------------- Billing Address -------------------------------------- */}
//           <div>
//             <h1 className="pb-4 border-b border-brandLsPrimary text-brandPrimary text-base font-bold">
//               Billing Address
//             </h1>
//             <div className="flex justify-evenly items-center gap-8 mt-4">
//               {/* ------------------------------------ LEFT SIDE INPUT FIELD Billing Address------------------------------- */}
//               <div className="w-1/2">
//                 <RegistrationInputField
//                   inputType={"text"}
//                   labelName={"Address"}
//                   placeholderText={"Ex. House number and street name"}
//                 />
//                 <RegistrationInputField
//                   inputType="text"
//                   labelName="City"
//                   placeholderText="Ex. Dhaka-north"
//                 />
//               </div>
//               {/* ------------------------------------ RIGHT SIDE INPUT FIELD Billing Address------------------------------- */}
//               <div className="w-1/2">
//                 <RegistrationInputField
//                   inputType="text"
//                   labelName="Area"
//                   placeholderText="Ex. Banani"
//                 />
//                 <RegistrationInputField
//                   inputType="text"
//                   labelName="Zip Code"
//                   placeholderText="Ex. 1230"
//                 />
//               </div>
//             </div>
//             <div className="flex text-brandPrimary mb-4 px-6">
//               <button
//                 onClick={() => setSameAddress(!sameAddress)}
//                 type="button"
//               >
//                 {sameAddress ? (
//                   <GoCheckbox />
//                 ) : (
//                   <MdOutlineCheckBoxOutlineBlank />
//                 )}
//               </button>
//               <p className="text-base pl-2">
//                 My Delivery and billing address are the same
//               </p>
//             </div>
//           </div>

//           {/* ---------------------------------------------------- Billing and Payment ----------------------------------------------------- */}
//           <div>
//             <h1 className="pb-4 mb-4 border-b border-brandLsPrimary text-brandPrimary text-base font-bold">
//               Billing and Payment
//             </h1>
//             <div>
//               <h1 className="ml-12 mt-6 text-brandPrimary px-6">Credit Card</h1>
//             </div>
//             <div className="flex justify-evenly items-center gap-8 mt-4">
//               {/* ------------------------------------ LEFT SIDE INPUT FIELD Billing and Payment------------------------------- */}
//               <div className="w-1/2">
//                 <RegistrationInputField
//                   inputType={"text"}
//                   labelName={"Card Number"}
//                   placeholderText={"Enter your card number"}
//                 />
//                 <RegistrationInputField
//                   inputType="text"
//                   labelName="Expiry Date"
//                   placeholderText="dd/mm/yyyy"
//                 />
//               </div>
//               {/* ------------------------------------ RIGHT SIDE INPUT FIELD Billing and Payment------------------------------- */}
//               <div className="w-1/2">
//                 <RegistrationInputField
//                   inputType="text"
//                   labelName="Name on Card"
//                   placeholderText="Name on card"
//                 />
//                 <RegistrationInputField
//                   inputType="text"
//                   labelName="CVV"
//                   placeholderText="CVV"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* ---------------------------------------------------- Security & Password ----------------------------------------------------- */}
//           <div>
//             <h1 className="pb-4 border-b border-brandLsPrimary text-brandPrimary text-base font-bold">
//               Security & Password
//             </h1>

//             <div className="flex justify-evenly items-center gap-8 mt-4">
//               {/* ------------------------------------ LEFT SIDE INPUT FIELD ------------------------------- */}
//               <div className="w-1/2">
//                 <div className="mb-5">
//                   <label className="text-brandPrimary text-sm pl-6">
//                     Password
//                   </label>
//                   <div className="border border-brandLsPrimary rounded-3xl w-full flex justify-between items-center px-6">
//                     <input
//                       className="mt-1 block outline-none placeholder:text-[#cacaca] text-base py-2 w-full "
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Type your password"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="text-[#cacaca]"
//                     >
//                       {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               {/* ------------------------------------ RIGHT SIDE INPUT FIELD ------------------------------- */}
//               <div className="w-1/2">
//                 <div className="mb-5">
//                   <label className="text-brandPrimary text-sm pl-6">
//                     Confirm Password
//                   </label>
//                   <div className="border border-brandLsPrimary rounded-3xl w-full flex justify-between items-center px-6">
//                     <input
//                       className="mt-1 block outline-none placeholder:text-[#cacaca] text-base py-2 w-full"
//                       type={showConfirmPassword ? "text" : "password"}
//                       placeholder="Confirm your password"
//                     />
//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowConfirmPassword(!showConfirmPassword)
//                       }
//                       className="text-[#cacaca]"
//                     >
//                       {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ---------------------------------------------- button section ------------------------------------------- */}
//           <div className="w-full">
//             <input
//               type="submit"
//               value="Submit"
//               className="font-medium text-lg text-bgSecondary bg-link px-8 py-2 rounded-3xl cursor-pointer"
//             />
//             {/* ------------------------------------------ clear form --------------------------------- */}
//             <div className="inline px-6">
//               <button className="text-link text-base px-6">Clear</button>
//             </div>
//           </div>
//         </form>
//       </main>
//     </section>
//   );
// };

// export default TestMahfuz;
