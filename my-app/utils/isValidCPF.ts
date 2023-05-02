function isValidCPF(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    // Checks if CPF has 11 digits
    if (cpf.length != 11) return false;
  
    // Checks if all digits are equal
    let allEqual = true;
    for (let i = 1; i < cpf.length && allEqual; i++) {
      if (cpf[i] != cpf[0]) {
        allEqual = false;
      }
    }
    if (allEqual || cpf == "12345678909") {
      return false;
    }
  
    // Calculates verification digits
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rest = 11 - (sum % 11);
    if (rest == 10 || rest == 11) {
      rest = 0;
    }
    if (rest != parseInt(cpf.charAt(9))) {
      return false;
    }
  
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rest = 11 - (sum % 11);
    if (rest == 10 || rest == 11) {
      rest = 0;
    }
    if (rest != parseInt(cpf.charAt(10))) {
      return false;
    }
    return true;
}
  

export default isValidCPF