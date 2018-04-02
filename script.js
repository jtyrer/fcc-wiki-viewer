$(document).ready(function(){

$('#btnSearch').click(function(){

    var search = document.getElementById('searchTerm').value;
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+search+"&format=json&callback=?";

    $.ajax({
      type: 'GET',
      url: url,
      async:false, // This statement needs to complete before next statement can be called
      dataType: 'json',
      success: function(data){
        $('#result').html(''); // Clear the previous results
        for (var i = 0; i < data[1].length; i++){
          var title = data[1][i];
          var summary = data[2][i];
          var link = data[3][i];
          var listItem = `<a href="${link}">
<div class="resultWrapper">
    <p class="resultTitle">${title}</p>
    <p class="resultSummary">${summary}</p>
</div>
</a>`;

          $('#result').append(listItem);
        }
      },
      error: function(error){
        alert('error');
      }

    }); // End of ajax function

 }); // End of click function
  }); // End of doc ready function
