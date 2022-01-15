let span = document.querySelectorAll('.arrow')
let div = document.querySelectorAll('.blog')
let l = 0

span [1].onclick = () => {
  l++
  for(let i of div) {
    if (l==0) {i.style.left = '0px'}
    if (l==1) {i.style.left = '-200px'}
    if (l==2) {i.style.left = '-400px'}
    if (l==3) {i.style.left = '-650px'}
    if (l>4) {l=4}
  }
}

span [0].onclick = () => {
  l--
  for(let i of div) {
    if (l==0) {i.style.left = '0px'}
    if (l==1) {i.style.left = '-200px'}
    if (l==2) {i.style.left = '-400px'}
    if (l==3) {i.style.left = '-650px'}
    if (l<0) {l=0}
  }
}