var currentDate = new Date();
var rootPath = "http://127.0.0.1:4000/favicon/";
var logoPride = new Image();
var logoLesbian = new Image();
var logoGay = new Image();
var logoBi = new Image();
var logoPan = new Image();
var logoTrans = new Image();
var logoEnby = new Image();
var logoAro = new Image();
var logoAce = new Image();

var logoWh = new Image();
var logoMagenta = new Image();
var logoHeart = new Image();
var logoRomania = new Image();

var logoHangar = new Image();
var logoJailbird = new Image();
var logoMountain = new Image();
var logoOdyssey = new Image();
var logoVidal = new Image();

logoPride.src = rootPath + "vi-logo-big-pride.png";
logoLesbian.src = rootPath + "vi-logo-big-lesbian.png";
logoGay.src = rootPath + "vi-logo-big-gay.png";
logoBi.src = rootPath + "vi-logo-big-bi.png";
logoPan.src = rootPath + "vi-logo-big-pan.png";
logoTrans.src = rootPath + "vi-logo-big-trans.png";
logoEnby.src = rootPath + "vi-logo-big-nonbinary.png";
logoAro.src = rootPath + "vi-logo-big-aro.png";
logoAce.src = rootPath + "vi-logo-big-ace.png";

logoWh.src = rootPath + "vi-logo-big-wh.png";
logoMagenta.src = rootPath + "vi-logo-big-atpm.png";
logoHeart.src = rootPath + "vi-logo-big-heart.png";
logoRomania.src = rootPath + "vi-logo-big-romania.png";

logoHangar.src = rootPath + "vi-logo-big-hngo.png";
logoJailbird.src = rootPath + "vi-logo-big-jbdo.png";
logoMountain.src = rootPath + "vi-logo-big-mntg.png";
logoOdyssey.src = rootPath + "vi-logo-big-odr.png";
logoVidal.src = rootPath + "vi-logo-big-vidy.png";

var date_ValentinesDay = new Date(currentDate.getFullYear(), 1, 8);
var startDate_AroAwarenessWeek = new Date(currentDate.getFullYear(), 1, 19);
var endDate_AroAwarenessWeek = new Date(currentDate.getFullYear(), 1, 25);
var date_TransVisibilityDay = new Date(currentDate.getFullYear(), 2, 31);
var date_AceDay = new Date(currentDate.getFullYear(), 3, 6);
var date_ATP = new Date(currentDate.getFullYear(), 4, 6);
var startDate_PanAwarenessDay = new Date(currentDate.getFullYear(), 4, 24);
var endDate_PanAwarenessDay = new Date(currentDate.getFullYear(), 4, 25);
var startDate_PrideMonth = new Date(currentDate.getFullYear(), 5, 1);
var endDate_PrideMonth = new Date(currentDate.getFullYear(), 5, 30);
var date_EnbyDay = new Date(currentDate.getFullYear(), 6, 14);
var date_BiDay = new Date(currentDate.getFullYear(), 9, 23);
var startDate_AceAwarenessWeek = new Date(currentDate.getFullYear(), 11, 23);
var endDate_AceAwarenessWeek = new Date(currentDate.getFullYear(), 11, 29);
var startDate_TransAwarenessMonth = new Date(currentDate.getFullYear(), 12, 1);
var endDate_TransAwarenessMonth = new Date(currentDate.getFullYear(), 12, 30);
var date_RomaniaNationalDay = new Date(currentDate.getFullYear(), 13, 1);

if (
	currentDate.getMonth() === date_ValentinesDay.getMonth() && currentDate.getDate() === date_ValentinesDay.getDate()
) {
	document.addEventListener('DOMContentLoaded', function() {
		var headerLogo = document.getElementById('logo');
		headerLogo.src = logoHeart.src;
	});
} else if (
	currentDate >= startDate_AroAwarenessWeek && currentDate <= endDate_AroAwarenessWeek
) {
	document.addEventListener('DOMContentLoaded', function() {
		var headerLogo = document.getElementById('logo');
		headerLogo.src = logoAro.src;
	});
} else if (
	currentDate.getMonth() === date_TransVisibilityDay.getMonth() && currentDate.getDate() === date_TransVisibilityDay.getDate()
) {
	document.addEventListener('DOMContentLoaded', function() {
		var headerLogo = document.getElementById('logo');
		headerLogo.src = logoTrans.src;
	});
} else if (
	currentDate.getMonth() === date_AceDay.getMonth() && currentDate.getDate() === date_AceDay.getDate()
) {
	document.addEventListener('DOMContentLoaded', function() {
		var headerLogo = document.getElementById('logo');
		headerLogo.src = logoAce.src;
	});
} else if (
	currentDate.getMonth() === date_ATP.getMonth() && currentDate.getDate() === date_ATP.getDate()
) {
	document.addEventListener('DOMContentLoaded', function() {
		var headerLogo = document.getElementById('logo');
		headerLogo.src = logoMagenta.src;
	});
} else if (
	currentDate >= startDate_PanAwarenessDay && currentDate <= endDate_PanAwarenessDay
) {
	document.addEventListener('DOMContentLoaded', function() {
		var headerLogo = document.getElementById('logo');
		headerLogo.src = logoPan.src;
	});
} else if (
	currentDate >= startDate_PrideMonth && currentDate <= endDate_PrideMonth
) {
	document.addEventListener('DOMContentLoaded', function() {
		var headerLogo = document.getElementById('logo');
		headerLogo.src = logoPride.src;
	});
} else if (
	currentDate.getMonth() === date_EnbyDay && currentDate.getDate() === date_EnbyDay.getDate()
) {
	document.addEventListener('DOMContentLoaded', function() {
		var headerLogo = document.getElementById('logo');
		headerLogo.src = logoEnby.src;
	});
} else if (
	currentDate.getMonth() === date_BiDay && currentDate.getDate() === date_BiDay.getDate()
) {
	document.addEventListener('DOMContentLoaded', function() {
		var headerLogo = document.getElementById('logo');
		headerLogo.src = logoBi.src;
	});
} else if (
	currentDate >= startDate_AceAwarenessWeek && currentDate <= endDate_AceAwarenessWeek
) {
	document.addEventListener('DOMContentLoaded', function() {
		var headerLogo = document.getElementById('logo');
		headerLogo.src = logoAce.src;
	});
} else if (
	currentDate >= startDate_TransAwarenessMonth && currentDate <= endDate_TransAwarenessMonth
) {
	document.addEventListener('DOMContentLoaded', function() {
		var headerLogo = document.getElementById('logo');
		headerLogo.src = logoTrans.src;
	});
} else if (
	currentDate.getMonth() === date_RomaniaNationalDay && currentDate.getDate() === date_RomaniaNationalDay.getDate()
) {
	document.addEventListener('DOMContentLoaded', function() {
		var headerLogo = document.getElementById('logo');
		headerLogo.src = logoRomania.src;
	});

// regular Logo
} else {
	document.addEventListener('DOMContentLoaded', function() {
		var headerLogo = document.getElementById('logo');
	headerLogo.src = logoWh.src;
	});
}

