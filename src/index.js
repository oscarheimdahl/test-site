import Chillin from './assets/chillin.jpg';
import './styles.scss';

const h1 = document.createElement('h1');
h1.innerText = 'Chillin';

const img = document.createElement('img');
img.src = Chillin;

document.querySelector('body').appendChild(h1);
document.querySelector('body').appendChild(img);
