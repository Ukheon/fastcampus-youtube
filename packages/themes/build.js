import run from "@ukheon/esbuild-config";
import pkg from "./package.json" assert { type: "json" };

run({
  pkg,
})
