docker stop app
docker rm app
docker run -p 3000:3000 --name app -d dockerized-react
