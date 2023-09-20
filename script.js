//For footer
let year = new Date().getFullYear()

function Undo() { document.execCommand("undo", false, null); }
function Redo() { document.execCommand("redo", false, null); }


function Clear() {
    
        document.getElementById("gen").value=""; 

}

function Copy() {
    
    if(document.getElementById("gen").value==""){
        
        notification.innerText = "Empty TextBox!";
        notification.style.backgroundColor = "#800000";
        showNotification();

    }else{
        document.querySelector("textarea").select();
        document.execCommand('copy');

        notification.innerText = "Copied!";
        notification.style.backgroundColor = "#7499f09d";
        showNotification();
    }
}

function Transform() {

    if(document.getElementById("gen").value==""){
        
        notification.innerText = "Empty TextBox!";
        notification.style.backgroundColor = "#800000";
        showNotification();

    }else{

        //Split Arrays
        let userText = document.getElementById("gen").value;
        let splits = userText.split(" ");        

        //Transform
        document.getElementById("gen").value="[ "; 
        splits.forEach(Divide); 
        document.getElementById("gen").value+=" ]";

        notification.innerText = "Transformed!";
        notification.style.backgroundColor = "#7499f09d";
        showNotification();
    }
}

function Divide(item, index, array){
    document.getElementById("gen").value+=item
    
    if(index !== array.length -1){
    document.getElementById("gen").value+=", ";
    }
}

function showNotification() {
    
    const notification = document.getElementById("notification");

    notification.style.display = "block";

    setTimeout(function () {
        notification.style.display = "none";
    }, 1000); 
}