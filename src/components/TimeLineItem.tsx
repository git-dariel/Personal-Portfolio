interface TimeLineItemProps {
  year: string;
  title: string;
  duration: string;
  details: string;
}

export default function TimeLineItem({ year, title, duration, details }: TimeLineItemProps) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 text-gray-300 mx-4 md:mx-0">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
        <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold bg-gray-100 text-gray-900 hover:bg-gray-200/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 rounded-md">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <div className="my-1 text-sm font-normal leading-none text-stone-400 ">{duration}</div>
        </div>
        <p className="my-2 text-base">{details}</p>
      </li>
    </ol>
  );
}
