function openModal(modalId, header) {
  const modalElement = document.getElementById(modalId);
  const headingElement = modalElement.getElementsByClassName("modal-header")[0];
  let headingHTML = `
  <h2>${header}</h2>
  <span class="close-btn" onclick="closeModal('${modalId}')"
                >&times;</span>
  `
  headingElement.innerHTML = headingHTML;
  // console.log();
  modalElement.style.display = "flex";
}
function closeModal(modalId) {
  const modalElement = document.getElementById(modalId);
  modalElement.style.display = "none";
}