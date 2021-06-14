import axios from "axios"

const Card = (article) => {
  const divCard = document.createElement('div')
  const divHeadline = document.createElement('div')
  const divAuthor = document.createElement('div')
  const divImgCon = document.createElement('div')
  const imgSrc = document.createElement('img')
  const spanAuthName = document.createElement('span')

  divCard.classList.add('card')
  divHeadline.classList.add('headline')
  divAuthor.classList.add('author')
  divImgCon.classList.add('img-container')

  divCard.appendChild(divHeadline)
  divCard.appendChild(divAuthor)
  divAuthor.appendChild(divImgCon)
  divAuthor.appendChild(spanAuthName)
  divImgCon.appendChild(imgSrc)

divHeadline.textContent = article.headline
imgSrc.src = article.authorPhoto
spanAuthName.textContent = `By ${article.authorName}`

divCard.addEventListener('click', () => console.log(article.headline))

return divCard

}


  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //


const cardAppender = (selector) => {
  axios.get(`https://lambda-times-api.herokuapp.com/articles`).then(res => {

    const cardPlace = document.querySelector(selector)
    const newCards = Card(res.data.articles).forEach
    
      })

}

  
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


export { Card, cardAppender }
