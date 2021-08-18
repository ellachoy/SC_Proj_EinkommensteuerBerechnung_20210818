console.log("test")

function showMe(){
    let zvE=Number(document.getElementById("b_Gehalt").value);
    console.log(zvE)
    let result=document.getElementById("Est")
    let year=Number(document.getElementById("jahr"))
    console.log(year.value)
    let single=document.getElementById("ledig")
    let married=document.getElementById("verheiratet")
  
   
        if (zvE >= 9745 && zvE <= 14753) {
            y = (zvE - 9744) / 10000
            result.innerHTML = (995.21 * y + 1400) * y

        } else if (zvE >= 14754 && zvE <= 57918) {
            z = (zvE - 14753) / 10000
            result.innerHTML = (208.85 * z + 2397) * z + 950.96
                
        } else if (zvE >= 57919 && zvE <= 274612) {
            result.innerHTML = 0.42 * zvE - 9136.63
                
        } else if (zvE >= 274613) {
            result.innerHTML = 0.45 * zvE - 17374.99
                
        }else{
            result.innerHTML= 0
        }

    // switch (year) {
    //     case (2021):
    //         if (zvE >= 9745 && zvE <= 14753) {
    //             y = (zvE - 9744) / 10000
    //             result.innerHTML = (995.21 * y + 1400) * y
    
    //         } else if (zvE >= 14754 && zvE <= 57918) {
    //             z = (zvE - 14753) / 10000
    //             result.innerHTML = (208.85 * z + 2397) * z + 950.96
                    
    //         } else if (zvE >= 57919 && zvE <= 274612) {
    //             result.innerHTML = 0.42 * zvE - 9136.63
                    
    //         } else if (zvE >= 274613) {
    //             result.innerHTML = 0.45 * zvE - 17374.99
                    
    //         }else{
    //             result.innerHTML= 0
    //         }
    //         break; 
    //     default:
    //         result.innerHTML= "Data service not available. please try again later"
    //     break;     
    // }
        
} 

function changeColor1(){
    document.getElementById("star1").style.color="red"
}
function changeColor2(){
    document.getElementById("star2").style.color="yellow"
}
function changeColor3(){
    document.getElementById("star3").style.color="purple"
}
function changeColor4(){
    document.getElementById("star4").style.color="orange"
}
function changeColor5(){
    document.getElementById("star5").style.color="blue"
}
