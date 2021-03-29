import Image from "next/image";

export default function CoverImage() {
  return (
    <div className="flex justify-center relative shadow-sm pb-20">
      <p className="transform rotate-90 absolute left-16 top-2/4 hidden lg:block">
        Scroll Down
      </p>
      <div className="relative h-72 w-2/3">
        <Image
          className="rounded-lg"
          src="/images/lizard.jpg"
          alt="cover image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="transform rotate-90 absolute right-16 top-2/4 hidden lg:block">
        Scroll Down
      </p>
    </div>
  );
}
