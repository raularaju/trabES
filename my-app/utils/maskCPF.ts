const maskCpf = (value: string) => {
    return value
      .replace(/\D/g, "") // remove non-digits
      .replace(/(\d{3})(\d)/, "$1.$2") // insert dot after the third digit
      .replace(/(\d{3})(\d)/, "$1.$2") // insert dot after the sixth digit
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // insert dash before the last two digits
  };

  export default maskCpf 