$(document).ready(function(){
  var grid = 4;
  makeGrid(grid);
  makeSquares(grid);
});


function makeGrid(grid){
  for (i = 0; i < grid * grid; i++  )
  $("#container").append('<div class="grid"></div>');
}

function makeSquares(){
  
}

$(".grid ").on('mouseenter', function(){
  $(this).addclass('squares');
});

function clearGrid(){

}
