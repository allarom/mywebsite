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
    var designerBtn = document.getElementById('designer-btn');
    var coderBtn = document.getElementById('coder-btn');
    
    var designProjects = document.createElement("div");

    designProjects.innerHTML =     
    ` <div class="designer-projects">
        <div class="single-des-project">
            <div class="image-projects">
              <img src="./images/javascript-quiz.jpg" alt="javascript-quiz-project" class="image-projects">
             </div>
             <p>Spiel über JavaScript</p>
             <p>- 15 Fragen</p>
             <p>- Vanilla JS</p>
             <p>- DOM Manipulation</p>
        </div>
        <div class="single-des-project">
            <div class="image-projects">
            <img src="./images/my-bars.jpg" alt="my-bars" class="image-projects">
              </div>
              <p>Finde die Bar</p>
              <p>- Node, Express + express-ejs-layouts</p>
              <p>- MongoDB, Mongoose</p>
              <p>- Authorization, Authentication</p>
              <p>- Google maps</p>
        </div>
        <div class="single-des-project">
            <div class="image-projects">
               <img src="./images/art-blog.jpg" alt="art-blog" class="image-projects">
              </div>
              <p>Blog über Kunst</p>
              <p>- Node, Express</p>
              <p>- MongoDB, Mongoose</p>
              <p>- Angular</p>
              <p>- Authorization, Authentication</p>
        </div>
    </div>`;
    var graph = document.getElementsByClassName('skills-code')[0];
    var codeSkills = document.createElement("div");
    codeSkills.setAttribute("class", "graph");

    codeSkills.innerHTML =   
    `            <div class="column-left">
    <div class="bar bar1">HTML, CSS</div>
    <div class="bar bar2">Vanilla JavaScript</div>
    <div class="bar bar3">jQuery</div>
 </div>
  <div class="column-right">
   <div class="bar bar4">Angular</div>
   <div class="bar bar5">TypeScript</div>
   <div class="bar bar6">Bootstrap</div>
  </div>`
    
    var designSkills = document.createElement("div");
    designSkills.setAttribute("class", "graph");
    designSkills.innerHTML =   
      `           <div class="column-left">
      <div class="bar bar1">Foto</div>
      <div class="bar bar2">Foto</div>
      <div class="bar bar3">Foto</div>
   </div>
    <div class="column-right">
     <div class="bar bar4">UI, UX Konzepte</div>
     <div class="bar bar5">Photoshop</div>
     <div class="bar bar6">Illustrator</div>
    </div>`

    function addDesignRef() {
        $('.graph').remove();
        graph.appendChild(designSkills);
    }
    designerBtn.addEventListener ("click", addDesignRef);
   
    function addCodeRef() {
      sectionProjects.appendChild(designProjects);
      $('.graph').remove();
      graph.appendChild(codeSkills);
    }
    coderBtn.addEventListener ("click", addCodeRef);
  
    });