"use client";

import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { MdDelete, MdEdit } from "react-icons/md";
import { ChangeEvent } from "react";

interface ImageInfo {
  selectedImage: File | null;
  setSelectedImage: (image: File | null) => void;
}

const ImagePart: React.FC<ImageInfo> = ({
  selectedImage,
  setSelectedImage,
}) => {

  const imageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="h-full flex flex-col gap-2">
      <label className="text-brandPrimary text-sm pl-6">Upload Image</label>
      <div className="h-full border border-[#EEDDF5] rounded-lg bg-white">
        {!selectedImage ? (
          <div className="flex justify-center items-center h-full w-full p-8 gap-4">
            <Image
              src="/assets/images/profile/inputImage.png"
              width={74}
              height={45}
              alt="input file"
              className="w-auto h-11"
            />
            <div className="text-center text-brandPrimary text-sm">
              <p>Drag your profile images here</p>
              <p>
                or
                <label className="text-link text-base font-normal hover:underline cursor-pointer">
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={imageChange}
                  />
                  Upload a file
                </label>
              </p>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-full w-full p-2 gap-6">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <label htmlFor="editImage" className="cursor-pointer">
                    <MdEdit fontSize={24} />
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Change this image</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <input
              id="editImage"
              hidden
              accept="image/*"
              type="file"
              onChange={imageChange}
            />

            <Image
              src={URL.createObjectURL(selectedImage)}
              width={300}
              height={300}
              alt="Selected file"
              className="w-auto h-28 max-w-56"
            />

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button onClick={removeSelectedImage} className="cursor-pointer">
                    <MdDelete fontSize={24} />
                  </button>
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
  );
};

export default ImagePart;




// "use client";

// import Image from "next/image";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
// import { MdDelete, MdEdit } from "react-icons/md";
// import { ChangeEvent } from "react";

// interface ImageInfo {
//   selectedImage: any;
//   setSelectedImage: Function;
// }
// const ImagePart: React.FC<ImageInfo> = ({
//   selectedImage,
//   setSelectedImage,
// }) => {

//     const imageChange = (e: ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files && e.target.files.length > 0) {
//           setSelectedImage(e.target.files[0]);
//         }
//       };

//     const removeSelectedImage = () => {
//         setSelectedImage();
//       };

//   return (
//     <div>
//       <div className="h-full flex flex-col gap-2 ">
//         <label className="text-brandPrimary text-sm pl-6">Upload Image</label>
//         <div className="h-full border border-[#EEDDF5]  rounded-lg bg-white">
//           {!selectedImage && (
//             <div className="flex justify-center items-center h-full w-full p-8 gap-4">
//               <Image
//                 src={`/assets/images/profile/inputImage.png`}
//                 width={74}
//                 height={45}
//                 alt="input file"
//                 className="w-auto h-11"
//               />
//               <div className="text-center text-brandPrimary text-sm ">
//                 <p>Drag your profile images here</p>
//                 <p>
//                   or
//                   <button
//                   type="button"
//                     className="text-link text-base font-normal hover:underline cursor-pointer"
                    
//                   >
//                     <input
//                       hidden
//                       accept="image/*"
//                       type="file"
//                       onChange={imageChange}
//                     />
//                     Upload a file
                    
//                   </button>
//                 </p>
//               </div>
//             </div>
//           )}
//           {selectedImage && (
//             <div className="flex justify-center items-center h-full w-full p-2 gap-6">
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger type="button">
//                     <div >
//                       <MdEdit
//                         fontSize={24}
//                         className="cursor-pointer"
                        
//                       />
//                       <input
                        
//                         hidden
//                         accept="image/*"
//                         type="file"
                        
//                       />
//                     </div>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>Chang this image</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>

//               <Image
//                 src={URL.createObjectURL(selectedImage)}
//                 width={300}
//                 height={300}
//                 alt="input file"
//                 className="w-auto h-28 max-w-56"
//               />

//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger type="button">
//                     <MdDelete
//                       fontSize={24}
//                       className="cursor-pointer"
//                       onClick={removeSelectedImage}
//                     />
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>Delete this image</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImagePart;
// import Image from "next/image";

// interface ImageInfo {
//   selectedImage: string;
//   setSelectedImage: Function;
// }
// const ImagePart: React.FC<ImageInfo> = ({
//   selectedImage,
//   setSelectedImage,
// }) => {

//   return (
//     <div>
//       <div className="h-full flex flex-col gap-2 ">
//         <label className="text-brandPrimary text-sm pl-6">Upload Image</label>
//         <div className="h-full border border-[#EEDDF5]  rounded-lg bg-white">
//           {!selectedImage && (
//             <div className="flex justify-center items-center h-full w-full p-8 gap-4">
//               <Image
//                 src={`/assets/images/profile/inputImage.png`}
//                 width={74}
//                 height={45}
//                 alt="input file"
//                 className="w-auto h-11"
//               />
//               <div className="text-center text-brandPrimary text-sm ">
//                 <p>Drag your profile images here</p>
//                 <p>
//                   or{" "}
//                   <span
//                     className="text-link text-base font-normal hover:underline cursor-pointer"
//                     onClick={handleUploadClick}
//                   >
//                     Upload a file
//                     <input
//                       ref={fileInputRef}
//                       hidden
//                       accept="image/*"
//                       type="file"
//                       onChange={imageChange}
//                     />
//                   </span>
//                 </p>
//               </div>
//             </div>
//           )}
//           {selectedImage && (
//             <div className="flex justify-center items-center h-full w-full p-2 gap-6">
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger type="button">
//                     <div onClick={handleUploadClick}>
//                       <MdEdit
//                         fontSize={24}
//                         className="cursor-pointer"
//                         onClick={imageChange}
//                       />
//                       <input
//                         ref={fileInputRef}
//                         hidden
//                         accept="image/*"
//                         type="file"
//                         onChange={imageChange}
//                       />
//                     </div>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>Chang this image</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>

//               <Image
//                 src={URL.createObjectURL(selectedImage)}
//                 width={300}
//                 height={300}
//                 alt="input file"
//                 className="w-auto h-28 max-w-56"
//               />

//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger type="button">
//                     <MdDelete
//                       fontSize={24}
//                       className="cursor-pointer"
//                       onClick={removeSelectedImage}
//                     />
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>Delete this image</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImagePart;
