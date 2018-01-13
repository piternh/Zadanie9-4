function drawTree(floors) {
  
  for(var i=1;i<=floors;i++) {
    
    var star = "";
    for(var j=1; j<=i; j++) {
      star += "*";
    } 

    console.log(star);
    
  }
  
}
