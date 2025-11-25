// get Current Logged In User from Spark Auth
import { CurrentUser } from "@stackframe/stack";

export const getCurrentUser = async (): Promise<CurrentUser | null> => {
  try {
    const { currentUser } = await import("@stackframe/stack");
    return currentUser;
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
};
