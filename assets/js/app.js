import { theme } from './components/theme.js'
import { WrappedModalInfo } from '../../wrapped-widget/src/wrapped-wiget.modal-info.js'
import { WrappedModalSubmit } from '../../wrapped-widget/src/wrapped-widget.modal-submit.js'
import { WrappedModalForm } from '../../wrapped-widget/src/wrapped-wiget.modal-form.js';

// DOM content loaded
// __________________________________________________
document.addEventListener('DOMContentLoaded', () => {

  // Functions
  // __________________________________________________
  theme();


  document.querySelector('.js--modal-info').onclick = () => {
    new WrappedModalInfo({x: 'center', y: 'center'}, {w: 250, h: 300}, 'div', 'Title', 'Hi, <br><br> It`s information modal window.')
  }

  document.querySelector('.js--modal-submit').onclick = () => {
    new WrappedModalSubmit({x: 'center', y: 'center'}, {w: 250, h: 300}, 'div', 'Title', 'Hi, <br><br> It`s submit modal window.', ()=> alert('Accept'), ()=> alert('Dismiss'))
  }

  document.querySelector('.js--modal-form').onclick = () => {
    new WrappedModalForm({x: 'center', y: 'center'}, {w: 250, h: 300}, 'div', 'Title', (submit)=> alert(`Submit \nName: ${submit.name} \nPasswort: ${submit.password}`))
  }

  

})