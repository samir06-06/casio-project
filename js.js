const currentPage = window.location.pathname;
function init() {
  switch (currentPage) {
    case '/':
      case '/dist/casio.html':

        casio();
        break; // Add a break statement here to exit the switch block
      
    case '/dist/search.html':

      search();
      break; // Add a break statement here to exit the switch block

      case '/dist/item.html':
      item();
  }
}
document.addEventListener('DOMContentLoaded', init);



function item(){
  fetch('../data/data.json')
  .then(response => response.json())
  .then(data => displayItemDetails(data.watches[0]));

  function displayItemDetails(watchDetails){
    const section = document.getElementById("item-information")
    section.innerHTML=`
    <div id="item-display">
        <img src=${watchDetails.watchImg}></div>
      <div class="item-about">
        <span>${watchDetails.watchName}</span>
        <p>${watchDetails.lorem}</p>
        <span class="price">${watchDetails.watchPrice}</span>
        <button class="buy-favorite">Purchase!</button>
        <button class="buy-favorite"><i class="fa-regular fa-heart"></i> Add To Favorites</button>
      </div>
    `

  }
}