function squareArea(A){
  let a = A / (2 * Math.PI * (90 / 360));
  let area = Math.pow(a, 2);
  return Number(area.toFixed(2));
}

console.log(squareArea(2)) //> 1.62
console.log(squareArea(14.05)) //> 80
console.log(squareArea(0)) //> 0