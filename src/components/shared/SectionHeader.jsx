import { GoGoal } from "react-icons/go";

const SectionHeader = ({ title, subtitle }) => {
  //   console.log(props, "props");
  //   console.log({title,subtitle}, "props");
  return (
    <div className="max-w-[700px] mx-auto space-y-3">
      <h2 className="font-bold text-5xl text-center">{title}</h2>
      <p className="text-xl text-center">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
