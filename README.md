# Chloe_Restau_Socket

## How to use ?

Sending from ORDERING APP TO CHLOE POS
 
``` 
ReceiveData:sendingTo:ChloePOS
```
 
 
Sending from CHLOE POS APP to KITCHEN
 ``` 
 ReceiveData:sendingTo:Kitchen
 ```
 
 
Sending from KITCHEN APP to QUE
 ``` 
 ReceiveData:sendingTo:Que
 ```
 
 
 
### NOTE
 Before Connecting to socket make sure to indicate Room Name on client side
 ex.
 ````
  var socket = io('http://localhost:3000');
  socket.on('connect', function(){
      socket.emit('register:device', 'ROOM NAME HERE');
  });
 ```
