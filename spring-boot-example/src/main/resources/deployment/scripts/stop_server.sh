#!/bin/bash

RUNNING=$(pgrep -f "java -jar /opt/blackpearl/app.jar")

if [ ! -z "$RUNNING" ]; then
  curl -u admin:s3cr3t -X POST http://localhost:8080/shutdown
fi

exit 0