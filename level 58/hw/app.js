(() => {
  const images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1025/600/400",
    "https://picsum.photos/id/1035/600/400",
    "https://picsum.photos/id/1045/600/400"
  ];

  const imgElement = document.getElementById("carouselImage");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  let currentIndex = 0;

  // საწყისი სურათის ჩვენება
  renderImage();

  // Next ღილაკზე დაჭერისას გადავდივართ შემდეგ სურათზე
  nextBtn.addEventListener("click", () => {
    currentIndex++;

    // თუ ინდექსი გასცდა მასივის ზომას, ვბრუნდებით დასაწყისში
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }

    renderImage();
  });

  // Prev ღილაკზე დაჭერისას ვბრუნდებით წინა სურათზე
  prevBtn.addEventListener("click", () => {
    currentIndex--;

    // თუ ინდექსი გახდა უარყოფითი, გადავდივართ ბოლო სურათზე
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }

    renderImage();
  });

  // სურათის განახლება მიმდინარე ინდექსის მიხედვით
  function renderImage() {
    imgElement.src = images[currentIndex];
  }
})();
