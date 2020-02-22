#!/bin/bash
if [ "$1" == "prod" ]; then
    echo "Making production build!"

    # Kill any old instances
    docker stop dash-frontend-prod-01
    docker rm dash-frontend-prod-01

    # Build and run new instance
    docker build -t dash-frontend-prod -f Dockerfile.prod .
    docker run -d --name dash-frontend-prod-01 --restart unless-stopped -p 9100:80 -it dash-frontend-prod
elif [ "$1" == "stop" ]; then
    echo "Stopping all dev / prod containers!"

    # Kill any old instances
    docker stop dash-frontend-prod-01
    docker rm dash-frontend-prod-01

    # Kill any old instances
    docker stop dash-frontend-dev-01
    docker rm dash-frontend-dev-01
else
    echo "Launching frontend in devmode!"

    # Kill any old instances
    docker stop dash-frontend-dev-01
    docker rm dash-frontend-dev-01

    # Build and run new instance
    docker build -t dash-frontend-dev -f Dockerfile.dev .
    docker run --name dash-frontend-dev-01 -v $(pwd):/app -p 3000:3000 -it --rm dash-frontend-dev
fi
