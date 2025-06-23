const products = [
    { name: "Bleach", link: "produtos/produto1.html" },
    { name: "Berserk", link: "produtos/produto2.html" },
    { name: "Dragon Ball", link: "produtos/produtos3.html" },
    { name: "Blue Lock", link: "produtos/produtos4.html" },
    { name: "Boku no Hero", link: "produtos/produtos5.html" },
    { name: "One Punch Man", link: "produtos/produtos6.html" },
    { name: "Solo Leveling", link: "produtos/produtos7.html" },
    { name: "One Piece", link: "produtos/produtos8.html" },
    { name: "Jujutsu Kaisen", link: "produtos/produtos9.html" },
    { name: "Demon Slayer", link: "produtos/produtos10.html" },
    { name: "Blue Box", link: "produtos/produto11.html" },
    { name: "The Beginning After The End", link: "produtos/produto12.html" },
    { name: "Dan Da Dan", link: "produtos/produto13.html" },
    { name: "Naruto", link: "produtos/produto 14.html" },
    { name: "Second Life Ranker", link: "produtos/produto 15.html" },

  ];
  
  const searchInput = document.getElementById("search");
  const autocompleteList = document.getElementById("autocomplete-list");
  
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    autocompleteList.innerHTML = ""; 
  
    if (!query) return;
  
    const suggestions = products.filter(product => 
      product.name.toLowerCase().includes(query)
    );
  
    suggestions.forEach(product => {
      const listItem = document.createElement("li");
      listItem.classList.add("autocomplete-suggestion");
  
      const link = document.createElement("a");
      link.href = product.link;
      link.textContent = product.name;
  
      listItem.appendChild(link);
      autocompleteList.appendChild(listItem);
    });
  });
  
  document.addEventListener("click", function (e) {
    if (!searchInput.contains(e.target) && !autocompleteList.contains(e.target)) {
      autocompleteList.innerHTML = ""; 
    }
  });

  function filterByGenre() {

    const genreFilter = document.getElementById('genre-filter').value;
  
    
    const productElements = document.querySelectorAll('.column');
  

    productElements.forEach(product => {
      
      const genres = product.getAttribute('data-genre')?.split(' ') || []; 
  

      if (genreFilter === 'all' || genres.includes(genreFilter)) {
        product.style.display = 'block'; 
      } else {
        product.style.display = 'none'; 
      }
    });
  }
  
  document.getElementById('genre-filter').addEventListener('change', filterByGenre);
  
 
  window.onload = filterByGenre;
  
