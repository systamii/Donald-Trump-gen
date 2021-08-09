const url = "https://api.whatdoestrumpthink.com/api/v1/quotes"
let donButton = document.querySelector("#button");
fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(Donny){
    donButton.addEventListener("click",clicked); 
    function clicked(){
        randNum = Math.random() * Donny.messages.personalized.length;
        i = Math.floor(randNum);
        let sad = "he " + Donny.messages.personalized[i];
    let speech = document.querySelector('#speech');
     speech.innerHTML = "";
    newElement = document.createElement('p');
    newElement.innerHTML = sad;
    speech.appendChild(newElement);
    }
    })


    
    