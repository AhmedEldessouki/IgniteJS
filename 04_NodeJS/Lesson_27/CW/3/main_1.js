﻿'use strict';

// Алгоритма загрузки модулей в node.js в данном примере: 
// 1. Поиск файла с именем запрошенного модуля в текущей директории
// 2. Поиск директории с именем запрошенного модуля, поиск внутри директории файла index.js 


// test_1 - директория, в которой находится файл index.js 
var test = require('./test_1');

test(); 