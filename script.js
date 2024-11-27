const path = window.location.pathname;

if (path.includes("products.html")) {
  console.log("This is the products page!");
  const productItems = document.querySelectorAll(".products-items");

  productItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.outline = '2px solid #14202E';
      item.style.transition = 'outline 0.3s';
    });

    item.addEventListener('mouseout', () => {
      item.style.outline = 'none';
    });
  });
} 
else if (path.includes("contact.html")) {
  console.log("This is the contact page!");
  const form = document.getElementById('contact-page');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    alert("Form submitted successfully!");
  });

}
else if (path.includes("services.html")) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    })
  })

  const hiddenInfo = document.querySelectorAll(".service-info");
  hiddenInfo.forEach((el) => observer.observe(el));

}



