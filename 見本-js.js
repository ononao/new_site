

//once page is ready
$(document).ready(function() {




    //add the lightbox links to the html (helps with lighbox plugin)
    //document.getElementById("lightboxLinksHolder").innerHTML=lightBoxLinksString;

 $(".homeMenulink").css('background', 'transparent');

myNewWidth = $("#carouselBarInfoContainter h3").width()+30;
myString2 =myNewWidth+'px';
myString = myNewWidth+'px ' + '13px';

$('#featuredProjectHolder').css('width', myString2);

//$(".journal-left").insertAfter(".journalRightImage");
//$(".journal-entry").find(".journal-left").remove().insertAfter($(".journalRightImage"));
//jQuery(".journal-left").before(jQuery(".journalRightImage"));
//swapNodes($(".journalRightImage"), $(".journal-left"));


function swapNodes(a, b) {
    var aparent = a.parentNode;
    var asibling = a.nextSibling === b ? a : a.nextSibling;
    b.parentNode.insertBefore(a, b);
    aparent.insertBefore(b, asibling);
}


    //main short escapes button action
    var mobileMenuVis = false;
   	$('#mobileMenuBut').click(function(e) {

      if(mobileMenuVis==false) {

        $("#headerMenuMobile").css('display', 'block');
        $("#mobileMenuBut").css('background', 'url("'+templateUrl+'images/mobileMenuBut-close.png") left 26px top 21px no-repeat transparent');
        $("#mobileMenuBut").css('background-size', '23px 23px');
        mobileMenuVis = true;

      } else {
        $("#headerMenuMobile").css('display', 'none');
        $("#mobileMenuBut").css('background', 'url("'+templateUrl+'images/mobileMenuBut.png") left 10px top 10px no-repeat transparent');
         $("#mobileMenuBut").css('background-size', '54px 45px');
        mobileMenuVis = false;

      }

    });


  $('#headerMenuMobile').click(function(e) {
        $("#headerMenuMobile").css('display', 'none');
        $("#mobileMenuBut").css('background', 'url("'+templateUrl+'images/mobileMenuBut.png") left 10px top 10px no-repeat transparent');
         $("#mobileMenuBut").css('background-size', '54px 45px');
        mobileMenuVis = false;
  });

  $('.contentItemLeft').mouseover(function(e) {
        if (jQuery(window).width()>744) {
        	$( this ).find( '.contentRollover' ).css('display', 'block');
        }

  });
  $('.contentItemLeft').mouseout(function(e) {
        if (jQuery(window).width()>744) {
       	 $( this ).find( '.contentRollover' ).css('display', 'none');
        }
  });

  $('.contentItemRight').mouseover(function(e) {
         if (jQuery(window).width()>744) {
         	$( this ).find( '.contentRollover' ).css('display', 'block');
         }
  });
  $('.contentItemRight').mouseout(function(e) {
         if (jQuery(window).width()>744) {
			 $( this ).find( '.contentRollover' ).css('display', 'none');
        }
  });

  $('.jornalEntry').mouseover(function(e) {
        if (jQuery(window).width()>744) {
         $( this ).find( '.contentRollover' ).css('display', 'block');
         }
  });
  $('.jornalEntry').mouseout(function(e) {
        if (jQuery(window).width()>744) {
        $( this ).find( '.contentRollover' ).css('display', 'none');
        }
  });




  $('.homeMenulink').mouseover(function(e) {
         $( this ).find( '.menu-line' ).css('background-color', '#00a177');
  });
  $('.homeMenulink').mouseout(function(e) {
         $( this ).find( '.menu-line' ).css('background-color', '#ffffff');
  });
  $('#mainMenuAll ul li').mouseover(function(e) {

         $( this ).find( '.menu-line' ).css('background-color', '#575757');
  });
  $('#mainMenuAll ul li').mouseout(function(e) {
         $( this ).find( '.menu-line' ).css('background-color', '#ffffff');
  });




  $('#menuBut').mouseover(function(e) {
    if (jQuery(window).width()>644) {
     // $('#menuBut').css("background-image", "url('+templateUrl+'images/menuBut-over.png)");
    }
  });
  $('#menuBut').mouseout(function(e) {
    if (jQuery(window).width()>644) {
     // $('#menuBut').css("background-image", "url('+templateUrl+'images/menuBut-off.png)");
    }
  });

  $('#menuButDark').mouseover(function(e) {
    if (jQuery(window).width()>644 ) {
      //$('#menuButDark').css("background-image", "url('+templateUrl+'images/menuBut-over.png)");
    }
  });
  $('#menuButDark').mouseout(function(e) {
    if (jQuery(window).width()>644 ) {
      //$('#menuButDark').css("background-image", "url('+templateUrl+'images/menuBut-off-dark.png)");
    }
  });

  $('#gridViewOptionBut').click(function(e) {
      swapViewType();
  });
  $('#listViewOptionBut').click(function(e) {
      swapViewType();
  });

$(".slideNum").mouseover(function(e){
  e.preventDefault();
  // use data-item value when triggering default pagination link
  $('a[data-slidesjs-item="' + $(this).attr("data-item") + '"]').trigger('click');
});
$("#mainMenu").mouseleave(function(e){
  e.preventDefault();
  // use data-item value when triggering default pagination link
  $('a[data-slidesjs-item="0"]').trigger('click');
});
/*
$(".slidesjs-pagination-item a").mouseover(function(){

    $(".slidesjs-pagination-item a").click();
});
*/


  profileNavVis=false;

  $('#sectionMenuBut').click(function(e) {
    if(profileNavVis==false) {
      profileNavVis=true;
      $( '#projectCategoryMenu-mob' ).css('display', 'block');
       $( '#profileCategoryMenu-mob' ).css('display', 'block');
    } else {
      profileNavVis=false;
      $( '#projectCategoryMenu-mob' ).css('display', 'none');
      $( '#profileCategoryMenu-mob' ).css('display', 'none');
    }

  });





  $('#downArrow').click(function(e) {
     var y = $(window).scrollTop()+500;  //your current y position on the page
  //$(window).scrollTop(y+350);
  $('html, body').animate({scrollTop: y}, 1000);
  });



  $('#teamList ul li').mouseover(function(e) {
  		if (jQuery(window).width()>744) {
         $( this ).find( '.teamContentRollover' ).css('display', 'block');
        }
  });
  $('#teamList ul li').mouseout(function(e) {
  		if (jQuery(window).width()>744) {
         $( this ).find( '.teamContentRollover' ).css('display', 'none');
        }
  });
  $('.homeTeamContentImage').mouseover(function(e) {
   	if (jQuery(window).width()>744) {
         $( this ).find( '.teamContentRollover' ).css('display', 'block');
        }
  });
  $('.homeTeamContentImage').mouseout(function(e) {
  if (jQuery(window).width()>744) {
         $( this ).find( '.teamContentRollover' ).css('display', 'none');
        }
  });

  $('#projectCarosel').mouseover(function(e) {

         $( '.slidesjs-next' ).fadeIn(100);
         $( '.slidesjs-previous' ).fadeIn(100);
  });
  $('#projectCarosel').mouseleave(function(e) {
     if (jQuery(window).width()>968) {
         $( '.slidesjs-next' ).fadeOut(100);
         $( '.slidesjs-previous' ).fadeOut(100);
       }
  });

  $('#journalCarosel').mouseover(function(e) {

         $( '.slidesjs-next' ).fadeIn(100);
         $( '.slidesjs-previous' ).fadeIn(100);
  });
  $('#journalCarosel').mouseleave(function(e) {
     if (jQuery(window).width()>968) {
         $( '.slidesjs-next' ).fadeOut(100);
         $( '.slidesjs-previous' ).fadeOut(100);
       }
  });

  $('#menuButContainer2').mousedown(function(e) {
  		 if (jQuery(window).width()>644) {
         $( "#menuBackground" ).fadeIn(100);
          $( "#mainMenuAll" ).fadeIn(100);
       } else {
         $( "#menuBackground" ).css('display', 'block');
          $( "#mainMenuAll" ).css('display', 'block');

       }
  });

  $('#menuBut').mousedown(function(e) {
	  if (jQuery(window).width()>644) {
         $( "#menuBackground" ).fadeIn(100);
          $( "#mainMenuAll" ).fadeIn(100);
          $( "#menuButContainer" ).fadeOut(100);
          $( "#mainMenu" ).fadeOut(100);
       } else {
         $( "#menuBackground" ).css('display', 'block');
          $( "#mainMenuAll" ).css('display', 'block');
          $( "#menuButContainer" ).css('display', 'block');
          $( "#mainMenu" ).css('display', 'block');
       }

  });

  $('#menuButDark').mousedown(function(e) {
	  if (jQuery(window).width()>644) {
         $( "#menuBackground" ).fadeIn(100);
          $( "#mainMenuAll" ).fadeIn(100);
          $( "#menuButContainer" ).fadeOut(100);
          $( "#mainMenu" ).fadeOut(100);

       } else {
         $( "#menuBackground" ).css('display', 'block');
          $( "#mainMenuAll" ).css('display', 'block');
          $( "#menuButContainer" ).css('display', 'block');
          $( "#mainMenu" ).css('display', 'block');
       }


  });

  $('#closeMenuBut').mousedown(function(e) {
         $( "#menuBackground" ).fadeOut(100);
          $( "#mainMenuAll" ).fadeOut(100);
          $( "#menuButContainer" ).fadeIn(100);
        if (jQuery(window).width()>644) {
          $( "#mainMenu" ).fadeIn(100);
        }
  });

  $( ".contentRollover" ).hide();



  $('#newletterLink').click(function(e) {
     e.preventDefault();
     $( '#newsletterHolder' ).css('display', 'block');
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
  });

  $('#newsletterCloseBut').click(function(e) {
     e.preventDefault();
     $( '#newsletterHolder' ).css('display', 'none');

  });
  $('#formBut').click(function(e) {
     e.preventDefault();


    var bla = $('#newsletterInput').val();
    if(emailFormValidation()==true) {



				//$myajaxurl2="http://onlinemediaview.com/clients/crone/wordpress/wp-admin/admin-ajax.php";//bug bug

				$myajaxurl2="http://cronepartners.com/wp-admin/admin-ajax.php";//bug bug

				//$('.removeFromShortlist').click(function () {
					//alert($(this).find('input.post_id').attr('value'));
				$.post($myajaxurl2, {
						action: 'ajax_send_email',
	                    email: document.querySelector('[name="newsletterInput"]').value,//document.getElementById('email').value,

				}, function(data) {

				});




      $( '#newsletterForm' ).css('display', 'none');
      $( '.newsletterThanks' ).css('display', 'block');
    } else {
      $( '#formError' ).css('display', 'block');
    }


  });


















});


