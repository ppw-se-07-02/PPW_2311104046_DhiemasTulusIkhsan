// ===============================
// script.js - untuk index.html
// ===============================

$(document).ready(function () {
  // Initialize Toast
  const cartToast = new bootstrap.Toast($("#cartToast")[0]);

  // ====== FUNGSI PENCARIAN PRODUK ======
  $("#searchInput").on("keyup", function () {
    const searchValue = $(this).val().toLowerCase();

    $(
      "#productList .col-6, #productList .col-md-4, #productList .col-lg-3"
    ).filter(function () {
      const cardText = $(this).text().toLowerCase();
      const isMatch = cardText.indexOf(searchValue) > -1;
      $(this).toggle(isMatch);
    });

    // Animasi smooth saat filter
    $(
      "#productList .col-6:visible, #productList .col-md-4:visible, #productList .col-lg-3:visible"
    ).each(function (index) {
      $(this).css("animation", "fadeIn 0.5s ease-in-out");
      $(this).css("animation-delay", index * 0.05 + "s");
    });
  });

  // ====== TOAST NOTIFICATION ADD TO CART ======
  $(".add-to-cart").on("click", function (e) {
    e.preventDefault();

    // Ambil nama produk dari card
    const productName = $(this)
      .closest(".card-body")
      .find(".card-title")
      .text();

    // Update pesan toast
    $("#toastMessage").text(
      productName + " berhasil ditambahkan ke keranjang!"
    );

    // Tampilkan toast
    cartToast.show();

    // Efek button saat diklik
    $(this).addClass("btn-clicked");
    setTimeout(() => {
      $(this).removeClass("btn-clicked");
    }, 300);
  });

  // ====== SMOOTH SCROLL ======
  $('a[href^="#"]').on("click", function (e) {
    const target = $(this.getAttribute("href"));
    if (target.length) {
      e.preventDefault();
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 70,
          },
          800
        );
    }
  });

  // ====== LAZY LOAD EFFECT ======
  $(window).on("load", function () {
    $(".card").each(function (index) {
      $(this).css("animation-delay", index * 0.1 + "s");
    });
  });
});

// ====== EFEK BUTTON KLIK (CSS TAMBAHAN) ======
$(document).ready(function () {
  $("<style>")
    .prop("type", "text/css")
    .html(
      `
    .btn-clicked {
      transform: scale(0.95);
      transition: transform 0.1s;
    }
  `
    )
    .appendTo("head");
});
