import pubSub from './pubSub';

export default function() {
  const input = document.getElementById('input');
  
  input.addEventListener('change', (e) => {
    pubSub.emit('inputChanged', input.value);
  });
  
  pubSub.subscribe('clickedBack', () => {
    input.value = '';
    input.focus();
  });
}