const form = document.querySelector('form');
const selectEmail = document.getElementById('select-email');
const recipients = document.getElementById('recipients');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(JSON.stringify(JSON.parse(recipients)));
});

function parseRecipients() {
  
}