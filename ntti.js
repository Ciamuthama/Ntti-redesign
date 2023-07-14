window.onbeforeunload = function () {
	window.scrollTo(0, 0);
};

const navbar1 = document.querySelector(".navigation1");
const navbar2 = document.querySelector(".navigation2");
const navMobile = document.querySelector(".mobile-wrapper");

navbar1.insertAdjacentHTML("afterend", '<div class="affix" id="affix"></div>');

const affix = document.querySelector(".affix");
affix.appendChild(navbar2.cloneNode(false));

const element = document.getElementById("affix");
if (element !== null) {
	const position = navbar1.getBoundingClientRect().top + window.pageYOffset;
	window.addEventListener("scroll", function () {
		const height = window.pageYOffset;
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

function menuOpen() {
	document.getElementById("navigation-mobile").classList.toggle("visible");
}

function About() {
	document.getElementById("about-mobile").classList.toggle("show");
}
function Department() {
	document.getElementById("dept-mobile").classList.toggle("show");
}
function Management() {
	document.getElementById("management-mobile").classList.toggle("show");
}
function Link() {
	document.getElementById("link-mobile").classList.toggle("show");
}
