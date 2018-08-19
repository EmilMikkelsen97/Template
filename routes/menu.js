module.exports = (app) => {
    let ex1 = () => {
        let nav = document.createElement('nav');
        let divCon = document.createElement('div');
        let divNav = document.createElement('div');
        let aBrand = document.createElement('a');
        nav.className = 'navbar navbar-default';
        divCon.className = 'container-fluid';
        divNav.className = 'navbar-header';
        aBrand.className = 'navbar-brand';
        let brandTxt = document.createTextNode('CS:GO Videos')
        aBrand.appendChild(brandTxt);
        divNav.appendChild(aBrand);
        divCon.appendChild(divNav);
        nav.appendChild(divCon);
        document.body.appendChild(nav);
    }

    ex1();
};