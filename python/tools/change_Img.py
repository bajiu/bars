#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import os.path as path
import json



isNext = False
imgPath = os.getcwd()
list = []


print('请输入类别信息:')
imgTitle = input()
print('上回到哪儿了(没有不填):')
num = input()
if imgTitle == '':
    imgTitle = 'knowbox'

if num == '' and not str(num).isdigit():
    num = 0
if num == 0:
    isNext = True


def main(imgPath):
    marchDir(imgPath)
    print(list)
    data = {
      'list': list
    }
    if isNext:
        with open('list.json', 'w') as f:
            json.dump(data, f,ensure_ascii=False)
    else:
        with open('secondList.json', 'r') as f:
            json.dump(data, f,ensure_ascii=False)


    return


def marchDir(imgPath):
    global num
    imgDir = os.listdir(imgPath)
    for el in imgDir:
        if path.isdir(el):
            marchDir(path.join(imgPath,el))
        else:
            # get the .png
            if path.splitext(el)[1] == '.png' and not str(path.splitext(el)[0]).isdigit():
                temp = { str(path.splitext(el)[0]) : imgTitle + '_' + str(num) + '.png' }
                os.rename(path.join(imgPath,el),path.join(imgPath,imgTitle + '_' + str(num) + '.png'))
                num += 1
                list.append(temp)

    return

if __name__=="__main__":
    main(imgPath)
