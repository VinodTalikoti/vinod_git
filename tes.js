const prompt = require('prompt-sync')({sigint: true});
const fs = require('fs');
const dPath= prompt('Enter the path of the folder (ex: C:\\Users\\vinod\\Desktop\\startup_): ');

const dir = dPath + '\\' + 'obfuscate';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
