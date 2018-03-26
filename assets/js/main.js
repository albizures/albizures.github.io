(function addHeadingLinks(){
  var post = document.querySelector('.post-container')
  var headings = article.querySelectorAll('h2, h3, h4, h5, h6');
  headings.forEach(function(heading){
    if(heading.id){
      var a = document.createElement('a');
      a.classList.add('anchor');
      a.innerHTML = '#';
      a.href = '#'+heading.id;
      heading.appendChild(a);
    }
  });
})();