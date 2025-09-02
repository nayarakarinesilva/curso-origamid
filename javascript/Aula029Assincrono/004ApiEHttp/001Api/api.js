//* API

// fetch('https://pokeapi.co/api/v2/pokemon/1/')
// .then(r => r.json())
// .then(pokemon => {
//  console.log(pokemon);
// });

// async function loadDog() {
//   const res = await fetch("https://dog.ceo/api/breeds/image/random");
//   const data = await res.json();

//   const dogImg = document.getElementById("dog");
//   dogImg.src = data.message;
//   dogImg.style.display = "block"; // Mostra a imagem

// }
// const btn = document.getElementById("btn");
// btn.addEventListener("click", loadDog);

//* criar nova entrada
// const url = "https://jsonplaceholder.typicode.com/posts";
// const options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json; charset=utf-8",
//   },
//   body: JSON.stringify({ title: "JavaScript", aula: "JavaScript - 1" }),
// };

// fetch(url, options)
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//   });
