
		//transforming hamburger menu to close button when it is opened
		$(document).ready(function(){
		  $(".navbar-light .navbar-toggler-icon").click(function(){
			$(".navbar-light .navbar-toggler-icon").toggleClass("close");
		  });
		});
		
		//Opening and closing login window
		$(document).ready(function(){
		  $("#login").click(function(){
			$("#loginWindow").toggle();
		  });
		});
		
		//Opening and closing login window mobile
		$(document).ready(function(){
		  $("#loginMobile").click(function(){
			$("#loginWindowMobile").toggle();
		  });
		});
		
		//Opening and closing search window
		$(document).ready(function(){
		  $("#searchMobile").click(function(){
			$("#searchWindowMobile").toggle();
		  });
		});

		//Opening and closing search window mobile
		$(document).ready(function(){
		  $("#search").click(function(){
			$("#searchWindow").toggle();
		  });
		});
		
		//Closing the login window when clicking outside the window.
		$(document).mouseup(function(e) 
		{
			var container = $("#loginWindow");
			
			if (!container.is(e.target) && container.has(e.target).length === 0) 
			{
				container.hide();
			}
		});
		
		//Closing the search window when clicking outside the window.
		$(document).mouseup(function(e) 
		{
			var container = $("#searchWindow");

			if (!container.is(e.target) && container.has(e.target).length === 0) 
			{
				container.hide();
			}
		});
		
		//Closing the login window when clicking outside the window.
		$(document).mouseup(function(e) 
		{
			var container = $("#loginWindowMobile");

			if (!container.is(e.target) && container.has(e.target).length === 0) 
			{
				container.hide();
			}
		});
		
		//Closing the search window when clicking outside the window.
		$(document).mouseup(function(e) 
		{
			var container = $("#searchWindowMobile");

			if (!container.is(e.target) && container.has(e.target).length === 0) 
			{
				container.hide();
			}
		});
		
		//Cookie consent closer
		$(document).ready(function(){
		  $("#closeCookieConsent").click(function(){
			$("#cookieConsent").hide();
		  });
		});
		
		//Cookie consent agree
		$(document).ready(function(){
		  $(".cookieConsentOK").click(function(){
			$("#cookieConsent").hide();
		  });
		});