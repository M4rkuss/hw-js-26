//1)
let tds = document.getElementsByTagName('td')
for (let i = 0; i < tds.length; i++) {
  tds[i].addEventListener('mouseover', function () {
    tds[i].style.background = '#ffa983'
  })
  tds[i].addEventListener('mouseout', function () {
    tds[i].style.background = 'inherit'
  })
}


//2)
window.addEventListener('scroll',function () {
  if(window.pageYOffset > 450) {
    document.getElementById('goTop').classList.add('active');
  } else document.getElementById('goTop').classList.remove('active');
})

document.getElementById('goTop').addEventListener('click', goTop)

function goTop () {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -50);
    setTimeout(goTop, 0);
  }
}