const { execSync } = require('child_process');
const glob = require('glob');
const path = require('path');

function listDirSync(directory) {
    return glob(directory);
}

/**
 * Allows to remove millions of files from a folder without draining memory.
 *
 * @param dir
 * @return void
 */
function cleanDirSync(dir) {
    dir = path.join(dir, '*');
    execSync(`for f in ${dir}; do rm "$f"; done`);
}

/**
 * Fast and memory efficient way to count number of files in directory via linux shell.
 *
 * @param dir
 * @return {number}
 */
function countDirFiles(dir) {
    let countString = execSync(`ls -f ${dir} | wc -l`);

    return Number.parseInt(countString) - 2;
}

module.exports = {
    listDirSync,
    cleanDirSync,
    countDirFiles
}