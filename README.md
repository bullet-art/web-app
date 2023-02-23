<p align="center">
   <br/>
   <a href="https://next-auth.js.org" target="_blank"><img width="150px" src="https://next-auth.js.org/img/logo/logo-sm.png" /></a>
   <h3 align="center">NextAuth.js Example App</h3>
   <p align="center">
   Open Source. Full Stack. Own Your Data.
   </p>
   <p align="center" style="align: center;">
      <a href="https://npm.im/next-auth">
        <img alt="npm" src="https://img.shields.io/npm/v/next-auth?color=green&label=next-auth">
      </a>
      <a href="https://bundlephobia.com/result?p=next-auth-example">
        <img src="https://img.shields.io/bundlephobia/minzip/next-auth?label=next-auth" alt="Bundle Size"/>
      </a>
      <a href="https://www.npmtrends.com/next-auth">
        <img src="https://img.shields.io/npm/dm/next-auth?label=next-auth%20downloads" alt="Downloads" />
      </a>
      <a href="https://npm.im/next-auth">
        <img src="https://img.shields.io/badge/npm-TypeScript-blue" alt="TypeScript" />
      </a>
   </p>
</p>

## Overview

This repo is a migration template from **next-auth-example**, the old deployed version can be found at [`next-auth-example.vercel.app`](https://next-auth-example.vercel.app)

And it is using **NextJS 13** [`experimental appDir features`](https://nextjs.org/docs/basic-features/pages)

- [x] Next 13 + Typescript
- [x] Next-Auth
- [ ] Prisma and Database for persistent (coming soon)
- [ ] Docker for one command self-host (coming soon)
- [ ] Self-host blog system (keep attentions on [flowmos organization](https://github.com/flowmos), it will soon)

## Create Your Own Now

### 1. use this template or clone directly, and install

```bash
git clone https://github.com/aolyang/next-ts-auth-starter [your directory]
cd next-ts-auth-starter [or your directory]
pnpm install # you can remove the lock file and install your version
```

### 2. Configure your local environment

```bash
cp .env.local.example .env.local
```
Add details for one or more providers (e.g. Google, Twitter, GitHub, Email, etc).

Example for github:

1. Go to `Settings/Developer settings` page [https://github.com/settings/developers](https://github.com/settings/developers)
2. create a new auth app use localhost:port for your dev environment
3. Copy the client id and secrets, paste into .env.local
4. `pnpm dev` can start this repo

### 3*. Database is not required

if you don't want to persist user accounts and to support email sign in, skip it.

more details see [NextJS official website](https://nextjs.org/)
