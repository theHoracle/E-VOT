import { Button } from "./ui/button";
import { CandidateAvatar } from "./ui/candidate-avatar";

/*
 * @type {ElectionPillProps}
 * */
const ElectionPill = (props) => {
  const {} = props;
  const candidates = new Array(8).fill({
    img: "/assets/candidate1.avif",
    candidate: "Emeka Peters",
  });
  return (
    <div className="grid grid-cols-2 grid-rows-[auto_50px_1fr] md:grid-cols-9 md:grid-rows-1 w-full items-center rounded-xl p-4 gap-4 bg-white dark:bg-slate-700">
      <div className="flex flex-col gap-2 md:col-span-2">
        <h3 className="text-xs md:text-base">Lagos Government</h3>
        <h2 className="text-sm lg:text-2xl uppercase font-medium leading-tight">
          Senate Election
        </h2>
        <h4 className="flex items-center text-xs gap-1 uppercase">
          <div className="size-1 bg-red-500 rounded-full" />
          restricted
        </h4>
      </div>
      <div className="col-start-2 row-span-1 md:col-start-3 md:col-span-6 flex items-center ">
        {candidates.map((candidate, i) => (
          <CandidateAvatar
            key={i}
            image={candidate.img}
            candidate={candidate.candidate}
          />
        ))}
      </div>
      <div className="row-start-2 col-span-2 md:col-auto md:row-span-1 w-full text-center">
        <Button className="w-full py-5">Open</Button>
      </div>
    </div>
  );
};

export default ElectionPill;

/*
 *  @typedef {Object} ElectionPillProps
 *  @property {string}  title
 *  @property {string}  topic
 *  @property {number}  access
 *  @property {Object} delegates
 *
 * */
