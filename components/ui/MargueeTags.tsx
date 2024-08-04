import Image from "next/image";
import Marquee from "../magicui/marquee";

const MargueeTags = ({tags}: {tags: string[]}) => {
  return (
    <div className="relative flex mt-20 w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="flex gap-8 border-borderLine bg-linearLight dark:bg-linearDark p-7">
        {tags.map((tag) => (
          <div key={tag} className="gap-8 flex items-center justify-center">
            <Image src="/Star-Half-Empty.png" width={40} height={40} alt="Star-Half-Empty" />
            <p className="font-kamron font-normal text-lg">{tag}</p>
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default MargueeTags