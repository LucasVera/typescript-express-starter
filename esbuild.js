const [watch] = process.argv.slice(2);
const { build } = require("esbuild");

build({
  entryPoints: ["./src/index.ts"],
  tsconfig: "./tsconfig.json",
  bundle: true,
  sourcemap: true,
  minify: true,
  target: "node14",
  platform: "node",
  define: { "require.resolve": undefined },
  outdir: "./dist",
  watch: watch && {
    onRebuild(err, result) {
      if (err) console.error("watch build failed: ", error);
      else console.log("watch build succeeded: ", result);
    },
  },
})
  .then((_result) => watch && console.log("watching for changes..."))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
