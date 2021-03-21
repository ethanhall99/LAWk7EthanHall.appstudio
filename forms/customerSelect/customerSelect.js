// Global Variables
let req = ""
let query = ""
let results = ""
let pw = "BiA375.ekh"  
let netID = "ekh74960"


btnViewCustomers.onclick=function(){

  query = "SELECT name FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ekh74960&pass=" + pw + "&database=ekh74960&query=" + query)

  if (req.status == 200) { 
    results = JSON.parse(req.responseText)
    if (results.length == 0)    
       txtShowCustomers.textContent = "There are no customers in the database."
    else {        
       let message = ""
       for (i = 0; i < results.length; i++)
           message = message + results[i][1] + "\n"
       txtShowCustomers.value = message
    }

} else
    txtShowCustomers.textContent = "Error code: " + req.status
}
