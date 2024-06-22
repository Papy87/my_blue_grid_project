Instructions

There are  2 ways to start a server. 

FIRST ONE -  Running on local with Redis

You need to install redis on your machine.
Link for installation instructions:

https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/

Run redis on your local machine, in terminal execute this command:
Mac :  redis-server

Create .env file in the root of your project 
.env file need to have next properties :

 PORT = {YOUR_PORT}
 
 CACHE_KEY= {YOUR_KEY} 
 
In project root folder terminal execute command: npm install

In project root folder terminal execute command: npm run build

In project root folder terminal execute command : npm start 

Server should be running 


SECOND ONE - Running with Docker 

You need to install docker on your machine.
Link for installation instructions

https://docs.docker.com/desktop/

Run Docker Desktop.

Create .env file in the root of your project 
.env file need to have next properties  :

PORT = {YOUR_PORT}

CACHE_KEY= {YOUR_KEY} 

REDIS_URL=redis://redis:6379

Make sure that your local redis is not running.

In project root folder terminal execute command: docker-compose build

In project root folder terminal execute command: docker-compose up

Server should be running 

Insomnia/Postman URL
Metod:
GET
http://localhost:{YOUR_PORT}/api/files

	
	
 		
	

