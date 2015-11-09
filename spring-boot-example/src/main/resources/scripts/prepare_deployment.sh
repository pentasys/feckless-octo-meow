#!/bin/bash

appPath=/opt/blackpearl

if [ -e $appPath/app.jar.bak ]; then
  rm $appPath/app.jar.bak
fi

if [ -e $appPath/app.jar ] ; then
  mv $appPath/app.jar $appPath/app.jar.bak
fi

if [ -e $appPath/nohup.out ]; then
  rm $appPath/nohup.out
fi

exit 0
