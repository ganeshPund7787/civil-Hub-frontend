import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignIn = () => {
  const form = useForm();
  return (
    <FormProvider {...form}>
      <h1 className="text-2xl px-5 tracking-tight text-cyan-400 font-semibold py-2">
        CivilHub
      </h1>
      <div className="flex h-[90vh] w-[96vw] items-center justify-center">
        <form className="space-y-5 rounded-lg border p-5">
          <div>
            <h2 className="text-2xl text-center font-semibold">
              Log in to Civilhub
            </h2>
          </div>
          <FormField
            name="email"
            render={({}) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input className="bg-black w-80" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="name"
            render={({}) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input className="bg-black" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormDescription>
            Want to join?
            <Link to={"/sign-up"} className="text-blue-400 text-xs">
              {" "}
              Create your account
            </Link>
          </FormDescription>
          <Button
            type="submit"
            className="bg-cyan-400 text-black hover:text-white w-full  rounded-[1em] border"
          >
            Sign In
          </Button>
        </form>
      </div>
    </FormProvider>
  );
};

export default SignIn;
