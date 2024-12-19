let CD = '~';
const files = [];
const directories = ['git', 'shell'];

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
  if (files.length === 0 && directories.length === 0) {
    return undefined;
  }

  return files.join(' ') + directories.join(' ');
}

const touch = function (args) {
  files.push(args);
  return undefined;
}

const rn = function (args) {
  const filePath = args;

  if (!directories.includes(filePath[0])) {
    return 'cd: no such file or directory: ' + filePath[0];
  }

  const indexOfFile = directories.indexOf(filePath[0]);
  directories.splice(indexOfFile, 1, filePath[1]);

  return undefined;
}

const runCommand = function (command) {
  const [cmd, ...args] = command.split(' ');

  switch (cmd) {
    case 'cd': return cd(...args);
    case 'echo': return echo(args);
    case 'ls': return ls(args);
    case 'touch': return touch(args);
    case 'rn': return rn(args);
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