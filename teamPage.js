
const manager = (manager) =>
`
<div class="card" style="width: 18rem;">
  <div class="card-body"> 
    <p><Manager</p>
    <p class="card-text">Name: ${manager.getName()}</p>
    <p class="card-text">ID: ${manager.getid()}</p>
    <p class="card-text">Email: ${manager.getEmail()}</p>
    <p class="card-text">Office Number: ${manager.officeNumber}</p>
  </div>
</div>`

const engineer = (engineer) =>
 for(var i =0; i< team.engineer; i++) {
`
<div class="card" style="width: 18rem;">
  <div class="card-body"> 
    <p><Manager</p>
    <p class="card-text">Name: ${engineer.getName()}</p>
    <p class="card-text">ID: ${engineer.getid()}</p>
    <p class="card-text">Email: ${engineer.getEmail()}</p>
    <p class="card-text">Github: ${engineer.guthubUserName}</p>
  </div>
</div>`
 }

const teamTemplate = (team) =>
 `
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Team Profile</title>
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link rel="stylesheet" href="styles.css">
 </head>
 <body>
 <div>
  <h1>${manager(team[0])}</h1> 
  <h1>${engineer(team)[0]}</h1>
 </div>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
 `

module.exports = teamTemplate;


