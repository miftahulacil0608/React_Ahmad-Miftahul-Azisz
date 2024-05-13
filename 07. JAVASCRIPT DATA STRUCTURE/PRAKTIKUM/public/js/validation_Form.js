const productForm = document.getElementById("productForm");
const productNameInput = document.getElementById("productName");
const productNameErrorMassage = document.getElementById(
  "productNameErrorMassage"
);
const productPriceInput = document.getElementById("productPrice");
const productTableBody = document.querySelector("#productTable tbody");
const nameRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let productData = [
  {
    productName: "Lorem",
    productCategory: "ipsum",
    productFreshness: "Brand new",
    additionalDescription: "adipiscing",
    productPrice: 1,
  },
];

productNameInput.addEventListener("input", productNameValidation);

productForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    productNameInput.value.trim() === "" ||
    productPriceInput.value.trim() === ""
  ) {
    alert("Silakan masukkan nama produk yang valid.");
    return;
  }

  const formData = {
    productName: productNameInput.value,
    productCategory: document.getElementById("productCategory").value,
    productFreshness: valueRadioButton(),
    additionalDescription: document.getElementById("additional-description")
      .value,
    productPrice: productPriceInput.value,
  };

  productData.push(formData);
  displayProductData();
  clearForm();
});

function valueRadioButton() {
  const radioButtons = document.getElementsByName("product-freshness");
  let selectedValueRadioButton;
  radioButtons.forEach((button) => {
    if (button.checked) {
      selectedValueRadioButton = button.value;
    }
  });
  return selectedValueRadioButton;
}

// Tampilan data yang ada
document.addEventListener("DOMContentLoaded", function () {
  displayProductData();
});

function displayProductData() {
  productTableBody.innerHTML = "";
  productData.forEach((product, index) => {
    const newRow = `
                   <tr class="row-one divide-x-[16px] divide-transparent">
                <td  class="py-[6px]">${index + 1}</td>
                <td  class="py-[6px]">${product.productName}</td>
                <td  class="py-[6px]">${product.productCategory}</td>
                <td  class="py-[6px]"">Default Image Name</td>
                <td  class="py-[6px]">${product.productFreshness}</td>
                <td  class="py-[6px]">${product.additionalDescription}</td>
                <td  class="py-[6px]">${product.productPrice}</td>
            </tr>
                `;
    productTableBody.insertAdjacentHTML("beforeend", newRow);
  });
}
function clearForm() {
  productNameInput.value = "";
  productPriceInput.value = "";
  const radioButtons = document.getElementsByName("product-freshness");
  radioButtons.forEach((button) => (button.checked = false));
  document.getElementById("additional-description").value = "";
}

function productNameValidation() {
  if (productNameInput.value.trim() === "") {
    productNameErrorMassage.textContent = blankInput("Product Name");
    productNameInput.classList.add("border-red-500");
    return;
  }

  if (productNameInput.value.length > 25) {
    productNameErrorMassage.textContent =
      "Nama Produk tidak boleh lebih dari 25 karakter.";
    productNameInput.classList.add("border-red-500");
    return;
  }

  if (nameRegex.test(productNameInput.value)) {
    productNameErrorMassage.textContent = "Nama tidak boleh mengandung simbol.";
    productNameInput.classList.add("border-red-500");
    return;
  }

  productNameErrorMassage.textContent = "";
  productNameInput.classList.remove("border-red-500");
}

function blankInput(input) {
  return `The ${input} field must be filled in`;
}

// Fungsi untuk menangani tombol "Delete"
function handleDeleteButton() {
  if (productData.length === 0) {
    alert("Tidak ada data yang bisa dihapus.");
    return;
  }

  // Hapus nilai terakhir dari array productData
  productData.pop();

  // Perbarui tampilan tabel
  displayProductData();
}

// Fungsi untuk menangani tombol "Search"
function handleSearchButton() {
  const searchValue = document.getElementById("inputSearch").value.trim();

  if (searchValue === "") {
    return; // Batalkan jika pengguna membatalkan atau tidak memasukkan input
  }

  const foundProduct = productData.find(
    (product) => product.productName.toLowerCase() === searchValue.toLowerCase()
  );

  if (foundProduct) {
    // Jika produk ditemukan, tampilkan data dalam sebuah alert
    alert(`
            Nama Produk: ${foundProduct.productName}
            Kategori Produk: ${foundProduct.productCategory}
            Harga Produk: ${foundProduct.productPrice}
        `);
  } else {
    alert("Produk tidak ditemukan.");
  }
}

// Tambahkan event listener untuk tombol "Delete" dan "Search"
const deleteButton = document.querySelector("#deleteButton");
deleteButton.addEventListener("click", handleDeleteButton);

const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", handleSearchButton);
