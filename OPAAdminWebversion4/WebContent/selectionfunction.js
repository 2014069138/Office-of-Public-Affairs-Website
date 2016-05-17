/**
 * 
 */

$(document).ready(function(){
	$("#profpic").dblclick(function(){
		$("#profilemenu").slideDown();
	});
});

$(document).ready(function(){
	$("#profpic").click(function(){
		$("#profilemenu").slideUp();
	});
});

$(document).ready(function(){
	$("#logout").click(function(){
		if(confirm("Do you want to logout? ")==true){
			window.location="AdminLoginPage.html";
		}
		else{

		}
	});
});
/* Mail */
$(document).ready(function(){
	$("#feedback").click(function(){
		$("#inbox2").slideUp();
		$("#text").slideUp();
		$("#inbox").slideDown();
		
	});
});

$(document).ready(function(){
	$("#feedback").dblclick(function(){
		$("#inbox").slideUp();
	});
});

$(document).ready(function(){
	$("#email").click(function(){
		$("#inbox").slideUp();
		$("#text").slideUp();
		$("#inbox2").slideDown();
		
	});
});

$(document).ready(function(){
	$("#email").dblclick(function(){
		$("#inbox2").slideUp();
	});
});

/*Submissions*/
$(document).ready(function(){
	$("#ads").click(function(){
		$("#inbox2").slideUp();
		$("#text").slideUp();
		$("#inbox").slideDown();
		
	});
});

$(document).ready(function(){
	$("#ads").dblclick(function(){
		$("#inbox").slideUp();
	});
});

$(document).ready(function(){
	$("#news").click(function(){
		$("#inbox").slideUp();
		$("#text").slideUp();
		$("#inbox2").slideDown();
		
	});
});

$(document).ready(function(){
	$("#news").dblclick(function(){
		$("#inbox2").slideUp();
	});
});

/*Requests*/
$(document).ready(function(){
	$("#tokens").click(function(){
		$("#inbox3").slideUp();
		$("#inbox2").slideUp();
		$("#text").slideUp();
		$("#inbox").slideDown();
		
	});
});

$(document).ready(function(){
	$("#tokens").dblclick(function(){
		$("#inbox").slideUp();
	});
});

$(document).ready(function(){
	$("#materials").click(function(){
		$("#inbox").slideUp();
		$("#inbox3").slideUp();
		$("#text").slideUp();
		$("#inbox2").slideDown();
		
	});
});

$(document).ready(function(){
	$("#materials").dblclick(function(){
		$("#inbox2").slideUp();
	});
});

$(document).ready(function(){
	$("#info").click(function(){
		$("#inbox").slideUp();
		$("#inbox2").slideUp();
		$("#text").slideUp();
		$("#inbox3").slideDown();
	
	});
});

$(document).ready(function(){
	$("info").dblclick(function(){
		$("inbox3").slideDown();
	});
});

/*Forms*/

$(document).ready(function(){
	$("#cover").click(function(){
		$("#inbox4").slideUp();
		$("#inbox3").slideUp();
		$("#inbox2").slideUp();
		$("#text").slideUp();
		$("#inbox").slideDown();
		
	});
});

$(document).ready(function(){
	$("#cover").dblclick(function(){
		$("#inbox").slideUp();
	});
});

$(document).ready(function(){
	$("#visitors").click(function(){
		$("#inbox4").slideUp();
		$("#inbox").slideUp();
		$("#inbox3").slideUp();
		$("#text").slideUp();
		$("#inbox2").slideDown();
		
	});
});

$(document).ready(function(){
	$("#visitors").dblclick(function(){
		$("#inbox2").slideUp();
	});
});

$(document).ready(function(){
	$("#shoots").click(function(){
		$("#inbox4").slideUp();
		$("#inbox").slideUp();
		$("#inbox2").slideUp();
		$("#text").slideUp();
		$("#inbox3").slideDown();
	
	});
});

$(document).ready(function(){
	$("#shoots").dblclick(function(){
		$("#inbox3").slideDown();
	});
});


$(document).ready(function(){
	$("#proposals").click(function(){
		$("#inbox3").slideUp();
		$("#inbox").slideUp();
		$("#text").slideUp();
		$("#inbox2").slideUp();
		$("#inbox4").slideDown();
	});
});


$(document).ready(function(){
	$("#proposals").dblclick(function(){
		$("#inbox4").slideUp();
	});
});


/*Udpdates*/

$(document).ready(function(){
	$("#events").click(function(){
		$("#calendarbox").slideUp();
		$("#resourcebox").slideUp();
		$("#gallerybox").slideUp();
		$("#text").slideUp();
		$("#eventbox").slideDown();
	});
});

$(document).ready(function(){
	$("#calendar").click(function(){
		$("#resourcebox").slideUp();
		$("#eventbox").slideUp();
		$("#gallerybox").slideUp();
		$("#text").slideUp();
		$("#calendarbox").slideDown();
	});
});

$(document).ready(function(){
	$("#resources").click(function(){
		$("#calendarbox").slideUp();
		$("#eventbox").slideUp();
		$("#gallerybox").slideUp();
		$("#text").slideUp();
		$("#resourcebox").slideDown();
	});
});

$(document).ready(function(){
	$("#gallery").click(function(){
		$("#resourcebox").slideUp();
		$("#calendarbox").slideUp();
		$("#eventbox").slideUp();
		$("#text").slideUp();
		$("#gallerybox").slideDown();
	});
});

/*Message*/

$(document).ready(function(){
	$("#message").click(function(){
		$("#inbox").slideUp();
		$("#inbox2").slideUp();
		$("#inbox3").slideUp();
		$("#inbox4").slideUp();
		$("#inbox5").slideUp();
		$("#text").slideDown();
	});
});