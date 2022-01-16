import pkg from "./../package.json";

const sharedManifest = {
  author: pkg.author,
  content_scripts: [
    {
      js: ["src/contentScript/primary/index.ts"],
      matches: ["*://*/*"],
    },
    {
      js: ["src/contentScript/secondary/index.ts"],
      matches: ["*://*/*"],
    },
  ],
  description: pkg.description,
  icons: {
    16: "icons/16.png",
    19: "icons/19.png",
    32: "icons/32.png",
    38: "icons/38.png",
    48: "icons/48.png",
    64: "icons/64.png",
    96: "icons/96.png",
    128: "icons/128.png",
    256: "icons/256.png",
    512: "icons/512.png",
  },
  name: pkg.displayName ?? pkg.name,
  options_ui: {
    page: "src/options/index.html",
    open_in_tab: true,
  },
  permissions: [],
  version: pkg.version,
};

const browserAction = {
  default_icon: {
    16: "icons/16.png",
    19: "icons/19.png",
    32: "icons/32.png",
    38: "icons/38.png",
  },
  default_popup: "src/popup/index.html",
};

export const ManifestV2 = {
  ...sharedManifest,
  background: {
    scripts: ["src/background/script.ts"],
    persistent: false,
  },
  browser_action: browserAction,
  manifest_version: 2,
  options_ui: {
    ...sharedManifest.options_ui,
    chrome_style: false,
  },
  permissions: [...sharedManifest.permissions, "*://*/*"],
};

export const ManifestV3 = {
  ...sharedManifest,
  action: browserAction,
  background: {
    service_worker: "src/background/serviceWorker.ts",
  },
  host_permissions: ["*://*/*"],
  manifest_version: 3,
};
