function add(...parameters) { // rest parameters (variable number of parameters)
  let result = 0;
  for (let i = 0; i < parameters.length; i++) {
    result = result + parameters[i];
  }
  console.log(result);
}

add(1,2,3,4);
add(5,6,7,8,9,10);
