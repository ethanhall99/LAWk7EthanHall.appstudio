
customerDelete.onshow=function(){

  query = "SELECT name FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

  if (req.status == 200) { 
    results = JSON.parse(req.responseText)
    if (results.length == 0)    
       txtCurrentCustomers.value = "There are no customers in the database."
    else {        
       let message = ""
       for (i = 0; i < results.length; i++)
           message = message + results[i][0] + "\n"
       txtCurrentCustomers.value = message
    }

} else
    txtShowCustomers.value = "Error code: " + req.status  
}


btnDelete.onclick=function(){
  
    let customerDelete = inptCustomer.value
    query = "DELETE FROM customer WHERE name = '" + customerDelete + "'"      
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    
      if (req.status == 200) {
            if (req.responseText == 500)    
                lblDeleteMessage.textContent = `You have successfully deleted the customer named ${customerDelete}`
            else
                lblDeleteMessage.textContent = `There was a problem deleting ${customerDelete} from the database.`
      } else
        lblDeleteMessage.textContent = `Error: ${req.status}`
}

