const currentPage = window.location.pathname;
function init() {
  switch (currentPage) {
    case '/':
      case '/dist/casio.html':

        casio();
        break;
      
      case '/dist/search.html':
      search();

      break;
      
      case '/dist/item.html':

      item();
      break;
  }
}

document.addEventListener('DOMContentLoaded', init);

function transferToItems(e){
  if(e.target.getAttribute("alt") === "watch"){
  const imgSrc = e.target.getAttribute("src")
  localStorage.setItem("watchSrc", imgSrc)
  window.location.pathname = '/dist/item.html'
}
else if(e.target.getAttribute("data-src")){
  const imgSrc = e.target.getAttribute("data-src")
  localStorage.setItem("watchSrc", imgSrc)
  window.location.pathname = '/dist/item.html'
}
}

function search(){
  
  fetch('../data/data.json')
  .then(response => response.json())
  .then(data => displayItems(data.watches));

const itemsList = document.getElementById("search-items");
function displayItems(watches) {
  watches.forEach(watch => {
    
    const images = document.querySelectorAll("img").forEach(img=> img.addEventListener("click", transferToItems))
    
    const watchDiv = document.createElement("div");
    watchDiv.setAttribute("class", "s-m-product");
    watchDiv.innerHTML = `
      <div class="s-m-product-img"><img src=${watch.watchImg} alt="watch"></div>
      <div class="s-m-p-text">
        <h3>ALL NEW</h3>
        <h4>${watch.watchName}</h4>
      </div>
    `;
    itemsList.appendChild(watchDiv);
  });
}
const searchPlace = document.querySelector('#loop-search input[type="search"]');
searchPlace.addEventListener("change", searchEngine)  
searchPlace.value = localStorage.getItem("search")

function searchEngine(){  
  const watchItems = document.querySelectorAll(".s-m-product")
  const searchPlaceValue = searchPlace.value.toLowerCase()
    watchItems.forEach(item => {
      const itemName = item.querySelector('h4').textContent.toLowerCase()
      if(itemName.indexOf( searchPlaceValue) != -1){
        item.style.display = "block"
      }
      else{
        item.style.display = "none"
      }
    })
  }
 
}

function casio(){
  
  fetch('../data/data.json')
  .then(response => response.json())
  .then(data => {
    displayLMProducts(data.watches)
    displayRProducts(data.watches)
    displayStarProducts(data.watches)
  });
  
  const links = document.querySelectorAll(".additional").forEach(link=> link.addEventListener("click", transferToItems))
  const research = document.querySelector("#loop")
  const searchForm = document.getElementById("searchForm");
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    localStorage.setItem("search", research.value)
    window.location.href = "search.html";
  });

function displayLMProducts(watches) {
  const LMProducts = document.querySelectorAll(".l-m-product");
  const images = document.querySelectorAll("img").forEach(img=> img.addEventListener("click", transferToItems))
  
  // Iterate through the products and set content for each one
  LMProducts.forEach((product, i) => {
    product.innerHTML = `
      <div class="l-m-product-img"><img src=${watches[i + 12].watchImg} alt="watch"></div>
      <div class="l-m-p-text">
        <h3>${watches[i + 12].watchName}</h3>
        <h4>Find Your Perfect Watch</h4>
        <button><a href="">LEARN MORE</a></button>
      </div>
    `;
  });
}



function displayRProducts(watches) {
  const images = document.querySelectorAll("img").forEach(img=> img.addEventListener("click", transferToItems))
  
const RProducts = document.querySelectorAll(".r-p");

RProducts.forEach((product, i) => {
  const productHTML = `
    <div class="r-p-img">
      <img src="${watches[i].watchImg}" alt="watch">
      <i class="fa-regular fa-heart"></i>
    </div>
    <div class="r-p-text">
      <p>Time Revolution The First<br> Treatment Essence RX (4th Gen)</p>
      <span>$${watches[i + 14].watchPrice}</span>
    </div>
  `;

  product.innerHTML = productHTML;

  const emptyHearts = product.querySelectorAll(".fa-regular.fa-heart");

  emptyHearts.forEach(heart => {
    heart.addEventListener("click", fillEmpty);
  });

  function fillEmpty(event) {
    const clickedHeart = event.currentTarget;
    clickedHeart.classList.toggle("fa-regular");
    clickedHeart.classList.toggle("fa-solid");
  }
});
}

function displayStarProducts(watches){
const SProducts = document.querySelectorAll(".star-p")
SProducts.forEach((product, i)=>{
  const images = document.querySelectorAll("img").forEach(img=> img.addEventListener("click", transferToItems))
  product.innerHTML=`
  <div class="star-p-img"><img src=${watches[i + 8].watchImg} alt="watch" ><i id="big-star"></i></div>
        <div class="star-p-text">
          <p>${watches[i + 8].watchName}<br> Essence RX (4th Gen)
          </p>
          <span>$${watches[i + 8].watchPrice}</span><br>
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        </div>`;
})
}

}

function item(){
  const watchSrc = localStorage.getItem("watchSrc")

   fetch('../data/data.json')
  .then(response => response.json())
  .then(data => selectData(data.watches));

  function selectData(watches){
    watches.forEach(watch =>{
      if(watch.watchImg === watchSrc){
        const section = document.getElementById("item-information")
          section.innerHTML=`
          <div id="item-display">
              <img src=${watch.watchImg}></div>
            <div class="item-about">
              <span>${watch.watchName}</span>
              <p>${watch.lorem}</p>
              <span class="price">$${watch.watchPrice}</span>
              <button class="buy-favorite">Purchase!</button>
              <button class="buy-favorite"><i class="fa-regular fa-heart"></i> Add To Favorites</button>
            </div>
          `
      }
    } )
  }

} 