const logDriverNames = function (array){
  array.forEach(function (array) {
    console.log(array.name);
  });
};

const logDriversByHometown = function (array, loc){
  array.forEach(function (driver) {
    if (driver.location == loc){
      console.log(driver.name);
    }
  });
};