function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function named() {
    console.log("A named function");
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("Anonyme");
  };
}
