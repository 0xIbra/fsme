const { execSync } = require('child_process');

/**
 * Uses shell ls command and returns an array list of files.
 * Supports regex as you know.
 *
 * @param directory
 * @return array
 */
function lsSync(directory) {
    let res = execSync(`ls ${directory}`).toString().split('\n');
    res.pop();

    return res;
}

/**
 * Returns a defined number of files from a folder.
 * Very useful when you have directories with millions of files.
 * Allows you to iterate through those files without loading the whole list into memory.
 *
 * @param directory
 * @param numberOfResults
 * @return {string[]}
 */
function lseSync(directory, numberOfResults) {
    let res = execSync(`find ${directory} | head -${numberOfResults}`).toString().split('\n');
    res.pop();
    res.shift();

    return res;
}

/**
 * Allows to remove millions of files from a folder without draining memory.
 *
 * @param dir
 * @return void
 */
function cleanDirSync(dir) {
    while (lseSync(dir, 5).length > 0) {
        execSync(`find ${dir} -type f | head -100000 | xargs rm`);
    }
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
    lsSync,
    lseSync,
    cleanDirSync,
    countDirFiles
}