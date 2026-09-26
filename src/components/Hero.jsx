import { FaArrowRight, FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


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

        <button className="btn">See How it Works</button>
      </div>
      <div>
        <div className="card bg-base-100 w-[550px] mx-auto shadow-sm text-black space-y-4 py-4">
          <div className="flex items-center justify-between gap-4 px-4">
            <h2 className="font-bold text-2xl">Today's progress</h2>
            <p className="">50% Complete</p>
          </div>
          <div>
            <progress
              className="progress progress-primary w-56 h-[10px]"
              value={56}
              max="100"
            ></progress>
            <ul className="space-y-4 p-4 ">
              <li className="flex border border-green-500 py-4 items-center gap-4 rounded-md p-2">
                <span className="text-green-400 text-[20px] ">
                  <FaCheck />
                </span>
                Solve 2 problems in navbar section
              </li>
              <li className="flex border border-green-500 py-4 items-center gap-4 rounded-md p-2">
                <span className="text-green-400 text-[20px]">
                  <FaCheck />
                </span>
                Hero section done
              </li>
              <li className="flex border border-green-500 py-4 items-center gap-4 rounded-md p-2">
                <span className="text-green-400 text-[20px]">
                  <FaCheck />
                </span>
                card design done
              </li>
              <li className="flex border border-green-500 py-4 items-center gap-4 rounded-md p-2">
                <span className="text-green-400 text-[30px]">
                  <IoClose />
                </span>
                Footer sention done
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
