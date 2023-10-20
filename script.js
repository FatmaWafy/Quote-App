let apiurl = "https://api.quotable.io/random";
let Quote = document.getElementById("Quote");
let author = document.getElementById("author");

async function getquote(url) {
  let response = await fetch(url);
  let data = await response.json();
  Quote.innerHTML = data.content;
  author.innerHTML = data.author;
  console.log(data);
}
getquote(apiurl);

function tweet() {
  window.open(
    `https://twitter.com/intent/tweet?text= ${Quote.innerHTML}`,
    "tweet window",
    "width=600, height=300"
  );
}
