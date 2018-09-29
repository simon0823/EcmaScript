//Block-Scoped Constructs Let and Const

function blockScope(bool) {
  var amount = 0;

  if(bool) {
    let amount = 1;
  }

  return amount;
}

console.log(blockScope(true));
