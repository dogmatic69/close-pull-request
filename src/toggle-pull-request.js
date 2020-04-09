const core = require("@actions/core");
const github = require("@actions/github");

module.exports = async () => {
  const token = process.env["GITHUB_TOKEN"] || "";
  if (token === "") {
    throw new Error('No token provided');
  }

  const client = new github.GitHub(token);

  core.info("Updating the state of a pull request to closed");
  await client.pulls.update({
    ...github.context.repo,
    pull_number: github.context.issue.number,
    state: "closed"
  });

  core.info("Updating the state of a pull request to open");
  await client.pulls.update({
    ...github.context.repo,
    pull_number: github.context.issue.number,
    state: "open"
  });

  core.info(`Manipulated the PR ${github.context.issue.number}`);
};
