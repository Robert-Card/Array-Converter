//For footer
let year = new Date().getFullYear()

function Undo() { document.execCommand("undo", false, null); }
function Redo() { document.execCommand("redo", false, null); }


function Clear() {
    let erase = confirm("Are you sure? *it cannot be undone!");
    if(erase == true){

        document.getElementById("gen").value=""; 

    }else{

    }    
}

function Copy() {

    document.querySelector("textarea").select();
    document.execCommand('copy');
}

function Transform() {

    if(document.getElementById("gen").value==""){
        alert("Error, empty TextBox!");

    }else{

        //Split Arrays
        let userText = document.getElementById("gen").value;
        let splits = userText.split(" ");        

        //Transform
        document.getElementById("gen").value="[ "; 
        splits.forEach(Divide); 
        document.getElementById("gen").value+=" ]";
    }
}

function Divide(item, index, array){
    document.getElementById("gen").value+=item
    
    if(index !== array.length -1){
    document.getElementById("gen").value+=", ";
    }
}