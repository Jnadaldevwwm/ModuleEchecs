class Echiquier{
    constructor(){
        };

// Methode drawEchiquier qui selectionne un container passsé en paramètre pour y dessiner l'echiquié.
    drawEchiquier(nomConteneur){
        if(!nomConteneur || !document.getElementById(nomConteneur)){    // On test si nomConteneur est definit et si celui-ci correspond bien à un container existant.
            return(alert('Pas de conteneur definit pour l\'echiquier')); // Si ce n'est pas le cas on stop l'execution de la fonction et on alert l'utilisateur.
        } else {
            var interupteur = true; // Bolleen qui nous sert à alterner les couleurs des cases.
            var conteneur = document.getElementById(nomConteneur);  // On récupèreur le container spécifié en paramètre.
            var plateau = document.createElement('div');  // On créer un élément qui sera notre plateau.
            plateau.classList.add('plateau');
            for(let i=0;i<8;i++){   // Boucle création de ligne.
                var ligne = document.createElement('div'); 
                ligne.classList.add('ligne');
                for(let e=0;e<8;e++){   // Boucle création de case.
                    var casee = document.createElement('div');
                    casee.classList.add('case');
                    if(interupteur){
                        casee.classList.add('cNoir');
                    } else {
                        casee.classList.add('cBlanc');
                    }
                    interupteur = !interupteur; // On switch l'intérupteur.
                    if(e==0){   // On indice les cases verticalement de 1 à 8.
                        var indic = document.createElement('div');
                        indic.textContent = -i+8;
                        indic.classList.add('indicLigne');
                        casee.appendChild(indic);
                    }
                    if(i==7){   // On indice les case horizontalement de A à H.
                        var indic = document.createElement('div');
                        switch(e){
                            case 0:
                                indic.textContent = 'A';
                                break;
                            case 1:
                                indic.textContent = 'B';
                                break;
                            case 2:
                                indic.textContent = 'C';
                                break;
                            case 3:
                                indic.textContent = 'D';
                                break;
                            case 4:
                                indic.textContent = 'E';
                                break;
                            case 5:
                                indic.textContent = 'F';
                                break;
                            case 6:
                                indic.textContent = 'G';
                                break;
                            case 7:
                                indic.textContent = 'H';
                                break;
                        }
                        indic.classList.add('indicCol');
                        casee.appendChild(indic);
                    }
                    ligne.appendChild(casee);
                }// Fin boucle case.
                plateau.appendChild(ligne);
                interupteur = !interupteur;
            }// Fin boucle ligne.
            conteneur.appendChild(plateau)
        }  // Fin else.
    } // Fin fonction drawEchiquier.

    // Fonction de création de piece.
    createPiece(couleur, type, alt, img){
        let piece = document.createElement('img');
        let lienImg = 'images/'+img;
        piece.setAttribute('src',lienImg);
        piece.setAttribute('alt', alt);
        piece.classList.add('pieceImg');
        piece.classList.add(couleur);
        piece.classList.add(type);
        var zoneP = document.createElement('div');
        zoneP.classList.add('contPiece');
        zoneP.appendChild(piece);
        return zoneP;
    }

    // Method de création des pièces et de la zone de pièces.
    drawPieces(nomConteneur){
        if(!nomConteneur || !document.getElementById(nomConteneur)){    // On test si nomConteneur est definit et si celui-ci correspond bien à un container existant.
            return(alert('Pas de conteneur definit pour l\'affichage des pièces')); // Si ce n'est pas le cas on stop l'execution de la fonction et on alert l'utilisateur.
        } else {
            var conteneur = document.getElementById(nomConteneur);  // On récupèreur le container spécifié en paramètre.
            var zonePieces = document.createElement('div');
            zonePieces.classList.add('zonePieces');

            // Création pièces blanches.
            var pionBlanc = this.createPiece('blanc','pion','pion Blanc','pb.png');
            zonePieces.appendChild(pionBlanc);
            var cavalierBlanc = this.createPiece('blanc','cavalier','cavalier Blanc','cb.png');
            zonePieces.appendChild(cavalierBlanc);
            var fouBlanc = this.createPiece('blanc','fou','Fou blanc','fb.png');
            zonePieces.appendChild(fouBlanc);
            var tourBlanc = this.createPiece('blanc','tour','Toure Blanche','tb.png');
            zonePieces.appendChild(tourBlanc);
            var reineBlanc = this.createPiece('blanc','reine','Reine Blanche','reb.png');
            zonePieces.appendChild(reineBlanc);
            var roiBlanc = this.createPiece('blanc','roi','Roi Blanc','rb.png');
            zonePieces.appendChild(roiBlanc);
            // Création pièces noires.
            var pionNoir = this.createPiece('noir','pion','Pion Noir','pn.png');
            zonePieces.appendChild(pionNoir);
            var cavalierNoir = this.createPiece('noir','cavalier','cavalier Noir','cn.png');
            zonePieces.appendChild(cavalierNoir);
            var fouNoir = this.createPiece('noir','fou','Fou Noir','fn.png');
            zonePieces.appendChild(fouNoir);
            var tourNoir = this.createPiece('noir','tour','Toure Noire','tn.png');
            zonePieces.appendChild(tourNoir);
            var reineNoir = this.createPiece('noir','reine','Reine Noire','ren.png');
            zonePieces.appendChild(reineNoir);
            var roiNoir = this.createPiece('noir','roi','Roi Noir','rn.png');
            zonePieces.appendChild(roiNoir);

            conteneur.appendChild(zonePieces);
        }
    }

    // dragPieces(zoneEchec){
    //     var zone = document.getElementById(zoneEchec);
    //     zone.addEventListener('mousedown',function(e){
    //         souriPosX = e.clientX;
    //         souriPosY = e.clientY;
    //         console.log(souriPosX,souriPosY)
    //     })
    // }

    allowDeplacement(){
        var zonePieces = document.querySelector('.zonePieces');
        var plateau = document.querySelector('.plateau');
        console.log(zonePieces)
        zonePieces.addEventListener('mousedown',function(e){
            if(e.target.classList.contains('pieceImg')){
                var clonePiece = e.target.parentNode.cloneNode(true);
                clonePiece.classList.add('displayed');
                clonePiece.setAttribute('style','position:absolute');
                plateau.appendChild(clonePiece);
                console.log(clonePiece);
            }
        })
    }
    
}

const test = new Echiquier();
test.drawEchiquier('alo');
test.drawPieces('alo');
test.allowDeplacement();











































// // Make the DIV element draggable:
// var lesPieces = document.querySelectorAll('.contPiece');
// console.log(lesPieces)
// lesPieces.forEach(piece => {
//     dragElement(piece);
// });

// //dragElement(document.getElementById("alo"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }
