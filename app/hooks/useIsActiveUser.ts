import React from "react";
import useActiveList from "./useActiveList";

const useIsActiveUser = (email: string) => {
  const { members } = useActiveList();

  const isActive = members.indexOf(email) !== -1;

  return { isActive };
};

export default useIsActiveUser;
