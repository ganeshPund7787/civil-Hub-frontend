import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInput from "../../components/FormInput"; // Assuming FormInput is in the same directory
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  fullName: z.string().min(5, "Full name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(3, "Password is required"),
  phoneNumber: z.string().optional(),
  company: z.string().optional(),
  address: z
    .object({
      street: z.string(),
      city: z.string(),
      state: z.string(),
      postalCode: z.string(),
      country: z.string(),
    })
    .optional(),
  website: z.string().optional(),
  bio: z.string().optional(),
});

const FormComponent = () => {
  const methods = useForm({
    resolver: zodResolver(formSchema),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <div className="md:flex mx-2 md:mx-0 mt-8 flex-none py-5 md:mt-0 items-center justify-center">
          <div className="space-y-4 md:w-96 border p-5 md:mx-10 rounded bg-slate-800">
            <h2 className="text-3xl font-semibold text-center text-cyan-400">
              Sign Up As Client
            </h2>
            <FormInput
              name="fullName"
              label="Full Name"
              placeholder="Enter your full name"
            />
            <FormInput
              name="email"
              label="Email"
              placeholder="Enter your email"
            />
            <FormInput
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />
            <FormInput
              name="phoneNumber"
              label="Phone Number"
              placeholder="Enter your phone number"
            />
            <FormInput
              name="company"
              label="Company Name"
              placeholder="Enter your company name"
            />
            <FormInput
              name="address.street"
              label="Street"
              placeholder="Enter your street"
            />
            <FormInput
              name="address.city"
              label="City"
              placeholder="Enter your city"
            />
            <FormInput
              name="address.state"
              label="State"
              placeholder="Enter your state"
            />
            <FormInput
              name="address.postalCode"
              label="Postal Code"
              placeholder="Enter your postal code"
            />
            <FormInput
              name="address.country"
              label="Country"
              placeholder="Enter your country"
            />
            <FormInput
              name="website"
              label="Website URL"
              placeholder="Enter your website URL"
            />
            <FormField
              name="bio"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <p className="flex gap-2">
                    <FormLabel>Bio</FormLabel>
                    <FormMessage className="text-red-600" />
                  </p>
                  <FormControl>
                    <textarea
                      placeholder="Enter your bio"
                      className="rounded-[5px] p-1 w-full border border-slate-600 bg-transparent"
                      {...field}
                    ></textarea>
                  </FormControl>
                </FormItem>
              )}
            />
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default FormComponent;
