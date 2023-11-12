const matriz = [
    [10, 52, 33],
    [45, 15, 26],
    [77, 8, 39],
    [18, 12, 47]
  ];


  function encontreMaiorSomaLinha (matriz){
    let maiorSoma = 0
    let linhaMaiorSoma = []

    for(let i = 0; i < matriz.length; i++){
      let soma = 0
      for (let j = 0; j < matriz [i].length; j++){
        soma = soma + matriz [i][j]
      }
      if (soma > maiorSoma){
        maiorSoma = soma
        linhaMaiorSoma = matriz[i]
      }
    }
    const message = `A maior soma é ${maiorSoma} e a matriz é ${linhaMaiorSoma}`

    return message
  }

  console.log (encontreMaiorSomaLinha (matriz))