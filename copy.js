document.addEventListener('copy', function(e) {
    var source = window.location.href;
    var selection = window.getSelection();
    e.clipboardData.setData('text/plain', selection + "\n\n原始來源:https://kannonihongo.github.io/class204/ " + source);
    e.preventDefault();
});
