
The app project structure was auto-generated using the ionic cli.
The app contains all the expected features including the chat-room.

The login has got a service process which allows only the users in the json located at

To be able to connect in the app, you must enter one of the following username and password

"username":"etubbs0","password":"maLOcXbR"
"username":"bbeaty1","password":"ajI4cJDm"
"username":"hhowton2","password":"4kjJNye8c"
"username":"rwallen3","password":"IkUfqJ"

The users data is stored under a auto generated file named random_users.json which is located at src/assets/mocks

The chat include a nodejs service using the socket process to be able to work. The service is located at src/server-side
Before using the chat features, the nodejs service must be launched using the following command from the src/server-side folder :

#node index.js
Once the service successfully launched, it might listen on the port 3001.

The chat-room can be tested by login in the app with 2 differents usernames from different navigator and chat between the both logged users.

