export const loadPixelatedImage = () => {
  let placeholder = document.querySelector(".placeholder"),
    small = placeholder.querySelector(".img-small");

  // 1: load small image and show it
  let img = new Image();
  img.src = small.src;
  img.onload = function () {
    small.classList.add("loaded");
  };

  // 2: load large image
  let imgLarge = new Image();
  imgLarge.src = placeholder.dataset.large;
  imgLarge.onload = function () {
    imgLarge.classList.add("loaded", "absolute", "inset-0", "w-full", "h-full", "max-h-full");
  };
  placeholder.appendChild(imgLarge);
};
