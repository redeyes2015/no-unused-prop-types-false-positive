import { FunctionComponent } from "react";

const Slide: FunctionComponent = ({ children }) => {
  if (typeof children === 'function') {
    return children({ isActive: true });
  }
  return <div>boo</div>
};

export default Slide;