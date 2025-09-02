const output = document.getElementById("output");
const input = document.querySelector(".npt");
const btn = document.getElementById("btn");
const modal = document.getElementById("myModal");
const modalInput = document.getElementById("modal-input");
const saveBtn = document.querySelector(".btn.btn--primary");
let a = [];
let currentIndex = null;

// sss
function myFunction(c) {
  output.innerHTML = "";

  c.forEach((element, index) => {
    const liElement = document.createElement("li");

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "democlass";
    deleteBtn.type = "button";
    deleteBtn.textContent = "Sil";
    // sscqc

    const EditBTn = document.createElement("button");
    EditBTn.className = "editBtn";
    EditBTn.type = "button";
    EditBTn.textContent = "Redaktə et";

    deleteBtn.addEventListener("click", function () {
      c.splice(index, 1);
      localStorage.setItem("skills", JSON.stringify(c));
      myFunction(a);
      myDelete();
    });

    EditBTn.addEventListener("click", function () {
      currentIndex = index;
      // console.log(currentIndex);
      modal.classList.add("show");
      modalInput.value = element;
      modalInput.focus();
    });

    liElement.textContent = element;
    liElement.appendChild(deleteBtn);
    liElement.appendChild(EditBTn);
    output.appendChild(liElement);
  });
}

document
  .querySelector(".btn.btn--ghost")
  .addEventListener("click", () => modal.classList.remove("show"));
document
  .querySelector(".modal__close")
  .addEventListener("click", () => modal.classList.remove("show"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("show");
});
function myGreeting() {
  const modalDialog = document.querySelectorAll(".modal-alert");
  console.log(modalDialog);
  modalDialog[0].classList.add("show");
  let children = modalDialog[0].children;
  let childrenModal = children[1].children;
  childrenModal[0].innerHTML = "redakte olundu";
  console.log(childrenModal[0].textContent);
  setTimeout(() => {
    modalDialog[0].classList.remove("show");
  }, 3000);
}
function myDelete() {
  const modalDialog = document.querySelectorAll(".modal-alert");
  console.log(modalDialog);
  modalDialog[0].classList.add("show");
  let children = modalDialog[0].children;
  let childrenModal = children[1].children;
  childrenModal[0].innerHTML = "silindi";
  console.log(childrenModal[0].textContent);
  setTimeout(() => {
    modalDialog[0].classList.remove("show");
  }, 3000);
}
saveBtn.addEventListener("click", () => {
  if (currentIndex !== null && modalInput.value.trim() !== "") {
    a[currentIndex] = modalInput.value.trim();
    // console.log(a);
    localStorage.setItem("skills", JSON.stringify(a));
    myFunction(a);
    modal.classList.remove("show");
    // modal.classList.add("modal-alert");
    myGreeting();
  }
});

if (localStorage.getItem("skills")) {
  a = JSON.parse(localStorage.getItem("skills"));
  myFunction(a);
}

btn.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    a.push(input.value.trim());
    localStorage.setItem("skills", JSON.stringify(a));
    myFunction(a);
    input.value = "";
  } else {
    alert("Boş dəyər göndərilə bilməz!");
  }
});
