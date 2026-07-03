let table = document.createElement("table");
table.border = "0";

function coach1() {
    table.innerHTML="";

    let rows = ["A","B","C","D","E","F","G","H","I","J"];

    for (let j = 0; j < rows.length; j++) {

        let row = document.createElement("tr");

        for (let i = 1; i <= 5; i++) {

            let td = document.createElement("td");

            if (j == 0 && i == 3) {
                td.textContent = "Enter";
            }
            else if (j == rows.length - 1 && i == 3) {
                td.textContent = "Exit";
            }
            else if (i == 3) {
                td.textContent = "";   
            }
             else if(i==4||i==5){
                td.textContent = `${rows[j]}0${i-1}`;
                td.classList.add("green");
                td.addEventListener("click", function () {
                    this.classList.toggle("green");
                    this.classList.toggle("selected");
                });
            }
            else {
                td.textContent = `${rows[j]}0${i}`;
                td.classList.add("green");
                td.addEventListener("click", function () {
                    this.classList.toggle("green");
                    this.classList.toggle("selected");
                });
            }

            row.appendChild(td);
        }

        table.appendChild(row);
    }
}
function coach2() {
    table.innerHTML="";
    let a =5;
    for (let i =0;i<5;i++){
        for(j=0;j<3;j++){
            let row = document.createElement("tr");
            
            for(k=0;k<5;k++){
                td= document.createElement("td");
                if(k==0&&j==1){
                    td.textContent=`${31+i}B`;
                    td.addEventListener("click", function () {
                        this.classList.toggle("green");
                        this.classList.toggle("selected");
                    });
                    td.classList.add("green");
                }else if(k==1){
                    if(j==0&&i==0){
                        td.textContent="Enter";
                    }
                    if(j==2&&i==4){
                        td.textContent= "Exit";
                    }
                }else{
                    if(j==0&&k!=0){
                        td.addEventListener("click", function () {
                            this.classList.toggle("green");
                            this.classList.toggle("selected");
                        });
                        td.textContent=`${a-k}B`;
                        td.classList.add("green");
                    }else if(j==2&&k!=0){
                        td.addEventListener("click", function () {
                            this.classList.toggle("green");
                            this.classList.toggle("selected");
                        });
                        td.textContent=`${a+3-k}B`;
                        td.classList.add("green");
                    }else if(j==1){
                        if(k==2){
                            td.textContent="Cabin";
                        }
                        if(k==4){
                            td.textContent="Table";
                            td.style.backgroundColor="skyblue";
                        }
                    }
                }
                row.appendChild(td);   
                        
            }
            table.appendChild(row);
        }
        a+=6;
    }

}
function coach3(){
    table.innerHTML="";
    let rows = ["A","B","C","D","E"];
    births = ["U","M","L"]
    for(j=0;j<rows.length;j++){
        for(i=3;i>=1;i--){
            let row = document.createElement("tr");
            for(k=0;k<=births.length;k++){
                let td = document.createElement("td");
                if(k==0){
                    td.textContent="";
                    if(j==0&&i==3){
                        td.textContent="Enter"
                    }
                    if(j==4&&i==1){
                        td.textContent="Exit"
                    }
                    // td.style.backgroundColor="white";
                }else{
                    if(i==3){
                        td.addEventListener("click", function () {
                            this.classList.toggle("green");
                            this.classList.toggle("selected");
                        });
                        td.textContent=`${rows[j]}${births[k-1]}${4-k}`;
                        td.classList.add("green");
                    }else if(i==1){
                        td.addEventListener("click", function () {
                            this.classList.toggle("green");
                            this.classList.toggle("selected");
                        });
                        td.textContent=`${rows[j]}${births[k-1]}${7-k}`;
                        td.classList.add("green");
                    }else if(i==2){
                        if(k==1){
                            td.textContent=`Cabin ${rows[j]}`;
                        }
                        if(k==3){
                            td.style.backgroundColor="skyblue";
                            td.textContent="Table";

                        }
                    }
                }
                row.appendChild(td);

            }
            table.appendChild(row)

        }
    }
}
function coach4() {
    table.innerHTML="";
    let a =5;
    let b = 30;
    for (let i =0;i<5;i++){
        
        for(j=0;j<3;j++){
            let row = document.createElement("tr");   
            for(k=0;k<5;k++){
                
                td= document.createElement("td");
                if(k==0){
                    
                    if(j==1){
                        td.textContent="Table";
                        td.style.backgroundColor="Skyblue"; 
                    }
                    if(j==0){
                        td.addEventListener("click", function () {
                            this.classList.toggle("green");
                            this.classList.toggle("selected");
                        });
                        td.textContent=`${b}S`;
                        td.classList.add("green");
                        b++;
                        if(i==0){
                           td.style.backgroundColor="#f8f9fa";
                            td.textContent="";
                        }
                    }
                    if(j==2){
                        td.addEventListener("click", function () {
                            this.classList.toggle("green");
                            this.classList.toggle("selected");
                        });
                        td.textContent=`${b}S`;
                        td.classList.add("green");
                        b++;

                    }
                    if(i==4&&j==2){
                    td.style.backgroundColor="#f8f9fa";
                    td.textContent="";
                    }
                    
                }else if(k==1){
                    if(j==0&&i==0){
                        td.textContent="Enter";
                    }
                    if(j==2&&i==4){
                        td.textContent= "Exit";
                    }
                }else{
                    if(j==0&&k!=0){
                        td.addEventListener("click", function () {
                            this.classList.toggle("green");
                            this.classList.toggle("selected");
                        });
                        td.textContent=`${a-k}B`;
                        td.classList.add("green");
                    }else if(j==2&&k!=0){
                        td.addEventListener("click", function () {
                            this.classList.toggle("green");
                            this.classList.toggle("selected");
                        });
                        td.textContent=`${a+3-k}B`;
                        td.classList.add("green");
                    }else if(j==1){
                        if(k==2){
                            td.textContent="Cabin";
                        }
                        if(k==4){
                            td.textContent="Table";
                            td.style.backgroundColor="skyblue";
                        }
                    }
                }
               
                row.appendChild(td);   
                        
            }
            table.appendChild(row);
            
        }
        
        a+=6;
        
    }
    
}
document.getElementById("seatLayout").appendChild(table);



