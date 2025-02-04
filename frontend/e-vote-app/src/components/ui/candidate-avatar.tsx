import Image from "next/image";

export const CandidateAvatar = ({
  image,
  candidate,
}: {
  image: string;
  candidate: string;
}) => {
  return (
    <div className="rounded-lg z-10 relative aspect-square overflow-hidden">
      <Image
        src={image}
        alt={`Election cadidate: ${candidate}`}
        fill
        className="object-cover object-center z-10"
      />
      <div className="z-20 mx-1 mb-4 rounded-2xl bg-white dark:bg-slate-900 ">
        {candidate}
      </div>
    </div>
  );
};