function emailFormValidation(){



   var emailID = document.getElementById('newsletterInput').value;
   atpos = emailID.indexOf("@");
   dotpos = emailID.lastIndexOf(".");
   if (atpos < 1 || ( dotpos - atpos < 2 )) {

    return false;
   }



     return true;
}



viewType="grid";
function swapViewType() {
  if(viewType=="grid") {
    $('#gridViewOptionBut').find( '.gridViewicon' ).removeClass( "gridViewSelected" );
    $('#listViewOptionBut').find( '.listViewicon' ).addClass( "listViewSelected" );
    $('#gridViewOptionBut').removeClass( "categorySelected" );
    $('#listViewOptionBut').addClass( "categorySelected" );
    $('#projectContent').css("display", "none");
    $('#projectContentListView').css("display", "block");
    viewType="list";


  } else {
    $('#gridViewOptionBut').find( '.gridViewicon' ).addClass( "gridViewSelected" );
    $('#listViewOptionBut').find( '.listViewicon' ).removeClass( "listViewSelected" );
    $('#gridViewOptionBut').addClass( "categorySelected" );
    $('#listViewOptionBut').removeClass( "categorySelected" );
    $('#projectContent').css("display", "block");
    $('#projectContentListView').css("display", "none");
    viewType="grid";
  }

}


