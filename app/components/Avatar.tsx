"use client";
import { User } from "@prisma/client";
import Image from "next/image";
import React from "react";
import useActiveList from "../hooks/useActiveList";
import useIsActiveUser from "../hooks/useIsActiveUser";

interface AvatarProps {
  user?: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  const { isActive } = useIsActiveUser(user?.email!);

  return (
    <div className="relative">
      <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11">
        <Image
          alt="avatar"
          src={user?.image ?? "/images/profile.jpeg"}
          fill
          sizes=""
        />
      </div>
      {isActive && (
        <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 w-2 h-2 md:w-3 md:h-3" />
      )}
    </div>
  );
};

export default Avatar;
