interface Props {
  title?: string;
  subTitle?: string;
}

const Stats = ({ title, subTitle }: Props) => {
  return (
    <div className="text-center">
      <div className="font-serif text-4xl font-bold text-purple-600 dark:text-purple-400">
        {title}
      </div>
      <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {subTitle}
      </div>
    </div>
  );
};

export default Stats;
