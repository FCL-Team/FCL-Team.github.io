---
title: Build from source
sidebar_label: Build from source
description: How to build Fold Craft Launcher from source with Android Studio.
---

# Build from source

FCL is an Android application written in Java and Kotlin. You can build it locally with Android Studio and the Android SDK and NDK.

## Requirements

- [Android Studio](https://developer.android.com/studio) (latest stable)
- Android SDK and NDK packages
- Git
- A machine with enough RAM to run the Gradle build

## Clone the repository

```bash
git clone https://github.com/FCL-Team/FoldCraftLauncher.git
cd FoldCraftLauncher
```

## Open and build

1. Open the cloned directory in Android Studio.
2. Let Android Studio download the SDK and NDK versions requested by the Gradle sync. The app module currently pins NDK `27.0.12077973`; installing the version Android Studio suggests is usually enough.
3. Wait for the Gradle sync to finish.
4. Select the **FCL** module and run a **debug** build to install it on a connected device or emulator.

To build an APK from the command line:

```bash
./gradlew :FCL:assembleDebug
```

The APK is written to `FCL/build/outputs/apk/debug/`.

:::note
Release builds require your own signing configuration. Do not use the official FCL signing keys for modified builds.
:::

## Troubleshooting

- **Gradle sync fails** — make sure the SDK and NDK versions requested by the project are installed and that your JDK matches the one Android Studio bundles.
- **Native build errors** — check that the NDK version matches the one pinned in `FCL/build.gradle.kts`.
- **Questions about the code** — open a discussion or ask in the [Discord server](https://discord.gg/ffhvuXTwyV) / [QQ group](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=LwxydGEvBZJnn09sXOjkQo9tuuLcYwx5&authKey=seyY5pPUCIHMWS5FqVryq926T0G2GarSXetpxxV9DJxBVt%2FPcg1vxN%2F%2FXpsCowyk&noverify=0&group_code=762054349).
