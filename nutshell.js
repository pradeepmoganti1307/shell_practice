let CD = '~';
const files = [];
const directories = ['git_practice', 'nutshell'];

const PS1 = function (CD) {
  return 'pradeepmoganti@Pradeeps-MacBook-Pro ' + CD + ' %';
}

const cd = function (args) {
  const filePath = args.split('/').at(-1);

  if (directories.includes(filePath)) {
    CD = filePath;
    return undefined;
  }

  return 'cd: no such file or directory: ' + filePath;
}

const echo = function (args) {
  return args.join(' ');
}

const ls = function (args) {
  return files.length === 0 ? undefined : files.join(' ');
}

const touch = function (args) {
  files.push(args);
  return undefined;
}

const runCommand = function (command) {
  const [cmd, ...args] = command.split(' ');

  switch (cmd) {
    case 'cd': return cd(...args);
    case 'echo': return echo(args);
    case 'ls': return ls(args);
    case 'touch': return touch(args);
  }

  return 'parse code 0300: terminal on update [-d][--help][--forcestop/exit]';
}

function displayResult(message) {
  if (message !== undefined) {
    console.log(message);
  }
}

while (true) {
  const command = prompt(PS1(CD));
  const message = runCommand(command);
  displayResult(message);
}