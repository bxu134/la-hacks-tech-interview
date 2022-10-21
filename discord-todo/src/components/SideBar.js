import { BsPlus } from "react-icons/bs";
import { MdSpaceDashboard, MdDarkMode, MdLightMode } from "react-icons/md";
import useDarkMode from "../hooks/useDarkMode";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col
                  bg-white dark:bg-gray-900 shadow-xl rounded-r-md"
    >
      <SideBarIcon icon={<BsPlus size="28" />} text="Add" />
      <Divider />
      <SideBarIcon icon={<MdSpaceDashboard size="28" />} text="Notes" />
      <ThemeToggle />
      <div class="bottom-0 left-0 m-2 absolute" onClick={() => navigate("/")}>
        <SideBarIcon icon={<BiArrowBack size="28" />} text="Back" />
      </div>
    </div>
  );
};

const ThemeToggle = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <SideBarIcon icon={<MdLightMode size="28" />} text="Light Mode" />
      ) : (
        <SideBarIcon icon={<MdDarkMode size="32" />} text="Dark Mode" />
      )}
    </span>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
