import { useState } from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const JobPostDetails = ({ post }: any) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  const getShortDescription = (description: string, wordLimit: number) => {
    const words = description.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : description;
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="hover:text-cyan-400 text-[1.3rem] hover:underline cursor-pointer"
            variant="ghost"
          >
            {post.heading}
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[80vh] overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="sm:text-[1.3rem]">{post.heading}</SheetTitle>
          </SheetHeader>
          <div className="my-8 flex gap-5 flex-wrap">
            {post?.skills?.map((skill: string, index: number) => (
              <span
                key={index}
                className="border rounded-[1rem] hover:bg-slate-900 border-cyan-500 p-2 cursor-pointer text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
          <SheetDescription>
            {showFullDescription
              ? post.description
              : getShortDescription(post.description, 100)}
            {post.description.split(" ").length > 100 && (
              <Button
                variant="link"
                className="ml-2"
                onClick={toggleDescription}
              >
                {showFullDescription ? "Show Less" : "Show More"}
              </Button>
            )}
          </SheetDescription>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default JobPostDetails;
