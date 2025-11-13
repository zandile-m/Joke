function showJoke(response) {
  console.log(response.data.answer);
  let jokeElement = document.querySelector("#joke");
  jokeElement.innerHTML = response.data.answer;
}

function generateJoke() {
  let apiKey = "944a6721a09b6c1c3a743389fb2tdec0";
  let context = "Make sure to provide a clear and funny joke.";
  let prompt = "Tell me a funny joke";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let button = document.querySelector("#joker");
  button.innerHTML = "Loading...";

  axios.get(apiUrl).then(function (response) {
    showJoke(response);
    button.innerHTML = "Tell me joke";
  });
}

let jokeButton = document.querySelector("#joker");
jokeButton.addEventListener("click", generateJoke);
