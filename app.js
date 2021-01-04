//Instanciate 
const http = new easyHTTP;

//Get Posts
/* http.get('https://jsonplaceholder.typicode.com/posts', 
  function(err, response){
    if(err){
      console.log(err);
    } else {
      console.log(respone);
    }
  }); */

//Post request
//Create Data
const data = {
  userId: 13,
  title: 'Custom Post',
  body: 'This is a Custom Post'
}

//Create post - not the post method
/* http.post('https://jsonplaceholder.typicode.com/posts', data,
  function(err, response){
    if(err){
      console.log(err);
    } else {
      console.log(response);
    }
  }); */

//Put Request
//Update Data
/* http.put('https://jsonplaceholder.typicode.com/posts/1', data,
function(err, response){
  if(err){
    console.log(err);
  } else {
    console.log(response);
  }
}); */

//Delete Request
//Delete recieved post
http.delete('https://jsonplaceholder.typicode.com/posts/1',
  function(err, response){
    if(err) {
      console.log(err);
    } else {
      console.log(response);
    }
})