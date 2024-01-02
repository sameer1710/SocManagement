// Share Details button functionality
document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prevBtn1');
    const nextBtn = document.getElementById('nextBtn1');
    const tabItems = document.querySelectorAll('.mem-mast');
    
    // Previous button functionality
    prevBtn.addEventListener('click', function() {
      event.preventDefault();

      const activeTab = document.querySelector('.mem-pane.active');
      const tabs = document.querySelectorAll('.mem-pane');
      let index = Array.from(tabs).indexOf(activeTab);
      if (index > 0) {
        tabs[index].classList.remove('active', 'show');
        tabs[index - 1].classList.add('active', 'show');
        tabItems[index].classList.remove('active');
        tabItems[index - 1].classList.add('active');
      }
      window.scrollTo(0,0);
    });
    
    // Next button functionality
    nextBtn.addEventListener('click', function() {
      event.preventDefault();

      const activeTab = document.querySelector('.mem-pane.active');
      const tabs = document.querySelectorAll('.mem-pane');
      let index = Array.from(tabs).indexOf(activeTab);
      if (index < tabs.length - 1) {
        tabs[index].classList.remove('active', 'show');
        tabs[index + 1].classList.add('active', 'show');
        tabItems[index].classList.remove('active');
        tabItems[index + 1].classList.add('active');
        event.preventDefault();
      }
      window.scrollTo(0,0);
    });
    
  });



//   Bank loan details button functionality

document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prevBtn2');
    const nextBtn = document.getElementById('nextBtn2');
    const tabItems = document.querySelectorAll('.mem-mast');
    
    // Previous button functionality
    prevBtn.addEventListener('click', function() {
      event.preventDefault();

      const activeTab = document.querySelector('.mem-pane.active');
      const tabs = document.querySelectorAll('.mem-pane');
      let index = Array.from(tabs).indexOf(activeTab);
      if (index > 0) {
        tabs[index].classList.remove('active', 'show');
        tabs[index - 1].classList.add('active', 'show');
        tabItems[index].classList.remove('active');
        tabItems[index - 1].classList.add('active');
      }
      window.scrollTo(0,0);
    });
    
    // Next button functionality
    nextBtn.addEventListener('click', function() {
      event.preventDefault();

      const activeTab = document.querySelector('.mem-pane.active');
      const tabs = document.querySelectorAll('.mem-pane');
      let index = Array.from(tabs).indexOf(activeTab);
      if (index < tabs.length - 1) {
        tabs[index].classList.remove('active', 'show');
        tabs[index + 1].classList.add('active', 'show');
        tabItems[index].classList.remove('active');
        tabItems[index + 1].classList.add('active');
        event.preventDefault();
      }
      window.scrollTo(0,0);
    });
    
  });


//   Staff details button functionality

document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prevBtn3');
    const nextBtn = document.getElementById('nextBtn3');
    const tabItems = document.querySelectorAll('.mem-mast');
    
    // Previous button functionality
    prevBtn.addEventListener('click', function() {
      event.preventDefault();

      const activeTab = document.querySelector('.mem-pane.active');
      const tabs = document.querySelectorAll('.mem-pane');
      let index = Array.from(tabs).indexOf(activeTab);
      if (index > 0) {
        tabs[index].classList.remove('active', 'show');
        tabs[index - 1].classList.add('active', 'show');
        tabItems[index].classList.remove('active');
        tabItems[index - 1].classList.add('active');
      }
      window.scrollTo(0,0);
    });
    
    // Next button functionality
    nextBtn.addEventListener('click', function() {
      event.preventDefault();

      const activeTab = document.querySelector('.mem-pane.active');
      const tabs = document.querySelectorAll('.mem-pane');
      let index = Array.from(tabs).indexOf(activeTab);
      if (index < tabs.length - 1) {
        tabs[index].classList.remove('active', 'show');
        tabs[index + 1].classList.add('active', 'show');
        tabItems[index].classList.remove('active');
        tabItems[index + 1].classList.add('active');
        event.preventDefault();
      }
      window.scrollTo(0,0);
    });
    
  });

// Gst Detail button funcionality

document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prevBtn4');
    const nextBtn = document.getElementById('nextBtn4');
    const tabItems = document.querySelectorAll('.mem-mast');
    
    // Previous button functionality
    prevBtn.addEventListener('click', function() {
      event.preventDefault();

      const activeTab = document.querySelector('.mem-pane.active');
      const tabs = document.querySelectorAll('.mem-pane');
      let index = Array.from(tabs).indexOf(activeTab);
      if (index > 0) {
        tabs[index].classList.remove('active', 'show');
        tabs[index - 1].classList.add('active', 'show');
        tabItems[index].classList.remove('active');
        tabItems[index - 1].classList.add('active');
      }
      window.scrollTo(0,0);
    });
    
    // Next button functionality
    nextBtn.addEventListener('click', function() {
      event.preventDefault();

      const activeTab = document.querySelector('.mem-pane.active');
      const tabs = document.querySelectorAll('.mem-pane');
      let index = Array.from(tabs).indexOf(activeTab);
      if (index < tabs.length - 1) {
        tabs[index].classList.remove('active', 'show');
        tabs[index + 1].classList.add('active', 'show');
        tabItems[index].classList.remove('active');
        tabItems[index + 1].classList.add('active');
        event.preventDefault();
      }
      window.scrollTo(0,0);
    });
    
  });

//   Vehicle details button functionality

document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prevBtn5');
    const nextBtn = document.getElementById('nextBtn5');
    const tabItems = document.querySelectorAll('.mem-mast');
    
    // Previous button functionality
    prevBtn.addEventListener('click', function() {
      event.preventDefault();

      const activeTab = document.querySelector('.mem-pane.active');
      const tabs = document.querySelectorAll('.mem-pane');
      let index = Array.from(tabs).indexOf(activeTab);
      if (index > 0) {
        tabs[index].classList.remove('active', 'show');
        tabs[index - 1].classList.add('active', 'show');
        tabItems[index].classList.remove('active');
        tabItems[index - 1].classList.add('active');
      }
      window.scrollTo(0,0);
    });
    
    // Next button functionality
    nextBtn.addEventListener('click', function() {
      event.preventDefault();

      const activeTab = document.querySelector('.mem-pane.active');
      const tabs = document.querySelectorAll('.mem-pane');
      let index = Array.from(tabs).indexOf(activeTab);
      if (index < tabs.length - 1) {
        tabs[index].classList.remove('active', 'show');
        tabs[index + 1].classList.add('active', 'show');
        tabItems[index].classList.remove('active');
        tabItems[index + 1].classList.add('active');
        event.preventDefault();
      }
      window.scrollTo(0,0);
    });
    
  });

 
function closeUpForm() {
  var x = document.getElementById("flatDetails");
  if (x.style.display === "none") {
    x.style.display = "none";
  } else {
      x.style.display = "none";
  }
}
