const modal = document.querySelector('.backdrop');
const openModalBtn = document.querySelector('.open-modal-btn');
const closeModalBtn = document.querySelector('.close-modal-btn');

const toggleModal = () => {
  modal.classList.toggle('is-hidden');
};

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);
