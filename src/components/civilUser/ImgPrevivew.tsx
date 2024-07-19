import { useRef, useState, ChangeEvent } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { IoAdd } from "react-icons/io5";
import { Button } from "../ui/button";
import useUploadImg from "@/Hooks/useUploadImg";
import useUpdateUser from "@/Hooks/UserHook/useUpdateUser";

const ImageUploadDialog: React.FC = () => {
  const { storeImage } = useUploadImg();
  const { UpdateOther } = useUpdateUser();
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFile(file ? file : null);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setIsOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const UploadAndStore = async () => {
    setIsOpen(false);
    const certification = await storeImage(file);
    UpdateOther(certification, "addCertification");
  };

  return (
    <div>
      <input
        onChange={handleImageChange}
        accept="image/*"
        hidden
        type="file"
        ref={fileRef}
      />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => fileRef.current && fileRef.current.click()}>
            <IoAdd
              className="border p-1 border-cyan-500 hover:bg-opacity-30 rounded-full"
              size={40}
            />
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogTitle>Preview certifications</DialogTitle>
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="w-full h-auto" />
          )}

          <DialogFooter>
            <DialogClose asChild>
              <Button
                className="bg-green-500 rounded"
                type="button"
                onClick={UploadAndStore}
              >
                Add Certificate
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageUploadDialog;
