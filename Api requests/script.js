//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

// The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states:
// XMLHttpRequest (often shortened to XHR) is a built-in browser object used to make HTTP requests from JavaScript — letting you fetch data from a server without reloading the whole page. It's the original way JS talked to servers, before fetch() became the modern standard.



// Value	State	Description
// 0	UNSENT	   Client has been created. open() not called yet.
// 1	OPENED	   open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	   Downloading; responseText holds partial data.
// 4	DONE	   The operation is complete.





const xhr = new XMLHttpRequest();
const request_url = "https://api.github.com/users/dev-atta";

// ,open('method',string)
xhr.open('GET',request_url);
// for now OPen is Not called Yet

// console.log(xhr.readyState)   // .readyState Gives us the current state
// xhr.onreadystatechange constanty Get the state oF request
// it takes a function

let photo_url, follow_count;


// All the things that Are need To be done with the reponse is need to be done InSIDE this function
xhr.onreadystatechange = function(){
    console.log(xhr.readyState)
   if(xhr.readyState === 4){
    let data = this.responseText   // This Gives Us the Responce of Our request
   // console.log(data)
    // data comes in string form
    data = JSON.parse(data); // converting string into json
  
    photo_url = data.avatar_url;
    follow_count = data.followers;

    document.getElementById("myImage").src = photo_url;
    document.getElementById("Follow").innerText = follow_count;

    console.log(data.followers); 
   }
}
// this Gives The cuurent constext
xhr.send() //  it is called Now



// Console.log is not an inbulit function of javascript
// it comes from v8 ENGINES written in cpp, where some of the javascript opreation are Being called On use case



