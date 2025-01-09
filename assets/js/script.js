'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    // First remove active class from all navigation links
    navigationLinks.forEach(link => link.classList.remove("active"));
    
    // Add active class to clicked link
    this.classList.add("active");
    
    // Remove active class from all pages
    pages.forEach(page => page.classList.remove("active"));
    
    // Find and activate the corresponding page
    const targetPage = Array.from(pages).find(
      page => page.dataset.page === this.dataset.page // Use data-page attribute for matching
    );
    
    if (targetPage) {
      targetPage.classList.add("active");
      window.scrollTo(0, 0);
    }
  });
}

// Update the event listeners for the certification links
const certificationLinks = document.querySelectorAll(".certification-link");

// New function to hide all certificates
const hideAllCertificates = function() {
  const certificationItems = document.querySelectorAll(".certification-item");
  certificationItems.forEach(item => {
    item.style.display = "none"; // Hide all certificates
  });
};

// New function to show all certificates
const showAllCertificates = function() {
  const certificationItems = document.querySelectorAll(".certification-item");
  certificationItems.forEach(item => {
    item.style.display = "block"; // Show all certificates
  });
};

// Certificate modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const certificationLinks = document.querySelectorAll(".certification-link");
    const certificateModal = document.getElementById("certificateModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.getElementById("closeModal");

    // Function to open modal
    function openModal(imgSrc) {
        modalImage.src = imgSrc;
        certificateModal.style.display = "block";
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    // Function to close modal
    function closeModalFunction() {
        certificateModal.style.display = "none";
        modalImage.src = "";
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    // Add click event to all certificate links
    certificationLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const imgSrc = this.getAttribute("href");
            openModal(imgSrc);
        });
    });

    // Close modal when clicking the close button
    closeModal.addEventListener("click", closeModalFunction);

    // Close modal when clicking outside the image
    certificateModal.addEventListener("click", function(e) {
        if (e.target === certificateModal) {
            closeModalFunction();
        }
    });

    // Close modal when pressing Escape key
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            closeModalFunction();
        }
    });
});

// Update the navigation functionality
const navigationFunc = function () {
  // Get all navigation links
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  
  navigationLinks.forEach(link => {
    link.addEventListener("click", function () {
      // Remove active class from all links
      navigationLinks.forEach(item => item.classList.remove("active"));
      
      // Add active class to clicked link
      this.classList.add("active");

      // Get the page name from the button text
      const pageName = this.textContent.toLowerCase();
      
      // Remove active class from all pages
      pages.forEach(page => page.classList.remove("active"));
      
      // Add active class to corresponding page
      document.querySelector(`[data-page="${pageName}"]`).classList.add("active");
    });
  });
}

// Call the navigation function
navigationFunc();

// Certificate modal functionality
function openFullscreen(element) {
  const modal = document.getElementById("certificateModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.getElementById("closeModal");
  
  modal.style.display = "block";
  modalImg.src = element.href;

  closeBtn.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
