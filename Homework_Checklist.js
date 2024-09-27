document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                this.parentElement.classList.add('completed');
            } else {
                this.parentElement.classList.remove('completed');
            }
        });
    });

    document.getElementById('resetButton').addEventListener('click', resetProgress);
});

function resetProgress() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        checkbox.parentElement.classList.remove('completed');
    });

    const textAreas = document.querySelectorAll('.info-box');
    textAreas.forEach(textArea => {
        textArea.value = ''; // Clear the content
    });
}
