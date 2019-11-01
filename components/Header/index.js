// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  //tools
  const create = el => document.createElement(el),
        addClass = (el, aClass) => el.classList.add(aClass),
        text = (el, textToAdd) => el.textContent = textToAdd,
        append = (el, parentEl) => parentEl.appendChild(el);
  //create elements
  const header = create('div'),
        date = create('span'),
        siteTitle = create('h1'),
        temp = create('span');
  //add classes
  addClass(header, 'header');
  addClass(date, 'date');
  addClass(temp, 'temp');
  // add text
  text(date, new Date().toString().split(' ').splice(1,3).join(' '));
  text(siteTitle, 'Lambda Times');
  text(temp, '98\u00b0');
  //append to header
  append(date, header);
  append(siteTitle, header);
  append(temp, header);
  return header;
}

document.querySelector('.header-container').appendChild(Header());