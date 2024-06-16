document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        { title: "Project 1", description: "Description of project 1." },
        { title: "Project 2", description: "Description of project 2." },
        { title: "Project 3", description: "Description of project 3." },
        { title: "Project 4", description: "Description of project 4." }
    ];

    const projectsContainer = document.getElementById('projects');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;
        
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        
        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);
        
        projectsContainer.appendChild(projectDiv);
    });
});
