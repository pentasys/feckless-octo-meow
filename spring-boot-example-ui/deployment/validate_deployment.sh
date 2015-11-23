#!/bin/bash

HTTP_CODE=$(curl -s -o /dev/null -I -w "%{http_code}" http://localhost)

if [ $HTTP_CODE == "200" ]; then
    exit 0
else
    exit 1 
fi

