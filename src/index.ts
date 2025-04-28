import("./bootstrap").then((app: any) => {
  console.log("QECG core App is bootstrapped.");
  return app.default();
});
export {}; // Alternatively, you can set the 'isolatedModules' property to 'true' into 'tsconfig.json' file.
