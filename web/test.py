import numpy as np
import cv2
import matplotlib.pyplot as plt

from os import environ

def suppress_qt_warnings():
    environ["QT_DEVICE_PIXEL_RATIO"] = "0"
    environ["QT_AUTO_SCREEN_SCALE_FACTOR"] = "1"
    environ["QT_SCREEN_SCALE_FACTORS"] = "1"
    environ["QT_SCALE_FACTOR"] = "1"

# reads image 'opencv-logo.png' as grayscale
img = cv2.imread('E:\\file.jpg', 0) 
plt.imshow(img, cmap='gray')