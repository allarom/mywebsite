$(function(){ 
    
  // Slider homepage 
  
  function trackLocation(e) {
    var rect = sliderContainer.getBoundingClientRect(),
    position = ((e.pageX - rect.left) / sliderContainer.offsetWidth)*100; // mouse position
    console.log(position)


    // --- track mouse position
    
    if (position > 50) {
      // --- slider / displaying and hiding elements (right side)
      $('.left-picture').fadeOut('slow');
      $('.coder-text').fadeOut('slow');
      $('.designer-text').fadeIn('slow');
      $('.right-picture').fadeIn('slow');
      coderText.style.visibility = 'hidden';
      rightPicture.style.visibility = 'visible';
      $('.designer-title').fadeOut('slow');
  
    } else if  ( position <= 50) {
       // --- slider / displaying and hiding elements (left side)
      $('.right-picture').fadeOut('slow');
      $('.designer-text').fadeOut('slow');
      $('.left-picture').fadeIn('slow');
      $('.coder-text').fadeIn('slow');
      $('.designer-title').fadeIn('slow');
      $('.coder-title').fadeOut('slow');
      coderText.style.visibility = 'visible';
      leftPicture.style.visibility = 'visible';
   
      }
  }
  
  var sliderContainer = document.getElementById('coder-designer-slider'); //
  var leftPicture = sliderContainer.getElementsByClassName('left-picture')[0]; //
  var rightPicture = sliderContainer.getElementsByClassName('right-picture')[0]; //
  var designerText = sliderContainer.getElementsByClassName('designer-text')[0];
  var coderText = sliderContainer.getElementsByClassName('coder-text')[0]; //
  var designerTitle = sliderContainer.getElementsByClassName('designer-title')[0];
  var coderTitle = sliderContainer.getElementsByClassName('coder-title')[0];
  sliderContainer.addEventListener( 'mousemove', trackLocation, false);
  
  sliderContainer.addEventListener("mouseleave", function(  ) {   
      // highlight the mouseout target
  
      $('.designer-text').fadeOut('slow');
      $('.coder-text').fadeOut('slow');
      $('.right-picture').fadeIn('slow');
      $('.left-picture').fadeIn('slow');
      $('.designer-title').fadeIn('slow');
      $('.coder-title').fadeIn('slow');
  
    }, false);
  
    });