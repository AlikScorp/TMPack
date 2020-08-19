const productSize = document.querySelectorAll(".productSize");
const productWeight = document.querySelectorAll(".productWeight");
const productPrice = document.querySelectorAll(".productPrice");

productWeight.forEach((element, index) => {
  element.onchange = function () {
    switch (parseInt(element.value)) {
      case 66:
        productPrice[index].innerHTML = "0.083";
        break;

      case 61:
        productPrice[index].innerHTML = "0.077";
        break;

      case 80:
        productPrice[index].innerHTML = "0.096";
        break;

      case 55:
        productPrice[index].innerHTML = "0.069";
        break;

      case 43:
        productPrice[index].innerHTML = "0.054";
        break;

      case 49:
        productPrice[index].innerHTML = "0.062";
        break;
    }
  };
});

productSize.forEach((element, index) => {
  element.onchange = function (e) {
    productPrice[index].parentElement.style.color = "#0B090E";
    if (e.target.value === "55*105") {
      productWeight[index].innerHTML = `
          <option value="66">66</option>
          <option value="61">61</option>
          <option value="80">80</option>
      `;
      productPrice[index].innerHTML = "0.083";
    }

    if (e.target.value === "95*50") {
      productWeight[index].innerHTML = `
          <option value="55">55</option>
      `;
      productPrice[index].innerHTML = "0.069";
    }

    if (e.target.value === "45*85") {
      productWeight[index].innerHTML = `
          <option value="43">43</option>
      `;
      productPrice[index].innerHTML = "0.054";
    }

    if (e.target.value === "95*45") {
      productWeight[index].innerHTML = `
          <option value="49">49</option>
      `;
      productPrice[index].innerHTML = "0.062";
    }
  };
});
