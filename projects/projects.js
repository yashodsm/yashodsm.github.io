const projectListDiv = document.getElementById('project-list');

const projects = [
    {
        id: 'project-1',
        title: 'Cool Website Design',
        description: 'A modern and responsive website design.',
        thumbnail: 'project-1-thumb.jpg'
    },
    {
        id: 'project-2',
        title: 'Mobile App Development',
        description: 'Developed a user-friendly mobile application.',
        thumbnail: 'project-2-thumb.jpg'
    }
];

projects.forEach(project => {
    const projectSummary = document.createElement('div');
    projectSummary.classList.add('project-summary');
    projectSummary.innerHTML = `
        <h3><a href="${project.id}/">${project.title}</a></h3>
        <img src="${project.thumbnail}" alt="${project.title}" width="200">
        <p>${project.description}</p>
    `;
    projectListDiv.appendChild(projectSummary);
});