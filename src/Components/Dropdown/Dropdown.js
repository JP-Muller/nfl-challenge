import React from "react";
import "./Dropdown.css";


function Dropdown(props) {
  const [dropdownToggled, toggleDropdown] = React.useState(false);
  const [week, setWeek] = React.useState(null);
  let { changeDateFilter, dateAscending, getGamesByWeek } = props;

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      getGamesByWeek(week);
      toggleDropdown(!dropdownToggled);
    }
  }

  function searchByWeek(week) {
    if (week > 1 && week < 18) {
      getGamesByWeek(week);
      toggleDropdown(!dropdownToggled);
    }
  }

  return (
    <section id="dropdown">
      <button onClick={() => toggleDropdown(!dropdownToggled)}>
        Filter <i className="fas fa-caret-down" />
      </button>
      <div className={dropdownToggled ? "dropdown-list show" : "dropdown-list"}>
        <div>
          <p style={{ fontSize: "11px" }}>Search by Week:</p>
          <input
            type="number"
            min="1"
            max="17"
            placeholder="1-17 Only"
            onKeyDown={handleKeyDown}
            onChange={e => setWeek(e.target.value)}
          />
          <span title="Search" id="search-icon">
            <i className="fas fa-search" onClick={() => searchByWeek(week)} />
          </span>
        </div>
        <p className="filter-item" onClick={() => changeDateFilter()}>
          Date: {dateAscending ? "Ascending" : "Descending"}
        </p>
      </div>
    </section>
  );
}

export default Dropdown;
