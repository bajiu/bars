# -*- coding: utf-8 -*-

from docx import Document
from docx.shared import Inches
import numpy as np;
import random
#
#
#
#
#
#
#
#



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

#


# freind(20)
# backsub(20)
# carryadd(20)
# tail(20)




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
    # print(arr)
    return arr


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

document = Document()
document.add_heading('加法好朋友数题目', 0)
table = document.add_table(rows=2, cols=10)
hdr_cells = table.rows[0].cells
for i in range(10):
    hdr_cells[i].text = str(freind(20)[i][0])

hdr_cells = table.rows[1].cells
for j in range(10):
    hdr_cells[j].text = str(freind(20)[j+10][0])
document.save('加法好朋友数题目.docx')



document = Document()
document.add_heading('加法好朋友数答案', 0)
table = document.add_table(rows=2, cols=10)
hdr_cells = table.rows[0].cells
for i in range(10):
    hdr_cells[i].text = str(freind(20)[i][1])

hdr_cells = table.rows[1].cells
for j in range(10):
    hdr_cells[j].text = str(freind(20)[i][1])
document.save('加法好朋友数答案.docx')






document = Document()
document.add_heading('减法同尾数题目', 0)
table = document.add_table(rows=2, cols=10)
hdr_cells = table.rows[0].cells
for i in range(10):
    hdr_cells[i].text = str(tail(20)[i][0])

hdr_cells = table.rows[1].cells
for j in range(10):
    hdr_cells[j].text = str(tail(20)[j+10][0])
document.save('减法同尾数题目.docx')


document = Document()
document.add_heading('减法同尾数答案', 0)
table = document.add_table(rows=2, cols=10)
hdr_cells = table.rows[0].cells
for i in range(10):

    hdr_cells[i].text = str(tail(20)[i][1])

hdr_cells = table.rows[1].cells
for j in range(10):
    hdr_cells[j].text = str(tail(20)[j+10][1])
document.save('减法同尾数答案.docx')




document = Document()
document.add_heading('进位加法题目', 0)
table = document.add_table(rows=2, cols=10)
hdr_cells = table.rows[0].cells
for i in range(10):

    hdr_cells[i].text = str(carryadd(20)[i][0])

hdr_cells = table.rows[1].cells
for j in range(10):
    hdr_cells[j].text = str(carryadd(20)[j+10][0])
document.save('进位加法题目.docx')




document = Document()
document.add_heading('进位加法答案', 0)
table = document.add_table(rows=2, cols=10)
hdr_cells = table.rows[0].cells
for i in range(10):

    hdr_cells[i].text = str(carryadd(20)[i][0])

hdr_cells = table.rows[1].cells
for j in range(10):
    hdr_cells[j].text = str(carryadd(20)[j+10][0])
document.save('进位加法答案.docx')





document = Document()
document.add_heading('退位减法题目', 0)
table = document.add_table(rows=2, cols=10)
hdr_cells = table.rows[0].cells
for i in range(10):

    hdr_cells[i].text = str(backsub(20)[i][0])

hdr_cells = table.rows[1].cells
for j in range(10):
    hdr_cells[j].text = str(backsub(20)[j+10][0])
document.save('退位减法题目.docx')




document = Document()
document.add_heading('退位减法答案', 0)
table = document.add_table(rows=2, cols=10)
hdr_cells = table.rows[0].cells
for i in range(10):

    hdr_cells[i].text = str(backsub(20)[i][0])

hdr_cells = table.rows[1].cells
for j in range(10):
    hdr_cells[j].text = str(backsub(20)[j+10][0])
document.save('退位减法答案.docx')
