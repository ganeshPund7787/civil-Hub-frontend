import { MdDelete } from "react-icons/md";

const EducationCard = ({ education }: any) => {
  return (
    <div className="flex w-full flex-col items-center px-6">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl line-clamp-1">
          {education.degree}{" "}
          <span className="text-sm">{education.fieldOfStudy}</span>
        </h1>
        <MdDelete
          className="hover:text-red-500 cursor-pointer border border-cyan-500 p-2 rounded-full"
          size={40}
        />
      </div>
      <div className="w-full flex mt-1 items-center justify-between">
        from {education.collegeName} {education.university} university
      </div>
    </div>
  );
};

export default EducationCard;
