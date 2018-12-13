domBuilder.appendInputForm();

let legoBtn = document.querySelector(".lego_save");
// console.log(legoBtn);

legoBtn.addEventListener("click", eventListeners.handleFormSubmission);