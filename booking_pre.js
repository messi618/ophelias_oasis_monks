"use strict";
var x,y,x;

//combination class takes 1. price input 2. registration  input.
function combine(x,y,z)     //add more inputs as necessary
{       
         var json; 

         //json.key = value;
         json.name = JSON.parse(x);
         json.room = JSON.parse(y);
         json.price = JSON.parse(z);
        

    return json;    // returns json file as output (stored locally with the user-for now)
};//json returned here can be nested inside another MAIN json (calls from booking class)


/*
//helper function to convert key:value to a single json thread. 
function toJsonThread(x,y){
    var json = new Object();
        json.name = x; 
        json.value = y;
    return json;
};*/



//from json thread to pure java script array
function toPureJavascriptArray(json)
{   

    var arr = new Array();
    arr.push(json);
    return arr; 
};


//takes JS array as input
function toJSON(jsarray)
{
    var json = JSON.parse(JSON.stringify(jsarray));
    return json;
};


