const { execSync } = require('child_process');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

function listDirSync(directory) {
    return glob(directory);
}

/**
 * Allows to remove millions of files from a folder without draining memory.
 * Be aware, this function removes the directory and recreates it once all files deleted.
 *
 * @param dir
 * @return void
 */
function cleanDirSync(dir) {
    execSync(`rm -r ${dir}`);
    fs.mkdirSync(dir, { recursive: true });
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