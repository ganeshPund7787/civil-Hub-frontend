import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";

type Props = {
  label: string;
  name: string;
};

const ImageSection = ({ label, name }: Props) => {
  const { control, watch } = useFormContext();

  const existingImageUrl = watch("imageUrl");
  return (
    <div className="flex flex-col gap-8 w-[80%]">
      {existingImageUrl && (
        <AspectRatio ratio={12 / 9}>
          <img
            src={existingImageUrl}
            alt="photo"
            className="rounded-md object-cover h-full w-full"
          />
        </AspectRatio>
      )}
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-semibold text-xl">{label}</FormLabel>
            <FormControl>
              <Input
                className="bg-white dark:bg-slate-600"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={(e) =>
                  field.onChange(e.target.files ? e.target.files[0] : null)
                }
              ></Input>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ImageSection;
