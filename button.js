var searchBox = document.getElementById('search-query');

function insertBefore(el, referenceNode) {
  referenceNode.parentNode.insertBefore(el, referenceNode);
}

var advSearchButton = document.createElement('a');
advSearchButton.setAttribute('href', 'https://twitter.com/search-advanced?lang=en');
advSearchButton.classList.add('Icon', 'Icon--medium', 'Icon--search', 'nav-search');
advSearchButton.setAttribute('style', `position: absolute; left: -2rem; top: .35rem; text-decoration: none !important`);

insertBefore(advSearchButton, searchBox);