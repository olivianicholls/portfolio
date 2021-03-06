$(document).ready(function() {
  
  //Scroll function
  $(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top - 90}, 800);
	});
  
  //Header fade in
  $("h1").fadeIn(2500);
  $("h3").fadeIn(2800);

  //Menu sliding function
  $(".menu-btn").click(function() {
    $(".navbar").slideToggle("300");
    
    //Menu button slide down
    if ($('.navbar').css('display') === 'block') {
      $(this).animate(
        {top: "50px"},
        {queue: false, duration: 400}
      );
    } 
  });
  
  //Menu button side back up
    $(".menu-btn").click(function(event) {
    if ($(this).css('top') === '50px') {
      $('.menu-btn').animate(
        {top: "0"},
      );
    }
  });
  
  //Fade in language text
  $(".icon-wrapper").mouseover(function() {
    $(this).find('.language-names').animate(
      {opacity: 1}, 600)
  });
  //Fade out language text
  $(".icon-wrapper").mouseout(function() {
     $(this).find('.language-names').animate(
      {opacity: 0}, 500);
  });
  
  // Contact info move up animations
  $(".social").mouseenter(function() {
     $(this).animate({"padding-top": 0}, 300); 
      $(this).addClass("social-hover");
  });
  // Contact info move down animations
  $(".social").mouseleave(function() {
     $(this).animate(
      {"padding-top": "20px"}, 300); 
      $(this).removeClass("social-hover");
  });
});


// Create projects section

let projects = {
  projectsList: [],
  
  project: function(title, description, githubLink, liveLink, imageSource, languages) {
    this.title = title;
    this.description = description;
    this.githubLink = githubLink;
    this.liveLink = liveLink;
    this.imageSource = imageSource;
    this.languages = languages;
  },
  addProject: function(title, description, githubLink, liveLink, imageSource, languages) {
    var newProject = new this.project(title, description, githubLink, liveLink, imageSource, languages);
    this.projectsList.push(newProject);
  },
  makeProject: function() {
    let projectsWrapper = document.getElementById('projects-wrapper');
    
    for(let i = 0; i < this.projectsList.length; i++) {

      let project = document.createElement('article');
      projectsWrapper.appendChild(project);
      project.className = 'project';
    
      let linksWrapper = document.createElement('div');
      project.appendChild(linksWrapper);
      linksWrapper.className = 'links-wrapper';
    
      let liveLink = document.createElement('a');
      linksWrapper.appendChild(liveLink);
      liveLink.href = this.projectsList[i].liveLink;
    
      let imageWrapper = document.createElement('div');
      liveLink.appendChild(imageWrapper);
      imageWrapper.className ='image-wrapper';
    
      let thumbnail = document.createElement('i');
      imageWrapper.appendChild(thumbnail);
      thumbnail.className = this.projectsList[i].imageSource;
    
      let githubIconDiv = document.createElement('div');
      linksWrapper.appendChild(githubIconDiv);
      githubIconDiv.className = 'github-link-icon';
    
      let githubIconLink = document.createElement('a');
      githubIconDiv.appendChild(githubIconLink);
      githubIconLink.href = this.projectsList[i].githubLink;
    
      let githubIcon = document.createElement('i');
      githubIconDiv.appendChild(githubIcon);
      githubIcon.className = 'ion ion-social-github';
  
      let projectTextWrapper = document.createElement('div');
      project.appendChild(projectTextWrapper);
      projectTextWrapper.className = 'project-text-wrapper';
    
      let projectTitleWrapper = document.createElement('div');
      projectTextWrapper.appendChild(projectTitleWrapper);
      projectTitleWrapper.className = 'project-title-wrapper';
    
      let projectTitle = document.createElement('a');
      projectTitleWrapper.appendChild(projectTitle);
      projectTitle.className = 'project-title';
      projectTitle.textContent = this.projectsList[i].title;
      projectTitle.href = this.projectsList[i].liveLink;
   
      let projectDescription = document.createElement('p');
      projectTextWrapper.appendChild(projectDescription);
      projectDescription.className = 'project-description';
      projectDescription.textContent = this.projectsList[i].description;
      
      let projectLanguages = document.createElement('p');
      projectTextWrapper.appendChild(projectLanguages);
      projectLanguages.className = 'project-languages';
      projectLanguages.textContent = this.projectsList[i].languages;
    }
  }
}

