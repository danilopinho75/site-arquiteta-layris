import type { ReactNode } from "react";
import { motion } from "motion/react";

type CardToolProps = {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
};

export function CardTool({ icon, title, description, delay = 0 }: CardToolProps) {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.8 }}
      transition={{ duration: 1, ease: "easeOut", delay }}
    >
      <div
        className="flex flex-col items-center w-full lg:max-w-xs border border-stone-300 p-10 rounded-xl hover:bg-white transition-all duration-500 hover:border-orange-200 hover:-translate-y-2"
      >
        <div
          className="text-orange-500 bg-orange-100 p-5 rounded-full border border-orange-200 mb-4 hover:bg-orange-200 transition-colors duration-500 hover:border-orange-300 hover:text-orange-600  "
        >
          {icon}
        </div>
        <h4 className="text-2xl text-stone-800">{title}</h4>
        <p className="text-center text-stone-600 font-light">{description}</p>
      </div>
    </motion.div>
  );
}
