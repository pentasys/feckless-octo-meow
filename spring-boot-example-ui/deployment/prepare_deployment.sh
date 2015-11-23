#!/bin/bash

ROOT_DIR=/opt/blackpearl/www

if [ "$(ls -A $ROOT_DIR)" ]; then
    rm -rdf $ROOT_DIR/*
fi

exit 0
