import { GoGoal } from "react-icons/go";
import FeaturesCard from "./shared/FeaturesCard";
import SectionHeader from "./shared/SectionHeader";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { FcBearish, FcConferenceCall, FcOrgUnit } from "react-icons/fc";

const Features = () => {
  return (
    <div className="container mx-auto text-center m-7 ">
      <SectionHeader
        title="Everything is a styudy session needs"
        subtitle=
          "Nothing you don't need, nothing you have to configure for an hour first"
        
      />
      <div className="grid grid-cols-4 gap-4 m-20">
        <FeaturesCard
          icon={<FcOrgUnit className="mx-auto text-[#0e7c66] text-2xl" />}
          title="Goals Stay vauge"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
        <FeaturesCard
          icon={
            <RiArrowLeftRightLine className="mx-auto text-[#0e7c66] text-2xl" />
          }
          title="Goals Stay vauge"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
        <FeaturesCard
          icon={<FcBearish className="mx-auto text-[#0e7c66] text-2xl" />}
          title="Goals Stay vauge"
          description=
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          
        />
        <FeaturesCard
          icon={
            <FcConferenceCall className="mx-auto text-[#0e7c66] text-2xl" />
          }
          title="Goals Stay vauge"
          description=
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          
        />
      </div>
    </div>
  );
};

export default Features;
