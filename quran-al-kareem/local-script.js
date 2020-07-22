

window.onload = function () {

    chkBoxHideAyaats = document.getElementById('chkHideAyaats')
    chkBoxHideAyaats.addEventListener('change', function () {
        if (this.checked) {

            let allAyahWrappers = document.getElementsByClassName('aya-wrapper')

            for (let i = 0; i < allAyahWrappers.length; i++) {
                allAyahWrappers[i].style.display = 'none';
            }

        } else {
            let allAyahWrappers = document.getElementsByClassName('aya-wrapper')

            for (let i = 0; i < allAyahWrappers.length; i++) {
                allAyahWrappers[i].style.display = 'inherit';
            }
        }
    });
}
