const openNav = () => {
    document.getElementById('mySidenav').style.width = '250px';
};

const closeNav = () => {
    document.getElementById('mySidenav').style.width = '0';
};

const showMe = id => {
    const allDivs = ['projects', 'competetions', 'social', 'connect', 'awards'];
    const about = document.getElementById('about');
    about.style.display = 'none';
    const target = document.getElementById(id);

    for (let div of allDivs) {
        console.log(div);
        if (div != id) {
            document.getElementById(div).style.display = 'none';
        }
    }

    target.style.display = target.style.display == 'block' ? 'none' : 'block';
};
