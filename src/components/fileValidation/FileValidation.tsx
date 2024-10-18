"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define the data type for the form
interface FormData {
  picture: FileList; // Use FileList for the file input
}

// Define a schema using yup for validation
const schema = yup.object().shape({
  picture: yup
    .mixed<FileList>() // Ensure the schema knows this is a FileList
    .required("You need to provide a file") // Ensure the file is required
    .test("fileSize", "The file is too large", (value) => {
      const file = value as FileList; // Cast value to FileList
      return file && file[0] && file[0].size <= 2000000; // Check file size
    })
    .test("type", "We only support jpeg", (value) => {
      const file = value as FileList; // Cast value to FileList
      return file && file[0] && file[0].type === "image/jpeg"; // Check file type
    }),
});

const FileValidation: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    alert(JSON.stringify(data)); // Show the submitted data
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="picture">Picture</label>
      <input id="picture" {...register("picture")} type="file" />
      {errors.picture && <p>{errors.picture.message}</p>} {/* Display validation error message */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FileValidation;



// "use client"
// import { useForm, SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// // Define the data type for the form
// interface FormData {
//   picture: FileList; // Use FileList for the file input
// }

// // Define a schema using yup for validation
// const schema = yup.object().shape({
//   picture: yup
//     .mixed()
//     .test('required', "You need to provide a file", (value) => {
//       return value && (value as FileList).length > 0; // Check if a file is provided
//     })
//     .test("fileSize", "The file is too large", (value) => {
//       const file = value as FileList;
//       return file && file[0] && file[0].size <= 200000; // Check file size
//     })
//     .test("type", "We only support jpeg", (value) => {
//       const file = value as FileList;
//       return file && file[0] && file[0].type === "image/jpeg"; // Check file type
//     }),
// });

// const FileValidation: React.FC = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     alert(JSON.stringify(data)); // Show the submitted data
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label htmlFor="picture">Picture</label>
//       <input id="picture" {...register("picture")} type="file" />
//       {errors.picture && <p>{errors.picture.message}</p>} {/* Display validation error message */}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FileValidation;

