import { GithubIcon, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="min-h-[100px] mt-10 w-full px-5 md:px-20 flex flex-col items-center justify-between rounded-t-2xl">
      <div className="flex justify-between gap-4 mt-4 mb-8">
        <div className="bg-primary text-white p-2 rounded-full sca">
          <Link
            href={"https://www.facebook.com/dariel.avila.129"}
            target="_blank"
          >
            <Facebook />
          </Link>
        </div>
        <div className="bg-primary text-white p-2 rounded-full">
          <Link href={"https://github.com/git-dariel"} target="_blank">
            <GithubIcon />
          </Link>
        </div>
        <div className="bg-primary text-white p-2 rounded-full">
          <Link
            href={"https://www.instagram.com/_darielavila/"}
            target="_blank"
          >
            <Instagram />
          </Link>
        </div>
      </div>
      <h4 className="text-sm sm:text-base text-gray-300 mb-8">
        Created with ❤️ using Next.js
      </h4>
    </footer>
  );
};
