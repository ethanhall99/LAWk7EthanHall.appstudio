
let nameAdd = ""
let street = ""
let city = ""
let state = ""
let zip = ""


customerAdd.onshow=function(){

  query = "SELECT name FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

  if (req.status == 200) { 
    results = JSON.parse(req.responseText)
    if (results.length == 0)    
       txtCustomers.textContent = "There are no customers in the database."
    else {        
       let message = ""
       for (i = 0; i < results.length; i++)
           message = message + results[i][0] + "\n"
       txtCustomers.value = message
    }

} else
    txtCustomers.textContent = "Error code: " + req.status  
}


btnAddCustomer.onclick=function(){
    nameAdd = inptName.value
    street = inptStreet.value
    city = inptCity.value
    state = inptState.value
    zip = inptZip.value
    query = "INSERT INTO customer (`name`,`street`, `city`, `state`, `zipcode`) VALUES ('" + nameAdd + "', '" + street + "', '" + city + "', '" + state + "', '" + zip + "')"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=clc90595&query=" + query)
    if (req.status == 200) { 
        if (req.responseText == 500)    
            lblAddMsg.textContent = "You have successfully added the customer!"
        else
            lblAddMsg.textContent = "There was a problem with adding the customer to the database."
    } else 
        lblAddMsg.textContent = "Error: " + req.status
}








