// 钉钉类型定义

import type { DingtalkConfig } from "./config.js";

export type { DingtalkConfig };

export interface DingtalkAccount {
  accountId: string;
  enabled: boolean;
  configured: boolean;
  clientId?: string;
}

export interface DingtalkMessageContext {
  conversationId: string;
  messageId: string;
  senderId: string;
  senderNick?: string;
  chatType: "1" | "2"; // 1: 单聊, 2: 群聊
  content: string;
  contentType: string;
  mentionedBot: boolean;
  atUsers?: Array<{ dingtalkId: string }>;
}

export interface DingtalkSendResult {
  messageId: string;
  conversationId: string;
}
