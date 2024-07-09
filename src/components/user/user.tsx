import { ReactNode } from "react";
import "./user.scss";

export const User = ({ children }: { children: ReactNode }) => {
  return <div className="user">{children}</div>;
};
