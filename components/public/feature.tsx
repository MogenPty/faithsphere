import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

interface IFeature {
  id: number;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
}

interface Props {
  feature: IFeature;
}

const Feature = ({ feature }: Props) => {
  return (
    <div
      key={feature.id}
      className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-purple-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-purple-700"
    >
      <div className="mb-4 inline-flex rounded-lg bg-purple-100 p-3 dark:bg-purple-900/30">
        <feature.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        {feature.title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400">{feature.description}</p>
    </div>
  );
};

export default Feature;
