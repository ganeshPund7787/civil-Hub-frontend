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
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const formSchema = z.object({
  fullName: z.string().trim().min(5, "required"),
  email: z.string().trim().min(5, "required"),
  password: z.string().trim().min(3, "required"),
  city: z.string().trim().min(1, "required"),
  state: z.string().trim().min(1, "required"),
  country: z.string().trim().min(1, "required"),
});

export type UserFormData = z.infer<typeof formSchema>;

const SignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      city: "",
      state: "",
      country: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
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
                {" "}
                Sign Up{" "}
              </h2>
            </div>
            <FormField
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>FullName </FormLabel>
                  <FormMessage className="text-red-600" />
                  <FormControl>
                    <Input
                      placeholder="Enter your fullname"
                      className="rounded-[5px]"
                      autoFocus
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email </FormLabel>
                  <FormMessage className="text-red-600" />
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      className="rounded-[5px]"
                      autoFocus
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password </FormLabel>
                  <FormMessage className="text-red-600" />
                  <FormControl>
                    <Input
                      placeholder="Enter Your Password"
                      className="rounded-[5px]"
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
              <FormField
                name="city"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="city"
                        className="rounded-[5px]"
                        autoFocus
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
              <FormField
                name="state"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="state"
                        className="rounded-[5px]"
                        autoFocus
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
              <FormField
                name="country"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="country"
                        className="rounded-[5px]"
                        autoFocus
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
            </div>
            <FormDescription className="text-sm">
              Already member ?
              <Link to={"/sign-in"} className="text-blue-500">
                {" "}
                login
              </Link>
            </FormDescription>
            <Button
              type="submit"
              className="bg-cyan-400 mt-7 shadow-lg hover:text-white text-black w-full md:w-60 rounded-[1em] border"
            >
              SIGN UP
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SignUp;
