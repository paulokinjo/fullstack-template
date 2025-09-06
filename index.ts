import concurrently from "concurrently";

concurrently([
  {
    name: "server",
    command: "bun dev",
    cwd: "packages/server",
    prefixColor: "blue",
  },
  {
    name: "client",
    command: "bun dev --host",
    cwd: "packages/client",
    prefixColor: "green",
  },
]);
