// ============================================ Show more============================================================

let showMore = document.getElementById("more_news");
let total = document.querySelector(".news_list_total");
let limited = document.querySelector(".news_list_limited");


showMore.onclick = function(){
  console.log("done")
  if (total.style.display == "none"){
    total.style.display = "flex"
    limited.style.display = "none"
    showMore.innerHTML = "Daha az"
    
  } else{
    console.log('else')
    total.style.display = "none"
    limited.style.display = "flex"
    showMore.innerHTML = "Daha çox"
  }
};