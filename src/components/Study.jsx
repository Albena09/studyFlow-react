import React from "react";
import { GoGoal } from "react-icons/go";
import SectionHeader from "./shared/SectionHeader";
import FeathersCard from "./shared/FeathersCard";

const Study = () => {
  return (
    <section className="container mx-auto text-center py-[75px] space-y-16">
      {/* =========== Reusable Common SectionHeader and dynamic props passing =========== */}
      <SectionHeader
        title={"Studying without a system is exhausting"}
        subtitle={
          "You're not laking dicipilne. You are lacking a place where your goals turn into a todays task "
        }
      />
      {/* ===========  Reusable Common SectionHeader and dynamic props passing =========== */}
      <div className="grid grid-cols-3 gap-4">
        {/* <div className="space-y-4 bg-white p-4 rounded shadow-lg">
          <GoGoal className="mx-auto text-[#0e7c66] text-2xl" />
          <h2 className=" font-bold text-4xl">Goals Stay vauge</h2>
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div> */}
        {/* ========== Reuable card componemt getting dynamically from FeatheredCard component ========== */}
        <FeathersCard
          icon={<GoGoal className="mx-auto text-[#0e7c66] text-2xl"></GoGoal>}
          title="Goals Stay vauge"
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          }
        />
        <FeathersCard
          icon={<GoGoal className="mx-auto text-[#0e7c66] text-2xl"></GoGoal>}
          title="Goals Stay vauge"
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          }
        />
        <FeathersCard
          icon={<GoGoal className="mx-auto text-[#0e7c66] text-2xl"></GoGoal>}
          title="Goals Stay vauge"
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          }
        />
        {/* ========== Reuable card componemt getting dynamically from FeatheredCard component ========== */}
      </div>
    </section>
  );
};

export default Study;
