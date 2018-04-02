$(function(){ 
    
  // Slider homepage 
  
  function trackLocation(e) {
    var rect = sliderContainer.getBoundingClientRect(),
    position = ((e.pageX - rect.left) / sliderContainer.offsetWidth)*100; // mouse position
 

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
      $('.coder-title').fadeIn('slow');
  
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
  var siteMain = document.getElementById('site-main'); //
  var leftPicture = sliderContainer.getElementsByClassName('left-picture')[0]; //
  var rightPicture = sliderContainer.getElementsByClassName('right-picture')[0]; //
  var designerText = sliderContainer.getElementsByClassName('designer-text')[0];
  var coderText = sliderContainer.getElementsByClassName('coder-text')[0]; //
  var designerTitle = sliderContainer.getElementsByClassName('designer-title')[0];
  var coderTitle = sliderContainer.getElementsByClassName('coder-title')[0];
  sliderContainer.addEventListener( 'click', trackLocation, false);


  siteMain.addEventListener("mousemove", function (eve) {
    eve.stopPropagation ();
 }, true)

  rightPicture.addEventListener('mouseover', function () {
    'use strict';
console.log('Yes, mouseover')
    sliderContainer.removeEventListener( 'mousemove', trackLocation, true);
  });

 leftPicture.addEventListener('mouseout', function () {
    'use strict';
console.log('Yes, mouseover')
    sliderContainer.removeEventListener( 'mousemove', trackLocation, true);
  });

  
  sliderContainer.addEventListener("mouseleave", function(  ) {   
      // --- handle mouseleave event
      sliderContainer.removeEventListener( 'mousemove', trackLocation, true);
      $('.designer-text').fadeOut('slow');
      $('.coder-text').fadeOut('slow');
      $('.right-picture').fadeIn('slow');
      $('.left-picture').fadeIn('slow');
      $('.designer-title').fadeIn('slow');
      $('.coder-title').fadeIn('slow');
  
    }, false);




    // --- Create dynamically 

    var desProjects = document.getElementsByClassName('designer-projects')[0];
    var sectionProjects = document.getElementsByClassName('projects')[0];
    var designButton = document.getElementById('designer-btn');
    var designProjects = document.createElement("div");

    designProjects.innerHTML =     
    ` <div class="designer-projects">
        <div class="single-des-project">
            <div class="image-projects">
              </div>
              <p>Placeholdertext for test</p>
        </div>
        <div class="single-des-project">
            <div class="image-projects">
              </div>
              <p>Placeholdertext for test</p>
        </div>
        <div class="single-des-project">
            <div class="image-projects">
              </div>
              <p>Placeholdertext for test</p>
        </div>
    </div>`;

    function addProjects() {
        sectionProjects.appendChild(designProjects);
    }

    designButton.addEventListener ("click", addProjects);
  
    });