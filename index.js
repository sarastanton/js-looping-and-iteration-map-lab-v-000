// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(function(name) {return name.toLowerCase();})
}

function nameToAttributes(drivers) {
  const newDrivers = drivers.map(function(name) {
    return Object.assign({}, {firstName: name.split(" ")[0], lastName: name.split(" ")[1]})
  })
  return newDrivers;
}


function attributesToPhrase(drivers) {
  return drivers.map(function(indiv) {return `${indiv.name} is from ${indiv.hometown}`})
}
