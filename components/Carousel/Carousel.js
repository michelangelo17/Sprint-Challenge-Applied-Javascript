/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function carouselMaker() {
  //tools
  const create = el => document.createElement(el),
        addClass = (el, aClass) => el.classList.add(aClass),
        imgAttrs = (el, source, altText) => {
          el.src = source;
          el.alt = altText;
        }
        appendToCarousel = (el) => carousel.appendChild(el);
  const carousel = create('div'),
        leftButton = create('div'),
        mountains = create('img'),
        computer = create('img'),
        trees = create('img'),
        turntable = create('img'),
        rightButton = create('div');
  addClass(carousel, 'carousel');
  addClass(leftButton, 'left-button');
  addClass(rightButton, 'right-button');
  imgAttrs(mountains, '../../assets/carousel/mountains.jpeg', 'moutains');
  imgAttrs(computer, '../../assets/carousel/computer.jpeg', 'computer')
  imgAttrs(trees, '../../assets/carousel/trees.jpeg', 'trees')
  imgAttrs(turntable, '../../assets/carousel/turntable.jpeg', 'turntable');
  appendToCarousel(leftButton);
  appendToCarousel(mountains);
  appendToCarousel(computer);
  appendToCarousel(trees);
  appendToCarousel(turntable);
  appendToCarousel(rightButton);
  return carousel;
}
//tools
const qs = searchTerm => document.querySelector(searchTerm);
const qsa = searchTerm => document.querySelectorAll(searchTerm);

const carouselContainer = qs('.carousel-container').appendChild(carouselMaker());

const imgNodeList = qsa('.carousel img');

imgNodeList[0].style.display = 'inline-block';

let imageDisplayed = 0;

qs('.left-button').addEventListener('click', () => {
  if (imageDisplayed === 0) {
    imgNodeList[imageDisplayed].style.display = 'none';
    imageDisplayed = 3;
  } else {
    imgNodeList[imageDisplayed].style.display = 'none';
    imageDisplayed--;
  }
  imgNodeList[imageDisplayed].style.display = 'inline-block';
})

qs('.right-button').addEventListener('click', () => {
  if (imageDisplayed === 3) {
    imgNodeList[imageDisplayed].style.display = 'none';
    imageDisplayed = 0;
  } else {
    imgNodeList[imageDisplayed].style.display = 'none';
    imageDisplayed++;
  }
  imgNodeList[imageDisplayed].style.display = 'inline-block';
})
