//This is so it will call free links on page load
$(document).ready(function(){
	var rmLinks = $('.promoted-tweet');
	freeLinks(rmLinks);
	$('.js-account-summary.account-summary.js-actionable-user.promoted-account.js-profile-popup-actionable').remove();
	$('.promoted-trend').remove();
});

//This function actuall removes the promoted tweets from the page
var freeLinks = function(rmLinks) {
	rmLinks.each(function(i,post){
		console.log("Promoted tweet removed.");
		post.remove();
	});
}

//This is telling us what tree in the DOM we want to keep track of changes on
var target = $('#stream-items-id');

//This is the function that is called anytime the "target" changes
//So if ther is some AJAX additions to the page the new posts will be filtered out
var observer = new window.WebKitMutationObserver(function() {
    console.log("Webkit mutation observer.");
    $('.js-account-summary.account-summary.js-actionable-user.promoted-account.js-profile-popup-actionable').remove();
	$('.promoted-trend').remove();
	var rmLinks = $('.promoted-tweet');
	freeLinks(rmLinks);

});

//This what is actually calling the observer function on the page when a change is detected.
observer.observe(target, { subtree: true, characterData: true, childList: true });