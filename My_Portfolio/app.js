const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
// console.log("🚀 ~ file: app.js ~ line 3 ~ sectBtns", sectBtns)
const sectBtn = document.querySelectorAll('.control');
// console.log("🚀 ~ file: app.js ~ line 5 ~ sectBtn", sectBtn)
const allSections = document.querySelector('.main-content');


function pageTransition() {
  //NOTE: active button
  //Button click active class
  //////// in this loop it check all classes and find the class that has active class and remove it then add active class to this.className
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace(
        'active-btn',
        ''
      );
      /////// this refer to the button that is clicked
      this.className += 'active-btn';
      // console.log(this)''
    });
  }
  //NOTE Section activation
  // ────────────────────────────────────────────────────────────────────────────────
  //////////Section Active
  allSections.addEventListener('click', (e) => {
    // console.log(e)
    const id = e.target.dataset.id;
    console.log(
      '🚀 ~ file: app.js ~ line 30 ~ allSections.addEventListener ~ e.target.dataset',
      e.target
    );
    // console.log("🚀 ~ file: app.js ~ line 26 ~ allSections.addEventListener ~ id", id)

    if (id) {
      //remove active class from sections
      // ─────────────────────────────────────────────────────────────────
        sectBtns.forEach((btn) => {
        btn.classList.remove('active');
      });
      //// remove active class from sections and add active to selected one
      // ─────────────────────────────────────────────────────────────────
      sections.forEach((section) => {
        section.classList.remove('active');
      });

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });
}

pageTransition();
