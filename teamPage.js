
const manager = (manager) =>
`
<div class="card" style="width: 18rem;">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p><Manager</p>
  <p class="card-text">Name: ${getName()}</p>
  <p class="card-text">ID: ${getid()}</p>
  <p class="card-text">Email${getemail()}</p>
  <p class="card-text">Name${manager.officeNumber}</p>
  
</div>
</div>`


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
<link rel="stylesheet href="styles.css">
 </head>
 <body>
 <div>
  <h1>${manager(team[0])}</h1> <-------------this is undefined cuz its not declared anywhere above
  
 </div>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
 `

module.exports = teamTemplate;


