﻿// 모듈을 추출합니다.
var fs = require('fs');

// 파일을 읽습니다.
try {
    var data = fs.readFileSync('TextFile.txt', 'utf8');
    console.log(data);
} catch (e) {
    console.log(e);
}

// 파일을 저장합니다.
try {
    fs.writeFileSync('TextFile.txt', 'Hello World .. !', 'utf8');
    console.log('FILE WRITE CONPLETE');
} catch (e) {
    console.log(e);
}