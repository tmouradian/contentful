#!/bin/bash
PROG=$(basename $0)

usage()
{
    echo "${PROG} <environment> <productSlug>"
    echo "${PROG} en-US |zh-CN  Auburn|Adelphi"
}

expand()
{
    env=$1
    slug=$2
    local template="$(cat app._template.js)"
    eval "echo \"${template}\"" > app.js
    spike compile
}

case $# in
    2) expand "$1" "$2";;
    *) usage; exit 0;;
esac
