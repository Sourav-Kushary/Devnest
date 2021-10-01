 //Redis Store & Redis Client
 const redis = require("redis");
 const connectRedis = require("connect-redis");
 const session = require("express-session");

 const RedisStore =  connectRedis(session);

 const redisClient = redis.createClient({
     host: "localhost",
     poort: 6379
 });

 redisClient.on('erroor', function (err){
     console.error("Could not connect to redis", err);
 });

 redisClient.on('connect', function(){
     console.log("Successfully connected to redis");
 })

 module.exports ={
     redisClient,
     RedisStore,
     session
 }