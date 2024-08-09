import React from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  Controller,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInput from "@/components/FormInput"; // Ensure this path is correct
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FormRadioGroup from "./FormRadioGroup";

// export const formSchema = z.object({
//   name: z.string().trim().min(5, "Required"),
//   taluka: z.string().trim().min(5, "Required"),
//   gav: z.string().trim().min(5, "Required"),
//   adhar_no: z.string().length(12, { message: "Aadhar No must be 12 digits" }),
//   // birthdate: z.date({ message: "Birthdate is required" }).optional(),
//   mobile_no: z.string().length(10, { message: "Mobile No must be 10 digits" }),
//   family_member: z.array(z.string().trim().min(5, "Required")),
//   registration_no: z.string().trim().min(5, "Required"),
//   // registration_date: z.date({ message: "Registration Date is required" }),
//   // renewal_date: z.date({ message: "Renewal Date is required" }),
//   tekedar_name: z.string().trim().min(5, "Required"),
//   shifaras_denayache_name: z.string().trim().min(5, "Required"),
//   gav_pramukh_name: z.string().trim().min(5, "Required"),
// });

// Define the form data type

export const formSchema = z.object({
  name: z.string().trim().min(5, "Required"),
  taluka: z.string().trim().min(5, "Required"),
  gav: z.string().trim().min(5, "Required"),
  cast: z.string().trim().min(5, "Required"),
  Tekedar_name: z.string().trim().min(1, "Required"),
  adhar_no: z.string().length(12, { message: "Aadhar No must be 12 digits" }),
  birthdate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), { message: "Invalid date" }),
  mobile_no: z.string().length(10, { message: "Mobile No must be 10 digits" }),
  family_member: z.array(z.string().trim().min(3, "Required")),
  registration_no: z.string().trim().min(5, "Required"),
  registration_date: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), { message: "Invalid date" }),
  renewal_date: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), { message: "Invalid date" }),
  tekedar_name: z.string().trim().min(1, "Required"),
  Sabhad_fee: z.string().trim().min(1, "Required"),
  Form_satus: z.string().trim().min(1, "Required"),
  Milalela_labh: z.string().trim().min(5, "Required"),
  shifaras_denayache_name: z.string().trim().min(5, "Required"),
  labh_sanch_milala: z
    .enum(["Yes", "No"])
    .refine((val) => val !== undefined, { message: "Required" }),
  gav_pramukh_name: z.string().trim().min(5, "Required"),
});

type FormData = z.infer<typeof formSchema>;

const DemoForm: React.FC = () => {
  // Initialize the form methods
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  // Define the form submit handler
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-[70%] mx-auto p-4 bg-gray-100 rounded-md shadow-md">
      {/* Wrap the form with FormProvider and pass the form methods */}
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <FormInput
            name="name"
            label="Name"
            placeholder="Enter your name"
            control={methods.control}
          />
          <div className="flex gap-3">
            <div className="flex-1 md:w-1/2">
              <FormInput
                name="taluka"
                label="Taluka"
                placeholder="Enter your taluka"
                control={methods.control}
              />
            </div>
            <div className="flex-1 md:w-1/2">
              <FormInput
                name="gav"
                label="Gav"
                placeholder="Enter your gav"
                control={methods.control}
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-1 md:w-1/2">
              <FormInput
                name="cast"
                label="cast"
                placeholder="Enter your cast"
                control={methods.control}
              />
            </div>
            <div className="flex-1 md:w-1/2">
              <FormInput
                name="mobile_no"
                label="Mobile No"
                placeholder="Enter mobile no"
                max={10}
                control={methods.control}
              />
            </div>
          </div>
          <FormField
            name="description"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <p className="flex gap-2">
                  <FormLabel className="text-black">Address</FormLabel>
                  <FormMessage className="text-red-600" />
                </p>
                <FormControl>
                  <textarea
                    maxLength={1000}
                    minLength={50}
                    placeholder=""
                    className="rounded-[5px] h-[4rem] p-1 w-full border fixed-size-textarea resize-none border-slate-600 bg-transparent"
                    {...field}
                  ></textarea>
                </FormControl>
              </FormItem>
            )}
          />

          <FormInput
            name="adhar_no"
            label="Aadhar No"
            placeholder="Enter your Aadhar No"
            max={12}
            control={methods.control}
          />
          <FormInput
            name="birthdate"
            label="Birthdate"
            placeholder="Enter birthdate"
            type="date"
            control={methods.control}
          />

          <h1 className="text-black">Enter Family Member : </h1>
          {Array.from({ length: 3 }).map((_, index) => (
            <FormInput
              key={index}
              name={`family_member.${index}`}
              label={`Family Member ${index + 1}`}
              placeholder={`Enter family member ${index + 1}`}
              control={methods.control}
            />
          ))}

          <FormInput
            name="registration_no"
            label="Registration No"
            placeholder="Enter registration no"
            control={methods.control}
          />
          <div className="flex gap-3">
            <div className="flex-1 md:w-1/2">
              <FormInput
                name="registration_date"
                label="Registration Date"
                placeholder="Enter registration date"
                type="date"
                control={methods.control}
              />
            </div>
            <div className="flex-1 md:w-1/2">
              <FormInput
                name="renewal_date"
                label="Renewal Date"
                placeholder="Enter renewal date"
                type="date"
                control={methods.control}
              />
            </div>
          </div>
          <FormInput
            name="Milalela_labh"
            label="Milalela labh"
            placeholder="Enter tekedar name"
            control={methods.control}
          />

          <div className="flex gap-3">
            <div className="flex-1 md:w-1/2 text-black">
              <label htmlFor="experienceLevel">Tekedar name</label>
              <Controller
                name="Tekedar_name"
                control={methods.control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="block w-full cursor-pointer bg-white appearance-none border border-gray-300 rounded-md py-2 px-3 pr-10 text-base focus:outline-none  sm:text-sm"
                  >
                    {["test1", "test2"].map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            <div className="flex-1 md:w-1/2 text-black">
              <label htmlFor="experienceLevel">Sabhad fee</label>
              <Controller
                name="Sabhad_fee"
                control={methods.control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="block w-full cursor-pointer bg-white appearance-none border border-gray-300 rounded-md py-2 px-3 pr-10 text-base focus:outline-none  sm:text-sm"
                  >
                    {["New Sabhasad=400 Rs", "Old Sabhasad=200 Rs"].map(
                      (name) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      )
                    )}
                  </select>
                )}
              />
            </div>
          </div>
          <div className="flex-1 md:w-1/2 text-black">
            <label htmlFor="experienceLevel">Sabhad fee</label>
            <Controller
              name="Sabhad_fee"
              control={methods.control}
              render={({ field }) => (
                <select
                  {...field}
                  className="block w-full cursor-pointer bg-white appearance-none border border-gray-300 rounded-md py-2 px-3 pr-10 text-base focus:outline-none  sm:text-sm"
                >
                  {["Approved", "Pending", "Rejected"].map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>

          <FormInput
            name="shifaras_denayache_name"
            label="Shifaras Denayache Name"
            placeholder="Enter shifaras denayache name"
            control={methods.control}
          />
          <FormInput
            name="gav_pramukh_name"
            label="Gav Pramukh Name"
            placeholder="Enter gav pramukh name"
            control={methods.control}
          />
          <FormRadioGroup
            name="labh_sanch_milala"
            label="Labh_sanch Milala"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            control={methods.control}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md w-full"
          >
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default DemoForm;
