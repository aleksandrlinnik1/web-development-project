// slider
$('.team-wrapper').slick({
    infinite: true,
    dots: true,
    arrows : false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
	      breakpoint: 800,
	      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  // search
  $(document).ready(function () {
    let searchBlock = $('#form');
    $(document).on('click', '#open', function () {
      searchBlock.slideToggle();
      return false;
    });
  });

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