import { Form } from "../ui/form";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../FormInput";
import { experienceLevels, projectDuration, skills } from "@/Data/Client";
import { Button } from "../ui/button";

const formSchema = z.object({
  heading: z.string().trim().min(10, "required more characters"),
  description: z.string().trim().min(10, "required more words"),
  experienceLevel: z.enum(experienceLevels),
  skills: z.array(z.string()).min(1, "At least one skill is required"),
  HoursePerWeak: z.number().positive("must be a positive number").optional(),
  projectDuration: z.string().trim().min(3, "Required"),
  location: z.string().trim().min(2, "Required"),
});

export type JobPostType = z.infer<typeof formSchema>;

const CreateJobPost = () => {
  const form = useForm<JobPostType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-cyan-400 font-semibold text-center text-2xl">
        Create Hiring Update
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <div className="flex md:mx-5 gap-5 md:mt-10 mt-5">
            <div className="flex-1 md:w-1/2">
              <FormInput
                name="heading"
                type="text"
                label="Title About Hiring"
                placeholder="write something.."
              />
            </div>
            <div className="flex-1 md:w-1/2">
              <FormInput
                name="location"
                type="text"
                label="location of job / work"
                placeholder="work location"
              />
            </div>
          </div>

          <div className="flex md:mx-5 gap-4">
            <div className="flex-1 md:w-1/2">
              <label htmlFor="experienceLevel">Experience Level</label>
              <Controller
                name="experienceLevel"
                control={form.control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="block mt-2 appearance-none w-full bg-slate-800 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {experienceLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            <div className="flex-1 md:w-1/2">
              <FormInput
                label="Hourse Per Weak"
                name="HoursePerWeak"
                placeholder="Enter hours work"
                max={168}
                min={1}
              />
            </div>
          </div>

          <span className="mx-5">Select Required skills</span>
          <div className="grid md:mx-5 mx-1 gap-2 md:grid-cols-5 sm:grid-cols-3">
            {skills.map((skill) => (
              <label key={skill} className="text-sm cursor-pointer flex gap-2 ">
                <input
                  type="checkbox"
                  value={skill}
                  {...form.register("skills", {
                    validate: (facilities) => {
                      if (facilities && facilities.length > 0) {
                        return true;
                      } else {
                        return "At least one facility is required";
                      }
                    },
                  })}
                />
                {skill}
              </label>
            ))}
          </div>

          <div className="flex md:mx-5 gap-4">
            <div className="flex-1 md:w-1/2">
              <h1>Select Project Project Duration</h1>
              <Controller
                name="projectDuration"
                control={form.control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="block mt-2 appearance-none w-full bg-slate-800 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {projectDuration.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            <div className="flex-1 md:w-1/2">
              <FormInput
                label="job location"
                name="location"
                placeholder="location"
                type="text"
              />
            </div>
          </div>

          <Button type="submit" className="border bg-cyan-500 my-5 rounded-sm">
            Post
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateJobPost;
