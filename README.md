# Frameworks for REST API in Node.js

# Express example

* Install dependency `npm install`
* Start server `npm start`

```
> express-example@1.0.0 start ./frameworks-for-REST-API-in-Node/express-example
> node index.js

Example app listening on port 3000!
```

* Call #1 `curl http://localhost:3000/hello/Ihor`
* Call #2 `curl http://localhost:3000/hello\?user\=Ihor`
* Use [ab](https://httpd.apache.org/docs/2.4/programs/ab.html) to run performance test `ab -n 20000 -c 100 http://localhost:3000/hello/Ihor`
* Use [ab](https://httpd.apache.org/docs/2.4/programs/ab.html) to run performance test `ab -n 20000 -c 100 curl http://localhost:3000/hello\?user\=Ihor`


```
Server Software:        
Server Hostname:        localhost
Server Port:            3000

Document Path:          /hello/Ihor
Document Length:        11 bytes

Concurrency Level:      100
Time taken for tests:   36.751 seconds
Complete requests:      20000
Failed requests:        0
Total transferred:      4200000 bytes
HTML transferred:       220000 bytes
Requests per second:    544.21 [#/sec] (mean)
Time per request:       183.753 [ms] (mean)
Time per request:       1.838 [ms] (mean, across all concurrent requests)
Transfer rate:          111.61 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0  166 1561.3      1   19087
Processing:     0    9   2.3      9      19
Waiting:        0    8   2.0      7      18
Total:          0  176 1561.0     10   19093

Percentage of the requests served within a certain time (ms)
  50%     10
  66%     11
  75%     11
  80%     12
  90%     13
  95%     15
  98%     18
  99%   4524
 100%  19093 (longest request)
```

# Koa example

* Install dependency `npm install`
* Start server `npm start`

```
> koa-example@1.0.0 start ./frameworks-for-REST-API-in-Node/koa-example
> node index.js

Example app listening on port 3000!
```

* Call #1 `curl http://localhost:3001/hello/Ihor`
* Call #2 `curl http://localhost:3001/hello\?user\=Ihor`
* Use [ab](https://httpd.apache.org/docs/2.4/programs/ab.html) to run performance test `ab -n 20000 -c 100 http://localhost:3000/hello/Ihor`
* Use [ab](https://httpd.apache.org/docs/2.4/programs/ab.html) to run performance test `ab -n 20000 -c 100 curl http://localhost:3000/hello\?user\=Ihor`

```

```


## Run ALL example in parallel thru PM2

* Install pm2 `npm install pm2 -g`
* Run `pm2 start express-example/index.js`
* Run `pm2 start koa-example/index.js `
* Status `pm2 status`
* Stop `pm2 stop 0 1`
* Delete `pm2 delete 0 1`
