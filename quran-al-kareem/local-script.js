

window.onload = function () {
    setupHideAyaatsListeners()
}

function setupHideAyaatsListeners() {
    chkBoxHideAyaats = document.getElementById('chkHideAyaats')
    chkBoxHideAyaats.addEventListener('change', function () {
        if (this.checked) {
            hideAllElementsForClassName('aya-wrapper')
            hideAllElementsForClassName('notes-text')
        } else {
            showAllElementsForClassName('aya-wrapper')
            showAllElementsForClassName('notes-text')
        }
    });

}

function showAllElementsForClassName(className) {
    let allElements = document.getElementsByClassName(className)

    for (let i = 0; i < allElements.length; i++) {
        allElements[i].style.display = 'inherit';
    }
}

function hideAllElementsForClassName(className) {
    let allElements = document.getElementsByClassName(className)

    for (let i = 0; i < allElements.length; i++) {
        allElements[i].style.display = 'none';
    }
}