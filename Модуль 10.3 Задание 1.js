
let y = prompt('Введите значение')
const x = +y
if (isNaN(x)){
  console.log("Упс, кажется, вы ошиблись")
}else if (typeof x === "number"){
      console.log(x)
}
else {
    console.log("Значение является Nan" )
}