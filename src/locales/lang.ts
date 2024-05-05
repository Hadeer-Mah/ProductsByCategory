export function checkFixLang(lang: string) {
    if (lang === "en") {
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
      document.getElementsByTagName("body")[0].setAttribute("dir", "ltr");
    }
  
    if (lang === "ar") {
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
      document.getElementsByTagName("body")[0].setAttribute("dir", "rtl");
    }
  }
  
  export function currentLang() {
    return document.getElementsByTagName("html")[0].getAttribute("dir") === "ltr"
      ? "en"
      : "ar";
  }
  
