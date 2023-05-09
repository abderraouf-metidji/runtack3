function tri(numbers, order) {

  if (order !== 'asc' && order !== 'desc') {
    console.error('Paramètre order invalide.');
    return;
  }


  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < numbers.length - 1; i++) {
      if (order === 'asc' && numbers[i] > numbers[i + 1]) {
        let temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
        sorted = false;
      } else if (order === 'desc' && numbers[i] < numbers[i + 1]) {
        let temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
        sorted = false;
      }
    }
  }


  return numbers;
}

let numbers = [22, 45, 1, 3, 7, 95, 105, 3584, 5, 9, 24];
console.log(tri(numbers, 'desc'));