//refresh page if we have scaled to mobile and back - required for slides to show
redraw=false;
$(window).resize(function () {
    test=$(window).width();
   if(test<644) {
    redraw=true;
   }
   resizedw();
});

function resizedw(){
   test=$(window).width();

  if(test>644 && redraw==true) {

   location.reload();
   redraw=false;
  }

}



$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash,
      $target = $(target);



      $('html, body').stop().animate({
          'scrollTop': $target.offset().top-40
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});


calledScroll=1;


  $(document).scroll(function () {
    if(calledScroll=="1") {
      calledScroll="2";
    } else if (calledScroll=="2") {
        var y = $(this).scrollTop();
        //alert(y);
        if (y > 250) {
            $('#condensedNav').fadeIn(100);

            //calledScroll="3";
        } else {
         //if($(window).width()>1023) {

           $('#condensedNav').fadeOut(100);


            if (jQuery(window).width()>644) {
                       $( "#mainMenu" ).fadeIn(100);
                       $('#mainMenu').css("display", "block");
            }
         //}

        }
      }
            $( "#mainMenuAll" ).fadeOut(100);
             $( "#menuBackground" ).fadeOut(100);

   });




  $(document).scroll(function () {

        var y = $(this).scrollTop();
        var cy = $('.contentImage').scrollTop();

       if(y>cy) {
        //  $('.contentImage').fadeIn(100);
          // $('.contentImage').animate({top: "-=30"}, 500);
       }






});






