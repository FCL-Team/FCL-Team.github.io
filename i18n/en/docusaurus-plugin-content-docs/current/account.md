---
title: Account setup
sidebar_label: Account setup
description: How to sign in with a Microsoft account, play offline, or use a third-party authentication server.
---

# Account setup

FCL supports three kinds of accounts:

- **Microsoft account** — the official login for people who own Minecraft: Java Edition
- **Offline account** — a local username, useful for single-player and LAN worlds
- **Third-party authentication server** — skin sites and other Yggdrasil-compatible services

You can add several accounts and switch between them from the account menu.

## Microsoft account (official login)

:::warning
Logging in with a Microsoft account requires a Minecraft: Java Edition profile that has been purchased and activated. Without one, the login will not complete.
:::

1. Open the account menu in the top-right corner of the launcher.
2. Choose **Official login** and press **Login**.
3. A device code is shown and copied to your clipboard. Open the login page in a browser, paste the code and press **Next**.
4. Enter your Microsoft account password and wait for the confirmation message.
5. Return to FCL — you are signed in.

## Offline account

1. In the account menu, choose **Offline login** (below the Microsoft login button).
2. Enter a username between 3 and 16 characters.
3. Press **Login**.

:::note
Spaces are not supported — use underscores instead. Newer versions only accept letters, numbers and underscores.
:::

## Third-party authentication server

1. In the account menu, choose **Add authentication server**.
2. Enter the address of a supported Yggdrasil authentication server, for example:
   - LittleSkin: `https://littleskin.cn/api/yggdrasil`
   - Naituskin: `https://naituskin.cn/api/yggdrasil`
3. Visit the server's website, create a character and set a password.
4. Back in FCL, select the authentication server, enter the character name and password, then press **Login**.

:::tip
Only add authentication servers you trust. Third-party servers are not operated by FCL-Team.
:::
