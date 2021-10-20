
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

const engineer = (engineer) =>{
  console.log('TESING',engineer)
 
 
  return`<div class="card" style="width: 18rem;">
    <div class="card-body"> 
      <p><Engineer</p>
      <p class="card-text">Name: ${engineer.getName()}</p>
      <p class="card-text">ID: ${engineer.getid()}</p>
      <p class="card-text">Email: ${engineer.getEmail()}</p>
      <p class="card-text">Github:<a href="https://github.com/"${engineer.getGitHub()} target="_blank"></a></p>
  </div>`
 
};

const intern = (intern) =>{
  console.log('TESING',intern)
 
 
  return`<div class="card" style="width: 18rem;">
    <div class="card-body"> 
      <p><Intern</p>
      <p class="card-text">Name: ${intern.getName()}</p>
      <p class="card-text">ID: ${intern.getid()}</p>
      <p class="card-text">Email: ${intern.getEmail()}</p>
      <p class="card-text">Github: ${intern.getSchool()}</p>
  </div>`
};

const teamTemplate = (team) => {
console.log("test!!!",team)
return `
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
  
  ${team.map(user=>{
    console.log("map",user.Manager);

  if (user.title === "Manager"){
   return  manager(user)
  } else if (user.title === "Engineer") {
   return  engineer(user)
  }  else if (user.title === "Intern") {
    return intern(user)
  }
  }
)}

 </div>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
 `
}

module.exports = teamTemplate;


