function overallSearch(){
  const searchPlace = document.querySelector('#loop-search input[type="search"]');
  searchPlace.value = localStorage.getItem("search")
  const watchItems = document.querySelectorAll(".s-m-product")
  const itemName = item.querySelector('h4').textContent.toLowerCase()
  const searchPlaceValue = searchPlace.value.toLowerCase()
  watchItems.forEach(watch => {
    if(itemName.indexOf(searchPlaceValue) !=-1){
      watch.style.display = "block"
    }
    else{
      watch.style.display = "none"
    }
  })
}






searchPlace.addEventListener("input", searchEngine)  

function searchEngine(){  
    watchItems.forEach(item => {
      if(itemName.indexOf( searchPlaceValue) != -1){
        item.style.display = "block"
      }
      else{
        item.style.display = "none"
      }
    })
  }