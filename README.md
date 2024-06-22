Instructions

There are  2 ways to start a server. 

First one is to start it on a local machine and the second one is to use Docker containers.

FIRST ONE

You need to be on branch  main
You need to install redis on your machine.
Link for installation instructions 
https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/
Run redis on your local machine, in terminal execute this command:
Mac :  redis-server
Create .env file in the root of your project 
.env file need to have next properties  :
 PORT = {YOUR_PORT}
 CACHE_KEY= {YOUR_KEY} 
REDIS_URL=redis://redis:6379
In project root folder terminal execute command: npm install
In project root folder terminal execute command: npm run build
In project root folder terminal execute command : npm start 
Server should be running 


				SECOND ONE
You need to be on branch  docker_images
You need to install docker on your machine.
Link for installation instructions
https://docs.docker.com/desktop/
Create .env file in the root of your project 
.env file need to have next properties  :
 PORT = {YOUR_PORT}
 CACHE_KEY= {YOUR_KEY} 
REDIS_URL=redis://redis:6379
In project root folder terminal execute command: docker-compose build
In project root folder terminal execute command: docker-compose up
Server should be running 


	
	
 		
	


