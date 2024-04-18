function displayOverlay() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function hideOverlay() {
    document.getElementById("overlay").style.display = "none";
  }

  function displaySidebar() {
    document.querySelector(".sidebar").style.display = "block";
  }
  
  function hideSidebar() {
    document.querySelector(".sidebar").style.display = "none";
  }


 const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('active')
    } else {
      entry.target.classList.remove('active')
    }
  });
 });

 const hiddenElements = document.querySelectorAll('.hidden');
 hiddenElements.forEach((el) => observer.observe(el));
 