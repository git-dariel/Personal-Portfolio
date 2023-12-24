import { GithubIcon, Facebook } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="min-h-[100px] bg-slate-800  mt-10 w-full px-5 md:px-20 flex items-center justify-between rounded-t-2xl rounded-r-2xl">
      <h4 className="text-sm sm:text-base text-gray-300">
        &copy;2023 Build with passion
      </h4>
      <div className="flex justify-between gap-4 ">
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
      </div>
    </footer>
  );
};
