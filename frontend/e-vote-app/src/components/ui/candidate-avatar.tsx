import Image from "next/image";

export const CandidateAvatar = ({
  image,
  candidate,
}: {
  image: string;
  candidate: string;
}) => {
  return (
    <div className="rounded-lg relative aspect-square overflow-hidden">
      <Image
        src={image}
        alt={`Election cadidate: ${candidate}`}
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-x-1 bottom-4 rounded-2xl bg-white dark:bg-slate-900 ">
        {candidate}
      </div>
    </div>
  );
};
