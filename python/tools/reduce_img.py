#!/usr/bin/env python
# -*- coding: utf-8 -*-

import tinify,os,json
import os.path as path
tinify.key = ""
def main():
    assetsPath = path.abspath('assets')
    distPath = path.abspath('dist')
    if not os.path.exists(assetsPath):
        print('=========================')
        print('找不到assets文件夹')
        print('=========================')
        return False
    if not os.path.exists(distPath):
        os.mkdir(distPath);
    marchDir(assetsPath);
    return

def marchDir(dirPath):
    listDir = os.listdir(dirPath)
    for el in listDir:
        filePath = path.join(dirPath,el)
        distPath = dirPath.replace("assets", "dist");
        if path.isdir(filePath):
            if not os.path.exists(path.join(distPath,el)):
                os.makedirs(path.join(distPath,el));
            marchDir(filePath)
        else:
            if path.splitext(el)[1] == '.png' or path.splitext(el)[1] == '.jpg':
                print(path.join(filePath))
                source = tinify.from_file(path.join(filePath))
                source.to_file(path.join(distPath,el))
    return
if __name__=="__main__":
    main()




#
