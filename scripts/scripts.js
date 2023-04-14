// Carousel functions

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".carousel-container i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // pega a largura máxima da rolagem
  // mostra e esconde os icones de próximo e anterior de acordo com a rolagem do carousel
  arrowIcons[0].style.display = carousel.scrollleft == 0 ? "none" : "block";
  arrowIcons[1].style.display = carousel.scrollleft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 10; // pega a largura da primeira imagem e adiciona o valor da largura do margin, 10
    // se o icone clicado for o left(esquerda), reduz a largura com o valor do carousel.scrollLeft se não ele adiciona a largura
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60); // chama showHideIcons após 60ms
  })
});

const autoSlide = () => {
  // se não tiver nenhuma imagem a esquerda para rolar então retorna daqui
  if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;

  positionDiff = Math.abs(positionDiff); // faz com que positionDiff tenha um valor positivo
  let firstImgWidth = firstImg.clientWidth + 10;
  // pega o valor da diferença que é necessária para adicionar ou reduzir para esquerda do carousel para fazer com que a imagem do meio ficar no centro
  let valDifference = firstImgWidth - positionDiff;

  if(carousel.scrollLeft > prevScrollLeft){ // se o usuário rolar para direita
    return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
  }
  // se o usuário rolar para esquerda
  carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
  // atualiza os valores da variáveis globais do evento mouse down
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  // rolando as imagens/carousel para esquerda de acordo com o ponteiro do mouse
  if(!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
}

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");

  if(!isDragging) return;
  isDragging = false;
  autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);


// Accordion functions

const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((item) => {
  const accordionHeaderItem = item.querySelector(".accordion-header");

  accordionHeaderItem.addEventListener("click", () => {
    const accordionContentItem = item.querySelector(".accordion-content");

    const contentActivated = document.querySelector(".active");

    verifyActive(item, accordionContentItem, contentActivated);
  });
});

function verifyActive(item, content, contentActivated) {
  const iconItem = item.querySelector(".accordion-icon");

  const icons = document.querySelectorAll(".accordion-icon");

  icons.forEach((item) => (item.innerHTML = "+"));

  if(contentActivated) {
    contentActivated.style.height = 0;
    contentActivated.classList.remove("active");
  }

  if(content !== contentActivated) {
    iconItem.innerHTML = "-";
    content.classList.add("active");
    content.style.height = content.scrollHeight + 10 + "px";
  }
}