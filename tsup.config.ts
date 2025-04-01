import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["./src/index.ts"],
  dts: {
    resolve: true,
    compilerOptions: {
      moduleResolution: "node",
      paths: {
        "@/*": ["./src/*"],
        "@hooks": ["./src/hooks/index"],
        "@hooks/*": ["./src/hooks/*"],
      },
    },
  },
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
  esbuildOptions(options) {
    options.alias = {
      "@": "./src",
      "@hooks": "./src/hooks/index",
      "@hooks/*": "./src/hooks/*",
    };
    return options;
  },
});
