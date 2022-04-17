
document.querySelector('#search').addEventListener('click', getQuote)

function getQuote(){
  let title = document.querySelector('input').value
  
  fetch(`https://animechan.vercel.app/api/quotes/anime?title=${title}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      let i = Math.floor(Math.random() * data.length)
      console.log(data)
      document.querySelector('h3').innerHTML = `"${data[i].quote}"<br/>-${data[i].character}`
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}
