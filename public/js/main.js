const preview = document.getElementById('preview');
const sendMultiple = document.getElementById('send-multiple');
const button = document.querySelector('button');
const sentStatus = document.querySelector('.sent-status span');

preview.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const recipient = document.getElementById('recipient').value.trim();
  const selectedEmail = document.getElementById('select-email').value;
  const queryStrings = { name, recipient, selectedEmail };
  let url = `http://${location.host}/email/preview?`;

  for (const string in queryStrings) {
    if (string === 'selectedEmail') {
        url += `${encodeURIComponent(string)}=${encodeURIComponent(queryStrings[string])}`;
    } else {
        url += `${encodeURIComponent(string)}=${encodeURIComponent(queryStrings[string])}&`;
    }
  }

  window.open(url, '_blank', 'popup');
});

setTimeout(() => {
  if (sentStatus.textContent != 'Nothing sent yet') {
    sentStatus.textContent = 'Awaiting another request..';
    button.classList.remove('green');
    button.classList.add('orange');
  }
}, 2500);
