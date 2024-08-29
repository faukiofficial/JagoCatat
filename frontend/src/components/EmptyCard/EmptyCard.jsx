import { GrNotes } from "react-icons/gr";

const EmptyCard = ({main_text, text}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-[20vh]">
      <GrNotes className="text-5xl text-slate-400 mb-2" />
      <h6 className="text-sm font-medium text-center">{main_text}</h6>
      <p className="text-xs text-slate-500 text-center mt-1">
        {text}
      </p>
    </div>
  );
};

export default EmptyCard;