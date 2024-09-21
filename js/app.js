$(document).ready(function () {

  // Function to animate the progress bars
  function animateProgressBar() {
    $(".inner").each(function () {
      var percentage = $(this).attr("data-pg");
      $(this).animate({
        width: percentage
      }, 2000);
    });
  }

  // IntersectionObserver for progress bars animation
  let progressObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateProgressBar();  // Trigger progress bar animation
        observer.unobserve(entry.target);  // Stop observing once animated
      }
    });
  }, { threshold: 0.9 });

  // Observe the progress bars for their animation
  $(".inner").each(function () {
    progressObserver.observe(this);
  });

  // Resume download function
  $(".resume-button").on("click", function (e) {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'RESUME.pdf';  // Replace with the actual path to your PDF
    link.download = 'Apurva_Gawade_Resume.pdf';  // The file name for the downloaded file
    link.target = '_blank';  // Open in a new tab as well as download
    document.body.appendChild(link);  // Append link to document
    link.click();  // Programmatically click the link
    document.body.removeChild(link);  // Clean up the DOM
  });
});

