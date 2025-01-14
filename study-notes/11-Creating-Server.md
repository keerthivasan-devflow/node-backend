## How Web Works?
## Client-Server Architecture / Sockets / Protocol(TCP/IP) / DNS Look-Up

**Reference:** *Refer handwritten notes as well.*

1. What is webserver, proxy server, domain server, HTTP server?
2. What is meant by server is down?

Sometimes, hardware is used for deploying applications on a server.

When you use a server from AWS, it is referred to as an EC2 instance. This EC2 instance is powered by physical hardware resources provided by AWS, which are accessible over the internet. So, when you visit facebook.com, your request is directed to Facebook's AWS server, which then fetches and serves the data.

### Can you use your system as a server?

You can use your computer as a server, but there are some limitations:

- Your system has limited resources, such as RAM, ROM, and processing power. While an AWS instance also has limited storage, it is easily scalable. In contrast, if you need to upgrade your computer's RAM, you must purchase and manually install it. There may be times when RAM is unavailable in your locality, causing delays. During this period, you cannot afford to stop providing services to users who are sending HTTP requests.

- In general, AWS has a big data center, where you have so many hight speed computers, high speed internet connectivity and
 high storage space.

### Different protocols
HTTP Server - simple text, json, html etc [For web application, we use HTTP protocol]
FTP Server
SMTP Server

1. What does it meant by node.js is creating a HTTP server?
    Creating a server application which usually helps to handle all the incoming requests.
2. What is web?
3. What is protocol?
    when two applications are running in different languages, if they need to communicate with each other, they must follow
    some rules to communicate with similar language. (language means certain protocol)
4. What is socket, why do we need it?
5. What is TCP/IP protocol, why do we need it?
6. What is client/server architecture?
7. How web works?
8. What is domain name server why do we need?
9. What is DNS lookup?
10. Why can' we use our computer as a server?
11. Can I create multiple servers? It doesn't mean you will have to create multiple hardwares to host some applications or for any other purpose. Server means it can be hardware, software. So we can create mutiple server application on a single HTTP server.
12. If there are different node server application created on HTTP server, how to identify each HTTP server? using port numbers


TCP/IP is a low-level protocol responsible for establishing network connections, ensuring data integrity, and reliability. It is versatile and can be used for a wide range of network communication needs.

HTTP is a higher-level protocol built on top of TCP/IP. It is specifically designed for transferring web resources, such as HTML, JSON, images, etc. It provides a standardized way for clients and servers to communicate in web applications.

So, in short, TCP/IP is for general network communication (ensuring data reliably gets from one point to another), and HTTP is a specialized protocol that uses TCP/IP to handle web communication.