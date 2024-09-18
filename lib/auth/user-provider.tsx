"use client";

import { createContext, ReactNode } from "react";
import { use } from "react";

type User = {
  name: string;
  email: string;
};

type UserPromise = Promise<User | null>;

const UserContext = createContext<UserPromise | null>(null);

export function useUser() {
  let userPromise = use(UserContext);
  if (!userPromise) {
    throw new Error("useUser must be used within a UserProvider");
  }
  const user = use(userPromise);
  return user;
}

export function UserProvider({
  children,
  userPromise,
}: {
  children: ReactNode;
  userPromise: UserPromise;
}) {
  return (
    <UserContext.Provider value={userPromise}>{children}</UserContext.Provider>
  );
}
