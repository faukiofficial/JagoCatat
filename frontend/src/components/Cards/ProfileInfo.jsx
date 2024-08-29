import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ userInfo, onLogout }) => {
  return (
    <div className="flex items-center gap-1 md:gap-3">
      {userInfo && (
        <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {getInitials(userInfo.fullName)}
      </div>
      )}

      {userInfo ? (
        <div>
        <p className="text-xs md:text-sm font-bold hidden md:block">
          {userInfo.fullName}
        </p>
        <button
          className="text-xs md:text-sm text-teal-700 underline"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
      ) : (
        <a
          className="text-xl md:text-sm text-teal-700 underline"
          href="/login"
        >
          Login
        </a>
      )}
    </div>
  );
};

export default ProfileInfo;
