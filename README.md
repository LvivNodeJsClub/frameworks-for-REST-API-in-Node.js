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
Server Hostname:        127.0.0.1
Server Port:            3000

Document Path:          /hello/Ihor
Document Length:        11 bytes

Concurrency Level:      100
Time taken for tests:   2.807 seconds
Complete requests:      50000
Failed requests:        0
Keep-Alive requests:    50000
Total transferred:      10750000 bytes
HTML transferred:       550000 bytes
Requests per second:    17809.69 [#/sec] (mean)
Time per request:       5.615 [ms] (mean)
Time per request:       0.056 [ms] (mean, across all concurrent requests)
Transfer rate:          3739.34 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       5
Processing:     1    6   1.2      5      20
Waiting:        1    6   1.2      5      20
Total:          1    6   1.2      5      21

Percentage of the requests served within a certain time (ms)
  50%      5
  66%      6
  75%      6
  80%      6
  90%      7
  95%      7
  98%     10
  99%     11
 100%     21 (longest request)
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
Server Hostname:        127.0.0.1
Server Port:            3001

Document Path:          /hello/Ihor
Document Length:        11 bytes

Concurrency Level:      100
Time taken for tests:   2.101 seconds
Complete requests:      50000
Failed requests:        0
Keep-Alive requests:    50000
Total transferred:      7600000 bytes
HTML transferred:       550000 bytes
Requests per second:    23792.67 [#/sec] (mean)
Time per request:       4.203 [ms] (mean)
Time per request:       0.042 [ms] (mean, across all concurrent requests)
Transfer rate:          3531.72 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       4
Processing:     2    4   1.2      4      13
Waiting:        1    4   1.2      4      13
Total:          2    4   1.2      4      14

Percentage of the requests served within a certain time (ms)
  50%      4
  66%      4
  75%      4
  80%      5
  90%      5
  95%      6
  98%      9
  99%     10
 100%     14 (longest request)
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
Time taken for tests:   3.501 seconds
Complete requests:      50000
Failed requests:        0
Keep-Alive requests:    50000
Total transferred:      9900000 bytes
HTML transferred:       550000 bytes
Requests per second:    14281.04 [#/sec] (mean)
Time per request:       7.002 [ms] (mean)
Time per request:       0.070 [ms] (mean, across all concurrent requests)
Transfer rate:          2761.37 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       5
Processing:     1    7   1.3      7      20
Waiting:        0    7   1.3      7      20
Total:          1    7   1.3      7      20

Percentage of the requests served within a certain time (ms)
  50%      7
  66%      7
  75%      7
  80%      7
  90%      8
  95%      9
  98%     12
  99%     13
 100%     20 (longest request)
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
Server Hostname:        127.0.0.1
Server Port:            3003

Document Path:          /hello/Ihor
Document Length:        13 bytes

Concurrency Level:      100
Time taken for tests:   2.424 seconds
Complete requests:      50000
Failed requests:        0
Keep-Alive requests:    50000
Total transferred:      8100000 bytes
HTML transferred:       650000 bytes
Requests per second:    20624.58 [#/sec] (mean)
Time per request:       4.849 [ms] (mean)
Time per request:       0.048 [ms] (mean, across all concurrent requests)
Transfer rate:          3262.87 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       4
Processing:     2    5   3.6      4      49
Waiting:        1    5   3.6      4      49
Total:          2    5   3.6      4      49

Percentage of the requests served within a certain time (ms)
  50%      4
  66%      4
  75%      6
  80%      7
  90%      8
  95%     10
  98%     15
  99%     20
 100%     49 (longest request)
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
Time taken for tests:   4.804 seconds
Complete requests:      15000
Failed requests:        0
Keep-Alive requests:    0
Total transferred:      3090000 bytes
HTML transferred:       150000 bytes
Requests per second:    3122.36 [#/sec] (mean)
Time per request:       32.027 [ms] (mean)
Time per request:       0.320 [ms] (mean, across all concurrent requests)
Transfer rate:          628.13 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    1   0.3      1       4
Processing:     7   31  11.2     28      91
Waiting:        3   26   9.0     23      89
Total:          7   32  11.3     28      91

Percentage of the requests served within a certain time (ms)
  50%     28
  66%     32
  75%     35
  80%     38
  90%     45
  95%     54
  98%     70
  99%     82
 100%     91 (longest request)
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
Time taken for tests:   1.563 seconds
Complete requests:      50000
Failed requests:        0
Keep-Alive requests:    50000
Total transferred:      7600000 bytes
HTML transferred:       550000 bytes
Requests per second:    31988.74 [#/sec] (mean)
Time per request:       3.126 [ms] (mean)
Time per request:       0.031 [ms] (mean, across all concurrent requests)
Transfer rate:          4748.33 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       5
Processing:     1    3   1.0      3      13
Waiting:        1    3   1.0      3      13
Total:          1    3   1.0      3      13

Percentage of the requests served within a certain time (ms)
  50%      3
  66%      3
  75%      3
  80%      3
  90%      4
  95%      5
  98%      7
  99%      8
 100%     13 (longest request)
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
