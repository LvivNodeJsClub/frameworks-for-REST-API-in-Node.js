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
* Use [ab](https://httpd.apache.org/docs/2.4/programs/ab.html) to run performance test `ab -n 50000 -c 100 -k http://localhost:3000/hello/Ihor`
* Use [ab](https://httpd.apache.org/docs/2.4/programs/ab.html) to run performance test `ab -n 50000 -c 100 -k http://localhost:3000/hello\?user\=Ihor`

```
Server Software:        
Server Hostname:        localhost
Server Port:            3000

Document Path:          /hello/Ihor
Document Length:        11 bytes

Concurrency Level:      100
Time taken for tests:   3.281 seconds
Complete requests:      50000
Failed requests:        0
Keep-Alive requests:    50000
Total transferred:      10750000 bytes
HTML transferred:       550000 bytes
Requests per second:    15241.26 [#/sec] (mean)
Time per request:       6.561 [ms] (mean)
Time per request:       0.066 [ms] (mean, across all concurrent requests)
Transfer rate:          3200.07 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       4
Processing:     3    7   3.4      5      62
Waiting:        3    7   3.4      5      62
Total:          3    7   3.5      5      64

Percentage of the requests served within a certain time (ms)
  50%      5
  66%      6
  75%      6
  80%      7
  90%      9
  95%     13
  98%     19
  99%     21
 100%     64 (longest request)
```
See [ab.result](express-example/ab.result) and [ab.production.result](express-example/ab.production.result)

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
* Use [ab](https://httpd.apache.org/docs/2.4/programs/ab.html) to run performance test `ab -n 50000 -c 100 -k http://localhost:3001/hello/Ihor`
* Use [ab](https://httpd.apache.org/docs/2.4/programs/ab.html) to run performance test `ab -n 50000 -c 100 -k http://localhost:3001/hello\?user\=Ihor`

```
Server Software:        
Server Hostname:        localhost
Server Port:            3001

Document Path:          /hello/Ihor
Document Length:        11 bytes

Concurrency Level:      100
Time taken for tests:   2.054 seconds
Complete requests:      50000
Failed requests:        0
Keep-Alive requests:    50000
Total transferred:      7600000 bytes
HTML transferred:       550000 bytes
Requests per second:    24337.96 [#/sec] (mean)
Time per request:       4.109 [ms] (mean)
Time per request:       0.041 [ms] (mean, across all concurrent requests)
Transfer rate:          3612.67 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       4
Processing:     1    4   1.0      4      16
Waiting:        1    4   1.0      4      16
Total:          1    4   1.1      4      16

Percentage of the requests served within a certain time (ms)
  50%      4
  66%      4
  75%      4
  80%      4
  90%      5
  95%      6
  98%      8
  99%      9
 100%     16 (longest request)
```
See [ab.result](koa-example/ab.result) and [ab.production.result](koa-example/ab.production.result)

# Hapi example

* Install dependency `npm install`
* Start server `npm start`

```
> hapi-example@1.0.0 start ./frameworks-for-REST-API-in-Node/hapi-example
> node index.js

Example app listening on port 3002!
```

* Call #1 `curl http://127.0.0.1:3002/hello/Ihor`
* Call #2 `curl http://127.0.0.1:3002/hello\?user\=Ihor`
* Use [ab](https://httpd.apache.org/docs/2.4/programs/ab.html) to run performance test `ab -n 20000 -c 100 -k http://127.0.0.1:3002/hello/Ihor`
* Use [ab](https://httpd.apache.org/docs/2.4/programs/ab.html) to run performance test `ab -n 20000 -c 100 -k http://127.0.0.1:3002/hello\?user\=Ihor`

```
Server Software:        
Server Hostname:        127.0.0.1
Server Port:            3002

Document Path:          /hello/Ihor
Document Length:        11 bytes

Concurrency Level:      100
Time taken for tests:   4.916 seconds
Complete requests:      50000
Failed requests:        0
Keep-Alive requests:    50000
Total transferred:      9900000 bytes
HTML transferred:       550000 bytes
Requests per second:    10170.12 [#/sec] (mean)
Time per request:       9.833 [ms] (mean)
Time per request:       0.098 [ms] (mean, across all concurrent requests)
Transfer rate:          1966.49 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.2      0       6
Processing:     5   10   4.8      8      57
Waiting:        5   10   4.8      8      57
Total:          5   10   4.8      8      58

Percentage of the requests served within a certain time (ms)
  50%      8
  66%      9
  75%     10
  80%     11
  90%     16
  95%     21
  98%     26
  99%     28
 100%     58 (longest request)
```
See [ab.result](hapi-example/ab.result) and [ab.production.result](hapi-example/ab.production.result)

# Restify example

* Install dependency `npm install`
* Start server `npm start`

```
> restify-example@1.0.0 start ./frameworks-for-REST-API-in-Node/restify-example
> node index.js

Example app listening on port http://[::]:3003!
```

* Call #1 `curl http://localhost:3003/hello/Ihor`
* Call #2 `curl http://localhost:3003/hello\?user\=Ihor`
* Use [ab](https://httpd.apache.org/docs/2.4/programs/ab.html) to run performance test `ab -n 50000 -c 100 -k http://localhost:3003/hello/Ihor`
* Use [ab](https://httpd.apache.org/docs/2.4/programs/ab.html) to run performance test `ab -n 50000 -c 100 -k http://localhost:3003/hello\?user\=Ihor`

```
Server Software:        restify
Server Hostname:        localhost
Server Port:            3003

Document Path:          /hello/Ihor
Document Length:        13 bytes

Concurrency Level:      100
Time taken for tests:   2.165 seconds
Complete requests:      50000
Failed requests:        0
Keep-Alive requests:    50000
Total transferred:      8100000 bytes
HTML transferred:       650000 bytes
Requests per second:    23096.75 [#/sec] (mean)
Time per request:       4.330 [ms] (mean)
Time per request:       0.043 [ms] (mean, across all concurrent requests)
Transfer rate:          3653.98 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.2      0       4
Processing:     2    4   2.8      3      33
Waiting:        2    4   2.8      3      33
Total:          2    4   2.9      3      36

Percentage of the requests served within a certain time (ms)
  50%      3
  66%      4
  75%      5
  80%      6
  90%      7
  95%      9
  98%     12
  99%     18
 100%     36 (longest request)
```
See [ab.result](restify-example/ab.result) and [ab.production.result](restify-example/ab.production.result)

# Loopback example

* Install dependency `npm install`
* Start server `npm start`

```
> loopback-example@1.0.0 start ./frameworks-for-REST-API-in-Node/loopback-example
> node -r source-map-support/register .

Server is running at http://[::1]:3004
```

* Call #1 `curl http://127.0.0.1:3004/hello/Ihor`
* Call #2 `curl http://127.0.0.1:3004/hello\?user\=Ihor`
* Use [ab](https://httpd.apache.org/docs/2.4/programs/ab.html) to run performance test `ab -n 15000 -c 100 -k http://127.0.0.1:3004/hello/Ihor`
* Use [ab](https://httpd.apache.org/docs/2.4/programs/ab.html) to run performance test `ab -n 15000 -c 100 -k http://127.0.0.1:3004/hello\?user\=Ihor`

```
Server Software:        
Server Hostname:        127.0.0.1
Server Port:            3004

Document Path:          /hello/Ihor
Document Length:        10 bytes

Concurrency Level:      100
Time taken for tests:   5.276 seconds
Complete requests:      15000
Failed requests:        0
Keep-Alive requests:    0
Total transferred:      3090000 bytes
HTML transferred:       150000 bytes
Requests per second:    2842.88 [#/sec] (mean)
Time per request:       35.176 [ms] (mean)
Time per request:       0.352 [ms] (mean, across all concurrent requests)
Transfer rate:          571.91 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    1   0.3      1       3
Processing:     6   34  12.8     31     106
Waiting:        3   28  10.4     25      93
Total:          6   35  12.8     31     106

Percentage of the requests served within a certain time (ms)
  50%     31
  66%     36
  75%     39
  80%     43
  90%     50
  95%     62
  98%     76
  99%     81
 100%    106 (longest request)
```
See [ab.result](loopback-example/ab.result) and [ab.production.result](loopback-example/ab.production.result)

# Fastify example

* Install dependency `npm install`
* Start server `npm start`

```
> fastify-example@1.0.0 start ./frameworks-for-REST-API-in-Node/fastify-example
> node index.js

Example app listening on port 3005!
```

* Call #1 `curl http://localhost:3005/hello/Ihor`
* Call #2 `curl http://localhost:3005/hello\?user\=Ihor`
* Use [ab](https://httpd.apache.org/docs/2.4/programs/ab.html) to run performance test `ab -n 50000 -c 100 -k http://127.0.0.1:3005/hello/Ihor `
* Use [ab](https://httpd.apache.org/docs/2.4/programs/ab.html) to run performance test `ab -n 50000 -c 100 -k http://localhost:3005/hello\?user\=Ihor`

```
Server Software:        
Server Hostname:        127.0.0.1
Server Port:            3005

Document Path:          /hello/Ihor
Document Length:        11 bytes

Concurrency Level:      100
Time taken for tests:   1.766 seconds
Complete requests:      50000
Failed requests:        0
Keep-Alive requests:    50000
Total transferred:      7600000 bytes
HTML transferred:       550000 bytes
Requests per second:    28316.15 [#/sec] (mean)
Time per request:       3.532 [ms] (mean)
Time per request:       0.035 [ms] (mean, across all concurrent requests)
Transfer rate:          4203.18 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       4
Processing:     1    4   1.7      3      21
Waiting:        1    4   1.7      3      21
Total:          1    4   1.7      3      22

Percentage of the requests served within a certain time (ms)
  50%      3
  66%      3
  75%      4
  80%      4
  90%      6
  95%      7
  98%      9
  99%     11
 100%     22 (longest request)
```
See [ab.result](fastify-example/ab.result) and [ab.production.result](fastify-example/ab.production.result)

# Run ALL example in parallel thru PM2

* Install pm2 `npm install pm2 -g`
* Run `pm2 start ecosystem.config.js`
* Status `pm2 ps`
```
┌──────────────────┬────┬──────┬───────┬────────┬─────────┬────────┬──────┬───────────┬──────┬──────────┐
│ App name         │ id │ mode │ pid   │ status │ restart │ uptime │ cpu  │ mem       │ user │ watching │
├──────────────────┼────┼──────┼───────┼────────┼─────────┼────────┼──────┼───────────┼──────┼──────────┤
│ Express example  │ 0  │ fork │ 53545 │ online │ 2       │ 92s    │ 0.7% │ 36.0 MB   │ ihor │ disabled │
│ Fastify example  │ 5  │ fork │ 53575 │ online │ 0       │ 92s    │ 0.7% │ 37.4 MB   │ ihor │ disabled │
│ Hapi example     │ 2  │ fork │ 53555 │ online │ 0       │ 92s    │ 0.7% │ 37.2 MB   │ ihor │ disabled │
│ Koa example      │ 1  │ fork │ 53554 │ online │ 0       │ 92s    │ 0%   │ 34.9 MB   │ ihor │ disabled │
│ Loopback example │ 4  │ fork │ 53566 │ online │ 0       │ 92s    │ 0.7% │ 52.6 MB   │ ihor │ disabled │
│ Restify example  │ 3  │ fork │ 53559 │ online │ 0       │ 92s    │ 0.7% │ 41.7 MB   │ ihor │ disabled │
└──────────────────┴────┴──────┴───────┴────────┴─────────┴────────┴──────┴───────────┴──────┴──────────┘
```
* Stop `pm2 stop ecosystem.config.js`
* Delete from pm2 `pm2 delete ecosystem.config.js`
