function calcular(){
    // window.alert("ok")

    //pega quantas vezes o nivel de dificuldade se repete em cada ocasiao
    let rx1 = Number(window.document.getElementById('x').value)
    let rx2 = Number(window.document.getElementById('x2').value)
    let rx3 = Number(window.document.getElementById('x3').value)
    let rx4 = Number(window.document.getElementById('x4').value)
    let rx5 = Number(window.document.getElementById('x5').value)

    //pega quantas horas serão para estudos em um dia
    let horaspd = Number(window.document.getElementById('hrspd').value)

    //pega quandos dias em uma semana serão usados para estudo
    let diaspsemana = Number(window.document.getElementById('dpe').value)

    //verificando se algum valor dos dias ou da hora é inválido
    if(horaspd == 0 || diaspsemana == 0){
        window.alert("Se 1 hora de estudo é insuficiente, imagina NENHUMA né")
    } else {
        //descobre quantas horas serão usadas para estudos em uma semana
        let horaspsemana = horaspd * diaspsemana

        //Soma de todos os x 
        let stx = (rx1*1) + (rx2*2) + (rx3*3) + (rx4*4) + (rx5*5)

        //descobre o valor de x
        let xvalor = horaspsemana / stx

        //window.alert("ok")

        /*
        Agora, será feita a etapa onde serão definidas quantas horas são necessárias para cada ocasiao.
        No caso, quantos quadradinhos cada matéria terá de acordo com a dificuldade em que ela se encontra
        a dificuldade foi definida na parte onde o usuário foi perguntado em quantas matérias o 5x se repete,
        em quantas matérias o 4x se repete, e assim sucessivamente
        */

        //pegando os valores em decimais
        let valorindOtimo = xvalor
        let valorindBom = xvalor * 2
        let valorindMaisouMenos = xvalor * 3
        let valorindRuim = xvalor * 4
        let valorindPessimo = xvalor * 5
        
        //Arredondando para inteiros
        let valorfOtimo = Math.round(valorindOtimo)
        let valorfBom = Math.round(valorindBom)
        let valorfMaisouMenos = Math.round(valorindMaisouMenos)
        let valorfRuim = Math.round(valorindRuim)
        let valorfPessimo = Math.round(valorindPessimo)

        //verificando se algum valor deu 1 hora apenas
        if (valorfPessimo <= 1){
            valorfPessimo++
        }
        if (valorfRuim <= 1){
            valorfRuim++
        }
        if (valorfMaisouMenos <= 1){
            valorfMaisouMenos++
        }
        if (valorfBom <= 1){
            valorfBom++
        }
        if (valorfOtimo <= 1){
            valorfOtimo++
        }

        //Mostrando o resultado na tela
        let res = window.document.getElementById('bloco')
        res.innerHTML = `<br><h2>De acordo com os resultados, essa é a quantidade ideal de horas (quadrados) que voce deve estudar para cada dificuldade:</h2><br><h3>Péssimo:<br>${valorfPessimo} quadrados / ${valorfPessimo} horas</h3><h3>Ruim:<br>${valorfRuim} quadrados / ${valorfRuim} horas</h3><h3>Mais ou Menos:<br>${valorfMaisouMenos} quadrados / ${valorfMaisouMenos} horas</h3><h3>Bom:<br>${valorfBom} quadrados / ${valorfBom} horas</h3><h3>Ótimo:<br>${valorfOtimo} quadrados / ${valorfOtimo} horas</h3><br><h4>Se alguma dificuldade teve 0 matérias, apenas ignore.</h4><br><p><button onclick="bck()">Voltar ao início</button></p><br>`
    }
    
}



function bck(){
    //voltar para a página normal
    window.location.href = `cde.html`
}