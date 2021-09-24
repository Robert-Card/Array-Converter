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

        let userText = document.getElementById("gen").value;
        let splits = userText.split(" ");
        console.log(splits);    
        document.getElementById("gen").value="[ "; 
        
        for(position = 0; position < splits.length; position++){          

            document.getElementById("gen").value+='"'+splits[position]+'"';

                if(position < splits.length - 1){
                    document.getElementById("gen").value+=", ";
                }
        }
        document.getElementById("gen").value+=" ]";
    }
}

