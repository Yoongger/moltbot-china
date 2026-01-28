// @moltbot-china/dingtalk
// 钉钉渠道插件入口

import type { MoltbotPluginApi } from "moltbot/plugin-sdk";
import { dingtalkPlugin } from "./src/channel.js";

export { dingtalkPlugin } from "./src/channel.js";
export { sendMessageDingtalk } from "./src/send.js";

const plugin = {
  id: "dingtalk",
  name: "DingTalk",
  description: "钉钉消息渠道插件",
  configSchema: { type: "object", additionalProperties: false, properties: {} },
  register(api: MoltbotPluginApi) {
    api.registerChannel({ plugin: dingtalkPlugin });
  },
};

export default plugin;
