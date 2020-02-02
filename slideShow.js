let gallery = $(".gallery__list ul li");
let galleryList = $(".gallery__img ul li");

gallery.on("click", function(e) {
  let galleryID = e.target.id;

  for (let i = 0; i < gallery.length; i++) {
    gallery[i].classList.remove("gallery__list-active");
  }

  e.target.classList.add("gallery__list-active");

  for (let i = 0; i < galleryList.length; i++) {
    galleryList[i].classList.remove("gallery__img-show");
  }

  switch (galleryID) {
    case "gallery":
      {
        galleryList[0].classList.add("gallery__img-show");
      }
      break;
    case "live1":
      galleryList[1].classList.add("gallery__img-show");
      break;
    case "live2":
      galleryList[2].classList.add("gallery__img-show");
      break;
    case "live3":
      galleryList[3].classList.add("gallery__img-show");
      break;

    default:
      galleryList[0].classList.add("gallery__img-show");
      break;
  }
});
