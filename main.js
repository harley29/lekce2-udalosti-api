// tady je místo pro náš program

let nadpis=document.querySelector("h1");
nadpis.classList.add("csstrida")

let ztucni=document.querySelector(".odstavec");

function priNajeti(){
    ztucni.classList.remove(fontWeight="bold")
}

let zmenBarvu=document.querySelector(".odstavec")
zmenBarvu.classList.remove("red")

let zvuk;
zvuk=document.querySelector("#zvuk");
  zvuk.play ();
  zvuk.volume=0;
  zvuk.volume=0.5;
  zvuk.volume=1;