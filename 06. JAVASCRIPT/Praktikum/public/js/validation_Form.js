const productForm = document.getElementById("productForm");
const productNameInput = document.getElementById("productName");
const productNameErrorMassage = document.getElementById(
  "productNameErrorMassage"
);
const productPriceInput = document.getElementById("productPrice");
const nameRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

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

  printAlert(); // Memanggil fungsi printAlert untuk menampilkan data
});

function valueRadioButton() {
  const radioButtons = document.getElementsByName("product-freshness");
  let selectedValueRadioButton;
  radioButtons.forEach((button) => {
    if (button.checked) {
      selectedValueRadioButton = button.value;
    }
  });
  return selectedValueRadioButton; // Mengembalikan nilai selectedValueRadioButton
}

function printAlert() {
  const formData = {
    productName: productNameInput.value,

    productFreshness: valueRadioButton(), // Memanggil fungsi valueRadioButton
    additionalDescription: document.getElementById("additional-description")
      .value,
    productPrice: productPriceInput.value,
  };
  console.log(formData.productFreshness);
  alert(
    `Product Name: ${formData.productName}\nProduct Freshness: ${formData.productFreshness}\nAdditional Description: ${formData.additionalDescription}\nProduct Price: $${formData.productPrice}`
  );
}

function productNameValidation() {
  // Cek jika nama produk kosong
  if (productNameInput.value.trim() === "") {
    productNameErrorMassage.textContent = blankInput("Product Name");
    productNameInput.classList.add("border-red-500"); // Tambahkan border merah pada input
    return;
  }

  // Cek panjang karakter nama produk
  if (productNameInput.value.length > 25) {
    productNameErrorMassage.textContent =
      "Nama Produk tidak boleh lebih dari 25 karakter.";
    productNameInput.classList.add("border-red-500");
    return;
  }

  // Cek simbol pada nama produk
  if (nameRegex.test(productNameInput.value)) {
    productNameErrorMassage.textContent = "Nama tidak boleh mengandung simbol.";
    productNameInput.classList.add("border-red-500");
    return;
  }

  // Reset pesan error jika input valid
  productNameErrorMassage.textContent = "";
  productNameInput.classList.remove("border-red-500"); // Hapus border merah jika sudah diisi dengan benar
}

function blankInput(input) {
  return `The ${input} field must be filled in`;
  
}
