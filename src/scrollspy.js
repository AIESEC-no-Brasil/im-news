import ScrollSpy from 'scroll-spy'

ScrollSpy.init({
    nodeList: document.querySelectorAll('a[href^="#"].navbar-item'),
    activeClassName: 'active', 
});