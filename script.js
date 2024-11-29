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
else if (path.includes("items.html")) {
  function selectSize(event) {
    const checkboxes = document.querySelectorAll('.size-checkbox');
    checkboxes.forEach(checkbox => {
        if (checkbox !== event.target) {
            checkbox.checked = false;
        }
    })
  }

  let cartCount = 0;

  document.getElementById('cart').addEventListener('click', () => {
    // Increment the cart count
    cartCount++;
    
    // Update the cart count display
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cartCount;
    
    // Trigger the animation
    cartCountElement.style.transform = 'scale(1)';
    
    // Reset the animation after it plays
    setTimeout(() => {
      cartCountElement.style.transform = 'scale(0.9)';
    }, 300);
  });

}

