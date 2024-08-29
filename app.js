const btn = document.querySelector(".icon");



btn.addEventListener("click", async ()=>{
    const input = document.querySelector("input");
    let word = input.value;
    try{
    let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if(!response.ok){
        throw new error("Word not found ");
    }
    let meaning = await response.json();
    console.log(meaning);
    const audioURL = meaning[0].phonetics[0].audio;
    console.log(audioURL);

    // Seeting audio to this word
    // Get the <source> element by its ID
    const sourceElement = document.getElementById('audioSource');

    // Set the src attribute of the <source> element to the audio URL
    sourceElement.setAttribute('src', audioURL);

    // Get the <audio> element
    const audioElement = document.getElementById('myAudio');

    // Reload the audio element to apply the changes
    audioElement.load();

    
    const firstMeaning = meaning[0].meanings[0];
    const definition = firstMeaning.definitions[0].definition;
    const example = firstMeaning.definitions[0].example;

// Logging the definition and example to the console
    console.log("Definition:", definition);
    console.log("Example:", example);
    const def = document.querySelector(".def");
    const ex = document.querySelector(".ex");
    def.innerHTML = definition;
    if(example != undefined){
     ex.innerHTML = example;
    }
    else{
        ex.innerHTML= "no example in data ";
    }


    }catch(err){
        console.log("Word not found :");
    }
});