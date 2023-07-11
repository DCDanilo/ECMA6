class Persona{
    constructor(nome, cognome){
        this.nome = nome;
        this.cognome = cognome;
    }
    get nomeCompleto(){
        return `${this.nome} ${this.cognome}`
    }  
}

class Giocatore extends Persona{
    constructor(nome, cognome){
        super(nome, cognome);
        this.punteggi = 0;
    }
    aggiornaPunteggi(punti){
        this.punteggi += punti;
    }

    get punteggio(){
        return this.punteggi;
    }

    get descrizione(){
        return `${super.nomeCompleto} - ${this.punteggio}` ;
    }
}

class Allenatore extends Persona{
    constructor(nome, cognome, anno){
        super(nome, cognome);
        this.anno_assunzione = anno;
    }

    get descrizione(){
        return `${this.nomeCompleto} (dal ${this.anno_assunzione})`;
    }
}

class Squadra{
    constructor(nome, allenatore){
        this.nome_squadra = nome;
        this.allenatore = allenatore;
        this.giocatori = new Set();
    }

    aggiungiGiocatore(giocatore){
        this.giocatori.add(giocatore);
    }

    rimuoviGiocatore(giocatore){
        return this.giocatori.delete(giocatore);
    }

    stampaSquadra(){
        document.write(`Squadra: ${this.nome_squadra} <br>`);
        document.write(`allena: ${allenatore.descrizione} <br>`);
        document.write(`formazione: ${this.giocatori.size} giocatori <br><br>`);


        for(let g of this.giocatori ){
            document.write(g.descrizione + '<br>');
        }
    }

    get Mvp(){
        let mvp = "";
        for(let g of this.giocatori){
            if( mvp == null || mvp < g.punteggio );{
                mvp = g;
            } 
        }
        return mvp;
    }

    get dbgGiocatori(){
        return console.log(this.giocatori);

    }
}