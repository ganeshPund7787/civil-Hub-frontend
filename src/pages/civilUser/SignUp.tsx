"use client";

import { Button } from "@/components/ui/button";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useCivilApi } from "@/API/useCivilUserApi";
import FormInput from "@/components/FormInput";

const formSchema = z.object({
  fullName: z.string().trim().min(5, "Full name is required"),
  email: z.string().trim().min(5, "Email is required"),
  password: z.string().trim().min(3, "Password is required"),
  city: z.string().trim().min(1, "City is required"),
  state: z.string().trim().min(1, "State is required"),
  country: z.string().trim().min(1, "Country is required"),
  dateOfBirth: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    })
    .transform((str) => new Date(str)),
});

export type UserFormDataSignUp = z.infer<typeof formSchema>;

const SignUp = () => {
  const { SignUpCivilUser, isLoading } = useCivilApi();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      city: "",
      state: "",
      country: "",
      dateOfBirth: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    SignUpCivilUser(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <h1 className="text-3xl px-5 tracking-tight text-cyan-400 font-semibold py-2">
          CivilHub
        </h1>
        <div className="md:flex mx-2 md:mx-0 mt-8 flex-none py-5 md:mt-0 items-center justify-center">
          <div className="space-y-4 md:w-96 border p-5 md:mx-10 rounded bg-slate-800">
            <div>
              <h2 className="text-3xl font-semibold text-center text-cyan-400">
                Sign Up
              </h2>
            </div>

            <FormInput
              name="fullName"
              label="Full Name"
              placeholder="Enter your full name"
            />

            <FormInput
              name="email"
              label="Email"
              placeholder="Enter your email"
              type="email"
            />

            <FormInput
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />

            <FormField
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pick Your Birth Date</FormLabel>
                  <br />
                  <FormMessage className="text-red-600" />
                  <FormControl>
                    <input
                      type="date"
                      placeholder="Enter Your Password"
                      className="rounded-[5px] bg-slate-600 px-2 text-white"
                      autoFocus
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormDescription className="text-sm font-semibold">
              Address
            </FormDescription>
            <div className="flex flex-col md:flex-row gap-4">
              <FormInput name="city" label="City" placeholder="city" />

              <FormInput name="state" label="State" placeholder="state" />

              <FormInput name="country" label="Country" placeholder="country" />
            </div>
            <FormDescription className="text-sm">
              Already a member?{" "}
              <Link to="/sign-in" className="text-blue-500">
                login
              </Link>
            </FormDescription>
            <FormDescription className="text-sm">
              back to select{" "}
              <Link to="/select-role" className="text-blue-500">
                role
              </Link>
            </FormDescription>

            <Button
              type="submit"
              disabled={isLoading}
              className="bg-cyan-400 mt-7 disabled:cursor-not-allowed shadow-lg hover:text-white text-black w-full rounded-[1em] border"
            >
              {isLoading ? "LOADING...." : "SIGN UP"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SignUp;
