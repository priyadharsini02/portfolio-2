// Navbar animation
window.onscroll = function() {
    scrollFunction();
    heroZoomEffect();
  };
  
  function scrollFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      navbar.classList.remove("transparent");
      navbar.classList.add("dark");
    } else {
      navbar.classList.remove("dark");
      navbar.classList.add("transparent");
    }
  }
  
  //Hero Zoom animation
  function heroZoomEffect() {
    var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;
    var maxScale = 10; // Maximum scale factor
  
    if (scrollPosition < windowHeight) {
      var scale = 1 + scrollPosition / windowHeight * 0.5; // Adjust the scaling factor as needed
      if (scale > maxScale) scale = maxScale; // Ensure it does not scale beyond maxScale
      document.querySelector('.hero').style.backgroundSize = `${scale * 100}%`;
    }
  }

// About me animation
$(document).ready(function() {
    $(window).scroll(function() {
      var scrollPosition = $(window).scrollTop();
      var aboutMePosition = $('#about-me').offset().top;
      var windowHeight = $(window).height();
      
      if (scrollPosition > (aboutMePosition - windowHeight + 100)) {
        $('#about-me').addClass('show');
      } else {
        $('#about-me').removeClass('show');
      }
    });
  
    // Skills animation
    $(window).scroll(function() {
      var scrollPosition = $(window).scrollTop();
      var skillsPosition = $('#skills').offset().top;
      var windowHeight = $(window).height();
      
      if (scrollPosition > (skillsPosition - windowHeight + 90)) {
        $('#skills').addClass('show');
        $('.circle').each(function() {
          var percent = $(this).data('percent');
          $(this).css('--percent', percent + '%');
        });
      } else {
        $('#skills').removeClass('show');
      }
    });
    // Projects animation
      $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        var projectsPosition = $('#projects').offset().top;
        var windowHeight = $(window).height();
        
        if (scrollPosition > (projectsPosition - windowHeight + 90)) {
          $('#projects').addClass('show');
        } else {
          $('#projects').removeClass('show');
        }
      });

      // Contact animation
      $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        var projectsPosition = $('#contact').offset().top;
        var windowHeight = $(window).height();
        
        if (scrollPosition > (projectsPosition - windowHeight + 90)) {
          $('#contact').addClass('show');
        } else {
          $('#contact').removeClass('show');
        }
      });
  });
  


  // Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(this);

  fetch(this.action, {
    method: this.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert('Message sent successfully!');
      this.reset();
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          alert(data['errors'].map(error => error['message']).join(', '));
        } else {
          alert('Oops! There was a problem submitting your form');
        }
      });
    }
  }).catch(error => {
    alert('Oops! There was a problem submitting your form');
  });
});




// // JavaScript code to display success message
// document.getElementById('newsletter-form').addEventListener('submit', function(event) {
//   // Prevent default form submission
//   event.preventDefault();
  
//   // Submit the form using AJAX
//   var formData = new FormData(this);
//   var xhr = new XMLHttpRequest();
//   xhr.open('POST', this.action);
//   xhr.setRequestHeader('Accept', 'application/json');
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState !== XMLHttpRequest.DONE) return;
//     if (xhr.status === 200) {
//       // Show success message
//       alert('Thank you for subscribing!');
//     } else {
//       // Show error message
//       alert('Oops! Something went wrong. Please try again later.');
//     }
//   };
//   xhr.send(formData);
// });

  

  