import * as React from "react";
const SearchBar = () => (
<div className="cover">
  <form method="get" action="" className="searchfrom">
    <div className="tb">
      <div className="td"><input type="text" placeholder="Search entire store here..." required/></div>
      <div className="td" id="s-cover">
        <button  type="submit" className="buttonsearch">
          <div className="s-circle"></div>
          <span></span>
        </button>
      </div>
    </div>
  </form>
</div>
);

export default SearchBar;