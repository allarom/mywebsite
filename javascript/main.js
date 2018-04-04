$(function(){ 

  // slider homepage 
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
    var coderText = sliderContainer.getElementsByClassName('coder-text')[0]; //


    // --- slider pictures according to mouse position 
    sliderContainer.addEventListener( 'click', trackLocation, false);

    // --- stop slider Eventlisteners
    siteMain.addEventListener("mousemove", function (eve) {
      eve.stopPropagation ();
   }, true)

    // --- slider mouseleave event 
    sliderContainer.addEventListener("mouseleave", function(  ) {   
        $('.designer-text').fadeOut('slow');
        $('.coder-text').fadeOut('slow');
        $('.right-picture').fadeIn('slow');
        $('.left-picture').fadeIn('slow');
        $('.designer-title').fadeIn('slow');
        $('.coder-title').fadeIn('slow');
      }, false);

    // --- projects 

    // --- design

    // --- create about me text (design)
    var aboutCont = document.getElementsByClassName('about-container')[0];
    var designAbout = document.createElement("div");
    designAbout.setAttribute("class", "about-me");

    designAbout.innerHTML =   
      `<h2>Über mich</h2> 
       <p>Design Lernbereit, motivert, neugierig. Es liegt mir am Herzen Dinge zu erschaffen.</p>
      `

    // --- create new graph bar (design)
    var designSkills = document.createElement("div");
    designSkills.setAttribute("class", "graph");

    designSkills.innerHTML =   
      `<div class="column-left">
          <div class="bar bar1">Foto</div>
          <div class="bar bar2">Foto</div>
          <div class="bar bar3">Foto</div>
      </div>
       <div class="column-right">
         <div class="bar bar4">UI, UX Konzepte</div>
         <div class="bar bar5">Photoshop</div>
         <div class="bar bar6">Illustrator</div>
      </div>`
    

    var projects = document.getElementsByClassName('projects')[0];
    var sectionProjects = document.getElementsByClassName('projects-container')[0];

    var designProjects = document.createElement("div");
    designProjects.setAttribute("class", "projects");

    designProjects.innerHTML =     
    ` 
        <div class="single-des-project">
            <div class="image-projects">
              <img src="./images/javascript-quiz.jpg" alt="javascript-quiz-project" class="image-projects">
             </div>
             <p>Design Spiel über JavaScript</p>
             <p>- 15 Fragen</p>
             <p>- Vanilla JS</p>
             <p>- DOM Manipulation</p>
        </div>
        <div class="single-des-project">
            <div class="image-projects">
            <img src="./images/my-bars.jpg" alt="my-bars" class="image-projects">
              </div>
              <p>Design Finde die Bar</p>
              <p>- Node, Express + express-ejs-layouts</p>
              <p>- MongoDB, Mongoose</p>
              <p>- Authorization, Authentication</p>
              <p>- Google maps</p>
        </div>
        <div class="single-des-project">
            <div class="image-projects">
               <img src="./images/art-blog.jpg" alt="art-blog" class="image-projects">
              </div>
              <p>Design Blog über Kunst</p>
              <p>- Node, Express</p>
              <p>- MongoDB, Mongoose</p>
              <p>- Angular</p>
              <p>- Authorization, Authentication</p>
        </div>`;

        
    // --- add design references
    var designerBtn = document.getElementById('designer-btn');
    function addDesignRef() {
        $('.about-me').remove();
        $('.graph').remove();
        $('.projects').remove();
        aboutCont.appendChild(designAbout);
        skills.appendChild(designSkills);
        sectionProjects.appendChild(designProjects);

    }

    designerBtn.addEventListener ("click", addDesignRef);

    // --- code 

    // --- create about me text (code)
    var codeAbout = document.createElement("div");
    codeAbout.setAttribute("class", "about-me");

   codeAbout.innerHTML =   
      `<h2>Über mich</h2> 
       <p>Code Lernbereit, motivert, neugierig. Es liegt mir am Herzen Dinge zu erschaffen.</p>
      `
    // --- create graph bars
    var skills = document.getElementsByClassName('skills')[0];

    // --- create new graph bar (code)
    var codeSkills = document.createElement("div");
    codeSkills.setAttribute("class", "graph");

    codeSkills.innerHTML =   
    `<div class="column-left">
        <div class="bar bar1">HTML, CSS</div>
        <div class="bar bar2">Vanilla JavaScript</div>
        <div class="bar bar3">jQuery</div>
     </div>
    <div class="column-right">
       <div class="bar bar4">Angular</div>
       <div class="bar bar5">TypeScript</div>
       <div class="bar bar6">Bootstrap</div>
    </div>`
    
    // --- projects
    var projects = document.getElementsByClassName('projects')[0];
    var sectionProjects = document.getElementsByClassName('projects-container')[0];

    var codeProjects = document.createElement("div");
    codeProjects.setAttribute("class", "projects");

    codeProjects.innerHTML =     
    ` 
        <div class="single-des-project">
            <div class="image-projects">
              <img src="./images/javascript-quiz.jpg" alt="javascript-quiz-project" class="image-projects">
             </div>
             <p>Code Spiel über JavaScript</p>
             <p>- 15 Fragen</p>
             <p>- Vanilla JS</p>
             <p>- DOM Manipulation</p>
        </div>
        <div class="single-des-project">
            <div class="image-projects">
            <img src="./images/my-bars.jpg" alt="my-bars" class="image-projects">
              </div>
              <p>Code Finde die Bar</p>
              <p>- Node, Express + express-ejs-layouts</p>
              <p>- MongoDB, Mongoose</p>
              <p>- Authorization, Authentication</p>
              <p>- Google maps</p>
        </div>
        <div class="single-des-project">
            <div class="image-projects">
               <img src="./images/art-blog.jpg" alt="art-blog" class="image-projects">
              </div>
              <p>Code Blog über Kunst</p>
              <p>- Node, Express</p>
              <p>- MongoDB, Mongoose</p>
              <p>- Angular</p>
              <p>- Authorization, Authentication</p>
        </div>`;
     
    // --- projects

    var expCont = document.getElementsByClassName('exp-container')[0];

    // --- create new graph bar (code)
    var codeExp = document.createElement("div");
    codeExp.setAttribute("class", "exp");

    codeExp.innerHTML =   
    `
        <h2>Erfahrungen</h2>
        <div class="exp-block">
          <div class="date-elements">
            <p class="date"></p>01/2018 03/2018</p>
         </div>
         <div class="text-elements">
           <h3>Bootcamp Ironhack, Barcelona</h3>
           <p class="exp-content">9-Wöchiger Intensivworkshop Full Stack WebDev mit Schwerpunkt JavaScript </p>
           <ul>
              <li class="code-tags">HTML, CSS</li>
               <li class="code-tags">Vanilla&nbsp;JavaScript</li>
               <li class="code-tags">DOM</li>
               <li class="code-tags">jQuery</li>
               <li class="code-tags">Flexbox</li>
               <li class="code-tags">GitHub</li>
               <li class="code-tags">Command Line</li>
               <li class="code-tags">Pair programming</li>
               <li class="code-tags">Express.js</li>
               <li class="code-tags">HTTP</li>
               <li class="code-tags">Node.js</li>
               <li class="code-tags">Angular 2</li>
               <li class="code-tags">Kanban</li>
               <li class="code-tags">Agile</li>
           </ul>
         </div>
        </div>
     </div>
     <div class="exp-block">
         <div class="date-elements">
           <p class="date"></p>01/2016 03/2017</p>
        </div>
        <div class="text-elements">
           <h3>Erstellung der Wordpress Webseiten, Anpassung der Templates</h3>
           <p class="exp-content">Gemeinsame Planung der Webseite mit dem Kunden</p>
           <p class="exp-content">SEO Optimierung und Security Maßnahmen mit Wordpress Tools</p>
           <p class="exp-content">CSS ANpassungen der Wordpress Templates</p>
        </div>
     </div>
     <div class="exp-block">
         <div class="date-elements">
           <p class="date"></p>Seit 2016</p>
        </div>
        <div class="text-elements">
           <h3>Selbständiges Lernen HTML, CSS</h3>
           <p class="exp-content">Video2Brain</p>
           <p class="exp-content">Lynda.com</p>
           <p class="exp-content">VHS Kurs</p>
        </div>
    `;


    // --- slider buttons
    var coderBtn = document.getElementById('coder-btn');

   // --- add code references
    function addCodeRef() {
      sectionProjects.appendChild(designProjects);
      $('.graph').remove();
      $('.about-me').remove();
      $('.projects').remove();
      skills.appendChild(codeSkills);
      aboutCont.appendChild(codeAbout);
      sectionProjects.appendChild(codeProjects);
      expCont.appendChild(codeExp);
    }
    coderBtn.addEventListener ("click", addCodeRef);
  
});