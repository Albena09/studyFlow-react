

const FeaturesCard = ({ icon, title, description }) => {
  return (
    <div className="">
      <div className="space-y-2 bg-white p-4 rounded shadow-lg">
        {icon}
        <h2 className="font-bold text-3xl"> {title}</h2>
        <p className="text-md">{description}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
