let unosi = document.querySelectorAll('.unos');
let odabiri = document.querySelectorAll('.odabir');
let ispisi = document.querySelectorAll('.ispis');
let button1 = document.getElementById('btn1');
let body = document.querySelector('body');
let konacna = document.querySelectorAll('.konacno');
let gameDiv = document.getElementById('all');
let frontSection = document.querySelector('section');

let button_play = document.querySelector('.btn');
let button_delete = document.getElementById('dlt');
let button_send = document.getElementById('send');
let mouseEfect = new Audio ('mouse.mp3');


gameDiv.style.display = 'none';


button_play.addEventListener('click',(e) =>{
    e.preventDefault();
    gameDiv.style.display = '';
    frontSection.style.display = 'none';
    window.scrollTo(0, 1000);
});


let x1 = Math.floor((Math.random() * 6) + 1);
let x2 = Math.floor((Math.random() * 6) + 1);
let x3 = Math.floor((Math.random() * 6) + 1);
let x4 = Math.floor((Math.random() * 6) + 1);

let kombinacija = [x1, x2, x3, x4];
let red_kombinacije = (x1-1)*216+(x2-1)*36+(x3-1)*6+x4;


console.log(kombinacija,red_kombinacije);




// Glavna funkcija

let br_poteza = 0;
let pokusaj = [];
let skup_pokusaja= [];
let z= 0;
let kraj= false;



odabiri.forEach(elem => {
    elem.addEventListener('click',(e) =>{
          e.preventDefault();
        
            if (pokusaj.length !== 4){
                // mouseEfect.play();
            }

          if ( kraj==false) {
            symbolsPrint(elem); }
    })
    
  })
  



// Poslaji

button_send.addEventListener('click',(e)=>{
    e.preventDefault();

        // Stampa Kombinacije

        print();

        // Konacno resenje

            final();

            if (pokusaj.length == 4){
                br_poteza ++;
            }
            
            pokusaj = [];
});




button_delete.addEventListener('click',(e)=>{
    e.preventDefault(); 
 
    if (z>0 && unosi[z-1].classList.value.includes('end') == false){
    pokusaj.splice((pokusaj.length-1),1);


    if (unosi[z-1].classList.value.includes('spade') == true){
        unosi[z-1].classList.remove('spade');
        unosi[z-1].innerHTML = ``;
        z=z-1;
    }
    
    
     else if (unosi[z-1].classList.value.includes('clover') == true){
        unosi[z-1].classList.remove('clover');
        unosi[z-1].innerHTML = ``;
        z=z-1;
    }

        
     else if (unosi[z-1].classList.value.includes('heart') == true){
        unosi[z-1].classList.remove('heart');
        unosi[z-1].innerHTML = ``;
        z=z-1;
    }
    
        
     else if (unosi[z-1].classList.value.includes('romb') == true){
        unosi[z-1].classList.remove('romb');
        unosi[z-1].innerHTML = ``;
        z=z-1;
    }

        
     else if (unosi[z-1].classList.value.includes('star') == true){
        unosi[z-1].classList.remove('star');
        unosi[z-1].innerHTML = ``;
        z=z-1;
    }
    
        
    else if (unosi[z-1].classList.value.includes('balloon') == true){
        unosi[z-1].classList.remove('balloon');
        unosi[z-1].innerHTML = ``;
        z=z-1;
    }

}

});


let final = () => {

    if (pokusaj[0] == kombinacija[0] && pokusaj[1] == kombinacija[1] && pokusaj[2] == kombinacija[2] && 
        pokusaj[3] == kombinacija[3] || br_poteza == 6){
            
            for (let i=0; i<6; i++){

            if (kombinacija[i] == 1){
                konacna[i].innerHTML = "<img class='simbol' src='img/spade.png' >";
                
            }

            else if (kombinacija[i] == 2){
                    konacna[i].innerHTML = "<img class='simbol' src='img/clover.png' >";
                }

                else if (kombinacija[i] == 3){
                    konacna[i].innerHTML = "<img class='simbol' src='img/heart.png' >";
                }

                else if (kombinacija[i] == 4){
                    konacna[i].innerHTML = "<img class='simbol' src='img/romb.png' >";
                }

                else if (kombinacija[i] == 5){
                    konacna[i].innerHTML = "<img class='simbol' src='img/star.png' >";
                }

                else if (kombinacija[i] == 6){
                    konacna[i].innerHTML = "<img class='simbol' src='img/balloon.png' >";
                }
            }
            kraj = true;
            

        }
}


let print = () => {
    
    let komb_save = kombinacija;

    if (pokusaj.length == 4) {
    
  
      
    
    let crvene = 0;
    let sve = 0;
    
    for (i=0; i<4; i++){
    if (pokusaj[i] == komb_save[i]){
    crvene++;

    
    }
    
    if (komb_save.includes(pokusaj[i]) == true){
        sve++;
        }

    }

        let nizA=[];
        let nizB =[];

       for (k=1; k<7; k++){
        let x= 0;
        let y=0;
        for (l=0; l<komb_save.length; l++){
           if (pokusaj[l] == k){
           x++;
           }
           if (komb_save[l]==k){
               y++;
           }
       }
       nizA.push(x);
       nizB.push(y);
    }
    

    let brisi = 0;

    for (i=0; i<7; i++){
        if (nizB[i] !== 0 && nizB[i]<nizA[i]){
             brisi = brisi + (nizA[i]-nizB[i]);
        }
    }

    sve = sve - brisi;
        



    // Stampa

    for (i=(br_poteza*4)+0; i<(br_poteza*4)+4; i++){
    if(i<crvene+br_poteza*4){
        ispisi[i].classList.add('crveno');
    }
    else if (i<sve+br_poteza*4){
        ispisi[i].classList.add('zuto');
    }
}
    for (i=(br_poteza*4)+0; i<(br_poteza*4)+4; i++){
    unosi[i].classList.add('end');
}

    
        }
}


let symbolsPrint = (elem) => {

    if (pokusaj.length <4){
        switch(elem.id) {
            case 'btn1':
              unosi[z].classList.add('spade');
              unosi[z].innerHTML = "<img class='simbol' src='img/spade.png' >";
              z++;
              break;
                case 'btn2':
                unosi[z].classList.add('clover');
                unosi[z].innerHTML = `<img class='simbol' src='img/clover.png'>`;
                z++;
                break;

                case 'btn3':
                    unosi[z].classList.add('heart');
                    unosi[z].innerHTML = `<img class='simbol' src='img/heart.png'>`;


                    z++;
                break;

                case 'btn4':
                    unosi[z].classList.add('romb');
                    unosi[z].innerHTML = `<img class='simbol' src='img/romb.png'>`;

                
                    z++;
                break;

                case 'btn5':
                    unosi[z].classList.add('star');
                    unosi[z].innerHTML = `<img class='simbol' src='img/star.png'>`;

                   

                    z++;
                break;

                case 'btn6':
                    unosi[z].classList.add('balloon');
                    unosi[z].innerHTML = `<img class='simbol' src='img/balloon.png'>`;


                    z++;
                break;
          }


        for (let j=1; j<7; j++){
            if(elem.id.includes(j)){
                pokusaj.push(j);

            }
        }
        }
}