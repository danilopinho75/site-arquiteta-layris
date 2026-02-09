
type LabelItemProps = {
  text: string;
};


export function LabelItem ({ text }: LabelItemProps) {
  return (
    <div className="bg-orange-100 px-5 py-2 border border-orange-300 rounded-full text-orange-500 w-fit hover:-translate-y-1 transition-all duration-500">
      <p className="text-xs">{text}</p>
    </div>
  );
}