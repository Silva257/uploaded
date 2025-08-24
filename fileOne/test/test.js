// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // 1. Get all the sections that we want to observe
    const sections = document.querySelectorAll('main section');

    // 2. Get all the navigation links
    const navLinks = document.querySelectorAll('nav a');

    // 3. Create a new Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // 4. Check if the section is currently in the viewport
            if (entry.isIntersecting) {
                // 5. Remove the 'active' class from ALL links
                navLinks.forEach(link => link.classList.remove('active'));

                // 6. Find the link whose href matches the ID of the intersecting section
                const id = entry.target.getAttribute('id');
                const correspondingLink = document.querySelector(`nav a[href="#${id}"]`);

                // 7. If found, add the 'active' class to it
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }, {
        // 8. Configuration for the observer:
        // - rootMargin: Adjusts the bounding box of the viewport.
        //   '0px 0px -50% 0px' means "when the center of the section passes the center of the viewport"
        // - threshold: How much of the section must be visible to trigger.
        rootMargin: '0px 0px -50% 0px',
        threshold: 0.2
    });

    // 9. Start observing each section
    sections.forEach(section => {
        observer.observe(section);
    });

});// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // 1. Get all the sections that we want to observe
    const sections = document.querySelectorAll('main section');

    // 2. Get all the navigation links
    const navLinks = document.querySelectorAll('nav a');

    // 3. Create a new Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // 4. Check if the section is currently in the viewport
            if (entry.isIntersecting) {
                // 5. Remove the 'active' class from ALL links
                navLinks.forEach(link => link.classList.remove('active'));

                // 6. Find the link whose href matches the ID of the intersecting section
                const id = entry.target.getAttribute('id');
                const correspondingLink = document.querySelector(`nav a[href="#${id}"]`);

                // 7. If found, add the 'active' class to it
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }, {
        // 8. Configuration for the observer:
        // - rootMargin: Adjusts the bounding box of the viewport.
        //   '0px 0px -50% 0px' means "when the center of the section passes the center of the viewport"
        // - threshold: How much of the section must be visible to trigger.
        rootMargin: '0px 0px -50% 0px',
        threshold: 0.2
    });

    // 9. Start observing each section
    sections.forEach(section => {
        observer.observe(section);
    });

});