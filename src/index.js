function generateAns(response){
    console.log(response);
}

let apiKey= "944a6721ao9b6c1c3a743389fb2tdec0" ; 
let context = "Make sure to provide a clear and precise answer " ;
let prompt = "Tell me a funny joke" ;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(generateAns);
