// 钉钉 ChannelPlugin 实现
// TODO: 实现 ChannelPlugin 接口

export const dingtalkPlugin = {
  id: "dingtalk",
  meta: {
    id: "dingtalk",
    label: "DingTalk",
    selectionLabel: "DingTalk (钉钉)",
    docsPath: "/channels/dingtalk",
    blurb: "钉钉企业消息",
    aliases: ["ding"],
    order: 71,
  },
  capabilities: {
    chatTypes: ["direct", "channel"],
    media: true,
    reactions: false,
    threads: false,
    edit: false,
    reply: true,
  },
  // TODO: 实现其他必需的适配器
};
