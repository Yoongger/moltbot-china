// 钉钉配置 schema
import { z } from "zod";

export const DingtalkConfigSchema = z.object({
  enabled: z.boolean().optional(),
  clientId: z.string().optional(),
  clientSecret: z.string().optional(),
  connectionMode: z.enum(["stream", "webhook"]).optional().default("stream"),
  dmPolicy: z.enum(["open", "pairing", "allowlist"]).optional().default("pairing"),
  groupPolicy: z.enum(["open", "allowlist", "disabled"]).optional().default("allowlist"),
  requireMention: z.boolean().optional().default(true),
  allowFrom: z.array(z.string()).optional(),
  groupAllowFrom: z.array(z.string()).optional(),
});

export type DingtalkConfig = z.infer<typeof DingtalkConfigSchema>;
