//////////////////
//// ARRAYS /////
/////////////////

let tabuleiro = [
    [, , , , , , ,],
    [, , , , , , ,],
    [, , , , , , ,],
    [, , , , , , ,],
    [, , , , , , ,],
    [, , , , , , ,],
    [, , , , , , ,],
    [, , , , , , ,],

];
/**
let tabuleiro = [
    ["T", "C", "B", "Re", "Ra", "B", "C", "T"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["T", "C", "B", "Ra", "Re", "B", "C", "T"]
    
];
   */

let pecasBrancas = [
    /** 
    peaoBranco1, peaoBranco2, peaoBranco3, peaoBranco4, peaoBranco5, peaoBranco6, peaoBranco7, peaoBranco8,
    torreBranca1, torreBranca2, bispoBranco1, bispoBranco2, cavaloBranco1, cavaloBranco2, 
    RainhaBranca, reiBranco
    */
];

let pecasPretas = [
    /**
    peaoPreto1, peaoPreto2, peaoPreto3, peaoPreto4, peaoPreto5, peaoPreto6, peaoPreto7, peaoPreto8,
    torrePreta1, torrePreta2, bispoPreto1, bispoPreto2, cavaloPreto1, cavaloPreto2, 
    RainhaPreta, reiBranco
     */
];
//////////////
///CLASSES///
////////////
//-CASA
class Casa {
    constructor(linha, coluna, ocupada, peca) {
        this.linha = linha
        this.coluna = coluna
        this.ocupada = ocupada
        this.peca=peca
    }

    // recebeRemovePeca(linha, coluna) {
    //     if (this.linha === linha && this.coluna === coluna) {
    //         if (this.ocupada === true) {
    //             this.ocupada = false
    //         } else {
    //             this.ocupada = true
    //         }
    //     }
    // }
}
//-CLASSE MÃE PEÇA
class Peca {
    //atributos
    constructor(cor, posicaoColuna, posicaoLinha) {
        this.cor = cor
        this.posicaoLinha = posicaoLinha
        this.posicaoColuna = posicaoColuna
        this.nome
    }
    //metodos
    movimentar() {
        //REMOVER PEÇA DA DIV AONDE ESTAVA
        atualizaTabuleiro()
        tabuleiro[this.posicaoLinha][this.posicaoColuna].ocupada = true
    }
    // comerPeca(casa){
    
    //         if(casa.ocupada==true&&casa.peca.cor!=this.peca.cor){
    //             this.movimentar()
    //         }
    // }
}
//-PEÃO
class Peao extends Peca {
    constructor(cor, posicaoColuna, posicaoLinha) {
        super(cor, posicaoColuna, posicaoLinha)
        this.nome = "P"
    }

