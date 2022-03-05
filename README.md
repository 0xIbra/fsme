fsme
====
**File system** that allows you to handle huge amounts of files without draining the memory,  
particularly useful in serverless environments.


Installation
------------
```shell
npm install fsme
```

API
---

#### Functions

 - `listDirSync`  
    Allows to list files in directory with regex.


 - `cleanDirSync`  
    Allows you to remove files in a folder in a memory friendly way without having to load the list of files into memory.


 - `countDirFiles`  
    Returns the number of files in a directory without draining the memory.