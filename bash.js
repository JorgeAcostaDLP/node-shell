const pwd = require('./pwd.js');
const ls =  require('./ls.js');

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {

    const cmd = data.toString().trim();
    if(cmd === 'pwd') {
        pwd()
    }
    else if (cmd === 'ls') {
        ls()
    }
    else {
        process.stdout.write(`${cmd} is not a recognized command.`);
        // process.stdout.write('\n prompt > ');
    }
    process.stdout.write('\nTEST ');
});
