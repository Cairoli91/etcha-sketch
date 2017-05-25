$(document).ready(function(){
  var grid = 16;
  makeGrid(grid);
  makeSquares(grid);
});


function makeGrid(grid){
  for (i = 0; i < grid * grid; i++  )
  $("#container").append('<div class="grid"></div>');
}

function makeSquares(grid){
 var  square=475/(grid*1.1);
  $('.grid').css({
  "width":square+"px",
  "height":square+"px",
  "border-width":square*0.05+"px",
  })
  $('.grid').on('mouseenter',function(){
    $(this).addClass('squares');
  });
};



function gridClear(){
  $('.grid').remove();
  var grid = +prompt("How many squares per side would you like the grid?", 16);
  makeGrid(grid);
  makeSquares(grid);
};
