import { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { LuCodepen } from "react-icons/lu";

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const onLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };

  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  };

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup" ;

  const isHomePage = location.pathname === "/" || location.pathname === "/privacy" || location.pathname === "/terms"

  return (
    <div
      className="bg-white flex items-center justify-between px-2 md:px-6 py-2 drop-shadow shadow-sm fixed w-full top-0"
    >
      <h2
        className={`text-l md:text-xl font-medium text-black py-2 ${
          isAuthPage ? "text-center w-full" : ""
        }`}
      >
        <Link to={userInfo? '/dashboard' : '/'} className={`flex items-center gap-1 ${
        isAuthPage ? "justify-center" : ""}`}>
          <LuCodepen className="text-3xl" />
          <span className={`${!isAuthPage && !isHomePage ? 'hidden md:block' : ''}`}>JagoCatat</span>
        </Link>
      </h2>

      {!isAuthPage && (
        <>
          <SearchBar
            value={searchQuery}
            onChange={({ target }) => {
              setSearchQuery(target.value);
            }}
            handleSearch={handleSearch}
            onClearSearch={onClearSearch}
          />

          <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
        </>
      )}

    </div>
  );
};

export default Navbar;
