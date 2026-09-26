const Stats = () => {
  return (
    <div className=" bg-[#f0f1eb]  text-black text-center py-12 ">
      <div className="container mx-auto grid grid-cols-4 gap-4">
        <div className="">
          <h2 className="font-bold text-4xl text-[#099759]">12,400+</h2>
          <p className="text-lg">Syudents using studyFlow</p>
        </div>
        <div className="">
          <h2 className="font-bold text-4xl text-[#099759]">8,500+</h2>
          <p className="text-lg">Problems solved</p>
        </div>
        <div className="">
          <h2 className="font-bold text-4xl text-[#099759]">95%</h2>
          <p className="text-lg">Student satisfaction</p>
        </div>
        <div className="">
          <h2 className="font-bold text-4xl text-[#099759]">1,200+</h2>
          <p className="text-lg">Study sessions completed</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
