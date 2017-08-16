#!/usr/bin/env python
# -*- coding: utf-8 -*-


import random, sys, time, pygame
from pygame.locals import *

from sys import exit
#向sys模块借一个exit函数用来退出程序

background_name = './img/bg.jpg'
mouse_name = './img/mouse.png'





SCREEN_WIDTH = 640
SCREEN_HEIGHT = 480
SCREEN_SIZE = (SCREEN_WIDTH,SCREEN_HEIGHT)
FPS = 5
SNAKE_WIDTH = 20

#方格数
CELLWIDTH = int(SCREEN_WIDTH / SNAKE_WIDTH)
CELLHEIGHT = int(SCREEN_HEIGHT / SNAKE_WIDTH)

# color
# R G B
WHITE = (255, 255, 255)
BLACK = ( 0, 0, 0)
RED = (255, 0, 0)
GREEN = ( 0, 255, 0)
DARKGREEN = ( 0, 155, 0)
DARKGRAY = ( 40, 40, 40)
BGCOLOR = BLACK

# movement
UP = 'up'
DOWN = 'down'
LEFT = 'left'
RIGHT = 'right'

# head
HEAD = 0

def main():

    global FPS_CLOCK, DISPLAY_CLIENT,FONT
    #初始化pygame,为使用硬件做准备
    pygame.init()
    FPS_CLOCK = pygame.time.Clock()
    DISPLAY_CLIENT = pygame.display.set_mode(SCREEN_SIZE)
    pygame.display.set_caption('snake')
    FONT = pygame.font.Font('fontstyle.ttf', 18)

    while True:
        runGame() # 运行游戏
        # showGameOverScreen() # 显示游戏结束画面
    return
def runGame():
    # 开始点
    startx = random.randint(5, CELLWIDTH - 6)
    starty = random.randint(5, CELLHEIGHT - 6)

    # snake length equal to 3
    snake = [
        {'x': startx, 'y': starty},
        {'x': startx - 1, 'y': starty},
        {'x': startx - 2, 'y': starty}
    ]
    snakeDir = RIGHT
    apple = randomLocaltion()
    running = {
        "canRun" : True
    }
    while running['canRun']:
        for event in pygame.event.get():
            if event.type == QUIT:
                quitGame()
            elif event.type == KEYDOWN:
                if (event.key == K_LEFT or event.key == K_a) and snakeDir != RIGHT:
                    snakeDir = LEFT
                elif (event.key == K_RIGHT or event.key == K_d) and snakeDir != LEFT:
                    snakeDir = RIGHT
                elif (event.key == K_UP or event.key == K_w) and snakeDir != DOWN:
                    snakeDir = UP
                elif (event.key == K_DOWN or event.key == K_s) and snakeDir != UP:
                    snakeDir = DOWN
                elif event.key == K_ESCAPE:
                    quitGame()
        # 边界检测
        # 检查贪吃蛇是否撞到撞到边界
        if snake[HEAD]['x'] == -1 or snake[HEAD]['x'] == CELLWIDTH or snake[HEAD]['y'] == -1 or snake[HEAD]['y'] == CELLHEIGHT:
            print('撞到边界')
            running.canRun = False
            return
        for body in snake[1:]:
            if body['x'] == snake[HEAD]['x'] and body['y'] == snake[HEAD]['y']:
                print('撞到自己')
                return
        # 是否吃到苹果
        if snake[HEAD]['x'] == apple['x'] and snake[HEAD]['y'] == apple['y']:
            apple = randomLocaltion()
        else:
            del snake[-1]

        # 根据方向，添加一个新的蛇头，以这种方式来移动贪吃蛇
        if snakeDir == UP:
            newHead = {'x': snake[HEAD]['x'], 'y': snake[HEAD]['y'] - 1}
        elif snakeDir == DOWN:
            newHead = {'x': snake[HEAD]['x'], 'y': snake[HEAD]['y'] + 1}
        elif snakeDir == LEFT:
            newHead = {'x': snake[HEAD]['x'] - 1, 'y': snake[HEAD]['y']}
        elif snakeDir == RIGHT:
            newHead = {'x': snake[HEAD]['x'] + 1, 'y': snake[HEAD]['y']}


        snake.insert(0, newHead)
        DISPLAY_CLIENT.fill(BGCOLOR)
        drawBox()
        drawSnake(snake)
        drawApple(apple)
        drawScore(len(snake) - 3)
        pygame.display.update()
        FPS_CLOCK.tick(FPS)






def drawBox():
    for x in range(0, SCREEN_WIDTH, SNAKE_WIDTH):
        pygame.draw.line(DISPLAY_CLIENT, DARKGRAY, (x, 0), (x, SCREEN_HEIGHT))
    for y in range(0, SCREEN_HEIGHT, SNAKE_WIDTH):
        pygame.draw.line(DISPLAY_CLIENT, DARKGRAY, (0, y), (SCREEN_WIDTH, y))

def drawSnake(wormCoords):
    for point in wormCoords:
        x = point['x'] * SNAKE_WIDTH
        y = point['y'] * SNAKE_WIDTH
        wormSegmentRect = pygame.Rect(x, y, SNAKE_WIDTH, SNAKE_WIDTH)
        pygame.draw.rect(DISPLAY_CLIENT, DARKGREEN, wormSegmentRect)
        wormInnerSegmentRect = pygame.Rect(x + 4, y + 4, SNAKE_WIDTH - 8, SNAKE_WIDTH - 8)
        pygame.draw.rect(DISPLAY_CLIENT, GREEN, wormInnerSegmentRect)

    return



def drawApple(apple):
    x = apple['x'] * SNAKE_WIDTH
    y = apple['y'] * SNAKE_WIDTH
    appleRect = pygame.Rect(x, y, SNAKE_WIDTH, SNAKE_WIDTH)
    pygame.draw.rect(DISPLAY_CLIENT, RED, appleRect)
    return

def drawScore(score):
    print(score)

    scoreSurf = FONT.render('Score: %s' % (score), True, WHITE)
    scoreRect = scoreSurf.get_rect()
    scoreRect.topleft = (SNAKE_WIDTH - 120, 10)
    DISPLAY_CLIENT.blit(scoreSurf, scoreRect)


# 随机生成坐标
def randomLocaltion():
    return {'x' : random.randint(0,CELLWIDTH - 1) , 'y' : random.randint(0,CELLHEIGHT)}
# 退出
def quitGame():
    pygame.quit()
    sys.exit()









main()
















# that is all
