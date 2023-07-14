import { useParams } from "next/navigation";

import React, { useMemo } from "react";

const useConversation = () => {
  const params = useParams();

  const conversationId = useMemo(() => {
    if (!params?.conversationId) {
      return "";
    }
    return params.conversationId as string;
  }, [params.conversationId]);

  const isOpen = useMemo(() => {
    return !!conversationId;
  }, [conversationId]);

  return useMemo(() => {
    return { isOpen, conversationId };
  }, [conversationId, isOpen]);
};

export default useConversation;
