make user 
http://localhost:3003/api/user

POST http://localhost:3003/api/login
{
    "username": "testUser",
    "password": "123456"
}

Then copy token to Header
Then POST to http://localhost:3003/api/blogs with userID copied from mongodatabase