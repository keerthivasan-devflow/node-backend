## Project Planning - Very Crucial Aspect
### Step 1 : Features
1. Create an acconut
2. Login page
3. Update your profile
4. Feed page explore
5. Send connection request
6. See our matches
7. See the request we have sent/received
8. Update your profile

### Step 2 : High Level Design Planning (HLD)
1. What kind of microservices - Frontend(React) / Backend (Node, MongoDB)
2. Security Practices
3. Authentication
4. Database Design - which database can be used
5. Design API's

### Step 3 : Low Level Design Planning (LLD)
**1. Database design**
    - User Collections
        - firstname
        - lastname
        - email
        - password
        - gender
        - age
    - ConnectionRequest
        - Who is sending a connection request (fromUserId)
        - To whom he/she is sending the connection request (toUserId)
        - What is the status of the request (status - pending | accepted | rejected)
        - Additional status could be: ignored
Note: No database is flawless. So any time we can come back to design and approach the way

**2. API design / contracts**
- what are all the API's required, let's documented properly

- RESTful API
    - GET
        - /profile
        - /requests
    - POST
        - /signup
        - /login
        - /profile
        - /send-request - To ignore and interest
        - /review-request - To accept and reject
    - PUT (OR) PATCH
        - /profile
    - DELETE
        - /profile