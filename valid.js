function validate(){
    var x = document.forms["myForm"]["name"].value;
    var y = document.forms["myForm"]["price"].value;
    var z = document.forms["myForm"]["date"].value;
    
    if (x == "") {
      alert("Name The Dish");
      return false;
    } 
    
    else if (y == "") {
        alert("Enter Price");
        return false;
      }
      
      else if (z == "") {
        alert("Choose Date");
        return false;
      }

}