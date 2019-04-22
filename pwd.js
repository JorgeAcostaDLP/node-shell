module.exports = function pwd() {
  process.stdout.write(`Current directory: ${process.cwd()}`);
  // process.stdout.write('\n prompt > ');
}

