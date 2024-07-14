"use client";

import { Button } from "@/components/ui/button";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  title: z.string().trim().min(5, "required "),
  description: z.string().trim().min(10, "required & minmum 10 character"),
  startDate: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    })
    .transform((str) => new Date(str)),
  endDate: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    })
    .transform((str) => new Date(str)),
  technologies: z.array(z.string()),
  role: z.string().trim().min(1, "required"),
  client: z.string().optional(),
  teamSize: z
    .string()
    .refine((val) => !isNaN(Number(val)), {
      message: "Invalid number format",
    })
    .transform((str) => Number(str))
    .pipe(z.number().min(1, "required")),
});

export type UserProjectType = z.infer<typeof formSchema>;

const AddProject = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      startDate: undefined,
      endDate: undefined,
      role: "",
      client: "",
      teamSize: 5,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="grid md:grid-cols-3 md:grid-rows-3 items-center gap-5 space-y-3 md:p-5 p-2 md:mx-5 rounded ">
          <FormField
            name="title"
            render={({ field }) => (
              <FormItem>
                <p className="flex gap-2">
                  <FormLabel>Name of the project </FormLabel>
                  <FormMessage className="text-red-600" />
                </p>
                <FormControl>
                  <Input
                    placeholder="Enter project namee"
                    className="rounded-[5px]"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="startDate"
            render={({ field }) => (
              <FormItem>
                <p className="flex gap-2">
                  <FormLabel>Starting date of project</FormLabel>
                  <FormMessage className="text-red-600" />
                </p>
                <FormControl>
                  <Input type="date" className="rounded-[5px]" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="endDate"
            render={({ field }) => (
              <FormItem>
                <p className="flex gap-2">
                  <FormLabel>ending date of project</FormLabel>
                  <FormMessage className="text-red-600" />
                </p>
                <FormControl>
                  <Input type="date" className="rounded-[5px]" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="role"
            render={({ field }) => (
              <FormItem>
                <p className="flex gap-2">
                  <FormLabel>Your role in project</FormLabel>
                  <FormMessage className="text-red-600" />
                </p>
                <FormControl>
                  <Input
                    placeholder="write your work type"
                    className="rounded-[5px]"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="client"
            render={({ field }) => (
              <FormItem>
                <p className="flex gap-2">
                  <FormLabel>Project client name (optional) </FormLabel>

                  <FormMessage className="text-red-600" />
                </p>
                <FormControl>
                  <Input
                    placeholder="write your project client name"
                    className="rounded-[5px]"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="teamSize"
            render={({ field }) => (
              <FormItem>
                <p className="flex gap-2">
                  <FormLabel>How many members in your team ?</FormLabel>
                  <FormMessage className="text-red-600" />
                </p>
                <FormControl>
                  <Input min={1} className="rounded-[5px]" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="description"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <p className="flex gap-2">
                  <FormLabel>Short note on project</FormLabel>
                  <FormMessage className="text-red-600" />
                </p>
                <FormControl>
                  <textarea
                    minLength={10}
                    maxLength={50}
                    className="rounded-[5px] p-1 w-full"
                    {...field}
                  ></textarea>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            className="md:w-32 bg-red-600 font-semibold mt-3 mx-6 my-2 disabled:cursor-not-allowed shadow-lg hover:text-white text-black rounded-[1em] border"
          >
            cancle
          </Button>
          <Button
            type="submit"
            className="md:w-32 bg-cyan-400 mt-3 mx-6 my-2 font-semibold disabled:cursor-not-allowed shadow-lg hover:text-white text-black rounded-[1em] border"
          >
            save
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddProject;
