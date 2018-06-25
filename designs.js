// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$(document).ready(() => {
  $('#sizePicker').submit(function makeGrid(grid) {
    $('table tr').remove();
    var rows = $('#inputHeight').val();
    var cols = $('#inputWeight').val();
      for (let i=1; i <=rows; i++) {
        $('table').append('<tr></tr>');
        for (let j=1;j <= cols; j++) {
          $('tr:last').append('<td></td>');
          $('td').attr("class", "cell");
        }
      }
      grid.preventDefault();

      $('.cell').click((event) => {
        var color = $('#colorPicker').val();
        $(event.target).css('background-color', color);
      })


  });
});