jQuery(document).ready(function($) {

  $('.contentItemLeft').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
        $(this).addClass('transitioned');
      }
  });
  $('.contentItemLeftDouble').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
        $(this).addClass('transitioned');
      }
  });
  $('.contentItemRight').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
        $(this).addClass('transitioned2');
      }
  });
  $('.contentItemRightDouble').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
        $(this).addClass('transitioned2');
      }
  });


});







function twitterShare(url, text, hashtags, image, winWidth, winHeight, type) {
        var winTop = (screen.height / 2) - (winHeight / 2);
        var winLeft = (screen.width / 2) - (winWidth / 2);
        window.open('https://twitter.com/share?url=' + url + '&text=' + text + '&hashtags=' + hashtags , 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width='+winWidth+',height='+winHeight);
        //window.open('https://twitter.com/share?url=' + url + '&text=' + text + '&hashtags=' + hashtags , 'sharer', 'top=' + winTop + ',left=' + winLeft + ',_blank');
        if(type=="campaign") {
          ga('send', 'event', 'button', 'click', 'Share campaign Twitter');
        } else {
          ga('send', 'event', 'button', 'click', 'Share entry Twitter');
        }

    }

function fbShare(url, title, descr, image, winWidth, winHeight) {
        var winTop = (screen.height / 2) - (winHeight / 2);
        var winLeft = (screen.width / 2) - (winWidth / 2);
        window.open('http://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width='+winWidth+',height='+winHeight);
    }



var newWin = null;
function popUp(strURL, strType, strHeight, strWidth) {
	if (newWin != null & !newWin.closed)
	newWin.close();
	var strOptions="";
	if (strType=="console")
		strOptions="resizable,height="+
		strHeight+",width="+strWidth;
	if (strType=="fixed")
		strOptions="status,height="+
		strHeight+",width="+strWidth;
	if (strType=="elastic")
		strOptions="toolbar,menubar,scrollbars,"+
		"resizable,location,height="+
		strHeight+",width="+strWidth;

		newWin = window.open(strURL, 'newWin', strOptions);
		newWin.focus();
}

    function linkedInShare(url, winWidth, winHeight) {
        var winTop = (screen.height / 2) - (winHeight / 2);
        var winLeft = (screen.width / 2) - (winWidth / 2);
        window.open(url, 'sharer','top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width='+winWidth+',height='+winHeight);
    }





function msieversion() {

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            return true;
        } else   {
           return false;
		  }

}
