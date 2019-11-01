// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res => {
  const cardsContainer = document.querySelector('.cards-container');
  const sections = Object.values(res.data.articles);
  sections.forEach(section => section.forEach(article => cardsContainer.appendChild(cardMaker(article))));
})
.catch(err => {
  console.log(err);
})
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
function cardMaker(obj) {
  //tools
  const create = el => document.createElement(el),
        addClass = (el, aClass) => el.classList.add(aClass),
        text = (el, textToAdd) => el.textContent = textToAdd,
        append = (el, parentEl) => parentEl.appendChild(el);
  const card = create('div'),
        headline = create('div'),
        author = create('div'),
        imgContainer = create('div'),
        authorPhoto = create('img'),
        authorName = create('span');
  addClass(card, 'card');
  addClass(headline, 'headline');
  addClass(author, 'author');
  addClass(imgContainer, 'img-container');
  text(headline, `${obj.headline}`);
  text(authorName, `By ${obj.authorName}`);
  authorPhoto.src = `${obj.authorPhoto}`;
  append(headline, card);
  append(author, card);
  append(imgContainer, author);
  append(authorName, author);
  append(authorPhoto, imgContainer);
  return card;
}