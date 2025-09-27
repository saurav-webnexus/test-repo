// A) using var
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var ->', i), 10);
}
// prints:
// var -> 3
// var -> 3
// var -> 3
