let arr = [];

while (true) {
  let input = prompt('Введите команду (add/del/stop) и имя:');

  if (input === 'stop') {
    break;
  }

  let arrAdd = input.split(' ');

  if (arrAdd[0] === 'add') {
    arr.push(arrAdd[1]);
  } else if (arrAdd[0] === 'del') {
    let index = arr.indexOf(arrAdd[1]);
    if (index !== -1) {
      arr.splice(index, 1);
    }
  }
}

console.log(arr);