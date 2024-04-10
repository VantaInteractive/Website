jQuery(function($) {
  var idx;
  var dataPromise = $.getJSON('/search_data.json');
  
  dataPromise.then(function(loaded_data) {
    var idCounter = 0;
    var dataArray = [];

    $.each(loaded_data, function(url, value) {
      // Check if the URL contains any of the excluded folders
      if (!url.includes('_layouts') && !url.includes('_posts') && !url.includes('_includes')) {
        var id = 'doc_' + idCounter++;
        value.id = id;
        dataArray.push(value);
      }
    });

    idx = lunr(function () {
      this.ref('id');
      this.field('title');
      this.field('category');
      this.field('description');
      this.field('content', { boost: 10 });

      dataArray.forEach(function(data) {
        this.add(data);
      }, this);
    });
  });

  $("#site_search").submit(function(event){
    event.preventDefault();
    var query = $("#search-box").val();

    dataPromise.then(function(loaded_data) {
      var dataArray = [];

      $.each(loaded_data, function(url, value) {
        if (!url.includes('_layouts') && !url.includes('_posts') && !url.includes('_includes')) {
          dataArray.push(value);
        }
      });

      var results = idx.search(query);
      display_search_results(results, dataArray);
    });
  });

  function display_search_results(results, dataArray) {
    var $search_results = $("#search-results");

    if (results.length) {
      $search_results.empty();

      results.forEach(function(result) {
        var item = dataArray.find(function(data) {
          return data.id === result.ref;
        });

        if (item) {
          var appendString = '<div class="searchresult"><div class="article-left"><div class="flex row"><h1 class="article-title post-content lightgray rem2 monospace semibold">' + item.title + '</h1><p class="' + item.indicator_type + ' ' + item.indicator_class + ' notice-text vantagray monospace semibold">' + item.indicator_text + '</p></div><p class="article-desc post-content lightgray rem1 monospace medium">' + item.description + '</p></div><div class="article-right from-the-right"><div class="article-button-container"><a class="article-button-dark outfit rem1" href="' + item.url + '">Read More</a></div></div></div>';
          $search_results.append(appendString);
        } else {
          console.error("Item not found for reference:", result.ref);
        }
      });
    } else {
      $search_results.html('<li>No results found.<br/>Please check spelling, spacing, yada...</li>');
    }
  }
});
