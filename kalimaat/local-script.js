

window.onload = function () {
    setupCheckBoxListeners()
}

function setupCheckBoxListeners() {
    setupListenerForCheckBox('chkAyaats','aya-wrapper')
    setupListenerForCheckBox('chkNotes','notes-text')
    setupListenerForCheckBox('chkTopics','topic-title')
    setupListenerForCheckBox('chkIntro','surah-introduction')
}

function setupListenerForCheckBox(htmlElementId, associatedClassName){
    chkBoxHideAyaats = document.getElementById(htmlElementId)
    chkBoxHideAyaats.addEventListener('change', function () {
        if (this.checked) {
            showAllElementsForClassName(associatedClassName)
        } else {
            hideAllElementsForClassName(associatedClassName)
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