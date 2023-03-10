// Numero inicial
let n = 5
function fibo5(n) {
  // guardo mi numero inical
  console.log("n",n);
  //  Hago una condicion donde me igualo mi nuemero inicial tomando mis valores iniciales y returno mi numero si no es igualado
    if (n == 0 || n == 1){
      return n
    }
    // Declaro mis valores inciales donde se van a estar acumulando por cada iteracion o numero inical
  let initialValues = [0, 1]
  console.log("initialvalues", initialValues);
  // realizo un loops counter para llegar a mi numero incial n
  for (let i = 2; i <= n; i ++){
    // el let i = 2 is mi variable incial para donde se inicializa mi loop, entonces mi i <= n es donde va a llegar n hasta que alcance el valor n y i ++ es donde se va actualizar mi varialble incial del lopp 
    console.log("i",i)
    // se utiliza el metodo push donde se añade un nuevo valore dentro  mis valores inciales para poder iteral mis valores solicitados de mi loop don estoy guardando mis valores inciales y se estan sumando los dos valores iniciales y al mismo tiempo esta restando mi i de mi loop para asi llegar has el numero incial y cuando llega se actualza mi numero incial n + el resultado de la suma de mis valores iniciales
    initialValues.push(initialValues[i-1] + initialValues[i-2])

  }
  // cuando se termina mi loop  mando a llamar mis valores inciales cuando mando a llamar mi nuevo numero de mi array que se dio del loop y actualizado resto uno ya que se esta quitando del loop  
  return initialValues[initialValues.length - 1]
}

console.log("repuesta",fibo5(n))