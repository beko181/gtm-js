document.querySelectorAll('[class="uoi-link"]').forEach(function (el) {
  el.addEventListener("click", function () {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: "hesabım_events",
      event_category: "Hesabım Sayfası",
      event_action: "Siparişlerim Sayfası", 
      event_label: "Sipariş İnceleme Tıklama", 
      event_text: "",
    });
  });
});
  document.querySelectorAll('[class="uod-cta"] a').forEach(function (el) {
  el.addEventListener("click", function () {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: "hesabım_events",
      event_category: "Hesabım Sayfası",
      event_action: "Siparişlerim Sayfası", 
      event_label: "Sipariş Destek Al Tıklama", 
    });
  });
});
  document.querySelectorAll('[id="addToCartButton"]').forEach(function (el) {
  el.addEventListener("click", function () {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: "hesabım_events",
      event_category: "Hesabım Sayfası",
      event_action: "Favorilerim Sayfası", 
      event_label: "Favoriden Ürün Sepete Ekleme", 
      product_id: this.getAttribute('data-product-id').trim(),
      product_name: this.getAttribute('data-product-name').trim(),
    });
  });
});
  document.querySelectorAll('[class="ulr-remove  delete-item"]').forEach(function (el) {
  el.addEventListener("click", function () {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: "hesabım_events",
      event_category: "Hesabım Sayfası",
      event_action: "Favorilerim Sayfası", 
      event_label: "Favoriden Ürün Silme", 
      product_id: this.closest('[class="uld-rows"]').querySelector('[id="addToCartButton"]').getAttribute('data-product-id').trim(),
      product_name: this.closest('[class="uld-rows"]').querySelector('[id="addToCartButton"]').getAttribute('data-product-name').trim(),
    });
  });
});
  
