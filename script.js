gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 1.3,
  effects: true,
});

// Preloader
const tl = gsap.timeline({
  onComplete(){
    animarPagina()
    gsap.to("#preloader", {
      opacity: 0,
      onComplete(){
        gsap.to("#preloader",{
          display: "none",
        })
      }
    })
  }
});

tl.to("#preloader path",{
  duration: 1.1,
  strokeDashoffset: 0,
})
tl.to("#preloader path",{
  duration: .5,
  fill: "rgb(168, 19, 19)",
  strokeDashoffset: 0,
})

// Animar página
function animarPagina(){
  // Animações Seção 1 - monstro e tropa
gsap.from(".Secao1", {
  opacity: 0,
  duration: 1,
});

gsap.from("picture:nth-child(2)", {
  y: 60,
  duration: 1,
});
gsap.from("picture:nth-child(1)", {
  y: -60,
  duration: 1,
});

// Animações letras

// Selecione todos os elementos da sua página que tem a classe class="textoSplit".
const grupoTextoSplit = document.querySelectorAll(".textoSplit");

// Animar cada elemento do grupo -> forEach
grupoTextoSplit.forEach((textoUnicoSplit) => {
  // Anime de forma independente
  const split = SplitText.create(textoUnicoSplit, {
    type: "lines, words, chars",
    mask: "lines",
  });

  gsap.from(split.chars, {
    y: 60,
    duration: 0.3,
    stagger: 0.04,
    scrollTrigger: {
      trigger: textoUnicoSplit,
      start: "0% 87%",
    },
  });
});

// Animações Seção 2/Cards - monstro e tropa
gsap.from(".card", {
  opacity: 0,
  filter: "blur(10px)",
  stagger: 0.3,

  scrollTrigger: {
    trigger: ".cards",
    start: "0% 85%",
    end: "100% 70%",
    scrub: true,
  },
});

// Animações Seção 4/Obrigado
gsap.from(".Secao4 ul li", {
  opacity: 0,
  x: 40,
  stagger: 0.03,
  filter: "blur(10px)",

  scrollTrigger: {
    start: "0% 85%",
    end: "100% 70%",
    trigger: ".Secao4 ul",
    scrub: 2,
  },
});
// Animações footer

gsap.from("footer", {
  y: "-20%",
  // tirando o bug do footer
  immediateRender: false,

  scrollTrigger: {
    trigger: "footer",
    scrub: true,
    // tirando o bug do footer
    invalidateOnRefresh: true,
    end: "100% 100%",
  },
});
}