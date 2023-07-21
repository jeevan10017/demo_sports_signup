const modal = document.getElementById('modal');
const modalButton = document.getElementById('modalButton');
const closeBtn = document.getElementsByClassName('close')[0];
const signupForm = document.getElementById('signupForm');
const counter = document.getElementById('counter');
let registeredUsers = 0;


function toggleTheme() {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
  } else {
    document.body.classList.add('dark');
  }
}


function handleSubmit(event) {
  event.preventDefault();
  console.log('Form data:', {
    name: event.target.name.value,
    email: event.target.email.value,
    password: event.target.password.value,
    phone: event.target.phone.value,
    gender: event.target.gender.value,
    sports: event.target.sports.value,
  });


  registeredUsers++;
  counter.textContent = `Registered Users: ${registeredUsers}`;
  modal.style.display = 'none';
}


function closeModal() {
  modal.style.display = 'none';
  signupForm.removeEventListener('submit', handleSubmit);
}

modalButton.onclick = () => modal.style.display = 'block';
closeBtn.onclick = closeModal;
window.onclick = (event) => {
  if (event.target === modal) {
    closeModal();
  }
};


signupForm.addEventListener('submit', handleSubmit);
