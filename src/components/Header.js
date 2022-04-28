import React from "react";
import Search from "./Search";

function Header({ items, searchItems }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchItems={searchItems} items={items} />
    </header>
  );
}

export default Header;
