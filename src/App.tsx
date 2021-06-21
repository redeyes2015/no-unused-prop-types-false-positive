import React, { FunctionComponent } from "react";
import "./styles.css";
import Slide from "./Slide";

interface SlideProps {
  isActive: boolean;
}

const MyCard: FunctionComponent<{ doo: boolean }> = ({ doo }) => {
  return doo ? <div>1</div> : <div>0</div>;
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Slide>{({ isActive }: SlideProps) => <MyCard doo={isActive} /> }</Slide>
    </div>
  );
}
