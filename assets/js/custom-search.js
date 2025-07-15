// Enhanced search functionality for Synthetic Health Data Hub

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lunr search with custom configuration
  var idx;
  var searchData;
  
  // Fetch search data
  fetch('/assets/js/search-data.json')
    .then(response => response.json())
    .then(data => {
      searchData = data;
      
      // Build Lunr index
      idx = lunr(function() {
        this.ref('id');
        this.field('title', { boost: 10 });
        this.field('content');
        this.field('category', { boost: 5 });
        this.field('parent', { boost: 3 });
        this.field('tags', { boost: 7 });
        
        // Add documents to index
        Object.keys(data).forEach(key => {
          this.add({
            id: key,
            title: data[key].title,
            content: data[key].content,
            category: data[key].category,
            parent: data[key].parent,
            tags: data[key].tags
          });
        });
      });
      
      // Enable search after index is built
      enableSearch();
    });
  
  function enableSearch() {
    var searchInput = document.getElementById('search-input');
    var searchResults = document.getElementById('search-results');
    
    if (!searchInput) return;
    
    // Add enhanced search UI
    searchInput.addEventListener('input', function(e) {
      var query = e.target.value;
      
      if (query.length < 2) {
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
        return;
      }
      
      // Perform search
      var results = idx.search(query + '*');
      
      // Limit results
      results = results.slice(0, 10);
      
      // Display results
      displayResults(results, query);
    });
    
    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.search')) {
        searchResults.style.display = 'none';
      }
    });
  }
  
  function displayResults(results, query) {
    var searchResults = document.getElementById('search-results');
    
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
      searchResults.style.display = 'block';
      return;
    }
    
    var html = '<div class="search-results">';
    
    results.forEach(function(result) {
      var item = searchData[result.ref];
      var excerpt = getExcerpt(item.content, query);
      
      html += '<div class="search-result">';
      html += '<div class="search-result-title">';
      html += '<a href="' + item.url + '">' + highlightQuery(item.title, query) + '</a>';
      html += '</div>';
      
      if (item.parent) {
        html += '<div class="search-result-meta">' + item.parent;
        if (item.category) {
          html += ' › ' + formatCategory(item.category);
        }
        html += '</div>';
      }
      
      html += '<div class="search-result-excerpt">' + highlightQuery(excerpt, query) + '</div>';
      html += '</div>';
    });
    
    html += '</div>';
    searchResults.innerHTML = html;
    searchResults.style.display = 'block';
  }
  
  function getExcerpt(content, query) {
    var queryWords = query.toLowerCase().split(' ');
    var contentLower = content.toLowerCase();
    var bestIndex = -1;
    var bestScore = -1;
    
    // Find best matching position
    queryWords.forEach(function(word) {
      var index = contentLower.indexOf(word);
      if (index > -1) {
        var score = word.length;
        if (score > bestScore) {
          bestScore = score;
          bestIndex = index;
        }
      }
    });
    
    if (bestIndex === -1) {
      return content.substring(0, 150) + '...';
    }
    
    // Extract excerpt around match
    var start = Math.max(0, bestIndex - 50);
    var end = Math.min(content.length, bestIndex + 100);
    
    var excerpt = content.substring(start, end);
    
    if (start > 0) excerpt = '...' + excerpt;
    if (end < content.length) excerpt = excerpt + '...';
    
    return excerpt;
  }
  
  function highlightQuery(text, query) {
    var queryWords = query.split(' ').filter(w => w.length > 0);
    var highlighted = text;
    
    queryWords.forEach(function(word) {
      var regex = new RegExp('(' + escapeRegex(word) + ')', 'gi');
      highlighted = highlighted.replace(regex, '<mark>$1</mark>');
    });
    
    return highlighted;
  }
  
  function formatCategory(category) {
    return category.charAt(0).toUpperCase() + category.slice(1).replace('_', ' ');
  }
  
  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  // Advanced search filters
  window.filterSearch = function(category) {
    var searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.value = 'category:' + category + ' ';
      searchInput.focus();
      searchInput.dispatchEvent(new Event('input'));
    }
  };
});