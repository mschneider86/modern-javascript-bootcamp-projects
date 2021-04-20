const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

let links0 = document.querySelectorAll('a');
for (link of links) {
  const linkText = link.innerText.toLowerCase();
  console.log(link);
  if (
    linkText.includes('cabine de descompressão') ||
    linkText.includes('eliminação') ||
    linkText.includes('eliminado')
  ) {
    link.linkText = '';
  }
}
