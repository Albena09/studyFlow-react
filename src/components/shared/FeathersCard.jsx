import { GoGoal } from "react-icons/go";

const FeathersCard = ({ icon, title, description }) => {
  return (
    <div>
      <div className="space-y-4 bg-white p-4 rounded shadow-lg">
        {icon}
        <h2 className=" font-bold text-4xl"> {title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default FeathersCard;
