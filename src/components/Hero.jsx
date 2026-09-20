import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="container mx-auto text-center py-[45px] space-y-8">
      <span className="badge">Build for students who like to see progress</span>
      <h2 className="font-semibold text-4xl max-w-[450px] mx-auto">
        Turn big goals to daily tasks you'll actually finish
      </h2>
      <p className="max-w-[700px] mx-auto">
        Set a goal, break into tasks and watch a progress bar move every time
        you check one off. No guessing what to study next.
      </p>
      <div className="flex gap-2 items-center justify-center">
        <button className="btn btn-success text-white border-0">
          Start for free <FaArrowRight />
        </button>

        <button className="btn">See how it works</button>
      </div>
    </div>
  );
};

export default Hero;
