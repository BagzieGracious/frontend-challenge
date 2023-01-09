let button = document.createElement('button');
const value = document.querySelector('p[class^="makeStyles-btb-"]').innerText;

// create icon
const icon = document.createElement('img');
icon.src = './images/android-chrome-512x512.png';
icon.style = `
    width: 1rem;
    margin-bottom: -0.2rem;
    margin-right: 0.4rem;
`;

button.appendChild(icon);
const injectedText = document.createTextNode(`Budget-to-Beat: ${value}`);
// style button
button.appendChild(injectedText);
button.style = `
    background: #000066;
    color: white;
    border: none;
    border-radius: 0.3rem;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.8rem;
    position: absolute;
    right: 0;
    top: -3rem;
`;

const span = document.createElement('span');
span.className = '';
span.innerHTML = `
    <ul>
        <li>total co2 user: 6302.0</li>
        <li>total rewards user: 3965</li>
        <li>dateframe co2 user: 543.0</li>
        <li>dateframe rewards user: 599</li>
        <li>dateframe co2 company: 1109.98</li>
        <li>dateframe rewards company: 174.41</li>
    </ul>
`;

span.style = `
    position: absolute;
    background-color: #323c4e;
    color: #fff;
    border-radius: 6px;
    width: max-content;
    text-align: left;
    padding-right: 1rem;
    line-height: 1.5rem;
    top: 3rem;
    margin-right: 60px;
    right: -3%;
    opacity: 0;
    transition: opacity 0.3s;
`;
button.appendChild(span);

// create an event
button.addEventListener(
  'mouseover',
  () => {
    span.style.opacity = 1;
  },
  false,
);

button.addEventListener(
  'mouseout',
  () => {
    span.style.opacity = 0;
  },
  false,
);

// parent element
const parentElement = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(2) > h2',
);
parentElement.appendChild(button);
parentElement.style.position = 'relative';
