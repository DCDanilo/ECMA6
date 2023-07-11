var giocatore1 = new Giocatore("Alessio", "Bianchi");
var giocatore2 = new Giocatore("Roberto", "Baggio");
var giocatore3 = new Giocatore("Giuseppe", "Vedi");


var allenatore = new Allenatore("Gigi", "Buffon", 2020);

var squadra    = new Squadra("halo", allenatore);

giocatore1.aggiornaPunteggi(3);
giocatore1.aggiornaPunteggi(3);

giocatore2.aggiornaPunteggi(10);

giocatore3.aggiornaPunteggi(20);
giocatore3.aggiornaPunteggi(10);
giocatore3.aggiornaPunteggi(50);

squadra.aggiungiGiocatore(giocatore1);
squadra.aggiungiGiocatore(giocatore2);
squadra.aggiungiGiocatore(giocatore3);


squadra.stampaSquadra();

document.write('<br>');
document.write(`MVP: ${squadra.Mvp.descrizione}`);
document.write('<br><br>');

squadra.dbgGiocatori;


if(squadra.rimuoviGiocatore(giocatore3)){

    document.write('giocatore rimosso');
    document.write('<br><br>');

}

squadra.stampaSquadra();
document.write('<br>');
document.write(`MVP: ${squadra.Mvp.descrizione}`);
  