function resultBox (value){
    var box = document.getElementById("result-box").innerHTML +=value
    box += value
    // console.log(value)

 
  
//   document.getElementById('pause').disabled = false
// document.getElementById("result-box")    
}

 function allClear()
 {
     var box = document.getElementById("result-box")
     box.innerHTML = ""
     
     
    //  console.log(box)
 }

 function remValue(){
     var box = document.getElementById("result-box")
     box.innerHTML= box.innerHTML.slice(0 ,-1)
 }
 function result(){
     var box = document.getElementById("result-box")
     box.innerHTML=eval(box.innerHTML)
 }



