document.querySelector("#enter").addEventListener("click",loadInformation);

 

function loadInformation(){
    var user= document.getElementById("userName").value;
    var pass = document.getElementById("password").value;
                
    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json",true);

    xhr.onload  = function(){
        
        var text = JSON.parse(this.responseText);      

        
        if( text.userName == user &&  text.password == pass){
            
            
            document.getElementById("text").style.display = "block";
            document.getElementById("text").innerHTML = "true!!!";
            
            
            document.getElementById("userName").value = "";
            document.getElementById("password").value = "";

            setTimeout(()=>document.querySelector("#text").remove(), 3000);
        }else{         
            document.getElementById("text").style.display = "block";           
            document.getElementById("text").innerHTML = "try again!!!"; 

            document.getElementById("userName").value = "";
            document.getElementById("password").value = "";

            setTimeout(()=>document.querySelector("#text").remove(), 3000);
        }
        
    }   
    xhr.send();       
}
