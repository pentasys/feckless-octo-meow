#!/bin/bash

APPFILE=/opt/blackpearl/app.jar
LOGFILE=/opt/blackpearl/app.log

if [ -e $APPFILE ]; then
  rm $APPFILE
fi

if [ -e $LOGFILE ]; then
  rm $LOGFILE
fi

exit 0
