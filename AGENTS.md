# Repository Guidelines

## Project Purpose
Moltbot China is an open-source extension set that adds China-region messaging channels to Moltbot (Feishu, DingTalk, WeCom, QQ). The goal is to provide simple, reliable chat connectivity and a clean plugin surface for Moltbot users in China, with voice features implemented via Node.

## Docs To Use
- Plugin development: `doc/moltbot/moltbot-plugin.md`
- Plugin manifest: `doc/moltbot/moltbot-plugin-manifest.md`
- Channels overview and targets: `doc/moltbot/moltbot-channels.md`
- Agent tools: `doc/moltbot/moltbot-agent-tools.md`
- Reference implementations: `doc/reference-projects/`
- Architecture design: `doc/architecture.md`

## Project Structure

```
moltbot-china/
├── package.json
├── pnpm-workspace.yaml
├── tsconfig.base.json
│
├── packages/
│   └── shared/                      # 共享工具库（内部使用，不发布）
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           ├── index.ts
│           ├── policy/              # 策略引擎
│           │   ├── index.ts
│           │   ├── dm-policy.ts
│           │   ├── group-policy.ts
│           │   └── allowlist.ts
│           ├── message/             # 消息工具
│           │   ├── index.ts
│           │   ├── history.ts
│           │   └── chunker.ts
│           ├── http/                # HTTP 工具
│           │   ├── index.ts
│           │   ├── client.ts
│           │   └── retry.ts
│           └── types/
│               └── common.ts
│
├── extensions/
│   └── dingtalk/                    # @moltbot-china/dingtalk
│       ├── moltbot.plugin.json
│       ├── package.json
│       ├── tsconfig.json
│       ├── index.ts
│       └── src/
│           ├── channel.ts           # ChannelPlugin 实现
│           ├── client.ts            # Stream SDK 封装
│           ├── bot.ts               # 消息处理
│           ├── monitor.ts           # Stream 连接
│           ├── send.ts              # 发送消息
│           ├── media.ts             # 媒体处理
│           ├── outbound.ts          # 出站适配器
│           ├── config.ts            # 配置 schema
│           └── types.ts
│
└── doc/
    ├── architecture.md              # 架构设计文档
    ├── moltbot/                     # Moltbot 插件规范
    └── reference-projects/          # 参考实现
```

## Core Conventions
- Each plugin must include `moltbot.plugin.json` with a JSON Schema (even if empty).
- Plugins register channels via `api.registerChannel({ plugin })`.
- Channel configuration lives under `channels.<id>`; multi-account uses `channels.<id>.accounts.<accountId>`.
- Keep channels focused on message receive/send. Defer extra features unless required.
- Voice features use Node-based tooling (no Python voice stack).

## Suggested Layout (for new plugins)
- `extensions/<channel-id>/moltbot.plugin.json`
- `extensions/<channel-id>/package.json`
- `extensions/<channel-id>/index.ts`
- `extensions/<channel-id>/src/*`

## Safety
- Treat all inbound messages as untrusted input.
- Do not commit real tokens, secrets, or IDs; use obvious placeholders.
