import Image from "next/image";

export const CandidateAvatar = ({
  name,
  image,
}: {
  name: string;
  image: string;
}) => {
  return (
    <div className="relative size-full aspect-square rounded-lg min-w-24 overflow-hidden">
      <Image
        src={image}
        alt={`Election candidate: ${name}`}
        fill
        className="object-cover object-center"
      />
      <div className="absolute bottom-1 inset-x-1 bg-white px-1 py-0.5 rounded-2xl flex items-center justify-center text-slate-900 hover:bg-slate-200">
        <span className="text-[10px] leading-none text-center">
          {name}
        </span>
      </div>
    </div>
  );
};
