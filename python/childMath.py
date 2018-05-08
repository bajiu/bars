# -*- coding: utf-8 -*-

# from docx import Document
# from docx.shared import Inches
#
#
#
#
#
#
#
#
# document = Document()
#
# document.add_heading('文档标题', 0)
#
# p = document.add_paragraph('这是一个自然段 ')
# p.add_run('bold').bold = True
# p.add_run(' 还有 ')
# p.add_run('italic.').italic = True
#
# document.add_heading('1级别标题', level=1)
# document.add_paragraph('引用', style='IntenseQuote')
#
# document.add_paragraph(
#     '符号列表', style='ListBullet'
# )
# document.add_paragraph(
#     '数字列表t', style='ListNumber'
# )
#
#
# table = document.add_table(rows=3, cols=3)
# hdr_cells = table.rows[0].cells
# hdr_cells[0].text = '第一列'
# hdr_cells[1].text = '第二列'
# hdr_cells[2].text = '第三列'
#
# hdr_cells = table.rows[1].cells
# hdr_cells[0].text = '1'
# hdr_cells[1].text = '21'
# hdr_cells[2].text = 'qwertyuiop'
#
# hdr_cells = table.rows[2].cells
# hdr_cells[0].text = '2'
# hdr_cells[1].text = '43'
# hdr_cells[2].text = 'asdfghjkl'
#
# document.add_page_break()
#
# document.save('demo.docx')
#

import numpy as np;
import random

# 加法好朋友数
def freind(arg):
    num = arg
    arr = []
    qa = np.random.randint( low = 1,high = 10, size = num )
    for i in qa:
        q = ''
        a = ''
        n = random.randint(1,9)
        r = random.randint(0,3)
        m = random.randint(1,9)
        # 只有加
        if r == 0:
            q = str(10 - n) + '+' + str(m) + '+' + str(n)
            a = 10 + m
        elif r == 1:
            q = str(10 - n) + '+' + str(n) + '+' + str(m)
            a = 10 + m
        # 还有减
        elif r == 2:
            q = str(10 - n) + '+' + str(n) + '-' + str(m)
            a = 10 - m
        else:
            q = str(10 - n) + '-' + str(m) + '+' + str(n)
            a = 10 - m
        arr.append((q,a))
    print(arr)
    return arr


    pass

# 同尾数
def tail(arg):
    num = arg
    arr = []
    qa = np.random.randint( low = 1,high = 10, size = num )
    for i in qa:
        q = ''
        a = ''
        n = random.randint(1,9)
        r = random.randint(0,3)
        m = random.randint(1,9)
        # 只有加
        if r == 0:
            q = str(10 + n) + '+' + str(m) + '-' + str(n)
            a = 10 + m
        elif r == 1:
            q = str(10 + n) + '-' + str(n) + '+' + str(m)
            a = 10 + m
        # 还有减
        elif r == 2:
            q = str(10 + n) + '-' + str(n) + '-' + str(m)
            a = 10 - m
        else:
            q = str(10 + n) + '-' + str(m) + '-' + str(n)
            a = 10 - m
        arr.append((q,a))
    print(arr)
    return arr


# 带括号的加法
def bracketadd(arg):
    pass

# 进位加法
def carryadd(arg):
    num = arg
    arr = []
    qa = np.random.randint( low = 5,high = 10, size = num )
    for i in qa:
        m = random.randint(5,10)
        q = str(i) + '+' + str(m)
        a = i + m
        arr.append((q,a))
    print(arr)
    return arr
# 退位减法
def backsub(arg):
    num = arg
    arr = []
    qa = np.random.randint( low = 10,high = 20, size = num )
    for i in qa:
        m = random.randint((i-9),i)
        q = str(i) + '-' + str(m)
        a = i - m
        arr.append((q,a))
    print(arr)
    return arr


backsub(20)
# carryadd(20)
# tail(20)
# freind(20)

#
