document.addEventListener('copy', function(e) {
    var currentPageURL = window.location.href;

    var sourceInfo = 'https://kannonihongo.github.io/class204/' + currentPageURL;
    var sourceNode = document.createElement('div');
    sourceNode.textContent = sourceInfo;

    var clipboardData = e.clipboardData || window.clipboardData;
    clipboardData.setData('text/plain', window.getSelection() + "\n\n" + sourceNode.outerHTML);

    e.preventDefault();
});
