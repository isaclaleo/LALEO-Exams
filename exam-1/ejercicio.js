let n2 = 5
function fibo2(n2) {
  console.log("1n",n2);
    if (n2 == 0 || n2 == 1){
      return n2
    }
  let initialValues = [0, 1]
  console.log("initialvalues", initialValues);
  for (let i = 2; i <= n2; i ++){
    console.log("i",i)
    initialValues.push(initialValues[i-1] + initialValues[i-2])
  }
  return initialValues[initialValues.length - 1]
}

console.log("repuesta",fibo2(n2))