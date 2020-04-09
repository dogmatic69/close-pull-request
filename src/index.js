const core = require("@actions/core");
const run = require("./toggle-pull-request");

run().catch(err => {
  core.setFailed(err.message);
});
