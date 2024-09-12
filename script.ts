const toggleSkillsButton = document.getElementById('toggleSkillsButton') as HTMLButtonElement;
const skillsContainer = document.getElementById('skillsContainer') as HTMLElement;

console.log(toggleSkillsButton);
console.log(skillsContainer);

toggleSkillsButton.addEventListener('click', () => {
    console.log('Button clicked');
    if (skillsContainer.style.display === 'none' || skillsContainer.style.display === '') {
        console.log('Showing skills');
        skillsContainer.style.display = 'block';
        toggleSkillsButton.textContent = 'Hide Skills';
    } else {
        console.log('Hiding skills');
        skillsContainer.style.display = 'none';
        toggleSkillsButton.textContent = 'Show Skills';
    }
});