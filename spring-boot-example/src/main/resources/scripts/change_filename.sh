#!/bin/bash

appPath=/opt/blackpearl
jarFile=$(ls /opt/blackpearl/spring-boot-example* 2> /dev/null)

if [ $jarFile ] && [ -e $jarFile ]; then
  mv $jarFile $appPath/app.jar
else
  echo error: missing application jar file
  exit 1 
fi

exit 0
