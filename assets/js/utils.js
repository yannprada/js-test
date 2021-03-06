
function get(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.guildwars2.com/v2/" + url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

function selectMe() {
  document.body.addEventListener("click", function(event) {
    if (event.target.classList.contains("js-selectme")) {
      event.target.focus();
      event.target.select();
    }
  });
}