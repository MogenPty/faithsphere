import type React from "react";

interface Params {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: Params) => {
  return (
    <div>
      <nav className="flex items-center justify-between p-1">
        <div>FaithSphere</div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default PublicLayout;
