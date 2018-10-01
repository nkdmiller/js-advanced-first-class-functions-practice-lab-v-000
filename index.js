const logDriverNames = function (array){
  array.forEach(function (array) {
    console.log(array.name);
  });
};

const logDriversByHometown = function (array, loc){
  array.forEach(function (array) {
    if (array.location === loc){
      console.log(array.name);
    }
  });
};