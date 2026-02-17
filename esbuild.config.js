import build from "./config/esbuild.defaults.js"

const basePath = (process.env.BASE_PATH || "").replace(/^\/$/, "")

/**
 * @typedef { import("esbuild").BuildOptions } BuildOptions
 * @type {BuildOptions}
 */
const esbuildOptions = {
  publicPath: `${basePath}/_bridgetown/static`,
  globOptions: {
    excludeFilter: /\.(dsd|lit)\.css$/
  }
}

build(esbuildOptions)
