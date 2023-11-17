const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const element = document.getElementById('text');
  setTimeout(()=> {
    element.textContent = 'ボタンをクリックしました';
  },2000);
});