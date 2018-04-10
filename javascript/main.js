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

      leftArr.style.visibility = 'visible';
      $('.right-arrow').fadeOut('slow');
      $('.left-arrow').fadeIn('slow');
  
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

      rightArr.style.visibility = 'visible';
      $('.left-arrow').fadeOut('slow');
      $('.right-arrow').fadeIn('slow');

   
      }
   }
  
    var sliderContainer = document.getElementById('coder-designer-slider'); //
    var siteMain = document.getElementById('site-main'); //
    var leftPicture = sliderContainer.getElementsByClassName('left-picture')[0]; //
    var rightPicture = sliderContainer.getElementsByClassName('right-picture')[0]; //
    var coderText = sliderContainer.getElementsByClassName('coder-text')[0]; //

    var leftArr= sliderContainer.getElementsByClassName('left-arrow')[0];
    var rightArr= sliderContainer.getElementsByClassName('right-arrow')[0];


    // --- slider pictures according to mouse position 
    sliderContainer.addEventListener( 'click', trackLocation, false);

    // --- stop slider Eventlisteners
    siteMain.addEventListener("mousemove", function (eve) {
      eve.stopPropagation ();
   }, true)

    // --- slider mouseleave event 
    // sliderContainer.addEventListener("mouseleave", function(  ) {   
    //     $('.designer-text').fadeOut('slow');
    //     $('.coder-text').fadeOut('slow');
    //     $('.right-picture').fadeIn('slow');
    //     $('.left-picture').fadeIn('slow');
    //     $('.designer-title').fadeIn('slow');
    //     $('.coder-title').fadeIn('slow');
    //   }, false);

    // --- projects 

    // --- design

    // --- create about me text (design)
    var aboutCont = document.getElementsByClassName('about-container')[0];
    var designAbout = document.createElement("div");
    designAbout.setAttribute("class", "about-me");

    designAbout.innerHTML =   
      `<p>Gute Designer sind in der Lage Ziele und Probleme der Kunden zu erkennen, dessen sich die Kunden manchmal selbst nicht bewusst sind. 
       Ich interessiere mich für: <span>gute Fotografie,</span> <span>auffallende Typografie,</span> <span>spannende Geschichten,</span> <span>Interaktion.</span></p>
      `

    // --- create new graph bar (design)
    var designSkills = document.createElement("div");
    designSkills.setAttribute("class", "graph");

    designSkills.innerHTML =   
      `<div class="column-left">
        <p>Konzept</p>
        <div class="bar bar1"></div>
        <p>Photoshop</p>
        <div class="bar bar2"></div>
        <p>Illustrator</p>
        <div class="bar bar3"></div>
      </div>
      <div class="column-right">
         <p>Typografie</p>
         <div class="bar bar4"></div>
         <p>UI, UX</p>
         <div class="bar bar5"></div>
         <p>InDesign</p>
         <div class="bar bar6"></div>
     </div>`;
    

    var projects = document.getElementsByClassName('projects')[0];
    var sectionProjects = document.getElementsByClassName('projects-container')[0];

    var designProjects = document.createElement("div");
    designProjects.setAttribute("class", "projects");

    designProjects.innerHTML =     
    ` 
        <div class="single-project">
            <div class="image-projects">
              <img src="./images/redesign-webseite.jpg" alt="redesign" class="image-projects">
             </div>
             <b>Redesign der Webseite balter.de unter Berücksichtigung des Kundenfeedbacks</b>
             <p>- Umplatzierung der Anmeldung</p>
             <p>- Vanilla JS</p>
             <p>- Umgestaltung des Sliders</p>
        </div>
        <div class="single-project">
            <div class="image-projects">
            <img src="./images/messe-security-essen.jpg" alt="messe" class="image-projects">
              </div>
              <b>Planung und Gestaltung des Messeauftritts und Werbemittel</b>
              <p>- Ausarbeitung des Layouts, Reinzeichnung</p>
              <p>- Kommunikation mit Messebauer, Druckerei</p>
              <p>- Videodreh mit einem externen Mitarbeiter</p>
        </div>
        <div class="single-project">
            <div class="image-projects">
               <img src="./images/katalog.jpg" alt="art-blog" class="image-projects">
              </div>
              <b>Kataloge, Konzeption und Reinzeichnung </b>
              <p>- Erstellung von Inhalten, Beschaffung und 
              Bearbeitung des Bildmaterials</p>
              <p>- Korrekturschleifen mit zuständigen Lektoren</p>
              <p>- Druckvorbereitu</p>
        </div>`;

        // --- exp

        var expCont = document.getElementsByClassName('exp-container')[0];

        var desExp = document.createElement("div");
        desExp.setAttribute("class", "exp");
    
        desExp.innerHTML =   
        `
                          <h2>Erfahrungen</h2>
                <div class="exp-block">
                  <div class="date-elements">
                    <p class="date"></p>09/2016 Jetzt</p>
                 </div>
                 <div class="text-elements">
                   <h3>Marketingleiterin und Grafikdesignerin</h3>
                   <p class="exp-content first-sent">Balter GmbH, eCommerce Sicherheitstechnik, Langenfeld</p>
                   <ul>
                      <li class="code-tags">Planung und Entwicklung der Werbemaßnahmen</li>
                       <li class="code-tags">Kataloge</li>
                       <li class="code-tags">Flyer</li>
                       <li class="code-tags">Newsletter</li>
                       <li class="code-tags">Erstellung der Verpackungen</li>
                       <li class="code-tags">Reinzeichnung</li>
                       <li class="code-tags">Plannung und Gestaltung des Messestandes</li>
                       <li class="code-tags">Artikelpflege in Prestashop</li>
                       <li class="code-tags">Kommunikation mit externen Partnern</li>
                   </ul>
                 </div>
                </div>
             </div>
             <div class="exp-block">
                 <div class="date-elements">
                   <p class="date"></p>10/2015 08/2016</p>
                </div>
                <div class="text-elements">
                   <h3>Fotografin / Grafikdesignerin</h3>
                   <p class="exp-content first-sent">Springlane, Onlineshop für Küchenutensilien, Düsseldorf</p>
                   <ul>
                      <li class="code-tags">Durchführung von Foodshootings</li>
                       <li class="code-tags">Bildbearbeitung</li>
                       <li class="code-tags">Strenge Einhaltung der Fristen</li>
                       <li class="code-tags">Newsletter Erstellung</li>
                       <li class="code-tags">Produktpflege im Shop</li>
                  </ul>
                </div>
             </div>
             <div class="exp-block">
                 <div class="date-elements">
                   <p class="date"></p>2008 2012</p>
                </div>
                <div class="text-elements">
                   <h3>Studium</h3>
                   <p class="exp-content">BA Kommunikationsdesign, Hochschule Niederrhein</p>
                </div>

        `;
    
    // --- add design references
    var designerBtn = document.getElementById('designer-btn');
    function addDesignRef() {
        $('.about-me').remove();
        $('.graph').remove();
        $('.projects').remove();
        $('.exp').remove();
        aboutCont.appendChild(designAbout);
        skills.appendChild(designSkills);
        sectionProjects.appendChild(designProjects);
        expCont.appendChild(desExp);

    }

    designerBtn.addEventListener ("click", addDesignRef);

    // --- code 

    // --- create about me text (code)
    var codeAbout = document.createElement("div");
    codeAbout.setAttribute("class", "about-me");

   codeAbout.innerHTML =   
      `<h2>Über mich</h2> 
       <p>Guter Code ist gut lesbar, strukturiert, konsequent und elegant. Ich interessiere mich für Frontend, als auch für Backend.  </p>
      `
    // --- create graph bars
    var skills = document.getElementsByClassName('skills')[0];

    // --- create new graph bar (code)
    var codeSkills = document.createElement("div");
    codeSkills.setAttribute("class", "graph");

    codeSkills.innerHTML =   
    ` <div class="column-left">
          <p>HTML, CSS</p>
          <div class="bar bar1"></div>
          <p>Vanilla JavaScript</p>
          <div class="bar bar2"></div>
          <p>jQuery</p>
          <div class="bar bar3"></div>
       </div>
        <div class="column-right">
           <p>Angular</p>
           <div class="bar bar3"></div>
           <p>Node</p>
           <div class="bar bar3"></div>
           <p>Express</p>
           <div class="bar bar3"></div>
       </div>`;
    
    // --- projects
    var projects = document.getElementsByClassName('projects')[0];
    var sectionProjects = document.getElementsByClassName('projects-container')[0];

    var codeProjects = document.createElement("div");
    codeProjects.setAttribute("class", "projects");

    codeProjects.innerHTML =     
    ` 
        <div class="single-project">
            <div class="image-projects">
             <a href="https://allarom.github.io/quiz-game/"><img src="./images/javascript-quiz.jpg" alt="javascript-quiz-project" class="image-projects"></a>
             </div>
             <b>Spiel über JavaScript</b>
             <p>- 15 Fragen</p>
             <p>- Vanilla JS</p>
             <p>- DOM Manipulation</p>
        </div>
        <div class="single-project">
            <div class="image-projects">
            <a href="https://mybars.herokuapp.com/"><img src="./images/my-bars.jpg" alt="my-bars" class="image-projects"></a>
              </div>
              <b>Finde die Bar</b>
              <p>- Express, express-ejs-layouts</p>
              <p>- Node, MongoDB, Mongoose</p>
              <p>- Authorization, Authentication</p>
              <p>- Google maps</p>
        </div>
        <div class="single-project">
            <div class="image-projects">
              <a href="https://artyblog.herokuapp.com/"><img src="./images/art-blog.jpg" alt="art-blog" class="image-projects"></a>
              </div>
              <b>Blog über Kunst</b>
              <p>- Node, Express</p>
              <p>- MongoDB, Mongoose</p>
              <p>- Angular</p>
              <p>- Authorization, Authentication</p>
        </div>`;
     
    // --- exp

    var expCont = document.getElementsByClassName('exp-container')[0];

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
           <p class="exp-content first-sent">9-Wöchiger Intensivworkshop Full Stack WebDev mit Schwerpunkt JavaScript </p>
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
           <p class="exp-content">CSS Anpassungen der Wordpress Templates</p>
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
      $('.exp').remove();
      skills.appendChild(codeSkills);
      aboutCont.appendChild(codeAbout);
      sectionProjects.appendChild(codeProjects);
      expCont.appendChild(codeExp);
    }
    coderBtn.addEventListener ("click", addCodeRef);
  
});