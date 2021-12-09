function dot_product(vector1, vector2) {
  var result = 0;
  for (var i = 0; i < vector1.length; i++) {
    result += vector1[i] * vector2[i];
  }
  return result;
}
console.log(dot_product([1, 2, 3], [1, 2, 3]));

function is_orthogonal(vector1, vector2) {
  let product = dot_product(vector1, vector2);
  if (product === 0) {
    console.log("orthogonal");
  } else console.log("not orthogonal");
}

is_orthogonal([-1, 2], [4, 2]);
