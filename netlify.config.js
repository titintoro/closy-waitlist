module.exports = {
  build: {
    publish: "dist",
    command: "npm run build"
  },
  dev: {
    command: "npm run dev",
    port: 8888,
    framework: "#custom"
  }
}; 