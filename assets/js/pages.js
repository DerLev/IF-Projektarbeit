document.getElementById('page-1-button').onclick = function(e) {
  e.preventDefault();
  switchPage('page-1');
}

document.getElementById('page-2-button').onclick = function(e) {
  e.preventDefault();
  switchPage('page-2');
}

document.getElementById('page-3-button').onclick = function(e) {
  e.preventDefault();
  switchPage('page-3');
}

document.getElementById('page-4-button').onclick = function(e) {
  e.preventDefault();
  switchPage('page-4');
}

document.getElementById('page-index-button').onclick = function(e) {
  e.preventDefault();
  switchPage('index');
}

function switchPage(page) {
  const index = document.getElementById('page-index');
  const page_1 = document.getElementById('page-1');
  const page_2 = document.getElementById('page-2');
  const page_3 = document.getElementById('page-3');
  const page_4 = document.getElementById('page-4');

  index.classList.add('hidden');
  page_1.classList.add('hidden');
  page_2.classList.add('hidden');
  page_3.classList.add('hidden');
  page_4.classList.add('hidden');

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
  }
}