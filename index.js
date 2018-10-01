const logDriverNames = function (array){
  array.forEach(function (array) {
    console.log(array.name);
  });
};

const logDriversByHometown = function (array, loc){
  array.forEach(function (driver) {
    if (driver.hometown === loc){
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function(array){
  array.sort(function (a,b){
    return a.revenue - b.revenue;
  });
  return array;
};