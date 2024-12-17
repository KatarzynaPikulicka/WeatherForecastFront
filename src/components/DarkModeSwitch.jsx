import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export function DarkModeSwitch({ toggleDarkMode }) {
  return (
    <div>
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onClick={toggleDarkMode}
      />
      <label htmlFor="checkbox" className="checkbox-label">
        <FontAwesomeIcon icon={faMoon} id="switch-moon" />
        <FontAwesomeIcon icon={faSun} id="switch-sun" />
        <span className="ball"></span>
      </label>
    </div>
  );
}
