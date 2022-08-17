[![Docker Pulls](https://img.shields.io/badge/docker%20pulls-489.5M-blue)](https://hub.docker.com/r/yurkab/react-todo/tags)

# Todo app

[Deploy todo ](https://todo-react-test.netlify.app/)

In the project directory, you can run:

```
npm install
```
```
npm start
```

## Use docker

Download images

```
docker pull yurkab/react-todo:latest
```

Run container

```
docker run -d -p 3001:3000 --name react-todo yurkab/react-todo
```

Open http://localhost:3001 to view it in the browser.