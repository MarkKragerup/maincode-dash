#!/bin/bash
if [ "$1" == "prod" ]; then
    echo "Making production build!"

    # Kill any old instances
    docker stop dash-frontend-dev-01
    docker rm dash-frontend-dev-01

    # Build and run new instance
    docker build -t dash-frontend-prod -f Dockerfile.prod .
    docker run -d --name dash-frontend-prod-01 -p 9000:80 -it --rm dash-frontend-prod
else
    echo "Launching frontend in devmode!"

    # Kill any old instances
    docker stop dash-frontend-dev-01
    docker rm dash-frontend-dev-01

    # Build and run new instance
    docker build -t dash-frontend-dev -f Dockerfile.dev .
    docker run -d --name dash-frontend-dev-01 -v /frontend frontend -p 3000:3000 -it --rm dash-frontend-dev
fi
