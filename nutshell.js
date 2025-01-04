import { root } from "./data.js";

const restore1Lvl = (path) => {
  const prevLvl = path.pathStack.pop();
  path.currentPath = prevLvl;
  path.promptString = `${path.promptString.match(/.*(?=\/)/)[0]} %`;
};

const isObject = (a) => {
  return !Array.isArray(a) && typeof a === "object";
};

const cd = (path, x) => {
  if (x === ".") return undefined;
  if (x === "..") return restore1Lvl(path);
  if (!(x in path.currentPath)) return `cd: no such file or directory: ${x}`;
  if (!isObject(path.currentPath[x])) return `cd: not a directory: ${x}`;

  path.pathStack = [...path.pathStack, path.currentPath];
  path.currentPath = path.currentPath[x];
  path.promptString = `${path.promptString.split(" %")[0]}/${x} %`;
};

const ls = (path) => {
  return Object.keys(path.currentPath).join("\n");
};

const runCmd = (cmd, params) => {
  const cmds = {
    cd: cd,
    ls: ls,
  };

  if (!(cmd in cmds)) return `zsh: command not found: ${cmd}`;
  return cmds[cmd](...params);
};

const nutshell = (path) => {
  const cmd = prompt(path.promptString);
  const array = cmd.match(/[\w.]+/g);

  return runCmd(array[0], [path, ...array.slice(1)]);
};

const main = () => {
  const path = {
    promptString: "shell/root %",
    currentPath: root,
    pathStack: [],
  };

  while (true) {
    const result = nutshell(path, root);
    if (result !== undefined) console.log(result);
  }
};

main();
