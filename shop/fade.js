<script>
    document.addEventListener("DOMContentLoaded", function() {
        const tsElement = document.querySelector('.floating-ts');

        // Stop floating and trigger fade-out after 3 seconds
        setTimeout(() => {
            tsElement.style.animation = 'fadeOut 1s forwards'; // Trigger fade-out animation
        }, 3000); // 3000 milliseconds = 3 seconds
    });
</script>
