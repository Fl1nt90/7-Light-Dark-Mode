const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const navBar = document.getElementById('nav');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

//the localStorage part
let time = new Date().getHours(); //what time is it now?
const lStorage = localStorage.getItem('theme');

if (lStorage) {
    toggleTheme(lStorage);
} else if (!(time >= 8 && time <= 19)) toggleTheme(DARK_THEME); /* why check if is NOT day? 
I can only check hours before midnight, cause at that poit the clock reset to 0 and it's a mess */


function toggleTheme(theme, user = false) {
    const isDark = (theme === 'dark'); //creating boolean
    //toggle the switch
        if (isDark) toggleSwitch.checked = true;
    //set the data-theme attribute at the HTML root
        document.documentElement.setAttribute('data-theme', `${theme}`);
    //change toggle switch text and icon
        toggleIcon.children[0].textContent = `${isDark ? 'Dark' : 'Light'} Mode`;
        isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') :
            toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    //change images/illustrations source
        image1.src = `img/undraw_conceptual_idea_${theme}.svg`;
        image2.src = `img/undraw_feeling_proud_${theme}.svg`;
        image3.src = `img/undraw_proud_coder_${theme}.svg`;

    //set local storage only in case of direct user interaction
        if (user) localStorage.setItem('theme', `${theme}`)
};


//switcher (the event is the checkbox click)
function switchTheme(event) {
    if (event.target.checked) {
        toggleTheme(DARK_THEME, true);
    } else toggleTheme(LIGHT_THEME, true);
};

//event listener on the switch button
toggleSwitch.addEventListener('change', switchTheme)
