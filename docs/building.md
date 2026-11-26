---
title: 从源码构建
sidebar_label: 从源码构建
description: 如何使用 Android Studio 从源码构建 Fold Craft Launcher。
---

# 从源码构建

FCL 是一款用 Java 和 Kotlin 编写的 Android 应用。你可以在本地使用 Android Studio 以及 Android SDK 和 NDK 构建它。

## 环境要求

- [Android Studio](https://developer.android.com/studio)（最新稳定版）
- Android SDK 和 NDK 包
- Git
- 一台内存足以运行 Gradle 构建的电脑

## 克隆仓库

```bash
git clone https://github.com/FCL-Team/FoldCraftLauncher.git
cd FoldCraftLauncher
```

## 打开并构建

1. 在 Android Studio 中打开克隆下来的目录。
2. 让 Android Studio 下载 Gradle 同步所需的 SDK 和 NDK 版本。应用模块目前固定使用 NDK `27.0.12077973`；安装 Android Studio 建议的版本通常就够了。
3. 等待 Gradle 同步完成。
4. 选择 **FCL** 模块并运行 **debug** 构建，将其安装到已连接的设备或模拟器上。

通过命令行构建 APK：

```bash
./gradlew :FCL:assembleDebug
```

APK 会输出到 `FCL/build/outputs/apk/debug/`。

:::note
发布构建需要你自己的签名配置。请勿为修改过的构建使用 FCL 官方签名密钥。
:::

## 疑难解答

- **Gradle 同步失败**——请确认项目所需的 SDK 和 NDK 版本已安装，并且你的 JDK 与 Android Studio 内置的版本一致。
- **原生构建错误**——检查 NDK 版本是否与 `FCL/build.gradle.kts` 中固定的版本一致。
- **关于代码的疑问**——发起讨论，或在 [Discord 服务器](https://discord.gg/ffhvuXTwyV) / [QQ 群](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=LwxydGEvBZJnn09sXOjkQo9tuuLcYwx5&authKey=seyY5pPUCIHMWS5FqVryq926T0G2GarSXetpxxV9DJxBVt%2FPcg1vxN%2F%2FXpsCowyk&noverify=0&group_code=762054349) 中提问。
