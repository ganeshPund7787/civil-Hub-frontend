// const JobPostCard = ({ post }: any) => {
//   const createdAt = new Date(post.createdAt);
//   return (
//     <div className="sm:p-5 p-2 flex flex-col border rounded md:rounded-[1rem] hover:bg-slate-800 border-slate-600">
//       <div className="flex flex-col gap-4">
//         <span className="text-slate-500">
//           Post on {createdAt.toLocaleDateString()}
//         </span>
//         <h1 className="hover:text-cyan-400 text-[1.3rem] hover:underline cursor-pointer">
//           {post.heading}
//         </h1>
//       </div>

//       <div className="flex flex-wrap mt-2 text-sm  gap-2 text-slate-300">
//         <span>Monthly</span>
//         <span>{post.salary} salary</span>/<span>Less than </span>
//         <span>{post.HoursePerWeak}Hours work per week</span>
//       </div>

//       <div className="line-clamp-3 mt-5 ">{post.description}</div>

//       <div className="flex gap-5 mt-5">
//         {post.skills.map((skill: string) => (
//           <span className="border rounded-[1rem] hover:bg-slate-900 border-cyan-500 p-2 cursor-pointer">
//             {skill}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobPostCard;
const JobPostCard = ({ post }: any) => {
  const createdAt = new Date(post.createdAt);
  const skillsToShow = post.skills.slice(0, 4); // Show only the first 5 skills

  return (
    <div className="sm:p-5 p-2 flex flex-col border rounded md:rounded-[1rem] hover:bg-slate-800 border-slate-600 shadow-lg transition-transform transform hover:scale-105">
      <div className="flex flex-col gap-4">
        <span className="text-slate-500">
          Post on {createdAt.toLocaleDateString()}
        </span>
        <h1 className="hover:text-cyan-400 text-[1.3rem] hover:underline cursor-pointer">
          {post.heading}
        </h1>
      </div>

      <div className="flex flex-wrap mt-2 text-sm gap-2 text-slate-300">
        <span>Monthly</span>
        <span>{post.salary} salary</span>/<span>Less than </span>
        <span>{post.HoursPerWeek} Hours work per week</span>
      </div>

      <div className="line-clamp-2 mt-5 text-slate-300">{post.description}</div>

      <div className="flex items-center gap-2 mt-5 flex-wrap">
        {skillsToShow.map((skill: string, index: number) => (
          <span
            key={index}
            className="border rounded-[1rem] hover:bg-slate-900 border-cyan-500 p-2 cursor-pointer text-slate-300"
          >
            {skill}
          </span>
        ))}
        {skillsToShow.length >= 4 && <span className="text-xs">more...</span>}
      </div>
    </div>
  );
};

export default JobPostCard;
