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
        {
          top: "50px"
        },
        {queue: false, duration: 400}
      );
    } 
  });
  
  //Menu button side back up
    $(".menu-btn").click(function(event) {
    if ($(this).css('top') === '50px') {
      $('.menu-btn').animate(
        {
          top: "0"
        },
      );
    }
    console.log(event);
  });

  //Fade in language text
  $(".icon-wrapper").mouseover(function() {
    $(this).find('.language-names').animate(
      {
        opacity: 1
      }, 600)
  });
  //Fade out language text
  $(".icon-wrapper").mouseout(function() {
     $(this).find('.language-names').animate(
      {
        opacity: 0
      }, 500)
  });
});

// Create projects section

let projects = {
  projectsList: [],
  
  project: function(title, description, githubLink, liveLink, imageSource) {
    this.title = title;
    this.description = description;
    this.githubLink = githubLink;
    this.liveLink = liveLink;
    this.imageSource = imageSource;
  },
  
  addProject: function(title, description, githubLink, liveLink, imageSource) {
    var newProject = new this.project(title, description, githubLink, liveLink, imageSource);
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
    
      let thumbnail = document.createElement('img');
      imageWrapper.appendChild(thumbnail);
      thumbnail.className = 'thumbnail';
      thumbnail.src = this.projectsList[i].imageSource;
    
      let githubLinkDiv = document.createElement('div');
      linksWrapper.appendChild(githubLinkDiv);
      githubLinkDiv.className = 'github-link';
    
      let githubLink = document.createElement('a');
      githubLinkDiv.appendChild(githubLink);
      githubLink.textContent = 'GitHub';
      githubLink.href = this.projectsList[i].githubLink;
    
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
      projectTitle.className = 'project-title'
      projectTitle.textContent = this.projectsList[i].title;
      projectTitle.href = this.projectsList[i].liveLink;
   
      let projectDescription = document.createElement('p');
      projectTextWrapper.appendChild(projectDescription);
      projectDescription.textContent = this.projectsList[i].description;
    }
  }
}

// Projects List

projects.addProject('To Do List', //title
           'A dynamic To Do list made partly while following Watch and Code\'s Practical Javascript course, then making my own modifications once finished the course. Made using HTML, CSS and Vanilla JS', // description
           'https://github.com/olivianicholls/todolist', //github link
           'https://olivianicholls.github.io/todolist/', // live link
           'photos/todolist_thumbnail.png'); // image source
projects.addProject('Portfolio Page', //title
           'This website you see here! Made using HTML, CSS, and jQuery.', //description
           'https://github.com/olivianicholls/portfolio', //github link
           'https://olivianicholls.github.io/portfolio/', // live link
          'photos/portfolio_thumbnail.png'); // image source
projects.addProject('Calculator', //title
           'A simple app featuring a functional calculator. Written with HTML, CSS, JavaScript, and jQuery. Made as a project from The Odin Project\'s curriculum.', //description
           'https://github.com/olivianicholls/calculator', //github link
           'https://olivianicholls.github.io/calculator/', //live link
           'photos/calculator_thumbnail.png'); //image source
projects.addProject('Etch-A-Sketch', //title
           'A simple app emulating the classic children\'s toy. Written with HTML, CSS, JavaScript, and jQuery. Made as a project from The Odin Project\'s curriculum.', //description
           'https://github.com/olivianicholls/etch-a-sketch', //github link
           'https://olivianicholls.github.io/etch-a-sketch/', //live link
           'photos/etchasketch_thumbnail.png'); // image source
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
  
  makeLanguage: function() {
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
      jqueryImage.id = 'jquery'
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
languages.makeLanguage();
