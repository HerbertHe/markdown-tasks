import { defineConfig } from "tsup"

export const tsup = defineConfig({
    entry: ["src/index.ts"],
	format: ["esm"],
    dts: true,
    clean: true,
    // remove unnecessary packages
    external: [],
})