window.addEventListener('mousemove', function(e) {
	var x = (document.documentElement.clientWidth / 2 - e.clientX) / document.documentElement.clientWidth,
		y = (document.documentElement.clientHeight / 2 - e.clientY) / document.documentElement.clientHeight;
  
  var elem = $('.time'),
      rotateY = x * 50,
      rotateX = y * 50,
      rotateZ = x * y * 30;
  
  elem.css('transform', 'rotateY(' + rotateY + 'deg)' + 'rotateX(' + rotateX + 'deg)' + 'rotateZ(' + rotateZ + 'deg)'); 
  
  // elem.css('transform', 'rotate3d(' + y + ', ' + x + ', ' + (x * y) + ',' + 20 + 'deg' + ')');
});  

;(function () {
    var nn = document.querySelectorAll('.time-grid__item');
    setInterval(function() {
        (new Date()).toLocaleString("ru", {hour: 'numeric', minute: 'numeric', second: 'numeric'}).replace(/:/g, '').split('').forEach(function(e, i){
            
        	for ( var j=0; j<=9; j++)
        	{
        		nn[i].classList.remove('n' + j);
        	}
            nn[i].classList.add( 'n' + e);
        });
    }, 1000);
})();