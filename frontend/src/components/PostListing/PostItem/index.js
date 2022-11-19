import Badge from "../../Badge";
import { FaCog, FaThumbsUp, FaCommentAlt, FaShare } from "react-icons/fa";
import { BsThreeDots, BsDot } from "react-icons/bs";
const PostItem = () => {
  return (
    <div className="rounded-lg border bg-white shadow-md mt-5">
      <div className="px-4 flex justify-between items-center py-2">
        <div className="flex gap-2 ">
          <Badge>
            <img
              className="w-full h-full rounded-full object-cover"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
            />
          </Badge>
          <div className="flex justify-between flex-col">
            <h1 className="font-bold text-sm">Usman Ghani Qureshi</h1>
            <div className="flex text-xs items-center">
              <p>8h</p>
              <BsDot />
              <FaCog />
            </div>
          </div>
        </div>
        <BsThreeDots />
      </div>
      <div>
        <p className="px-2 py-1">
          Cafe Imran won the Best Highway Restaurant award at the 2nd Annual
          Culinary Awards '22 for its outstanding flavor and unmatched hygiene.
          The annual Culinary Awards are organized by Master Class Pakistan for
          appreciating different restaurants and hotels for their services to
          the food industry. Cafe Imran is renowned for its many distinctive
          dishes and highly pleasant staff.
        </p>
        <div className="w-full h-80">
          <img
            className="w-full h-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
          />
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="flex text-sm justify-between items-center">
          <p>2 Likes</p>
          <div className="flex items-center gap-2">
            <p>3 Comments</p>
            <p>2 Shares</p>
          </div>
        </div>
        <div className="w-full my-2 border-none h-[0.5px] bg-slate-400" />
        <div className="flex gap-1 font-medium text-slate-500 items-center">
          <div className="flex gap-2 py-1 items-center justify-center flex-1 hover:bg-slate-100 duration-150 transition-colors rounded-lg">
            <FaThumbsUp />
            <p>Like</p>
          </div>
          <div className="flex gap-2 py-1 items-center justify-center flex-1 hover:bg-slate-100 duration-150 transition-colors rounded-lg">
            <FaCommentAlt />
            <p>Comment</p>
          </div>
          <div className="flex  gap-2 py-1 items-center justify-center flex-1 hover:bg-slate-100 duration-150 transition-colors rounded-lg">
            <FaShare />
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
