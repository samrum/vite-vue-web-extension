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