// Projects List
projects.addProject('CMS System (Currently in Production)', //title
                    'A dynamic CMS system which displays the user\'s data from SQL database in a blog format. Allows users to log in, create, read, update, and delete data from database.', //description
                    '', //github link
                    '', //live link
                    'fas fa-table', // image source
                    'PHP, Bootstrap'); // Languages 
projects.addProject('Battleship', //title
                    'Play against the computer AI to try and sink their battleships before they sink yours!', //description
                    'https://github.com/olivianicholls/battleship', //github link
                    'https://olivianicholls.github.io/battleship/', //live link
                    'fas fa-crosshairs', // image source
                    'Vanilla JS, HTML5, CSS'); // Languages 
projects.addProject('Weather App', //title
                    'An app that utilizes openweathermap.org\'s API in order to provide current weather data about the city of your choice', //description
                    'https://github.com/olivianicholls/weather_app', //github link
                    'https://olivianicholls.github.io/weather_app/', //live link
                    'fas fa-sun', //image source
                    'Vanilla JS, HTML5, CSS (Responsive)'); // Languages
projects.addProject('To Do List', //title
                    'A dynamic To Do list that allows users to organize and filter tasks by completion status.', // description
                    'https://github.com/olivianicholls/todolist', //github link
                    'https://olivianicholls.github.io/todolist/', // live link
                    'fas fa-tasks', //image source
                    'Vanilla JS, HTML5, CSS'); // Languages);
projects.addProject('Portfolio Page', //title
                    'This website you see here! Designed and coded by yours truly.', //description
                    'https://github.com/olivianicholls/portfolio', //github link
                    'https://olivianicholls.github.io/portfolio/', // live link
                    'fas fa-desktop', // image source
                    'JavaScript, jQuery, HTML5, CSS (Responsive)'); // Languages
projects.addProject('Calculator', //title
                    'A functional calculator app.', //description
                    'https://github.com/olivianicholls/calculator', //github link
                    'https://olivianicholls.github.io/calculator/', //live link
                    'fas fa-calculator', // image source
                    'JavaScript, jQuery, HTML5, CSS'); // Languages
projects.addProject('Etch-A-Sketch', //title
                    'A simple app emulating the classic children\'s toy. Resize the grid to your liking, and draw away!', //description
                    'https://github.com/olivianicholls/etch-a-sketch', //github link
                    'https://olivianicholls.github.io/etch-a-sketch/', //live link
                    'far fa-edit', // image source
                    'JavaScript, jQuery, HTML5, CSS'); // Languages 
projects.makeProject();

// Create languages section
let languages = {
  languagesList: [],
  
  language: function(name, iconClass) {
    this.name = name;
    this.iconClass = iconClass;
  },
  addLanguage: function(name, iconClass){
    let newLanguage = new this.language(name, iconClass);
    this.languagesList.push(newLanguage);
  },
  makeLanguageList: function() {
    let languagesWrapper = document.getElementById('languages-wrapper');
    
    for(let i = 0; i < this.languagesList.length; i++) {
      
      let iconWrapper = document.createElement('div');
      languagesWrapper.appendChild(iconWrapper);
      iconWrapper.className = 'icon-wrapper';
      iconWrapper.id = this.languagesList[i].name + '-wrapper';
      
      let icon = document.createElement('i');
      iconWrapper.appendChild(icon);
      icon.className = 'language-icons ion ' + this.languagesList[i].iconClass;
      
      
      let languageNames = document.createElement('div');
      iconWrapper.appendChild(languageNames);
      languageNames.className = 'language-names';
      
      let name = document.createElement('p');
      languageNames.appendChild(name);
      name.id = this.languagesList[i].name;
      name.textContent = this.languagesList[i].name;
      
      
      if (this.languagesList[i].name === 'jQuery') {
        let jqueryImage = document.createElement('img');
        jqueryImage.id = 'jquery';
        jqueryImage.src = 'http://flaticons.net/gd/makefg.php?i=icons/Brand%20Identity/Logo-JQuery.png&r=255&g=255&b=255';
        name.id = "jquery-text";
        iconWrapper.removeChild(icon);
        iconWrapper.insertBefore(jqueryImage, languageNames);
      }
    }
  }
}

//Languages List

languages.addLanguage('HTML','ion-social-html5-outline');
languages.addLanguage('CSS','ion-social-css3-outline');
languages.addLanguage('JavaScript','ion-social-javascript-outline');
languages.addLanguage('jQuery');
languages.makeLanguageList();
