$(function() {
    $('#loginbutton').click(function(){
        var uid=$('#uid').val();
        var pass=$('#pass').val();
        var u="vivekkumar@gmail.com"
        var p="messi";
          if(uid==u&&pass==p){
            console.log("success");
            window.location.href='http://google.com';
          }
          else
          {window.alert('Authentication Failed');}
    });
  });