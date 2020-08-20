
// sorting
const categories = [
  {name: "ALL", id: 1},
  {name: "UI/UX DESIGN", id: 2},
  {name: "WEB DESIGN", id: 3},
  {name: "MOCKUPS", id: 4}
];

const renderCategory = ({name, id}) => {
  return `<li><a class="btn1 category-${id}" data-id=${id}>${name}</a></li>`
}

const renderCategories = (items) => items.map(renderCategory).join("");

const products = [
  {
      cssClass: "image-col-1",
      title: "HAND WATCH",
      categoryId: 2,
      category: "UI/UX DESIGN"
  },
  {
      cssClass: "image-col-2",
      title: "One day pass",
      categoryId: 3,
      category: "WEB DESIGN"
  },
  {
      cssClass: "image-col-3",
      title: "Underwear",
      categoryId: 2,
      category: "UI/UX DESIGN"
  },
  {
      cssClass: "image-col-4",
      title: "Scrub",
      categoryId: 4,
      category: "MOCKUPS"
  },
  {
      cssClass: "image-col-5",
      title: "Wine",
      categoryId: 4,
      category: "MOCKUPS"
  },
  {
      cssClass: "image-col-6",
      title: "Bags",
      categoryId: 3,
      category: "WEB DESIGN"
  },
]

const renderProduct = ({ cssClass, title, category }) => {
  return `
  <div class="unit ${cssClass}">  
      <div class="servicing-image">
          <a href="#">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${category}</p>
          </a>                                
      </div>                           
  </div>
  `;
}

const renderProducts = (items) => {
  return items.map(renderProduct).join("");
}

const categoriesContainer = document.querySelector(".categories");
categoriesContainer.innerHTML = renderCategories(categories);

let currentCategory = document.querySelector(".category-1");
currentCategory.classList.add("active");

const productsContainer = document.querySelector(".latest-works-wrapper");
productsContainer.innerHTML = renderProducts(products);

categoriesContainer.addEventListener("click", ({ target }) => {
    if (currentCategory === target) {
        return;
    }
    const id = +target.dataset.id;
    if (!id) {
        return;
    }
    const filteredProducts = id === 1 
    ? products 
    : products.filter(({ categoryId }) => categoryId === id);
    productsContainer.innerHTML = renderProducts(filteredProducts);
    currentCategory.classList.remove("active");
    currentCategory = target;
    target.classList.add("active");
})


const findEl = (sel, parent) =>(parent || document).querySelector(sel);




burgerToggle = findEl('.header__burger');
mobileNav = findEl('.header__mobileNav');
bodY = findEl('body');

burgerToggle.addEventListener('click', mobileMenu);



function mobileMenu () {
  burgerToggle.classList.toggle('header__burger-active');
  mobileNav.classList.toggle('header__mobileNav-active');
  bodY.classList.toggle('overflowYHidden');
}

function slider() {
  if(window.innerWidth <= 1200) {
    document.addEventListener('click', function(event) {
      if (event.target.dataset.dotId) {
        currentSlide(event.target.dataset.dotId)
      };
    });

    let slideIndex = 1;
    showSlides(slideIndex);


    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      let i;
      const slides = document.getElementsByClassName("slider-item");
      const dots = document.getElementsByClassName("slider-dots_item");
      if (n > slides.length) {
        slideIndex = 1
      }
      if (n < 1) {
        slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
  }
}
slider()
window.addEventListener(`resize`, event => {
  slider()
}, false);
