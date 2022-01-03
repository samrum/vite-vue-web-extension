import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import webExtension from "@samrum/vite-plugin-web-extension";
import { ManifestV2, ManifestV3 } from "./src/manifest";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const configEnv = loadEnv(mode, process.cwd(), "");

  const manifest = configEnv.MANIFEST_VERSION === "3" ? ManifestV3 : ManifestV2;

  return {
    resolve: {
      alias: {
        "~/": `${resolve("src")}/`,
      },
    },
    plugins: [
      vue(),
      webExtension({
        manifest,
      }),
    ],
    optimizeDeps: {
      include: ["vue"],
    },
  };
});
