// Get the mobile navigation modal
var mobileNav = document.getElementById('mobileNav');
var mobileSearch = document.getElementById('search-header');

function clickHamburgerMenu(buttonMenu) {
    buttonMenu.classList.toggle("hm-change");
	
	if(mobileNav.style.display === 'block')
	    mobileNav.style.display = 'none';
	else
		mobileNav.style.display = 'block';
}


function clickMobileSearch() {
	if(mobileSearch.style.display === 'block')
	    mobileSearch.style.display = 'none';
	else
		mobileSearch.style.display = 'block';
	    document.getElementById('mob-search-icon').classList.toggle('fa-window-close-o');
}

window.onresize = displayMobileSearch;

function displayMobileSearch() {

if (document.body.clientWidth >= 800) {
mobileSearch.style.display = 'block';
}

else if (document.body.clientWidth < 800 && !document.getElementById('mob-search-icon').classList.contains('fa-window-close-o')) {
mobileSearch.style.display = 'none';
}
}
