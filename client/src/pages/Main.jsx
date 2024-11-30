import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MailContainer from "../components/MailContainer";

const Main = () => {
  const [bar,tooglebar]=useState(false)
  return (
    <div>
      <Header tooglebar={tooglebar} bar={bar}/>
      <div className="flex">
        <Sidebar bar={bar}/>
        <div className="bg-lightgray w-full">
          <MailContainer bar={bar}/>
        </div>
      </div>
    </div>
  );
};

export default Main;
