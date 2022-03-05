fsme
====
> file system - memory efficient

**File system** that allows you to handle huge amounts of files without draining the memory,  
particularly useful in serverless environments.

OS
--
**Linux** only, does not support Windows.

Installation
------------
```shell
npm install fsme
```

API
---

#### Functions

 - `lsSync`  
    Allows to list files in directory with regex support.


 - `lseSync`  
    Allows you to retrieve a number of files from a folder containing millions of files without draining memory.


 - `cleanDirSync`  
    Allows you to remove files in a folder in a memory friendly way without having to load the list of file names into memory.


 - `countDirFiles`  
    Returns the number of files in a directory without draining memory.