# Deprecated
This template has been deprecated in favor of [@samrum/create-vite-plugin-web-extension](https://github.com/samrum/create-vite-plugin-web-extension).

@samrum/create-vite-plugin-web-extension supports scaffolding new web extension projects using Vue in addition to other frameworks as well as the ability to configure targeted manifest version and whether TypeScript should be enabled.

# vite-vue-web-extension

An example extension built using @samrum/vite-plugin-web-extension, Vite, and vite-plugin-vue

# About
TBD

# Development

This project uses [pnpm](https://pnpm.io/) for package management.

## Lint
    pnpm lint

## Dev
    pnpm dev
HMR based development build.

## Watch
    pnpm watch
Watch based development build. Useful for developing when HMR is not available (ex in Firefox, Manifest V3).

## Build
    pnpm build

## Serve
    pnpm serve:chrome
    pnpm serve:firefox
Loads the current build in `dist` in the specified browser using web-ext
