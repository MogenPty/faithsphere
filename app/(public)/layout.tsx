import type React from "react";
import PublicNavigation from "@/components/public/navigation";

interface Params {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: Params) => {
  return (
    <div>
      {/* Navigation */}
      <PublicNavigation />
      <main>{children}</main>
    </div>
  );
};

export default PublicLayout;
