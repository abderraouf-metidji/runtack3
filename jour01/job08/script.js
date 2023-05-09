function sommenombrespremiers(a, b) {

  function estPremier(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  if (!estPremier(a) || !estPremier(b)) {
    return false;
  }
  
  return a + b;
}

console.log(sommenombrespremiers(3, 5));
console.log(sommenombrespremiers(10, 7));
console.log(sommenombrespremiers(19, 22091))