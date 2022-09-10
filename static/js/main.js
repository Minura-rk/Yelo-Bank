// ============================================ Change LANG dropwDown=============================================================

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("showDropDown");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("showDropDown")) {
        openDropdown.classList.remove("showDropDown");
      }
    }
  }
};
// // ============================================ STICKY HEADER =============================================================

let header = document.querySelector(".head-bottom");
let navbar = document.querySelector(".head-top");
let aboutBanking = document.querySelector(".about-banking");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1) {
    header.classList.add("sticky-header");
    navbar.style.height = "0px";
    aboutBanking.classList.add("hide");
    header.style.backgroundColor = "white";
  } else {
    header.classList.remove("sticky-header");
    aboutBanking.classList.remove("hide");
    navbar.style.height = "45px";
    header.style.backgroundColor = "transparent";
  }
});
// // ============================================ SLIDER =============================================================

onload = start;

function start() {
  var i = 1;

  function Move() {
    i = (i % 5) + 1;
    document.getElementById("i" + i).checked = true;
  }
  setInterval(Move, 5000);
}

// // ============================================ NAVBAR MENU TO X =============================================================

let menuBtn = document.getElementById("menu_toggle");
let bodyClass = document.querySelector("body")

menuBtn.addEventListener("click", () => {
  if (menuBtn.classList.contains("close_menu")) {
    menuBtn.classList.replace("close_menu", "open_menu");
    bodyClass.classList.add("open");
  } else {
    menuBtn.classList.replace("open_menu", "close_menu");
    bodyClass.classList.remove("open")
  }
});

// // ============================================ Kredit kalkulyatoru & INPUT STYLE=============================================================

$("#my_month,#my_credit").on("input", function () {
  var interest = 0.13 / 12;
  var x = parseFloat(Math.pow(1 + interest, parseFloat($("#my_month").val())));
  var monthly = (parseFloat($("#my_credit").val()) * x * interest) / (x - 1);
  if (parseFloat($("#my_month").val()) < 12) {
    $("#my_month_pay").text(
      (
        parseFloat(monthly) +
        parseFloat($("#my_credit").val()) * 0.0005
      ).toFixed(2)
    );
  } else if (
    parseFloat($("#my_month").val()) < 24 &&
    parseFloat($("#my_month").val()) >= 12
  ) {
    $("#my_month_pay").text(
      (
        parseFloat(monthly) +
        parseFloat($("#my_credit").val()) * 0.001411
      ).toFixed(2)
    );
  } else {
    $("#my_month_pay").text(
      (
        parseFloat(monthly) +
        parseFloat($("#my_credit").val()) * 0.0023898
      ).toFixed(2)
    );
  }
});

const rangeInputs = document.querySelectorAll('input[type="range"]');
const numberInput = document.querySelector('input[type="number"]');
function handleInputChange(e) {
  let target = e.target;
  if (e.target.type !== "range") {
    target = document.getElementById("range");
  }
  const min = target.min;
  const max = target.max;
  const val = target.value;
  target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
}
rangeInputs.forEach((input) => {
  input.addEventListener("input", handleInputChange);
});

// // ================================== Valyuta mezennesi ========================================================================
const usdBuy = document.getElementById("buy_usd").innerHTML;
const usdSell = document.getElementById("sell_usd").innerHTML;
const eurBuy = document.getElementById("buy_eur").innerHTML;
const eurSell = document.getElementById("sell_eur").innerHTML;

var rates = {
  bank: {
    usd: {
      buy: usdBuy,
      sell: usdSell,
    },
    eur: {
      buy: eurBuy,
      sell: eurSell,
    },
  },
};

calculate = function () {
  console.log('hedhd')
  var c = $(".calculator"),
    from = c.find("select[name=from]").val(),
    to = c.find("select[name=to]").val(),
    curr = from === "azn" ? to : from,
    buy = rates["bank"][curr]["buy"],
    sell = rates["bank"][curr]["sell"],
    input_value = $(".input_value").val(),
    input_result = $(".input_result"),
    result =
      from === "azn"
        ? (parseInt(input_value) / sell).toFixed(2)
        : (parseInt(input_value) * buy).toFixed(2);

  if (result == "NaN") result = "Alıram";

  input_result.html(result);
};
$(function () {
  calculate();
});

$(document).on("change", ".s_curr", function (e) {
  var t = $(this),
    name = t.attr("name"),
    from = $(".s_curr[name=from]"),
    to = $(".s_curr[name=to]");
  if (name === "from") {
    if (t.val() === "azn") {
      to.find("option[value!=azn]").show();
      to.find("option[value=azn]").hide();
      to.val(to.find("option:nth-child(2)").val());
    } else {
      to.find("option[value=azn]").show();
      to.find("option[value!=azn]").hide();
      to.val(to.find("option").val());
    }
  }
  calculate();
});
$(document).on("keyup", ".input_value", calculate);


