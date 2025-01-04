// const page1 = document.querySelector('#home-one');
// const page2 = document.querySelector('#home-two');
// const button = document.getElementById('switch-btn-one');
// let isPage1Visible = true;

// button.addEventListener('click', () => {
//   if (isPage1Visible) {
//     page1.style.transform = 'translateX(-1440px)';
//     page2.style.transform = 'translateX(0)';
//   } else {
//     page1.style.transform = 'translateX(0)';
//     page2.style.transform = 'translateX(-1440px)';
//   }
//   isPage1Visible = !isPage1Visible;
// });




const page1 = document.querySelector('#home-one');
const page2 = document.querySelector('#home-two');
let isPage1Visible = true;

// Function to toggle pages
function togglePages() {
  if (isPage1Visible) {
    page1.style.transform = 'translateX(-1440px)';
    page2.style.transform = 'translateX(0)';
  } else {
    page1.style.transform = 'translateX(0)';
    page2.style.transform = 'translateX(-1440px)';
  }
  isPage1Visible = !isPage1Visible;
}

// Automatically toggle pages every 5 seconds
setInterval(togglePages, 5000);