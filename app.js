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
let nemMentettKonyvek = []; 

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
    const kolcsonozButton = document.createElement("button");
    const visszahozButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    deleteButton.addEventListener("click", function() {
        konyvek.splice(konyvek.indexOf(konyv), 1);
        sor.remove();
        console.log(konyvek);
    });


    
    

    kolcsonozButton.addEventListener("click", function() {
        konyv.kolcsonoz();
        allapotOszlop.textContent = konyv.kolcsonozve ? "Kölcsönözve" : "Elérhető";
        kolcsonozButton.disabled = true;
        visszahozButton.disabled = false;
    });

    visszahozButton.addEventListener("click", function() {
        konyv.visszahoz();
        allapotOszlop.textContent = konyv.kolcsonozve ? "Kölcsönözve" : "Elérhető";
        kolcsonozButton.disabled = false;
        visszahozButton.disabled = true;
    });
    visszahozButton.disabled = true;


    
    kolcsonozButton.textContent = "Kölcsönöz";
    visszahozButton.textContent = "Visszahoz";
    deleteButton.textContent = "Törlés";
    
   

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
    muveletOszlop.appendChild(kolcsonozButton);
    muveletOszlop.appendChild(visszahozButton);
    muveletOszlop.appendChild(deleteButton);
    

    bookTable.appendChild(sor);


}
function addBook() {
    const cimInput = document.getElementById("cimInput").value;
    const szerzoInput = document.getElementById("szerzoInput").value;
    const kiadasiEvInput = parseInt(document.getElementById("kiadasiEvInput").value);
    const oldalszamInput = parseInt(document.getElementById("oldalszamInput").value);

    if (!cimInput || !szerzoInput || isNaN(kiadasiEvInput) || isNaN(oldalszamInput)) {
        alert("Kérlek tölts ki minden mezőt!");
        return;
    }
    

    const ujKonyv = new Konyvek(cimInput, szerzoInput, kiadasiEvInput, oldalszamInput);
    nemMentettKonyvek.push(ujKonyv);


    const sor = document.createElement("tr");
    const ujcimOszlop = document.createElement("td");
    const ujszerzoOszlop = document.createElement("td");
    const ujkiadasiEvOszlop = document.createElement("td");
    const ujoldalszamOszlop = document.createElement("td");
    const ujkolcsonozveOszlop = document.createElement("td");
    const ujmuveletOszlop = document.createElement("td");
    const ujkolcsonozButton = document.createElement("button");
    const ujvisszahozButton = document.createElement("button");
    const ujdeleteButton = document.createElement("button");

    ujkolcsonozButton.textContent = "Kölcsönöz";
    ujvisszahozButton.textContent = "Visszahoz";
    ujdeleteButton.textContent = "Törlés";


    ujdeleteButton.addEventListener("click", function() {
        if(!konyvek.includes(ujKonyv)) {
            alert("Előbb el kell mentened!");
            return;
        }
        

        sor.remove();
        konyvek.splice(konyvek.indexOf(ujKonyv), 1);
        console.log(konyvek);
    })


    

    ujkolcsonozButton.addEventListener("click", function() {
        ujKonyv.kolcsonoz();
        ujkolcsonozveOszlop.textContent = ujKonyv.kolcsonozve ? "Kölcsönözve" : "Elérhető";
        ujkolcsonozButton.disabled = true;
        ujvisszahozButton.disabled = false;
    });

    ujvisszahozButton.addEventListener("click", function() {
        ujKonyv.visszahoz();
        ujkolcsonozveOszlop.textContent = ujKonyv.kolcsonozve ? "Kölcsönözve" : "Elérhető";
        ujkolcsonozButton.disabled = false;
        ujvisszahozButton.disabled = true;
    });
    ujvisszahozButton.disabled = true;

    sor.appendChild(ujcimOszlop);
    sor.appendChild(ujszerzoOszlop);
    sor.appendChild(ujkiadasiEvOszlop);
    sor.appendChild(ujoldalszamOszlop);
    sor.appendChild(ujkolcsonozveOszlop);
    sor.appendChild(ujmuveletOszlop);   
    bookTable.appendChild(sor);

    

    ujcimOszlop.textContent = ujKonyv.cim;
    ujszerzoOszlop.textContent = ujKonyv.szerzo;
    ujkiadasiEvOszlop.textContent = ujKonyv.kiadasiEv;
    ujoldalszamOszlop.textContent = ujKonyv.oldalszam;
    ujkolcsonozveOszlop.textContent = ujKonyv.kolcsonozve ? "Kölcsönözve" : "Elérhető";
    ujmuveletOszlop.appendChild(ujkolcsonozButton);
    ujmuveletOszlop.appendChild(ujvisszahozButton);
    ujmuveletOszlop.appendChild(ujdeleteButton);
    console.log(konyvek);

    
}

function saveBooks() {
    konyvek.push(...nemMentettKonyvek);
    nemMentettKonyvek = [];
    console.log(konyvek);
}

function elerhetoKonyvek() {
    const sorok = document.querySelectorAll("#bookTable tr");
    for (let i = 1; i < sorok.length; i++) {
        const allapotOszlop = sorok[i].cells[4];
        if (allapotOszlop.textContent === "Kölcsönözve") {
            sorok[i].style.display = "none";
        }
        else {
            sorok[i].style.display = "";
        }
    }
}
function osszesKonyv() 
{
    const sorok = document.querySelectorAll("#bookTable tr");
    for (let i = 1; i < sorok.length; i++) {
        sorok[i].style.display = "";
    }
}

function legregebbiKonyv() {
    const osszes = [...konyvek, ...nemMentettKonyvek];
    if (osszes.length === 0) {
        alert("Nincs könyv a listában!");
        return;
    }
    let legregebbi = osszes[0].kiadasiEv;
    for(let konyv of osszes) 
        {
            if (konyv.kiadasiEv < legregebbi) {
                legregebbi = konyv.kiadasiEv;
            }
        }

    const sorok = document.querySelectorAll("#bookTable tr");
    for( let i = 1; i < sorok.length; i++) {
        const kiadasiEvOszlop = sorok[i].cells[2];
        if (parseInt(kiadasiEvOszlop.textContent) === legregebbi) {
            sorok[i].style.display = "";
        }
        else {
            sorok[i].style.display = "none";
        }
    }

}
function legvastagabbKonyv() {
    const osszes = [...konyvek, ...nemMentettKonyvek];
    if (osszes.length === 0) {
        alert("Nincs könyv a listában!");
        return;
    }

    let maxOldalszam = osszes[0].oldalszam;
    for(let konyv of osszes) {
        if (konyv.oldalszam > maxOldalszam) {
            maxOldalszam = konyv.oldalszam;
        }
    }

    const sorok = document.querySelectorAll("#bookTable tr");
    for (let i = 1; i < sorok.length; i++) {
        const oldalszamOszlop = sorok[i].cells[3];
        if (parseInt(oldalszamOszlop.textContent) === maxOldalszam) {
            sorok[i].style.display = "";
        }
        else {
            sorok[i].style.display = "none";
        }
    }

}