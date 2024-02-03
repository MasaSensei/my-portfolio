import Image from "next/image";
import Core from "@/components/core";

const AboutPage = () => {
  const icons = Core.IconList;

  return (
    <div className="z-10 relative container mx-auto">
      <h1 className="lg:text-5xl text-3xl font-bold text-center text-white mb-8">
        About Me
      </h1>
      <div className="grid mb-[98px] lg:mb-0 gap-4 flex items-center my-4 lg:grid-cols-2 grid-cols-1">
        <div className="flex items-center justify-center">
          <Image
            src={"/profile.jpeg"}
            width={800}
            height={800}
            alt="profile"
            className="rounded-md w-96 h-full"
          />
        </div>
        <div className="mx-auto flex gap-4 relative flex-col items-center">
          <div className="text-center">
            <h1 className="lg:text-4xl text-white text-2xl font-bold">
              My Skills
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4 lg:text-5xl text-3xl font-medium">
              {icons.map((icon) => (
                <div key={icon.name} className="flex items-center gap-2">
                  <span className={icon.className}>{icon.icon}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-400 text-lg font-medium">
            Perkenalkan saya{" "}
            <span className="font-bold text-white">
              Muhammad Hasan Syafi&#39;i
            </span>
            , saat ini Saya sedang bekerja sebagai Web Developer disebuah
            perusahaan teknologi yang bergerak di bidang reparasi di Jakarta
            Selatan. Saya mempunyai ketertarikan terhadap pemograman dan sangat
            suka mempelajarinya karena memberikan tantangan tersendiri
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
