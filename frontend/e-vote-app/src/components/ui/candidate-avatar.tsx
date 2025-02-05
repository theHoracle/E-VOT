import Image from "next/image";

export const CandidateAvatar = ({
  name,
  image,
}: {
  name: string;
  image: string;
}) => {
  <div className="relative aspect-square rounded overflow-hidden">
    <Image
      src={image}
      alt={`Election candidate: ${name}`}
      fill
      className="object-cover object-center"
    />
    <div
      className="absolute bottom-6 left-1/2 -translate-x-1/2
        bg-black/30 backdrop-blur-sm px-6 py-2 rounded-full
        border border-white/10 hover:bg-black/40 transition-colors"
    >
      <span className="text-white font-medium text-sm tracking-wide">
        {name}
      </span>
    </div>
  </div>;
};
