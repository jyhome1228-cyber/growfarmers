const FARMERS_BOOK_THUMBNAILS = [
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/ee16c71b911fb.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/8c48a098e197e.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/67d4e213bcf0b.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/42172a7130186.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/7d3dc79f8cac9.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/65c4a830bf7aa.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/31c53d72f1884.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/fa1f79f46ebe4.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/e2b6ec0af90f0.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/9274bf2bfe9b3.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/5c54d2064b488.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/61e09b5805478.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/e154f2a28c7ee.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/12d651b23d754.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/d331bf8778752.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/f2612d6ffeae4.jpg"
];

const FARMERS_BOOK_READER_IMAGES = [
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/1a78c86c8e9ef.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/79828ce6ab0f8.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/1f4c75d8b1419.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/6a9f36589576d.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/a76a0137694ed.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/2f77230f9f5d1.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/e05af28555a18.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/fc2672e9dea8f.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/1ed53be5d3fde.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/9b3d19da62975.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/4b3a16095c51c.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/0d43445b27513.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/3d069026bd731.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/239ac9ad25447.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/495371e749abe.jpg",
  "https://cdn.imweb.me/upload/S202410251a294b3f442b0/be65cc12a21a8.jpg"
];

FARMERS_BOOK_THUMBNAILS.forEach((src, index) => {
  const card = document.querySelector(`.book-card[data-issue="${String(index + 1).padStart(2, "0")}"]`);
  const img = card?.querySelector(".book-cover img");
  if (img) img.src = src;
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

const farmersBookVolume2Script = document.createElement("script");
farmersBookVolume2Script.src = "./book-volume2.js";
farmersBookVolume2Script.addEventListener("load", () => {
  const farmersBookVolume2ExpandedScript = document.createElement("script");
  farmersBookVolume2ExpandedScript.src = "./book-volume2-expanded.js";
  document.body.appendChild(farmersBookVolume2ExpandedScript);
});
document.body.appendChild(farmersBookVolume2Script);
