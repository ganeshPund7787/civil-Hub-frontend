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
  email: z.string().trim().min(5, "required"),
  password: z.string().trim().min(3, "required"),
});

export type UserFormData = z.infer<typeof formSchema>;

const SignIn = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <h1 className="text-2xl px-5 tracking-tight text-cyan-400 font-semibold py-2">
          CivilHub
        </h1>
        <div className="md:flex mx-5 md:mx-0  mt-16 items-center justify-center">
          <div className="space-y-6 border bg-slate-800 rounded border-slate-500 p-8 md:w-96">
            <div>
              <h2 className="text-3xl font-semibold text-center">
                {" "}
                login in to civilHub{" "}
              </h2>
            </div>

            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email </FormLabel>
                  <FormMessage className="text-red-600" />
                  <FormControl>
                    <Input className="rounded-[5px]" autoFocus {...field} />
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
                    <Input className="rounded-[5px]" autoFocus {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormDescription className="text-sm">
              Looking to join us?
              <Link to={"/sign-up"} className="text-blue-500">
                {" "}
                Register now!
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

export default SignIn;
