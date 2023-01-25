



// on search button click. applies styles to elements and passes user input value to fetch api

const searchButton = document
  .getElementById("search-btn")
  .addEventListener("click", function (e) {
    const tableContainer = document.querySelector(".table-container");
    const searchValue = document.querySelector(".site-search");
    const className = "inverted";

    e.preventDefault();

    document.getElementsByTagName("header")[0].classList.add(className);

    loading.innerHTML = "LOADING . . . . . . ";
    

    tableContainer.style.display = "block";

    getData(searchValue.value);
  });



  
// car api. I could not find an api that returns images.

function getData(val) {
  let model = val;
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/cars?model=" + model,
    headers: { "X-Api-Key": "SUsEB+dfylcn+LDtybwCuQ==gxFdZoLBQrNm4EWw" },
    contentType: "application/json",
    success: function (data) {
      const tableBody = document.querySelector(".table-body");
      const loading = document.querySelector("#loading");

      if (data) {
        // replace table content with new content everytime search button is clicked

        tableBody.replaceChildren();

        loading.innerHTML = "";

        data.forEach((item) => {
          tableBody.innerHTML += `
    
  <tr>
    <th scope="row">${item.make}</th>
    <td data-title="Released">${item.model}</td>
    <td data-title="Domestic Gross" data-type="currency">${item.transmission}</td>
    <td data-title="Budget" data-type="currency">${item.year}</td>
  </tr>

`;
        });
      }

      if (data == "") {
        loading.innerHTML = "Sorry there are no results to show . . . . ";
      }
    },
    error: function ajaxError(jqXHR) {
      const searchValue = document.querySelector(".site-search");
      if (searchValue.value == "") {
        loading.innerHTML = "Please enter a search term . . . . ";
      } else {
        loading.innerHTML = "Sorry there has been an error . . . . ";
      }
      console.error("Error: ", jqXHR.responseText);
    },
  });
}
