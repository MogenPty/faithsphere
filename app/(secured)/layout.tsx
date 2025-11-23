import { UserButton } from "@stackframe/stack";
import type React from "react";

interface Params {
  children: React.ReactNode;
}

const SecuredLayout = ({ children }: Params) => {
  return (
    <div>
      <nav className="flex items-center justify-between p-1">
        <div>FaithSphere</div>
        {/* Other nav items */}
        <UserButton /> {/* Provides sign-out built in */}
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default SecuredLayout;
