function Konyvek(cim, szerzo, kiadasiEv,oldalszam) {
    this.cim = cim;
    this.szerzo = szerzo;
    this.kiadasiEv = kiadasiEv;
    this.oldalszam = oldalszam;
    this.kolcsonozve = false;
    this.kolcsonoz = function() {
        this.kolcsonozve = true;
    }
    this.visszahoz = function() {
        this.kolcsonozve = false;
    }
    
}

konyv1 = new Konyvek("A Gyűrűk Ura", "J.R.R. Tolkien", 1954, 423);
konyv2 = new Konyvek("A Hobbit", "J.R.R. Tolkien", 1937, 310);
konyv3 = new Konyvek("A Gyűrűk Ura: A két torony", "J.R.R. Tolkien", 1954, 352);

let konyvek = [konyv1, konyv2, konyv3];

console.log(konyvek);

let konyvekTable = document.getElementById("bookTable");
for (let konyv of konyvek) {
    const sor = document.createElement("tr");
    const cimOszlop = document.createElement("td");
    const szerzoOszlop = document.createElement("td");
    const kiadasiEvOszlop = document.createElement("td");
    const oldalszamOszlop = document.createElement("td");
    const allapotOszlop = document.createElement("td");
    const muveletOszlop = document.createElement("td");

    cimOszlop.textContent = konyv.cim;
    szerzoOszlop.textContent = konyv.szerzo;
    kiadasiEvOszlop.textContent = konyv.kiadasiEv;
    oldalszamOszlop.textContent = konyv.oldalszam;
    allapotOszlop.textContent = konyv.kolcsonozve ? "Kölcsönözve" : "Elérhető";

    

    sor.appendChild(cimOszlop);
    sor.appendChild(szerzoOszlop);
    sor.appendChild(kiadasiEvOszlop);
    sor.appendChild(oldalszamOszlop);
    sor.appendChild(allapotOszlop);
    sor.appendChild(muveletOszlop);

    bookTable.appendChild(sor);


}
function addBook() {
    const cimInput = document.getElementById("cimInput").value;
    const szerzoInput = document.getElementById("szerzoInput").value;
    const kiadasiEvInput = parseInt(document.getElementById("kiadasiEvInput").value);
    const oldalszamInput = parseInt(document.getElementById("oldalszamInput").value);
    

    const ujKonyv = new Konyvek(cimInput, szerzoInput, kiadasiEvInput, oldalszamInput);
    konyvek.push(ujKonyv);

    const sor = document.createElement("tr");
    const ujcimOszlop = document.createElement("td");
    const ujszerzoOszlop = document.createElement("td");
    const ujkiadasiEvOszlop = document.createElement("td");
    const ujoldalszamOszlop = document.createElement("td");
    const ujkolcsonozveOszlop = document.createElement("td");

    sor.appendChild(ujcimOszlop);
    sor.appendChild(ujszerzoOszlop);
    sor.appendChild(ujkiadasiEvOszlop);
    sor.appendChild(ujoldalszamOszlop);
    sor.appendChild(ujkolcsonozveOszlop);
    bookTable.appendChild(sor);

    ujcimOszlop.textContent = ujKonyv.cim;
    ujszerzoOszlop.textContent = ujKonyv.szerzo;
    ujkiadasiEvOszlop.textContent = ujKonyv.kiadasiEv;
    ujoldalszamOszlop.textContent = ujKonyv.oldalszam;
    ujkolcsonozveOszlop.textContent = ujKonyv.kolcsonozve ? "Igen" : "Nem";
}
