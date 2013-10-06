#!/bin/bash
img="/tmp/files/stockphoto.jpeg"
cp /tmp/files/stockphoto.jpeg  /tmp/files/stockphotocopy.jpeg
echo -e "\ndataTarget\n" >> /tmp/files/stockphotocopy.jpeg

cat $1 >> /tmp/files/stockphotocopy.jpeg
