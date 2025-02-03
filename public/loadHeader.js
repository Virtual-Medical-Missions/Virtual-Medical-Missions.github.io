window.onload = function() {
    // Fetch the header and footer
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
        // Insert the header HTML into the div
        document.getElementById('headerdiv').innerHTML = data;

        // Apply sticky styles to the parent div that holds the header
        let headerDiv = document.getElementById('headerdiv');
        if (headerDiv) {
            headerDiv.style.position = 'sticky';
            headerDiv.style.top = '0';
            headerDiv.style.zIndex = '1000'; // Ensure it stays above other content
        }
    })
    .catch(error => console.error('Error loading header:', error));

    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footerdiv').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
}
