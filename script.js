const collapseBtns = document.querySelectorAll('.accordion-button')
collapseBtns.forEach(collapseBtn => collapseBtn.addEventListener('click', function(e){
    switch(e.target.getAttribute('aria-controls')){
        case 'collapseOne':
            document.getElementById('which-accordion').innerText = 'Who is ';
            break;
        case 'collapseTwo':
            document.getElementById('which-accordion').innerText = 'Contact ';
            break;
        case 'collapseThree':
            document.getElementById('which-accordion').innerText = 'Skills of ';
            break;
    }
}))
