const { exec } = require('child_process');

const arg = process.argv[2];
let command = './build/main.o';

if (arg) {
    command = command + ' ' + arg;
}

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.log('error status code:', error.code);
    }

    if (stderr) {
        console.log('stderr:', stderr);
    }

    if (error || stderr) {
        return;
    }

    console.log(stdout);
});
