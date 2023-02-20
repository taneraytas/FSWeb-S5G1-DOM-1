const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */
const headerNav = document.querySelectorAll("nav a");

// const logoImg = document.getElementById("logo-img");

// const ctaImg = document.getElementById("cta-img");

// logoImg.src = siteContent.images["logo-img"];
// ctaImg.src = siteContent.images["cta-img"];

const docImg = document.querySelectorAll("#logo-img, #cta-img, #middle-img ");

const ctaTextH1 = document.querySelector(".cta-text h1");

const ctaTextButton = document.querySelector(".cta-text button");

const topContH4 = document.querySelectorAll(".top-content .text-content h4");

const mainConts = document.querySelectorAll(
  ".main-content h4, .main-content p"
);

const contactConts = document.querySelectorAll(".contact h4, .contact p ");

const footerElements = document.querySelector("footer a");

headerNav.forEach((node, index) => {
  node.className = "italic";
  node.textContent = siteContent.nav[`nav-item-${index + 1}`];
});

ctaTextH1.textContent = siteContent.cta.h1;
ctaTextButton.textContent = siteContent.cta.button;

docImg.forEach((node, index) => {
  node.src = Object.values(siteContent.images)[index];
});

document.querySelector("h1").textContent = siteContent.cta.h1;
document.querySelector(".cta button").textContent = siteContent.cta.button;

mainConts.forEach((node, index) => {
  node.textContent = Object.values(siteContent["ana-içerik"])[index];
});

contactConts.forEach((node, index) => {
  node.textContent = Object.values(siteContent["iletisim"])[index];
});

footerElements.textContent = siteContent.footer.copyright;
footerElements.className = "bold";
