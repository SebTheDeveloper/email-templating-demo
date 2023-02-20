const sentStatus = document.querySelector('.sent-status span');
const button = document.querySelector('button');

setTimeout(() => {
  if (sentStatus.textContent != 'Nothing sent yet') {
    sentStatus.textContent = 'Awaiting another request..';
    button.classList.remove('green');
    button.classList.add('orange');
  }
}, 2500);
