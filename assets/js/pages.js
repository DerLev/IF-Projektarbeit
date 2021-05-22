// ALLE LINKS ZU PAGE 1
const page_1_links = document.getElementsByClassName('link-to-1');
var i_1;
// FÜR JEDEN LINK AUSFÜHREN
for(i_1 = 0; i_1 < page_1_links.length; i_1++) {
  page_1_links[i_1].onclick = function(e) {
    // LINK DEAKTIVIEREN
    e.preventDefault();
    // FUNKTION AUSFÜHREN
    switchPage('page-1');
  }
}

// ALLE LINKS ZU PAGE 2
const page_2_links = document.getElementsByClassName('link-to-2');
var i_2;
for(i_2 = 0; i_2 < page_2_links.length; i_2++) {
  page_2_links[i_2].onclick = function(e) {
    e.preventDefault();
    switchPage('page-2');
  }
}

// ALLE LINKS ZU PAGE 3
const page_3_links = document.getElementsByClassName('link-to-3');
var i_3;
for(i_3 = 0; i_3 < page_3_links.length; i_3++) {
  page_3_links[i_3].onclick = function(e) {
    e.preventDefault();
    switchPage('page-3');
  }
}

// ALLE LINKS ZU PAGE 4
const page_4_links = document.getElementsByClassName('link-to-4');
var i_4;
for(i_4 = 0; i_4 < page_4_links.length; i_4++) {
  page_4_links[i_4].onclick = function(e) {
    e.preventDefault();
    switchPage('page-4');
  }
}

// ALLE LINKS ZU INDEX
const index_links = document.getElementsByClassName('link-to-index');
var i_i;
for(i_i = 0; i_i < index_links.length; i_i++) {
  index_links[i_i].onclick = function(e) {
    e.preventDefault();
    switchPage('index');
  }
}

// ALLE LINKS ZU SOURCES
const sources_links = document.getElementsByClassName('link-to-sources');
var i_s;
for(i_s = 0; i_s < sources_links.length; i_s++) {
  sources_links[i_s].onclick = function(e) {
    e.preventDefault();
    switchPage('sources');
  }
}


// ALLE LINKS ZU TOOLS
const tools_links = document.getElementsByClassName('link-to-tools');
var i_t;
for(i_t = 0; i_t < tools_links.length; i_t++) {
  tools_links[i_t].onclick = function(e) {
    e.preventDefault();
    switchPage('tools');
  }
}

// ALLE LINKS ZU SITEMAP
const sitemap_links = document.getElementsByClassName('link-to-sitemap');
var i_sm;
for(i_sm = 0; i_sm < sitemap_links.length; i_sm++) {
  sitemap_links[i_sm].onclick = function(e) {
    e.preventDefault();
    switchPage('sitemap');
  }
}

// SEITE WECHSELN
function switchPage(page) {
  const index = document.getElementById('page-index');
  const page_1 = document.getElementById('page-1');
  const page_2 = document.getElementById('page-2');
  const page_3 = document.getElementById('page-3');
  const page_4 = document.getElementById('page-4');
  const page_sources = document.getElementById('page-sources');
  const page_tools = document.getElementById('page-tools');
  const page_sitemap = document.getElementById('page-sitemap');

  const historyState = null

  // ALLEN SEITEN "HIDDEN" HINZUFÜGEN
  index.classList.add('hidden');
  page_1.classList.add('hidden');
  page_2.classList.add('hidden');
  page_3.classList.add('hidden');
  page_4.classList.add('hidden');
  page_sources.classList.add('hidden');
  page_tools.classList.add('hidden');
  page_sitemap.classList.add('hidden');

  // NUR DER GEWÜNSCHTEN SEITE "HIDDEN" ENTFERNEN
  if(page == 'index') {
    index.classList.remove('hidden');
  } else if (page == 'page-1') {
    page_1.classList.remove('hidden');
  } else if (page == 'page-2') {
    page_2.classList.remove('hidden');
  } else if (page == 'page-3') {
    page_3.classList.remove('hidden');
  } else if (page == 'page-4') {
    page_4.classList.remove('hidden');
  } else if (page == 'sources') {
    page_sources.classList.remove('hidden');
  } else if (page == 'tools') {
    page_tools.classList.remove('hidden');
  } else if (page == 'sitemap') {
    page_sitemap.classList.remove('hidden');
  }

  // ADRESSLEISTE
  history.replaceState(historyState, '', page + '.html');
}

// ALLE LINKS MIT "no-link" DEAKTIVIEREN
const no_links = document.getElementsByClassName('no-link');
var i_n;
for(i_n = 0; i_n < no_links.length; i_n++) {
  no_links[i_n].onclick = function(e) {
    e.preventDefault();
  }
}