const FARMERS_BOOK_THUMBNAILS = [
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/ab19944874373.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/13205a0b7706d.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/c977af46acc0b.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/2f812920fed26.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/3128b39a170d6.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/19013dfac1965.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/ac9c85f6b97fc.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/a74aa4fda2853.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/050cba8ccee7f.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/5ff0be2dc6abe.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/1961df00ab3e7.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/ed99b58419b1a.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/3211e6126ddca.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/c3bdb43ba61ba.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/35cf7b8093cb9.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/5760b6a516211.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/11a8cc34b34e9.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/74eff0db1ff21.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/9c38930a8e580.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/d7aec85af2fa9.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/95f7c96013304.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/6d6ec7777c99d.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/c00395a3a192b.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/44a025f2276d8.jpg"
];

const FARMERS_BOOK_READER_IMAGES = [
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/b5dcb544fcce7.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/4ab29fb035b11.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/90062296327e2.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/89b52b4f594ee.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/666db7b7794f5.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/8a4a2abf81206.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/168f5f9f6efc7.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/e6050c590fa82.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/954fe29cadee3.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/eca2c9c9e124a.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/a9bb81caac4fa.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/9ec96439e44fb.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/134b74542a03a.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/145026280643f.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/43f2150c96eb9.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/bd55bbc8c6b02.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/62b70dbed0687.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/4677bc2a3f173.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/f19075782de07.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/cd5686c2aa871.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/d9e8fa30274b9.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/4cb914aa59fcf.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/06e03c5f6b2ab.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/6ce76509fab20.jpg"
];

function applyFarmersBookImages() {
  FARMERS_BOOK_THUMBNAILS.forEach((src, index) => {
    const issue = String(index + 1).padStart(2, "0");
    const card = document.querySelector(`.book-card[data-issue="${issue}"]`);
    const img = card?.querySelector(".book-cover img");
    if (img) {
      img.src = src;
      img.decoding = "async";
    }
    card?.querySelectorAll(".book-number").forEach((el) => el.remove());
  });

  FARMERS_BOOK_READER_IMAGES.forEach((src, index) => {
    const issue = String(index + 1).padStart(2, "0");
    if (typeof FARMERS_BOOK !== "undefined" && FARMERS_BOOK[issue]) {
      FARMERS_BOOK[issue].image = src;
    }
  });

  const currentIssue = window.location.hash.match(/^#issue-(\d{2})$/)?.[1];
  if (currentIssue && typeof FARMERS_BOOK !== "undefined" && FARMERS_BOOK[currentIssue]) {
    const readerImage = document.getElementById("readerImage");
    if (readerImage) readerImage.src = FARMERS_BOOK[currentIssue].image;
  }
}

applyFarmersBookImages();

const farmersBookVolume2Script = document.createElement("script");
farmersBookVolume2Script.src = "./book-volume2.js";
farmersBookVolume2Script.addEventListener("load", () => {
  applyFarmersBookImages();

  const farmersBookVolume2ExpandedScript = document.createElement("script");
  farmersBookVolume2ExpandedScript.src = "./book-volume2-expanded.js";
  document.body.appendChild(farmersBookVolume2ExpandedScript);
});
document.body.appendChild(farmersBookVolume2Script);
