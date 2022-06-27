import React, { useEffect, useState } from "react";
import UserList from "./components/UserList";
import { Input } from "antd";
import styles from "./App.module.css";
import Unchange from "./components/Unchange";

const App = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <Input
          onChange={(e) => setSearchInput(e.target.value)}
          className=""
          placeholder="Search"
          size="large"
        />
      </div>
      <UserList search={searchInput} />
    </div>
  );
};

export default App;