    //andar 2 ou um caso esteja em posição inicial
    moverDuasCasas(){
        switch(this.cor){
            case "preto" :{
                tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)
                if(this.posicaoLinha===6){
                    this.posicaoLinha-=2
                }  
                tabuleiro[this.posicaoLinha][this.posicaoColuna].peca=
                    new Peao(this.cor, this.posicaoColuna, this.posicaoLinha)
            }
                break;
            case "branco":{
                tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)
                if(this.posicaoLinha===1){
                    this.posicaoLinha+=2
                }  
                tabuleiro[this.posicaoLinha][this.posicaoColuna].peca=
                    new Peao(this.cor, this.posicaoColuna, this.posicaoLinha)
            }
                break;
        }
        super.movimentar();
    }
    movimentar() {

        switch (this.cor) {
            case "preto":
                {
                    tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)
                    if (this.posicaoLinha >= 3) {
                        this.posicaoLinha -= 1
                    } 
                    tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                        new Peao(this.cor, this.posicaoColuna, this.posicaoLinha)
                }
                break;
            case "branco":
                {
                    tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)
                    if (this.posicaoLinha <= 4) {
                        this.posicaoLinha += 1
                    } 
                    tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                        new Peao(this.cor, this.posicaoColuna, this.posicaoLinha)
                }
                break;
        }

        super.movimentar()
    }
     comerPecaDireita(){
         let linha, coluna
        switch (this.cor) {
            case "branco":
                {

                    if ((this.posicaoLinha + 1) > 7 || (this.posicaoLinha + 1) < 0 || (this.posicaoColuna + 1) > 7 || (this.posicaoColuna + 1) < 0) {
                        //sai do tabuleiro
                    } else {
                        linha=this.posicaoLinha+1
                        coluna=this.posicaoColuna+1
                        if(tabuleiro[linha][coluna].peca.cor!=this.cor&&tabuleiro[linha][coluna].ocupada==true){
                            tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                            this.posicaoLinha++
                            this.posicaoColuna++
    
                            tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                                new Peao(this.cor, this.posicaoColuna, this.posicaoLinha)
                        }
                    }
                }
                break;
            case "preto":
                {
                    if ((this.posicaoLinha - 1) > 7 || (this.posicaoLinha - 1) < 0 || (this.posicaoColuna+1) > 7 || (this.posicaoColuna+1) < 0) {
                        //sai do tabuleiro
                    } else {
                        linha = this.posicaoLinha-1
                        coluna = this.posicaoColuna+1
                        
                        if(tabuleiro[linha][coluna].peca.cor!=this.cor&&tabuleiro[linha][coluna].ocupada==true){
                            tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                            this.posicaoLinha--
                            this.posicaoColuna++
    
                            tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                                new Peao(this.cor, this.posicaoColuna, this.posicaoLinha)
                        }
                      
                    }
                }
                break;
            }
            super.movimentar();
     }
     comerPecaEsquerda(){
        let linha, coluna
       switch (this.cor) {
           case "branco":
               {

                   if ((this.posicaoLinha + 1) > 7 || (this.posicaoLinha + 1) < 0 || (this.posicaoColuna + 1) > 7 || (this.posicaoColuna + 1) < 0) {
                       //sai do tabuleiro
                   } else {
                       linha=this.posicaoLinha+1
                       coluna=this.posicaoColuna-1
                       if(tabuleiro[linha][coluna].peca.cor!=this.cor&&tabuleiro[linha][coluna].ocupada==true){
                           tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                           this.posicaoLinha++
                           this.posicaoColuna--
   
                           tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                               new Peao(this.cor, this.posicaoColuna, this.posicaoLinha)
                       }
                   }
               }
               break;
           case "preto":
               {
                   if ((this.posicaoLinha - 1) > 7 || (this.posicaoLinha - 1) < 0 || (this.posicaoColuna+1) > 7 || (this.posicaoColuna+1) < 0) {
                       //sai do tabuleiro
                   } else {
                       linha = this.posicaoLinha-1
                       coluna = this.posicaoColuna-1
                    
                       if(tabuleiro[linha][coluna].peca.cor!=this.cor&&tabuleiro[linha][coluna].ocupada==true){
                           tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                           this.posicaoLinha--
                           this.posicaoColuna--
   
                           tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                               new Peao(this.cor, this.posicaoColuna, this.posicaoLinha)
                       }
                     
                   }
               }
               break;
           }
           super.movimentar();
    }
}
//-CAVALO
class Cavalo extends Peca {
    //CONSTRUTOR
    constructor(cor, posicaoColuna, posicaoLinha) {
        super(cor, posicaoColuna, posicaoLinha)
        this.nome = "C"
    }

