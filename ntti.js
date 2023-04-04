window.onbeforeunload = function () {
	window.scrollTo(0, 0);
};

var navbar1 = document.querySelector(".navigation1");
var navbar2 = document.querySelector(".navigation2");
var navMobile = document.querySelector(".mobile-wrapper");

navbar1.insertAdjacentHTML("afterend", '<div class="affix" id="affix"></div>');

var affix = document.querySelector(".affix");
affix.appendChild(navbar2.cloneNode(false));

// Show affix on scroll.
var element = document.getElementById("affix");
if (element !== null) {
	var position = navbar1.getBoundingClientRect().top + window.pageYOffset;
	window.addEventListener("scroll", function () {
		var height = window.pageYOffset;
		if (height > position) {
			navbar1.style.display = "none";
			navbar2.style.position = "fixed";
			navbar2.style.top = "0";
			navbar2.style.marginTop = "0";
			navbar2.style.marginLeft = "10px";
			navbar2.style.boxShadow = " 0px 2px 12px rgb(0 0 0 /0.1)";
			navbar2.style.width = "100%";
			navMobile.style.position = "fixed";
			navMobile.style.top = "0";
			navMobile.style.marginTop = "0";
			navMobile.style.boxShadow = " 0px 2px 12px rgb(0 0 0 /0.1)";
			navMobile.style.width = "100%";
			affix.style.display = "flex";
		} else {
			navbar1.style.display = "flex";
			navbar2.style.position = "fixed";
			navbar2.style.marginTop = "50px";
			navbar2.style.boxShadow = " 0px 0px 0px rgb(0 0 0 /0.0)";
			navMobile.style.position = "fixed";
			navMobile.style.marginTop = "80px";
			navMobile.style.boxShadow = " 0px 0px 0px rgb(0 0 0 /0.0)";
			affix.style.display = "none";
		}
	});
}

//menu toggle
function menuOpen() {
	document.getElementById("navigation-mobile").classList.toggle("visible");
}

//About toggle
function About() {
	document.getElementById("about-mobile").classList.toggle("show");
}

//Department toggle
function Department() {
	document.getElementById("dept-mobile").classList.toggle("show");
}

//Management toggle
function Management() {
	document.getElementById("management-mobile").classList.toggle("show");
}

//Link toggle
function Link() {
	document.getElementById("link-mobile").classList.toggle("show");
}
