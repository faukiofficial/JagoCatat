import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";
import moment from "moment";
import './NoteCard.css'

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-between border-b-2">
        <div>
          <h6 className="text-sm font-semibold">{title}</h6>
          <span className="text-xs text-slate-500">
            {moment(date).format("Do MMM YYYY")}
          </span>
        </div>

        <MdOutlinePushPin
          className={`icon-btn ${isPinned ? "text-primary" : "text-slate-300"}`}
          onClick={onPinNote}
        />
      </div>

      <p className="text-sm text-slate-600 mt-2 ellipsis-two-lines custom-line-height">{content}</p>

      <div className="flex items-center justify-between mt-5">
        <div className="text-xs text-slate-500">{
        tags.map((item, index)=>(
          <span key={index} className="mx-1 p-1 bg-slate-100">#{item}</span>
        ))
        }</div>

        <div className="flex items-center gap-2">
          <MdCreate
            className="icon-btn hover:text-green-600"
            onClick={onEdit}
          />
          <MdDelete
            className="icon-btn hover:text-red-500"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
