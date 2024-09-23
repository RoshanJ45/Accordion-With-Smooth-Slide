        const sections = document.querySelectorAll('.a-section');


        sections.forEach(section => {
            section.addEventListener('click', () => {
                section.classList.toggle('active');
                sections.forEach(otherSection => {
                    if (otherSection !== section) {
                        otherSection.classList.remove('active');
                    }
                });
            });
        });
    