    //MOVIMENTACAO
    movimentarFrenteEsquerdaColunaUm() {
        switch (this.cor) {
            case "branco":
                {

                    if (this.posicaoLinha > 7 || this.posicaoColuna > 7 || this.posicaoColuna < 0 || this.posicaoLinha < 0) {
                        //não movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)
                        this.posicaoLinha += 2
                        this.posicaoColuna -= 1

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Cavalo(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;
            case "preto":
                {

                    if (this.posicaoLinha > 7 || this.posicaoColuna > 7 || this.posicaoColuna < 0 || this.posicaoLinha < 0) {
                        //não movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)
                        this.posicaoLinha -= 2
                        this.posicaoColuna -= 1

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Cavalo(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }


                }
                break;
        }

        super.movimentar()
    }
    movimentarFrenteEsquerdaColunaDois() {

        switch (this.cor) {
            case "branco":
                {

                    if (this.posicaoLinha > 7 || this.posicaoColuna > 7 || this.posicaoColuna < 0 || this.posicaoLinha < 0) {
                        //não movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha += 1
                        this.posicaoColuna -= 2
                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Cavalo(this.cor, this.posicaoColuna, this.posicaoLinha)

                    }

                }
                break;
            case "preto":
                {

                    if (this.posicaoLinha > 7 || this.posicaoColuna > 7 || this.posicaoColuna < 0 || this.posicaoLinha < 0) {
                        //não movimenta  
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)
                        this.posicaoLinha -= 1
                        this.posicaoColuna -= 2

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Cavalo(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }

                }
                break;
        }

        super.movimentar()
    }
    movimentarFrenteDireitaColunaUm() {
        switch (this.cor) {
            case "branco":
                {

                    if (this.posicaoLinha > 7 || this.posicaoColuna > 7 || this.posicaoColuna < 0 || this.posicaoLinha < 0) {
                        //não movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)
                        this.posicaoLinha += 2
                        this.posicaoColuna += 1

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Cavalo(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;
            case "preto":
                {

                    if (this.posicaoLinha > 7 || this.posicaoColuna > 7 || this.posicaoColuna < 0 || this.posicaoLinha < 0) {
                        //não movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)
                        this.posicaoLinha -= 2
                        this.posicaoColuna += 1

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Cavalo(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }


                }
                break;
        }
        super.movimentar()
    }
    movimentarFrenteDireitaColunaDois() {
        switch (this.cor) {
            case "branco":
            case "branco":
                {

                    if (this.posicaoLinha > 7 || this.posicaoColuna > 7 || this.posicaoColuna < 0 || this.posicaoLinha < 0) {
                        //não movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha += 1
                        this.posicaoColuna += 2
                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Cavalo(this.cor, this.posicaoColuna, this.posicaoLinha)

                    }

                }
                break;
            case "preto":
                {

                    if (this.posicaoLinha > 7 || this.posicaoColuna > 7 || this.posicaoColuna < 0 || this.posicaoLinha < 0) {
                        //não movimenta  
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)
                        this.posicaoLinha -= 1
                        this.posicaoColuna += 2

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Cavalo(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }

                }
                break;
        }
        super.movimentar()
    }
    movimentarTrasEsquerdaColunaUm() {
        switch (this.cor) {
            case "branco":
                {


                    if (this.posicaoLinha > 7 || this.posicaoColuna > 7 || this.posicaoColuna < 0 || this.posicaoLinha < 0) {
                        //não movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha -= 2
                        this.posicaoColuna -= 1

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Cavalo(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }


                }
                break;
            case "preto":
                {

                    if (this.posicaoLinha > 7 || this.posicaoColuna > 7 || this.posicaoColuna < 0 || this.posicaoLinha < 0) {
                        //não movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)
                        this.posicaoLinha += 2
                        this.posicaoColuna -= 1
                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Cavalo(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }

                }
                break;
        }
        super.movimentar()
    }
    movimentarTrasEsquerdaColunaDois() {
        switch (this.cor) {
            case "branco":
                {

                    if (this.posicaoLinha > 7 || this.posicaoColuna > 7 || this.posicaoColuna < 0 || this.posicaoLinha < 0) {
                        //não movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha -= 1
                        this.posicaoColuna -= 2

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Cavalo(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }


                }
                break;
            case "preto":
                {

                    if (this.posicaoLinha > 7 || this.posicaoColuna > 7 || this.posicaoColuna < 0 || this.posicaoLinha < 0) {
                        //não movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha += 1
                        this.posicaoColuna -= 2

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Cavalo(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }


                }
                break;
        }
        super.movimentar()
    }
    movimentarTrasDireitaColunaUm() {
        switch (this.cor) {
            case "branco":
                {

                    if (this.posicaoLinha > 7 || this.posicaoColuna > 7 || this.posicaoColuna < 0 || this.posicaoLinha < 0) {
                        //não movimenta
                    } else {

                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha -= 2
                        this.posicaoColuna += 1

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Cavalo(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }


                }
                break;
            case "preto":
                {
                    if (this.posicaoLinha > 7 || this.posicaoColuna > 7 || this.posicaoColuna < 0 || this.posicaoLinha < 0) {
                        //não movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha += 2
                        this.posicaoColuna += 1

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Cavalo(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;
        }
        super.movimentar()
    }
    movimentarTrasDireitaColunaDois() {
        switch (this.cor) {
            case "branco":
                {

                    if (this.posicaoLinha > 7 || this.posicaoColuna > 7 || this.posicaoColuna < 0 || this.posicaoLinha < 0) {
                        //não movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha -= 1
                        this.posicaoColuna += 2

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Cavalo(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }



                }
                break;
            case "preto":
                {
                    if (this.posicaoLinha > 7 || this.posicaoColuna > 7 || this.posicaoColuna < 0 || this.posicaoLinha < 0) {
                        //não movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)
                        this.posicaoLinha += 1
                        this.posicaoColuna += 2

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Cavalo(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }

                }
                break;
        }
        super.movimentar()
    }
}
//-BISPO
class Bispo extends Peca {
    constructor(cor, posicaoColuna, posicaoLinha) {
        super(cor, posicaoColuna, posicaoLinha)
        this.nome = "B"
    }


    movimentarDireitaFrente(valorTentado) {
        valorTentado = Number(valorTentado)


        switch (this.cor) {
            case "branco":
                {

                    if ((valorTentado + this.posicaoLinha) > 7 || (valorTentado + this.posicaoLinha) < 0 || (valorTentado + this.posicaoColuna) > 7 || (valorTentado + this.posicaoColuna) < 0) {
                        //nao movimenta
                    } else {

                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha += valorTentado
                        this.posicaoColuna += valorTentado

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Bispo(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;
            case "preto":
                {
                    if ((this.posicaoLinha - valorTentado) > 7 || (this.posicaoLinha - valorTentado) < 0 || (valorTentado + this.posicaoColuna) > 7 || (valorTentado + this.posicaoColuna) < 0) {
                        //nao movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha -= valorTentado
                        this.posicaoColuna += valorTentado

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Bispo(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;

        }

        super.movimentar()
    }
    movimentarEsquerdaFrente(valorTentado) {
        valorTentado = Number(valorTentado)
        switch (this.cor) {
            case "branco":
                {
                    if ((valorTentado + this.posicaoLinha) > 7 || (valorTentado + this.posicaoLinha) < 0 || (this.posicaoColuna - valorTentado) > 7 || (this.posicaoColuna - valorTentado) < 0) {
                        //nao movimenta
                    } else {

                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha += valorTentado
                        this.posicaoColuna -= valorTentado

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Bispo(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;
            case "preto":
                {
                    if ((this.posicaoLinha - valorTentado) > 7 || (this.posicaoLinha - valorTentado) < 0 || (this.posicaoColuna - valorTentado) > 7 || (this.posicaoColuna - valorTentado) < 0) {
                        //nao movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha -= valorTentado
                        this.posicaoColuna -= valorTentado

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Bispo(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;
        }


        super.movimentar()

    }
    movimentarDireitaTras(valorTentado) {
        valorTentado = Number(valorTentado)
        switch (this.cor) {
            case "branco":
                {

                    if ((this.posicaoLinha - valorTentado) > 7 || (this.posicaoLinha - valorTentado) < 0 || (valorTentado + this.posicaoColuna) > 7 || (valorTentado + this.posicaoColuna) < 0) {
                        //nao movimenta
                    } else {

                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha -= valorTentado
                        this.posicaoColuna += valorTentado

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Bispo(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;
            case "preto":
                {
                    if ((valorTentado + this.posicaoLinha) > 7 || (valorTentado + this.posicaoLinha) < 0 || (valorTentado + this.posicaoColuna) > 7 || (valorTentado + this.posicaoColuna) < 0) {
                        //nao movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha += valorTentado
                        this.posicaoColuna += valorTentado

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Bispo(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;
        }

        super.movimentar()
    }
    movimentarEsquerdaTras(valorTentado) {
        valorTentado = Number(valorTentado)
        switch (this.cor) {
            case "branco":
                {

                    if ((this.posicaoLinha - valorTentado) > 7 || (this.posicaoLinha - valorTentado) < 0 || (this.posicaoColuna - valorTentado) > 7 || (this.posicaoColuna - valorTentado) < 0) {
                        //nao movimenta
                    } else {

                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha -= valorTentado
                        this.posicaoColuna -= valorTentado

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Bispo(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;
            case "preto":
                {
                    if ((valorTentado + this.posicaoLinha) > 7 || (valorTentado + this.posicaoLinha) < 0 || (valorTentado + this.posicaoColuna) > 7 || (valorTentado + this.posicaoColuna) < 0) {
                        //nao movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha += valorTentado
                        this.posicaoColuna -= valorTentado

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Bispo(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;

        }

        super.movimentar()
    }

}
//-TORRE
class Torre extends Peca {
    constructor(cor, posicaoColuna, posicaoLinha) {
        super(cor, posicaoColuna, posicaoLinha)
        this.nome = "T"
    }
    //movimentacao
    movimentarHorizontal(valorTentado) {
        valorTentado = Number(valorTentado)

        if (valorTentado > 7 || valorTentado < 0) {
            //nao movimenta
        } else {

            tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

            this.posicaoColuna = valorTentado

            tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                new Torre(this.cor, this.posicaoColuna, this.posicaoLinha)
        }
        super.movimentar()
    }
    movimentarVertical(valorTentado) {
        valorTentado = Number(valorTentado)

        if (valorTentado > 7 || valorTentado < 0) {
            //nao movimenta
        } else {

            tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

            this.posicaoLinha = valorTentado

            tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                new Torre(this.cor, this.posicaoColuna, this.posicaoLinha)
        }
        super.movimentar()
    }
}
//-REI
class Rei extends Peca {
    constructor(cor, posicaoColuna, posicaoLinha) {
        super(cor, posicaoColuna, posicaoLinha)
        this.nome = "Re"
    }
    //movimentacao da torre com máximo de uma casa
    movimentarHorizontalDireita() {

        if ((this.posicaoColuna + 1) > 7 || (this.posicaoColuna + 1) < 0) {
            //não movimenta
        } else {

            tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

            this.posicaoColuna++

            tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                new Rei(this.cor, this.posicaoColuna, this.posicaoLinha)
        }
        super.movimentar()
    }
    //movimentacao da torre com máximo de uma casa
    movimentarHorizontalEsquerda() {


        if ((this.posicaoColuna - 1) > 7 || (this.posicaoColuna - 1) < 0) {
            //não movimenta
        } else {
            tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

            this.posicaoColuna--

            tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                new Rei(this.cor, this.posicaoColuna, this.posicaoLinha)
        }
        super.movimentar()
    }
    //movimentacao da torre com máximo de uma casa
    movimentarFrente() {

        switch (this.cor) {
            case "branco": {

                if ((this.posicaoLinha + 1) > 7 || (this.posicaoLinha + 1) < 0) {
                    //não movimenta
                } else {
                    tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                    this.posicaoLinha++

                    tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                        new Rei(this.cor, this.posicaoColuna, this.posicaoLinha)
                }
            }
                break;
            case "preto": {
                if ((this.posicaoLinha - 1) > 7 || (this.posicaoLinha - 1) < 0) {
                    //não movimenta
                } else {
                    tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                    this.posicaoLinha--

                    tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                        new Rei(this.cor, this.posicaoColuna, this.posicaoLinha)
                }
            }
                break;
        }

        super.movimentar()
    }
    //movimentacao da torre com máximo de uma casa
    movimentarTras() {
        switch (this.cor) {
            case "branco": {
                if ((this.posicaoLinha - 1) > 7 || (this.posicaoLinha - 1) < 0) {
                    //não movimenta
                } else {
                    tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                    this.posicaoLinha--

                    tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                        new Rei(this.cor, this.posicaoColuna, this.posicaoLinha)
                }
            }
            case "preto": {
                if ((this.posicaoLinha - 1) > 7 || (this.posicaoLinha - 1) < 0) {
                    //não movimenta
                } else {
                    tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                    this.posicaoLinha++

                    tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                        new Rei(this.cor, this.posicaoColuna, this.posicaoLinha)
                }
            }
                super.movimentar()
        }
    }
    //movimentacao do bispo com máximo de uma casa
    movimentarDiagonalFrenteDireita() {
        switch (this.cor) {
            case "branco":
                {

                    if ((this.posicaoLinha + 1) > 7 || (this.posicaoLinha + 1) < 0 || (this.posicaoColuna + 1) > 7 || (this.posicaoColuna + 1) < 0) {
                        //nao movimenta
                    } else {

                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha++
                        this.posicaoColuna++

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Rei(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;
            case "preto":
                {
                    if ((this.posicaoLinha - 1) > 7 || (this.posicaoLinha - 1) < 0 || (this.posicaoColuna+1) > 7 || (this.posicaoColuna+1) < 0) {
                        //nao movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha--
                        this.posicaoColuna++

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Rei(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;

        }

        super.movimentar()
    }
    //movimentacao do bispo com máximo de uma casa
    movimentarDiagonalFrenteEsquerda() {
        switch (this.cor) {
            case "branco":
                {

                    if ((this.posicaoLinha + 1) > 7 || (this.posicaoLinha + 1) < 0 || (this.posicaoColuna - 1) > 7 || (this.posicaoColuna - 1) < 0) {
                        //nao movimenta
                    } else {

                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha++
                        this.posicaoColuna--

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Rei(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;
            case "preto":
                {
                    if ((this.posicaoLinha - 1) > 7 || (this.posicaoLinha - 1) < 0 || (this.posicaoColuna-1) > 7 || (this.posicaoColuna-1) < 0) {
                        //nao movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha--
                        this.posicaoColuna--

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Rei(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;

        }

        super.movimentar()
    }
    //movimentacao do bispo com máximo de uma casa
    movimentarDiagonalTrasDireita() {
        switch (this.cor) {
            case "branco":
                {

                    if ((this.posicaoLinha - 1) > 7 || (this.posicaoLinha - 1) < 0 || (this.posicaoColuna + 1) > 7 || (this.posicaoColuna + 1) < 0) {
                        //nao movimenta
                    } else {

                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha--
                        this.posicaoColuna++

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Rei(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;
            case "preto":
                {
                    if ((this.posicaoLinha + 1) > 7 || (this.posicaoLinha + 1) < 0 || (this.posicaoColuna+1) > 7 || (this.posicaoColuna+1) < 0) {
                        //nao movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha++
                        this.posicaoColuna++

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Rei(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;

        }

        super.movimentar()
    }
    //movimentacao do bispo com máximo de uma casa
    movimentarDiagonalTrasEsquerda() {
        switch (this.cor) {
            case "branco":
                {

                    if ((this.posicaoLinha - 1) > 7 || (this.posicaoLinha - 1) < 0 || (this.posicaoColuna - 1) > 7 || (this.posicaoColuna - 1) < 0) {
                        //nao movimenta
                    } else {

                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha--
                        this.posicaoColuna--

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Rei(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;
            case "preto":
                {
                    if ((this.posicaoLinha + 1) > 7 || (this.posicaoLinha + 1) < 0 || (this.posicaoColuna+1) > 7 || (this.posicaoColuna+1) < 0) {
                        //nao movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha++
                        this.posicaoColuna--

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Rei(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;

        }

        super.movimentar()
    }

}
//-RAINHA
class Rainha extends Peca {
    constructor(cor, posicaoColuna, posicaoLinha) {
        super(cor, posicaoColuna, posicaoLinha)
        this.nome = "Ra"
    }
    //movimentacao da torre
    movimentarHorizontal(valorTentado) {
        valorTentado = Number(valorTentado)

        if (valorTentado > 7 || valorTentado < 0) {
            //nao movimenta
        } else {

            tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

            this.posicaoColuna = valorTentado

            tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                new Rainha(this.cor, this.posicaoColuna, this.posicaoLinha)
        }
        super.movimentar()
    }
    movimentarVertical(valorTentado) {
        valorTentado = Number(valorTentado)

        if (valorTentado > 7 || valorTentado < 0) {
            //nao movimenta
        } else {

            tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

            this.posicaoLinha = valorTentado

            tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                new Rainha(this.cor, this.posicaoColuna, this.posicaoLinha)
        }
        super.movimentar()
    }
    //movimentacao do bispo 
    movimentarDiagonalFrenteDireita(valorTentado) {
        valorTentado = Number(valorTentado)


        switch (this.cor) {
            case "branco":
                {

                    if ((valorTentado + this.posicaoLinha) > 7 || (valorTentado + this.posicaoLinha) < 0 || (valorTentado + this.posicaoColuna) > 7 || (valorTentado + this.posicaoColuna) < 0) {
                        //nao movimenta
                    } else {

                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha += valorTentado
                        this.posicaoColuna += valorTentado

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Rainha(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;
            case "preto":
                {
                    if ((this.posicaoLinha - valorTentado) > 7 || (this.posicaoLinha - valorTentado) < 0 || (valorTentado + this.posicaoColuna) > 7 || (valorTentado + this.posicaoColuna) < 0) {
                        //nao movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha -= valorTentado
                        this.posicaoColuna += valorTentado

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Rainha(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;

        }

        super.movimentar()
    }
    //movimentacao do bispo
    movimentarDiagonalFrenteEsquerda(valorTentado) {
        valorTentado = Number(valorTentado)
        switch (this.cor) {
            case "branco":
                {
                    if ((valorTentado + this.posicaoLinha) > 7 || (valorTentado + this.posicaoLinha) < 0 || (this.posicaoColuna - valorTentado) > 7 || (this.posicaoColuna - valorTentado) < 0) {
                        //nao movimenta
                    } else {

                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha += valorTentado
                        this.posicaoColuna -= valorTentado

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Rainha(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;
            case "preto":
                {
                    if ((this.posicaoLinha - valorTentado) > 7 || (this.posicaoLinha - valorTentado) < 0 || (this.posicaoColuna - valorTentado) > 7 || (this.posicaoColuna - valorTentado) < 0) {
                        //nao movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha -= valorTentado
                        this.posicaoColuna -= valorTentado

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Rainha(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;
        }


        super.movimentar()
    }
    //movimentacao do bispo
    movimentarDiagonalTrasDireita(valorTentado) {
        valorTentado = Number(valorTentado)
        switch (this.cor) {
            case "branco":
                {

                    if ((this.posicaoLinha - valorTentado) > 7 || (this.posicaoLinha - valorTentado) < 0 || (valorTentado + this.posicaoColuna) > 7 || (valorTentado + this.posicaoColuna) < 0) {
                        //nao movimenta
                    } else {

                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha -= valorTentado
                        this.posicaoColuna += valorTentado

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Rainha(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;
            case "preto":
                {
                    if ((valorTentado + this.posicaoLinha) > 7 || (valorTentado + this.posicaoLinha) < 0 || (valorTentado + this.posicaoColuna) > 7 || (valorTentado + this.posicaoColuna) < 0) {
                        //nao movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha += valorTentado
                        this.posicaoColuna += valorTentado

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Rainha(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;
        }

        super.movimentar()
    }
    //movimentacao do bispo
    movimentarDiagonalTrasEsquerda(valorTentado) {
        valorTentado = Number(valorTentado)
        switch (this.cor) {
            case "branco":
                {

                    if ((this.posicaoLinha - valorTentado) > 7 || (this.posicaoLinha - valorTentado) < 0 || (this.posicaoColuna - valorTentado) > 7 || (this.posicaoColuna - valorTentado) < 0) {
                        //nao movimenta
                    } else {

                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha -= valorTentado
                        this.posicaoColuna -= valorTentado

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Rainha(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;
            case "preto":
                {
                    if ((valorTentado + this.posicaoLinha) > 7 || (valorTentado + this.posicaoLinha) < 0 || (valorTentado + this.posicaoColuna) > 7 || (valorTentado + this.posicaoColuna) < 0) {
                        //nao movimenta
                    } else {
                        tabuleiro[this.posicaoLinha][this.posicaoColuna] = new Casa(this.posicaoLinha, this.posicaoColuna, false)

                        this.posicaoLinha += valorTentado
                        this.posicaoColuna -= valorTentado

                        tabuleiro[this.posicaoLinha][this.posicaoColuna].peca =
                            new Rainha(this.cor, this.posicaoColuna, this.posicaoLinha)
                    }
                }
                break;

        }

        super.movimentar()
    }
}
//////////////////////
///AUTO-EXECUTAVEL///
////////////////////
//-criar tabuleiro
(function criaTabuleiro() {
    //OBS: PEÇAS brancoS FICAM NAS LINHAS 1/2 
    //     PEÇAS PRETAS FICAM NAS LINHAS 7/8
    var cor = "preto";
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            posicao = document.createElement("div");
            posicao.innerHTML = tabuleiro[i][j]

            posiId = "casa" + (i + 1) + trocarNumeroLetra(j) + " " + cor
            posicao.setAttribute("class", posiId)
            posicao.setAttribute("id", posiId)
            document.body.appendChild(posicao)

            cor = trocaCor(cor);
            tabuleiro[i][j] = new Casa(i, j, false)
        }
        cor = trocaCor(cor);
        document.body.innerHTML += "<br>"
    }

})();
//-povoa tabuleiro inicial
(function povoaTabuleiroInicial() {
    //-POVOANDO TABULEIRO INICIAL
    for (var i = 0; i < 8; i++) {
        //PEOES
        //-arrayPeca
        pecasPretas[i] = new Peao("preto", i, 6)
        //-tabuleiro
        tabuleiro[6][i].peca = new Peao("preto", i, 6)
        tabuleiro[6][i].ocupada = true
        //-arrayPeca
        pecasBrancas[i] = new Peao("branco", i, 1)
        //-tabuleiro
        tabuleiro[1][i].peca = new Peao("branco", i, 1)
        tabuleiro[1][i].ocupada = true
        //TORRES
        //-arrayPeca
        pecasPretas[7] = new Torre("preto", 7, 7)
        pecasPretas[8] = new Torre("preto", 0, 7)
        pecasBrancas[7] = new Torre("branco", 0, 0)
        pecasBrancas[8] = new Torre("branco", 7, 0)
        //-tabuleiro
        tabuleiro[0][0].peca = new Torre("branco", 0, 0)
        tabuleiro[0][0].ocupada = true
        tabuleiro[0][7].peca = new Torre("branco", 7, 0)
        tabuleiro[0][7].ocupada = true
        tabuleiro[7][7].peca = new Torre("preto", 7, 7)
        tabuleiro[7][7].ocupada = true
        tabuleiro[7][0].peca = new Torre("preto", 0, 7)
        tabuleiro[7][0].ocupada = true
        //BISPOS
        //-arrayPeca
        pecasPretas[9] = new Bispo("preto", 2, 7)
        pecasPretas[10] = new Bispo("preto", 5, 7)
        pecasBrancas[9] = new Bispo("branco", 2, 0)
        pecasBrancas[10] = new Bispo("branco", 5, 0)
        //-tabuleiro
        tabuleiro[0][2].peca = new Bispo("branco", 2, 0)
        tabuleiro[0][2].ocupada = true
        tabuleiro[0][5].peca = new Bispo("branco", 5, 0)
        tabuleiro[0][5].ocupada = true
        tabuleiro[7][2].peca = new Bispo("preto", 2, 7)
        tabuleiro[7][2].ocupada = true
        tabuleiro[7][5].peca = new Bispo("preto", 5, 7)
        tabuleiro[7][5].ocupada = true
        //CAVALOS
        //-arrayPeca
        pecasPretas[11] = new Cavalo("preto", 1, 7)
        pecasPretas[12] = new Cavalo("preto", 6, 7)
        pecasBrancas[11] = new Cavalo("branco", 1, 0)
        pecasBrancas[12] = new Cavalo("branco", 6, 0)
        //-tabuleiro
        tabuleiro[0][1].peca = new Cavalo("branco", 1, 0)
        tabuleiro[0][1].ocupada = true
        tabuleiro[0][6].peca = new Cavalo("branco", 6, 0)
        tabuleiro[0][6].ocupada = true
        tabuleiro[7][1].peca = new Cavalo("preto", 1, 7)
        tabuleiro[7][1].ocupada = true
        tabuleiro[7][6].peca = new Cavalo("preto", 6, 7)
        tabuleiro[7][6].ocupada = true
        //REI & RAINHA
        //-arrayPeca
        pecasPretas[13] = new Rainha("preto", 4, 7)
        pecasPretas[14] = new Rei("preto", 4, 7)
        pecasBrancas[13] = new Rainha("branco", 3, 0)
        pecasBrancas[14] = new Rei("branco", 3, 0)
        //-tabuleiro
        tabuleiro[0][4].peca = new Rainha("branco", 4, 0)
        tabuleiro[0][4].ocupada = true
        tabuleiro[0][3].peca = new Rei("branco", 3, 0)
        tabuleiro[0][3].ocupada = true
        tabuleiro[7][3].peca = new Rainha("preto", 3, 7)
        tabuleiro[7][3].ocupada = true
        tabuleiro[7][4].peca = new Rei("preto", 4, 7)
        tabuleiro[7][4].ocupada = true
    }
}

)();
//-nomeia tabuleiro
(function nomeiaTabuleiro() {
    var cor = "preto";
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var nomeDiv = ("casa" + (i + 1) + trocarNumeroLetra(j) + " " + cor)
            if (tabuleiro[i][j].peca) {
                document.getElementById(nomeDiv).innerHTML = tabuleiro[i][j].peca.nome
            } else {
                document.getElementById(nomeDiv).innerHTML = "-"
            }
            cor = trocaCor(cor);
        }
        cor = trocaCor(cor);
    }

})();
//////////////////////////
///MÉTODOS AUXILIARES////
////////////////////////
//-atualiza tabuleiro

 function atualizaTabuleiro() {

//     //OBS: PEÇAS BRANCAS FICAM NAS LINHAS 1/2 
//     //     PEÇAS PRETAS FICAM NAS LINHAS 7/8



     var cor = "preto";
     for (var i = 0; i < 8; i++) {
         for (var j = 0; j < 8; j++) {


             var nomeDiv = ("casa" + (i + 1) + trocarNumeroLetra(j) + " " + cor)
             if (tabuleiro[i][j].peca) {
                 document.getElementById(nomeDiv).innerHTML = tabuleiro[i][j].peca.nome
             } else {
                 document.getElementById(nomeDiv).innerHTML = "-"
             }
             cor = trocaCor(cor);
         }
         cor = trocaCor(cor);
     }
 }
//-trocar cor
function trocaCor(cor) {
    var color;
    if (cor == "branco") {
        color = "preto"
    } else {
        color = "branco";
    }
    return color;
}
//-trocar numero por letra
function trocarNumeroLetra(numero) {

    switch (numero) {
        case 0:
            numero = "A"
            break;

        case 1:
            numero = "B"
            break;

        case 2:
            numero = "C"
            break;

        case 3:
            numero = "D"
            break;

        case 4:
            numero = "E"
            break;

        case 5:
            numero = "F"
            break;

        case 6:
            numero = "G"
            break;

        case 7:
            numero = "H"
            break;
    }
    return numero
}
//MOVE PEÇA
/*

var globalVariavelEScrota = false
var x = null;

function clicar(i, j) {

    if (globalVariavelEScrota == true) {
        window.alert("Vc escolheu agora pa onde essa peça foi")
        tabuleiro[i][j] = tabuleiro[x[0]][x[1]]
        console.log("" + i + j)
        tabuleiro[x[0]][x[1]] = ""
        console.log("" + x[0] + x[1])
        class1 = "" + i + j
        class2 = "" + x[0] + x[1]
        console.log("o tabuleiro[i][j].sigla é " + tabuleiro[i][j].sigla)
        document.getElementById(class1).innerHTML = tabuleiro[i][j].sigla
        document.getElementById(class2).innerHTML = "&nbsp;"
        globalVariavelEScrota = false

        console.log(tabuleiro)
    } else {
        window.alert("escolheu a peça")
        window.alert("diga para onde ela vai")
        x = [i, j]
        globalVariavelEScrota = true
    }






*/