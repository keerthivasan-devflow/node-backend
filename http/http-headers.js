/* 
In Node.js, both res.writeHead() and res.setHeader() are used to manage HTTP response headers.

1. res.setHeader(name, value) - you call call it multiple times to set different parts of headers.
-----------------------------
res.Header("Content-Type", "text/html")
res.Header("Cache-Control", "no-cache")

2. res.writeHead(statusCode, headerObject) - Called only once
------------------------------------------
res.writeHead(200, {
"Content-Type": "text/html",
"Cache-Control": "no-cache"
})


Order matters:
--------------
if you call firstly res.setHeader() and then later you invoke res.writeHead(), writeHead will take precedence
that means if there are any properties available in both, the writeHead will take precedence.

If you call res.setHeader() before res.writeHead(), the headers you set with setHeader() will be included 
in the response when writeHead() is called. However, if you call writeHead() before setHeader(),
the headers set by setHeader() will not be included, because writeHead() sends the headers immediately.

What Happens Internally:
-------------------------
When res.setHeader() is called: The headers are stored in an internal collection (an object or array).
When res.writeHead() is called: This method triggers the sending of the HTTP response. 
It writes the status code, then sends the headers.

If writeHead() has already been called, headers are sent immediately, 
and subsequent calls to setHeader() will have no effect.

Important Caveat:
---------------------
You cannot modify headers after res.writeHead() has been called.
If you call res.writeHead() before setting headers, 
none of the headers set with res.setHeader() will be included in the response.

*/
