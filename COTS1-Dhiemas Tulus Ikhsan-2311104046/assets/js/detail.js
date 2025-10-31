// ===============================
// detail.js - untuk detail.html
// ===============================

$(document).ready(function () {
  // Initialize Toast
  const cartToast = new bootstrap.Toast($("#cartToast")[0]);

  // ====== ADD TO CART FUNCTIONALITY ======
  $(".add-to-cart").on("click", function (e) {
    e.preventDefault();

    // Ambil informasi produk
    const productName = $("h2").first().text();
    const selectedSize = $('input[name="size"]:checked').next("label").text();
    const quantity = $("#quantity").val();

    // Update pesan toast dengan detail
    $("#toastMessage").text(
      `${productName} (${selectedSize}) x${quantity} berhasil ditambahkan ke keranjang!`
    );

    // Tampilkan toast
    cartToast.show();

    // Efek button
    $(this).addClass("btn-success").removeClass("btn-primary");
    $(this).html('<i class="bi bi-check-circle"></i> Ditambahkan');

    setTimeout(() => {
      $(this).removeClass("btn-success").addClass("btn-primary");
      $(this).html('<i class="bi bi-cart-plus"></i> Add to Cart');
    }, 2000);
  });

  // ====== QUANTITY CONTROLS ======
  $("#btnPlus").on("click", function () {
    let currentVal = parseInt($("#quantity").val());
    $("#quantity").val(currentVal + 1);
  });

  $("#btnMinus").on("click", function () {
    let currentVal = parseInt($("#quantity").val());
    if (currentVal > 1) {
      $("#quantity").val(currentVal - 1);
    }
  });

  // Validasi input quantity
  $("#quantity").on("input", function () {
    let val = parseInt($(this).val());
    if (isNaN(val) || val < 1) {
      $(this).val(1);
    }
  });

  // ====== THUMBNAIL CLICK TO CHANGE CAROUSEL ======
  $(".thumbnail-img").on("click", function () {
    const slideIndex = $(this).data("bs-slide-to");
    const carousel = new bootstrap.Carousel(
      document.getElementById("productCarousel")
    );
    carousel.to(slideIndex);

    // Highlight active thumbnail
    $(".thumbnail-img").removeClass("border-primary");
    $(this).addClass("border-primary");
  });

  // ====== HIGHLIGHT ACTIVE THUMBNAIL ON CAROUSEL CHANGE ======
  $("#productCarousel").on("slide.bs.carousel", function (e) {
    $(".thumbnail-img").removeClass("border-primary");
    $('.thumbnail-img[data-bs-slide-to="' + e.to + '"]').addClass(
      "border-primary"
    );
  });

  // Set initial active thumbnail
  $('.thumbnail-img[data-bs-slide-to="0"]').addClass("border-primary");

  // ====== SIZE SELECTION EFFECT ======
  $('input[name="size"]').on("change", function () {
    $('label[for^="size"]').removeClass("active");
    $(this).next("label").addClass("active");
  });

  // ====== SMOOTH ANIMATIONS ======
  $(".product-detail-info").css({
    animation: "fadeIn 0.6s ease-in-out",
  });

  $("#productCarousel").css({
    animation: "fadeIn 0.8s ease-in-out",
  });
});
