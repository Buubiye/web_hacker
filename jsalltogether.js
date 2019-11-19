
/* general scripts */
$(function(){/*main function of the file*/

 
 /*$('.cssStylers').mouseup(function(){
     var sourceCode = $('.showSource').text();
	 $('.me3').html(sourceCode);
 });*/
 
 /*disable selection from the main playground */
 $(".me3").disableSelection();

/* make .active resizable */


 
 /*------------ EXCLUDE .ACTIVE CLASS IN THE COMPILATION PROCESS -----------------*/
 
 /* give all the children of .me3 .tab class */
 $('.me3').find('*').addClass('tab');
 
 
 $('.active').resizable({
	 
	  autoHide: true,
         stop: function(e, ui) {
               var parent = ui.element.parent();
               ui.element.css({
                    width: ui.element.width()/parent.width()*100+"%",
                  
               });
         },
		 containment: 'parent'
 });
 
 $('.active').draggable({
	 /*handle: '.myHandle',*/
	 /*drag: function(){
		 $('.active').css({ 
		    left: getLeftPosition,
			top: getTopPosition,
			position: 'relative'
		 });
	 }*/
	 });
 
//$('.active').draggable();
		
/*----- give the clicked element .active class ------------*/

$(".me3").children().click(function () {
	

  
	$('.myHandle').remove();
	
    /* give the clicked element .active class */
        if(!$(event.target).hasClass('active test'))
        {
            $(".tab").removeClass("active test");
            $(event.target).addClass("active test");
			
			

			/* get the width of .active class */
			var getActiveTopPositon = $(event.target).css('top');
			var getActiveLeftPosition = $(event.target).css('left');
			
	var getActiveClassWidth = $('.active').outerWidth();
	var getActiveClassHeight = $('.active').height();
	
       
		
				  /* append a handler to the draggable .active element */
               
                var myHandle = '<div class="myHandle"></div>';
		       // $('.active').append(myHandle);
		
        }
		
		
		/* make wrapper draggable in case there is a new element in the playground */
		$('.active').draggable({/*handle: '.myHandle'*/ cancel: false});
		
		
		
          $('.active').resizable({
			   autoHide: true,
         stop: function(e, ui) {
               var parent = ui.element.parent();
               ui.element.css({
                    width: ui.element.width()/parent.width()*100+"%",
                   
               });
         },
		 containment: 'parent',
		 cancel: 'input.active'
		 
		  });
		


		});
			

		
		


/* -----------------------------------------------------------------------------------------*/
/* ---------------------------- the start of color Pelette js -------------------------------*/
/* -----------------------------------------------------------------------------------------*/
$(function(){


/*------------- for positioning the color palette ------------------*/
  if(!$(".color-providers").children(".activec")){
      $(".color-selectors").css({visibility: "hidden"});
  }
  $('.colorer').bind('click', function (ev) {
    var $div = $(".color-providers");


    var offset = $div.offset();
    var x = ev.clientX - offset.left;
    var y = ev.clientY - offset.top;


    $('.colorselectors').css({top: y-270, marginLeft: "120px", position: "relative"});
});


$('.test').click(function(){
/*--------------------------------------------- change the button colors to the selected color---------------------------------------------*/

var getBorderColor = $(".test").css("borderColor");
var getBorderTopColor = $(".test").css("borderTopColor");
var getBorderRightColor = $(".test").css("borderRightColor");
var getBorderLeftColor = $(".test").css("borderLeftColor");
var getBorderBottomColor = $(".test").css("borderBottomColor");
var getBackgroundColor = $(".test").css("backgroundColor");
var getTextColor = $(".test").css("color");
var getShadowColor = $(".test").css("");



/*---------excecute the code------------------------*/

$(".border").css({background: getBorderColor});
$(".bordert").css({background: getBorderTopColor});
$(".borderr").css({background: getBorderRightColor});
$(".borderl").css({background: getBorderLeftColor});
$(".borderb").css({background: getBorderBottomColor});
$(".background").css({background: getBackgroundColor});
$(".text").css({background: getTextColor});

});
/*---- give every button clicked .activec class----*/
     $(".colorer").click(function(){
        if(!$(this).hasClass("activec")){
          $('.colorer').removeClass("activec");
          $(this).addClass("activec");
        }
     });

$(".displaycolor").click(function(){
    $('.palettebg').toggle();
});

$(".spectrumbg").spectrum();
$(document).ready(function() {



/*------ Draggables; make the color editor box draggable --------*/
$(".color-providers").draggable();
$(".sp-replacer").draggable();


  /*----------------------------------------------------- choooooose where to append the color palette ----------------------------------------------------**/
  $(".palettebg").append('<div class="colorgivers"><div class="color-main-block main-block"></div><div class="color-main-block2 main-block"></div><div class="color-main-block3 main-block"></div><div class="color-main-block4 main-block"></div><div class="color-main-block5 main-block"></div><div class="color-main-block6 main-block"></div><div class="color-main-block7 main-block"></div><div class="color-main-block8 main-block"></div><div class="color-main-block9 main-block"></div><div class="color-main-block10 main-block"></div><div class="color-main-block11 main-block"></div><div class="color-main-block12 main-block"></div><div class="color-main-block13 main-block"></div><div class="color-main-block14 main-block"></div><div class="color-main-block15 main-block"></div><div class="color-main-block16 main-block"></div><div class="color-main-block17 main-block"></div><div class="color-main-block18 main-block"></div><div class="color-main-block19 main-block"></div><div class="color-main-block20 main-block"></div></div>');

    var colorArray1 = [ "#f9ebea", "#f2d7d5", "#e6b0aa", "#d98880", "#cd6155", "#c0392b", "#a93226", "#922b21", "#7b241c", "#641e16",];
    var colorArray2 = [ "#fdedec", "#fadbd8", "#f5b7b1", "#f1948a", "#ec7063", "#e74c3c", "#cb4335", "#b03a2e", "#943126", "#78281f"];
     var colorArray3 = ["#f5eef8", "#ebdef0", "#d7bde2", "#c39bd3", "#af7ac5", "#9b59b6", "#884ea0", "#76448a", "#633974", "#512e5f"];
      var colorArray4 = [ "#f4ecf7", "#e8daef", "#d2b4de", "#bb8fce", "#a569bd", "#8e44ad", "#7d3c98", "#6c3483", "#5b2c6f", "#4a235a"];
       var colorArray5 = [ "#eaf2f8", "#d4e6f1", "#a9cce3", "#7fb3d5", "#5499c7", "#2980b9", "#2471a3", "#1f618d", "#1a5276", "#154360",];
       var colorArray6 = ["#ebf5fb", "#d6eaf8", "#aed6f1", "#85c1e9", "#5dade2", "#3498db", "#2e86c1", "#2874a6", "#21618c", "#1b4f72"];
       var colorArray7 = ["#e8f8f5", "#d1f2eb", "#a3e4d7", "#76d7c4", "#48c9b0", "#1abc9c", "#17a589", "#148f77", "#117864", "#0e6251", ];
       var colorArray8 = [ "#e8f6f3" , "#d0ece7" , "#a2d9ce" , "#73c6b6" , "#45b39d" , "#16a085" , "#138d75" , "#117a65" , "#0e6655", "#0b5345", ];
      var colorArray9 = ["#e9f7ef", "#d4efdf", "#a9dfbf", "#7dcea0", "#52be80", "#27ae60", "#229954", "#1e8449", "#196f3d", "#145a32", ];
       var colorArray10 = [ "#eafaf1", "#d5f5e3", "#abebc6", "#82e0aa", "#58d68d", "#2ecc71", "#28b463", "#239b56", "#1d8348", "#186a3b",];
       var colorArray11 = [ "#fef9e7" , "#fcf3cf" , "#f9e79f" , "#f7dc6f" , "#f4d03f" , "#f1c40f" , "#d4ac0d" , "#b7950b" , "#9a7d0a" , "#7d6608",];
       var colorArray12 = [  "#fef5e7" , "#fdebd0" , "#fad7a0" , "#f8c471" , "#f5b041" , "#f39c12" , "#d68910" , "#b9770e" , "#9c640c" , "#7e5109",];
       var colorArray13 = [  "#fdf2e9" , "#fae5d3" , "#f5cba7" , "#f0b27a" , "#eb984e" , "#e67e22" , "#ca6f1e" , "#af601a", "#935116", "#784212"];
       var colorArray14 = ["#fbeee6" , "#f6ddcc" , "#edbb99" , "#e59866", "#dc7633", "#d35400", "#ba4a00", "#a04000", "#873600", "#6e2c00",];
       var colorArray15 = [  "#fdfefe" , "#fbfcfc", "#f7f9f9", "#f4f6f7", "#f0f3f4", "#ecf0f1", "#d0d3d4", "#b3b6b7", "#979a9a", "#7b7d7d", ];
       var colorArray16 = [  "#f8f9f9" , "#f2f3f4" , "#e5e7e9" , "#d7dbdd" , "#cacfd2" , "#bdc3c7" , "#a6acaf" , "#909497" , "#797d7f" , "#626567",];
       var colorArray17 = [ "#f4f6f6" , "#eaeded" , "#d5dbdb" , "#bfc9ca" , "#aab7b8" , "#95a5a6" , "#839192" , "#717d7e" , "#5f6a6a", "#4d5656",];
       var colorArray18 = [ "#f2f4f4" , "#e5e8e8" , "#ccd1d1" , "#b2babb", "#99a3a4", "#7f8c8d" , "#707b7c" , "#616a6b" , "#515a5a", "#424949",];
       var colorArray19 = [ "#ebedef" , "#d6dbdf", "#aeb6bf", "#85929e", "#5d6d7e", "#34495e" , "#2e4053" , "#283747" , "#212f3c", "#1b2631",];
       var colorArray20 = [ "#eaecee", "#d5d8dc" , "#abb2b9" , "#808b96" , "#566573" , "#2c3e50", "#273746", "#212f3d", "#1c2833", "#17202a",];




    for(i=0;i<10;i++)
    {

        var content = '<div class="color-block bb">'
        content += '<input data-role="none" type="button" class="pickers" id="color_'+i+'" readonly/>'
        content += '</div>'
        $('.color-main-block').append(content);
        $('#color_'+i).css("background", colorArray1[i]);

    }

     for(i2=0;i2<10;i2++)
    {
        var content2 = '<div class="color-block2 bb">'
        content2 += '<input data-role="none" type="button" class="pickers" id="color2_'+i2+'" />'
        content2 += '</div>'
        $('.color-main-block2').append(content2);
        $('#color2_'+i2).css("background", colorArray2[i2]);
    }

     for(i3=0;i3<10;i3++)
    {
        var content3 = '<div class="color-block3 bb">'
        content3 += '<input data-role="none" type="button" class="pickers" id="color3_'+i3+'" />'
        content3 += '</div>'
        $('.color-main-block3').append(content3);
        $('#color3_'+i3).css("background", colorArray3[i3]);
    }

    for(i4=0;i4<10;i4++)
    {
        var content4 = '<div class="color-block4 bb">'
        content4 += '<input data-role="none" type="button" class="pickers" id="color4_'+i4+'" />'
        content4 += '</div>'
        $('.color-main-block4').append(content4);
        $('#color4_'+i4).css("background", colorArray4[i4]);
    }

    for(i5=0;i5<10;i5++)
    {
        var content5 = '<div class="color-block5 bb">'
        content5 += '<input data-role="none" type="button" class="pickers" id="color5_'+i5+'" />'
        content5 += '</div>'
        $('.color-main-block5').append(content5);
        $('#color5_'+i5).css("background", colorArray5[i5]);
    }
    for(i6=0;i6<10;i6++)
    {
        var content6 = '<div class="color-block6 bb">'
        content6 += '<input data-role="none" type="button" class="pickers" id="color6_'+i6+'" />'
        content6 += '</div>'
        $('.color-main-block6').append(content6);
        $('#color6_'+i6).css("background", colorArray6[i6]);
    }
    for(i7=0;i7<10;i7++)
    {
        var content7 = '<div class="color-block7 bb">'
        content7 += '<input data-role="none" type="button" class="pickers" id="color7_'+i7+'" />'
        content7 += '</div>'
        $('.color-main-block7').append(content7);
        $('#color7_'+i7).css("background", colorArray7[i7]);
    }
    for(i8=0;i8<10;i8++)
    {
        var content8 = '<div class="color-block8 bb">'
        content8 += '<input data-role="none" type="button" class="pickers" id="color8_'+i8+'" />'
        content8 += '</div>'
        $('.color-main-block8').append(content8);
        $('#color8_'+i8).css("background", colorArray8[i8]);
    }

    for(i9=0;i9<10;i9++)
    {
        var content9 = '<div class="color-block9 bb">'
        content9 += '<input data-role="none" type="button" class="pickers" id="color9_'+i9+'" />'
        content9 += '</div>'
        $('.color-main-block9').append(content9);
        $('#color9_'+i9).css("background", colorArray9[i9]);
    }
    for(i10=0;i10<10;i10++)
    {
        var content10 = '<div class="color-block10 bb">'
        content10 += '<input data-role="none" type="button" class="pickers" id="color10_'+i10+'" />'
        content10 += '</div>'
        $('.color-main-block10').append(content10);
        $('#color10_'+i10).css("background", colorArray10[i10]);
    }
    for(i11=0;i11<10;i11++)
    {
        var content11 = '<div class="color-block11 bb">'
        content11 += '<input data-role="none" type="button" class="pickers" id="color11_'+i11+'" />'
        content11 += '</div>'
        $('.color-main-block11').append(content11);
        $('#color11_'+i11).css("background", colorArray11[i11]);
    }
    for(i12=0;i12<10;i12++)
    {
        var content12 = '<div class="color-block12 bb">'
        content12 += '<input data-role="none" type="button" class="pickers" id="color12_'+i12+'" />'
        content12 += '</div>'
        $('.color-main-block12').append(content12);
        $('#color12_'+i12).css("background", colorArray12[i12]);
    }
    for(i13=0;i13<10;i13++)
    {
        var content13 = '<div class="color-block13 bb">'
        content13 += '<input data-role="none" type="button" class="pickers" id="color13_'+i13+'" />'
        content13 += '</div>'
        $('.color-main-block13').append(content13);
        $('#color13_'+i13).css("background", colorArray13[i13]);
    }
    for(i14=0;i14<10;i14++)
    {
        var content14 = '<div class="color-block14 bb">'
        content14 += '<input data-role="none" type="button" class="pickers" id="color14_'+i14+'" />'
        content14 += '</div>'
        $('.color-main-block14').append(content14);
        $('#color14_'+i14).css("background", colorArray14[i14]);
    }

    for(i15=0;i15<10;i15++)
    {
     var content15 = '<div class="color-block15 bb">'
        content15 += '<input data-role="none" type="button" class="pickers" id="color15_'+i15+'" />'
        content15 += '</div>'
        $('.color-main-block15').append(content15);
        $('#color15_'+i15).css("background", colorArray15[i15]);
    }

    for(i16=0;i16<10;i16++)
    {
     var content16 = '<div class="color-block16 bb">'
        content16 += '<input data-role="none" type="button" class="pickers" id="color16_'+i16+'" />'
        content16 += '</div>'
        $('.color-main-block16').append(content16);
        $('#color16_'+i16).css("background", colorArray16[i16]);
    }

    for(i17=0;i17<10;i17++)
    {
     var content17 = '<div class="color-block17 bb">'
        content17 += '<input data-role="none" type="button" class="pickers" id="color17_'+i17+'" />'
        content17 += '</div>'
        $('.color-main-block17').append(content17);
        $('#color17_'+i17).css("background", colorArray17[i17]);
    }
    for(i18=0;i18<10;i18++)
    {
     var content18 = '<div class="color-block18 bb">'
        content18 += '<input data-role="none" type="button" class="pickers" id="color18_'+i18+'" />'
        content18 += '</div>'
        $('.color-main-block18').append(content18);
        $('#color18_'+i18).css("background", colorArray18[i18]);
    }


    for(i19=0;i19<10;i19++)
    {
     var content19 = '<div class="color-block19 bb">'
        content19 += '<input data-role="none" type="button" class="pickers" id="color19_'+i19+'" />'
        content19 += '</div>'
        $('.color-main-block19').append(content19);
        $('#color19_'+i19).css("background", colorArray19[i19]);
    }

    for(i20=0;i20<10;i20++)
    {
     var content20 = '<div class="color-block20 bb">'
        content20 += '<input data-role="none" type="button" class="pickers" id="color20_'+i20+'" />'
        content20 += '</div>'
        $('.color-main-block20').append(content20);
        $('#color20_'+i20).css("background", colorArray20[i20]);
    }





/*---------------------------------------------------------------------*/





$('.test').click(function(){
/*--------------- change the bg value in every click---------*/
 var getBorderColor = $(".test").css("borderColor");
var getBorderTopColor = $(".test").css("borderTopColor");
var getBorderRightColor = $(".test").css("borderRightColor");
var getBorderLeftColor = $(".test").css("borderLeftColor");
var getBorderBottomColor = $(".test").css("borderBottomColor");
var getBackgroundColor = $(".test").css("backgroundColor");
var getTextColor = $(".test").css("color");
var getShadowColor = $(".test").css("");


/*---------excecute the code------------------------*/
$(".border").css({background: getBorderColor});
$(".bordert").css({background: getBorderTopColor});
$(".borderr").css({background: getBorderRightColor});
$(".borderl").css({background: getBorderLeftColor});
$(".borderb").css({background: getBorderBottomColor});
$(".background").css({background: getBackgroundColor});
$(".text").css({background: getTextColor});

});

$(".colorer").click(function(){

/* ------------ background spectrum color ----------------------*/

if($(".background").hasClass("activec")){


    var initialColor = $(".test").css("background");


    function updateColor(element, background) {
        $(element).css("background",
                       (background ? background.toHexString() : ""));
    }

    $(".spectrumbg").spectrum({
        color: initialColor,
        preferredFormat: "hex6",
        showInput: true,
        showPalette: false,
        move: function (background) { updateColor(".test, .background", background); },
        hide: function (background) { updateColor(".test, .background", background); }
    });

$(".pickers").end().click(function() {
    $(".spectrumbg").spectrum("set", $(".test").css("background"));
});

  }



/* ------------ border-color spectrum color ----------------------*/

  if($(".border").hasClass("activec")){


    var initialColor2 = $(".test").css("borderColor");


    function updateColor2(element2, borderColor) {
        $(element2).css("borderColor",
                       (borderColor ? borderColor.toHexString() : ""));
    }

    $(".spectrumbg").spectrum({
        color: initialColor2,
        preferredFormat: "hex6",
        showInput: true,
        showPalette: false,
        move: function (borderColor) { updateColor2(".test", borderColor);
             var convertit = $(".test").css("borderColor");
             $('.border').css({background: convertit});
      },
        hide: function (borderColor) { updateColor2(".test", borderColor);
              var convertit = $(".test").css("borderColor");
             $('.border').css({background: convertit});
      }
    });
    $(".border").css({background: initialColor2});

    $(".pickers").end().click(function() {
    $(".spectrumbg").spectrum("set", $(".test").css("borderColor"));
});
}

/* ------------ border--top-color spectrum color ----------------------*/
if($(".bordert").hasClass("activec")){


    var initialColor3 = $(".test").css("borderTopColor");

    function updateColor3(element3, borderTopColor) {
        $(element3).css("borderTopColor",
                       (borderTopColor ? borderTopColor.toHexString() : ""));
    }

    $(".spectrumbg").spectrum({
        color: initialColor3,
        preferredFormat: "hex6",
        showInput: true,
        showPalette: false,
        move: function (borderTopColor) { updateColor3(".test, .bordert", borderTopColor);
        var convertit = $(".test").css("borderTopColor");
             $('.bordert').css({background: convertit});
      },
        hide: function (borderTopColor) { updateColor3(".test, .bordert", borderTopColor);
        var convertit = $(".test").css("borderTopColor");
             $('.bordert').css({background: convertit});
              }
    });

    $(".pickers").end().click(function() {
    $(".spectrumbg").spectrum("set", $(".test").css("borderTopColor"));
});
}

/* ------------ border-right-color spectrum color ----------------------*/
if($(".borderr").hasClass("activec")){


    var initialColor4 = $(".test").css("borderRightColor");

    function updateColor4(element4, borderRightColor) {
        $(element4).css("borderRightColor",
                       (borderRightColor ? borderRightColor.toHexString() : ""));
    }

    $(".spectrumbg").spectrum({
        color: initialColor4,
        preferredFormat: "hex6",
        showInput: true,
        showPalette: false,
        move: function (borderRightColor) { updateColor4(".test, .borderr", borderRightColor);
      var convertit = $(".test").css("borderRightColor");
             $('.borderr').css({background: convertit});
           },
        hide: function (borderRightColor) { updateColor4(".test, .borderr", borderRightColor);
      var convertit = $(".test").css("borderRightColor");
             $('.borderr').css({background: convertit});
           }
    });

    $(".pickers").end().click(function() {
    $(".spectrumbg").spectrum("set", $(".test").css("borderRightColor"));
});
}

/* ------------ border-left-color spectrum color ----------------------*/
if($(".borderl").hasClass("activec")){


    var initialColor5 = $(".test").css("borderColor");

    function updateColor5(element5, borderLeftColor) {
        $(element5).css("borderLeftColor",
                       (borderLeftColor ? borderLeftColor.toHexString() : ""));
    }

    $(".spectrumbg").spectrum({
        color: initialColor5,
        preferredFormat: "hex6",
        showInput: true,
        showPalette: false,
        move: function (borderLeftColor) { updateColor5(".test, .borderl", borderLeftColor);
      var convertit = $(".test").css("borderLeftColor");
             $('.borderl').css({background: convertit});
           },
        hide: function (borderLeftColor) { updateColor5(".test, .borderl", borderLeftColor);
      var convertit = $(".test").css("borderLeftColor");
             $('.borderl').css({background: convertit});
           }
    });

    $(".pickers").end().click(function() {
    $(".spectrumbg").spectrum("set", $(".test").css("borderLeftColor"));
});
}
/* ------------ border-bottom-color spectrum color ----------------------*/
if($(".borderb").hasClass("activec")){


    var initialColor6 = $(".test").css("bordeBottomrColor");

    function updateColor6(element6, borderBottomColor) {
        $(element6).css("borderBottomColor",
                       (borderBottomColor ? borderBottomColor.toHexString() : ""));
    }

    $(".spectrumbg").spectrum({
        color: initialColor6,
        preferredFormat: "hex6",
        showInput: true,
        showPalette: false,
        move: function (borderBottomColor) { updateColor6(".test", borderBottomColor);
        var convertit = $(".test").css("borderBottomColor");
             $('.borderb').css({background: convertit});
              },
        hide: function (borderBottomColor) { updateColor6(".test", borderBottomColor);
        var convertit = $(".test").css("borderBottomColor");
             $('.borderb').css({background: convertit});
              }
    });

    $(".pickers").end().click(function() {
    $(".spectrumbg").spectrum("set", $(".test").css("borderBottomColor"));
});
}

 /* ------------ text-color spectrum color ----------------------*/


if($(".text").hasClass("activec")){


    var initialColor7 = $(".test").css("color");


    function updateColor7(element7, color) {
        $(element7).css("color",
                       (color ? color.toHexString() : ""));
    }

    $(".spectrumbg").spectrum({
        color: initialColor7,
        preferredFormat: "hex6",
        showInput: true,
        showPalette: false,
        move: function (color) { updateColor7(".test", color);
             var convertit = $(".test").css("color");
             $('.text').css({background: convertit});
      },
        hide: function (color) { updateColor7(".test", color);
              var convertit = $(".test").css("color");
             $('.text').css({background: convertit});
      }
    });
    $(".text").css({background: initialColor7});

    $(".pickers").end().click(function() {
    $(".spectrumbg").spectrum("set", $(".test").css("color"));
});
}





});




























     $(function(){
$(".pickers").click(function(){


	   /*------------- get the color of palette---------*/
     var getBlockColor = $(this).css("backgroundColor");


     /* ------------ backgroundColor ---------------*/
     if($(".background").hasClass("activec")){
        $(".test").css({background: getBlockColor});
        var initialColor = $(".test").css("background");
        /*----- change the bg value in every click------*/
        var getBackgroundColor = $(".test").css("backgroundColor");
        $(".background").css({background: getBackgroundColor});
     }

   /*------------- border color ------------------*/
     if($(".border").hasClass("activec")){
       $(".test").css({borderColor: getBlockColor});

        /*--------------- change the borderColor-block bg value in every click---------*/
 var getBorderColor = $(".test").css("borderColor");
 $(".border").css({background: getBorderColor});

     }

	 /*------------- text color ------------------*/
     if($(".text").hasClass("activec")){
       $(".test").css({color: getBlockColor});

        /*--------------- change the text-block bg value in every click---------*/
 var getTextColor = $(".test").css("color");
 $(".text").css({background: getTextColor});

     }

     if($(".bordert").hasClass("activec")){
       $(".test").css({borderTopColor: getBlockColor});
       /*----- change the bg value in every click------*/
       var getBorderTopColor = $(".test").css("borderTopColor");
       $(".bordert").css({background: getBorderTopColor});
     }
     if($(".borderr").hasClass("activec")){
       $(".test").css({borderRightColor: getBlockColor});
       /*----- change the bg value in every click------*/
       var getBorderRightColor = $(".test").css("borderRightColor");
       $(".borderr").css({background: getBorderRightColor});
     }
     if($(".borderl").hasClass("activec")){
       $(".test").css({borderLeftColor: getBlockColor});
       /*----- change the bg value in every click------*/
       var getBorderLeftColor = $(".test").css("borderLeftColor");
       $(".borderl").css({background: getBorderLeftColor});
     }
     if($(".borderb").hasClass("activec")){
       $(".test").css({borderBottomColor: getBlockColor});
       /*----- change the bg value in every click------*/
       var getBorderBottomColor = $(".test").css("borderBottomColor");
       $(".borderb").css({background: getBorderBottomColor});
     }
$('.test').click(function(){
/*---------excecute the code------------------------*/
$(".border").css({background: getBorderColor});
$(".bordert").css({background: getBorderTopColor});
$(".borderr").css({background: getBorderRightColor});
$(".borderl").css({background: getBorderLeftColor});
$(".borderb").css({background: getBorderBottomColor});
$(".background").css({background: getBackgroundColor});
$(".text").css({background: getTextColor});

});


});
});
});


});
/* -----------------------------------------------------------------------------------------*/
/* ---------------------------- the end of color Pelette js -------------------------------*/
/* -----------------------------------------------------------------------------------------*/



/* -----------------------------------------------------------------------------------------*/
/* ---------------------------- the start of color border editor js -------------------------------*/
/* -----------------------------------------------------------------------------------------*/

$(function(){

$(function(){


  /* =============================================================================
  ------------------------  border width ========================================
  =============================================================================*/



 /*===============================================
 ---for border width:- trigger clicks for faster value change
 ===============================================*/
$(".add").on("mousedown", function(){
  changingValP = setInterval(function(){
  $(".add").trigger("click");
}, 200);
});
$(".add").on("mouseup", function StopFunction() {
    clearInterval(changingValP);
});

// trigger minus clicks
$(".subtruct").on("mousedown", function(){
  changingValM = setInterval(function(){
  $(".subtruct").trigger("click");
}, 200);
});
$(".subtruct").on("mouseup", function StopFunction() {
    clearInterval(changingValM);
});


/* ================== the first value the user sees =============================== */
$('.active').click(function(){
var topV = $(".active").css("border-top-width");
  var topV = $(".active").css("border-top-width");
   $(".adder").children('.topVal').remove();
   $(".adder").append('<div class="topVal shorteninput" >'+topV+'</div>');

   var rightV = $(".active").css("border-right-width");
   $(".adder2").children('.rightVal').remove();
   $(".adder2").append('<div class="rightVal shorteninput">'+rightV+'</div>');

   var bottomV = $(".active").css("border-bottom-width");
   $(".adder4").children('.bottomVal').remove();
   $(".adder4").append('<div class="bottomVal shorteninput">'+bottomV+'</div>');

   var leftV = $(".active").css("border-left-width");
   $(".adder3").children('.leftVal').remove();
   $(".adder3").append('<div class="leftVal shorteninput">'+leftV+'</div>');

/* =================================================================
--------------- change the value of input per click ================
===================================================================*/
$(".add").click(function(){

    var counter = $('.borderVal').val();
    counter++ ;
   $('.borderVal').val(counter);
 /*==== top ======================================================================*/
   if( $(".adder").hasClass("activeL")){
   $(".active").css({borderTopWidth: counter});

   if($(".adder").children(".topVal")){

      $(".topVal").remove();
     var topV = $(".active").css("border-top-width");
   $(".adder").append('<div class="topVal shorteninput" >'+topV+'</div>');
   }
 }
/*==== right ===================================================================*/
   if( $(".adder2").hasClass("activeL")){
   $(".active").css({borderRightWidth: counter});
   if($(".adder2").children(".rightVal")){

      $(".rightVal").remove();
     var rightV = $(".active").css("border-right-width");
   $(".adder2").append('<div class="rightVal shorteninput" >'+rightV+'</div>');
   }
 }
 /*=== bottom =======================================================================*/

 if( $(".adder4").hasClass("activeL")){
   $(".active").css({borderBottomWidth: counter});

   if($(".adder4").children(".bottomVal")){

      $(".bottomVal").remove();
     var bottomV = $(".active").css("border-bottom-width");
   $(".adder4").append('<div class="bottomVal shorteninput" >'+bottomV+'</div>');
   }
 }

  /*======= left ===================================================================*/

 if( $(".adder3").hasClass("activeL")){
   $(".active").css({borderLeftWidth: counter});

   if($(".adder3").children(".leftVal")){

      $(".leftVal").remove();
     var leftV = $(".active").css("border-left-width");
   $(".adder3").append('<div class="leftVal shorteninput" >'+leftV+'</div>');
   }
 }

});

$(".subtruct").on("click", function(){

    var counterM = $('.borderVal').val();
    counterM--;
   $('.borderVal').val(counterM);
 /*====== top  ====================================================================*/
   if( $(".adder").hasClass("activeL")){
   $(".active").css({borderTopWidth: counterM});

if($(".adder").children(".topVal")){

      $(".topVal").remove();
     var topV = $(".active").css("border-top-width");
   $(".adder").append('<div class="topVal shorteninput" >'+topV+'</div>');
   }

 }

 /*===== right =====================================================================*/
if( $(".adder2").hasClass("activeL")){
  $(".active").css({borderRightWidth: counterM});

  if($(".adder2").children(".rightVal")){

      $(".rightVal").remove();
     var rightV = $(".active").css("border-right-width");
   $(".adder2").append('<div class="rightVal shorteninput" >'+rightV+'</div>');
   }
 }
 /*===== bottom =====================================================================*/
 if( $(".adder4").hasClass("activeL")){
   $(".active").css({borderBottomWidth: counterM});

   if($(".adder4").children(".bottomVal")){

      $(".bottomVal").remove();
     var bottomV = $(".active").css("border-bottom-width");
   $(".adder4").append('<div class="bottomVal shorteninput" >'+bottomV+'</div>');
   }
 }
 /*===== left=====================================================================*/
 if( $(".adder3").hasClass("activeL")){
   $(".active").css({borderLeftWidth: counterM});

   if($(".adder3").children(".leftVal")){

      $(".leftVal").remove();
     var leftV = $(".active").css("border-left-width");
   $(".adder3").append('<div class="leftVal shorteninput" >'+leftV+'</div>');
   }
 }



});
});

 // give .acive class to every adder clicked
 $(".adder, .adder2, .adder3, .adder4").addClass("adders");
 $(".adders").click(function(){
    if(!$(this).hasClass('activeL'))
        {
            $(".adders.activeL").removeClass("activeL");
            $(this).addClass("activeL");

        }
 });

});


$(document).ready(function(){
  $(".model").resizable();
   $(".pop").click(function(){
       $(".test").toggle();
   });
});
$(".adder").click(function(){
    var getBorderTopWidth = $(".active").css("borderTopWidth").replace("px", "");
    $(".borderVal").val(getBorderTopWidth);
});
$(".adder2").click(function(){
    var getBorderRightWidth = $(".active").css("borderRightWidth").replace("px", "");
    $(".borderVal").val(getBorderRightWidth);
});

$(".adder3").click(function(){
    var getBorderLeftWidth = $(".active").css("borderLeftWidth").replace("px", "");
    $(".borderVal").val(getBorderLeftWidth);
});
$(".adder4").click(function(){
     var getBorderBottomWidth = $(".active").css("borderBottomWidth").replace("px", "");
    $(".borderVal").val(getBorderBottomWidth);
});


// border roundness

/* =====================================================================================
---------------------------- border radius ==============================================
=========================================================================================*/

$(function(){

/*===============================================
 ---for border radius:- trigger clicks for faster value change
 ===============================================*/
  $(".addR").on("mousedown", function(){
  changingValP = setInterval(function(){
  $(".addR").trigger("click");
}, 200);
});
$(".addR").on("mouseup", function myStopFunction() {
    clearInterval(changingValP);
});

// trigger minus clicks
$(".subtructR").on("mousedown", function(){
  changingValM = setInterval(function(){
  $(".subtructR").trigger("click");
}, 200);
});
$(".subtructR").on("mouseup", function myStopFunction() {
    clearInterval(changingValM);
});

 /* ================== the first value the user sees =============================== */
$('.active').click(function(){
var topl = $(".active").css("border-top-left-radius");
   $(".topL").children('.topLVal').remove();
   $(".topL").append('<div class="topLVal shorteninput" >'+topl+'</div>');

   var topr = $(".active").css("border-top-right-radius");
   $(".topR").children('.topLValR').remove();
   $(".topR").append('<div class="topLValR shorteninput">'+topr+'</div>');

   var bottoml = $(".active").css("border-bottom-left-radius");
   $(".bottomL").children('.bottomLVal').remove();
   $(".bottomL").append('<div class="bottomLVal shorteninput">'+bottoml+'</div>');

   var bottomr = $(".active").css("border-bottom-right-radius");
   $(".bottomR").children('.bottomRVal').remove();
   $(".bottomR").append('<div class="bottomRVal shorteninput">'+bottomr+'</div>');

$(".addR").click(function(){

    var counterR = $('.borderValR').val();
    counterR++ ;
   $('.borderValR').val(counterR);
/*====== top-left  ====================================================================*/
   if( $(".topL").hasClass("activeR")){
   $(".active").css({borderTopLeftRadius: counterR});
   $(".ttte").css({borderTopLeftRadius: counterR});

   if($(".topL").children(".topLVal")){

      $(".topLVal").remove();
      var topl = $(".active").css("border-top-left-radius");
   $(".topL").append('<div class="topLVal shorteninput" >'+topl+'</div>');
   }



 }
/*====== top-right  ====================================================================*/
   if( $(".topR").hasClass("activeR")){
   $(".active").css({borderTopRightRadius: counterR});
   $(".ttte").css({borderTopRightRadius: counterR});

   if($(".topR").children(".topLValR")){

      $(".topLValR").remove();
      var topr = $(".active").css("border-top-right-radius");
   $(".topR").append('<div class="topLValR shorteninput">'+topr+'</div>');
   }


 }
/*====== bottom-right  ====================================================================*/
 if( $(".bottomR").hasClass("activeR")){
   $(".active").css({borderBottomRightRadius: counterR});
   $(".ttte").css({borderBottomRightRadius: counterR});

   if($(".bottomR").children(".bottomRVal")){

      $(".bottomRVal").remove();
      var bottomr = $(".active").css("border-bottom-right-radius");
   $(".bottomR").append('<div class="bottomRVal shorteninput" >'+bottomr+'</div>');

 }
}

/*====== bottom-left  ====================================================================*/
 if( $(".bottomL").hasClass("activeR")){
   $(".active").css({borderBottomLeftRadius: counterR});
   $(".ttte").css({borderBottomLeftRadius: counterR});

   if($(".bottomL").children(".bottomLVal")){

      $(".bottomLVal").remove();
      var bottoml = $(".active").css("border-bottom-left-radius");
   $(".bottomL").append('<div class="bottomLVal shorteninput" >'+bottoml+'</div>');

 }

 }
});

/*===========================================================================================
----------------------------------- subract of border radius ==================================
==============================================================================================*/

$(".subtructR").on("click", function(){

    var counterMR = $('.borderValR').val();
    counterMR--;
   $('.borderValR').val(counterMR);

   /*====== top-left  ====================================================================*/

   if( $(".topL").hasClass("activeR")){
   $(".active").css({borderTopLeftRadius: counterMR});
   $(".ttte").css({borderTopLeftRadius: counterMR});

   if($(".topL").children(".topLVal")){

      $(".topLVal").remove();
      var topl = $(".active").css("border-top-left-radius");
   $(".topL").append('<div class="topLVal shorteninput" >'+topl+'</div>');
   }

 }

/*====== top-right  ====================================================================*/
if( $(".topR").hasClass("activeR")){
  $(".active").css({borderTopRightRadius: counterMR});
  $(".ttte").css({borderTopRightRadius: counterMR});

   if($(".topR").children(".topLValR")){

      $(".topLValR").remove();
      var topr = $(".active").css("border-top-right-radius");
   $(".topR").append('<div class="topLValR shorteninput">'+topr+'</div>');
   }



 }
/*====== bottom-left  ====================================================================*/
 if( $(".bottomL").hasClass("activeR")){
   $(".active").css({borderBottomLeftRadius: counterMR});
   $(".ttte").css({borderBottomLeftRadius: counterMR});

   if($(".bottomL").children(".bottomLVal")){

      $(".bottomLVal").remove();
     var bottoml = $(".active").css("border-bottom-left-radius");
   $(".bottomL").append('<div class="bottomLVal shorteninput">'+bottoml+'</div>');
   }

 }

/*====== bottom-right  ====================================================================*/
 if( $(".bottomR").hasClass("activeR")){
   $(".active").css({borderBottomRightRadius: counterMR});
   $(".ttte").css({borderBottomRightRadius: counterMR});

   if($(".bottomR").children(".bottomRVal")){

      $(".bottomRVal").remove();
     var bottomr = $(".active").css("border-bottom-right-radius");
   $(".bottomR").append('<div class="bottomRVal shorteninput">'+bottomr+'</div>');
   }

 }



});
});

 /*==================================================================================
 -------- give .acive class to every adder(for changing the border width) clicked=====
 ===================================================================================*/
 $(".topR, .topL, .bottomR, .bottomL").addClass("rounders");
 $(".rounders").click(function(){
    if(!$(this).hasClass('activeR'))
        {
            $(".rounders.activeR").removeClass("activeR");
            $(this).addClass("activeR");

        }
 });




});



$(".topL").click(function(){
    var getBorderTopLeftRadius = $(".active").css("borderTopLeftRadius").replace("px", "");
    $(".borderValR").val(getBorderTopLeftRadius);
});
$(".topR").click(function(){
    var getBorderTopRightRadius = $(".active").css("borderTopRightRadius").replace("px", "");
    $(".borderValR").val(getBorderTopRightRadius);
});

$(".bottomL").click(function(){
    var getBorderBottomLeftRadius = $(".active").css("borderBottomLeftRadius").replace("px", "");
    $(".borderValR").val(getBorderBottomLeftRadius);
});
$(".bottomR").click(function(){
     var getBorderBottomRightRadius = $(".active").css("borderBottomRightRadius").replace("px", "");
    $(".borderValR").val(getBorderBottomRightRadius);
});















/*-------------- border style editor dropdown--------------------*/
$("#borderStyle").change(function() {
    var getChoice = $("#borderStyle option:selected").text();
    $('.active').css('borderStyle', getChoice);
});

/*---------- border Width editor----------------*/
var borderWidthVal = '';
/*------ change the values of input and slider when a new .active element is clicked--------*/
$('.active').click(function(){
var borderWidthVal = $('.active').css('borderWidth').replace("px", "");
$('.active').css('borderWidth').replace("px", "");
$("#a2").val(borderWidthVal);
$( "#a_slider2" ).slider( "option", "value", borderWidthVal );
});

// set the editor
// the input and slider
$('#a2').val(borderWidthVal);

$("#a_slider2").slider({
    orientation: "horizontal",
    range: false,
    min: 0,
    max: 100,
    value: borderWidthVal,
    step: 1,
    animate: true,
    slide: function(event, ui) {
        var heb2 = (ui.value);
        $("#a_field2").val(ui.value);
        $("#a2").val(heb2);
        $(".active").css({
            borderWidth: heb2
        })
    }
});

$("#a2").on('change', function() {
    $("#a_slider2").slider(
        "value", $(this).val()

    );
    var setBW = $('#a2').val();
    $('.active').css({borderWidth: setBW});
});

/*---------- border radius editor ----------------*/
var borderRadiusVal = '';
/*------ change the values of input and slider when a new .active element is clicked--------*/
$('.active').click(function(){
var borderRadiusVal = $('.active').css('borderRadius').replace("px", "");
$('.active').css('borderRadius').replace("px", "");
$("#a3").val(borderRadiusVal);
$( "#a_slider3" ).slider( "option", "value", borderRadiusVal );
});
// set the editor
// the input and slider
$('#a3').val(borderRadiusVal);

$("#a_slider3").slider({
    orientation: "horizontal",
    range: false,
    min: 0,
    max: 100,
    value: borderRadiusVal,
    step: 1,
    animate: true,
    slide: function(event, ui) {
        var heb2 = (ui.value);
        $("#a_field3").val(ui.value);
        $("#a3").val(heb2);
        $(".active").css({
            borderRadius: heb2
        })
    }
});

$("#a3").on('change', function() {
    $("#a_slider3").slider(
        "value", $(this).val()

    );
    var setBW = $('#a3').val();
    $('.active').css({borderRadius: setBW + 'px'});
});

/*---------- margin editor ----------------*/
var marginVal = '';
/*------ change the values of input and slider when a new .active element is clicked--------*/
$('.active').click(function(){
var marginVal = $('.active').css('margin').replace("px", "");
$('.active').css('margin').replace("px", "");
$("#marginInput").val(marginVal);
$( "#marginSlider" ).slider( "option", "value", marginVal );
});
/*------ margin setting slider and input -------*/
$('#marginInput').val(marginVal);

$("#marginSlider").slider({
    orientation: "horizontal",
    range: false,
    min: 0,
    max: 100,
    value: marginVal,
    step: 1,
    animate: true,
    slide: function(event, ui) {
        var heb2 = (ui.value);
        $("#a_field3").val(ui.value);
        $("#marginInput").val(heb2);
        $(".active").css({
            margin: heb2
        })
    }
});

$("#marginInput").on('change', function() {
    $("#marginSlider").slider(
        "value", $(this).val()

    );
    var setBW = $('#marginInput').val();
    $('.active').css({margin: setBW + 'px'});
});



/*---------- padding editor ----------------*/
var paddingVal = '';
/*------ change the values of input and slider when a new .active element is clicked--------*/
$('.active').click(function(){
var paddingVal = $('.active').css('padding').replace("px", "");
$('.active').css('padding').replace("px", "");
$("#paddingInput").val(paddingVal);
$( "#paddingSlider" ).slider( "option", "value", marginVal );
});
/*------ margin setting slider and input -------*/
$('#paddingInput').val(paddingVal);

$("#paddingSlider").slider({
    orientation: "horizontal",
    range: false,
    min: 0,
    max: 100,
    value: paddingVal,
    step: 1,
    animate: true,
    slide: function(event, ui) {
        var heb2 = (ui.value);
        $("#a_field3").val(ui.value);
        $("#paddingInput").val(heb2);
        $(".active").css({
            padding: heb2
        })
    }
});

$("#paddingInput").on('change', function() {
    $("#paddingSlider").slider(
        "value", $(this).val()

    );
    var setBW = $('#paddingInput').val();
    $('.active').css({padding: setBW + 'px'});
});
/*-- make the border editor div draggable --*/
$(".border-settings").draggable();


});

/* -----------------------------------------------------------------------------------------*/
/* ---------------------------- the end of color border editor js -------------------------------*/
/* -----------------------------------------------------------------------------------------*/







/* -----------------------------------------------------------------------------------------*/
/* ---------------------------- the start of position and size editor -------------------------------*/
/* -----------------------------------------------------------------------------------------*/

$(window).load(function(){
$(function(){
/*---------------- height css value spinner -----------------*/
$('.active').click(function(){
  var getval = $('.active').css('height').replace("px", '');
  $('#height').val(getval);
});
$("#height").change(function(){
   var getVal = $('#height').val();
    $('.active').css({height: getVal});
})
$( "#height" ).spinner({
  spin: function( event, ui ) {
    var getVal = $('#height').val();
    $('.active').css({height: getVal});
  }
});

/*----------------- width css value spinner ----------------*/
$('.active').click(function(){
  var getval = $('.active').css('width').replace('px', '');
  $('#width').val(getval);
});
$("#width").change(function(){
   var getVal = $('#width').val();
    $('.active').css({width: getVal});
})
$( "#width" ).spinner({
  spin: function( event, ui ) {
    var getVal = $('#width').val();
    $('.active').css({width: getVal});
  }
});

/*----------------- top css value spinner ----------------*/
$('.active').click(function(){
  var getval = $('.active').css('top').replace('px', '');
  $('#top').val(getval);
});
$("#top").change(function(){
   var getVal = $('#top').val();
    $('.active').css({top: getVal + 'px'});
})
$( "#top" ).spinner({
  spin: function( event, ui ) {
    var getVal = $('#top').val();
    $('.active').css({top: getVal + 'px'});
  }
});

/*----------------- left css value spinner ----------------*/
$('.active').click(function(){
  var getval = $('.active').css('left').replace('px', '');
  $('#left').val(getval);
});
$("#left").change(function(){
   var getVal = $('#left').val();
    $('.active').css({left: getVal + 'px'});
})
$( "#left" ).spinner({
  spin: function( event, ui ) {
    var getVal = $('#left').val();
    $('.active').css({left: getVal+ "px"});
  }
});

});

/*----------------- z-index css value spinner ----------------*/
$('.active').click(function(){
  var getval = $('.active').css('zIndex').replace('px', '');
  $('#z-index').val(getval);
});
$("#z-index").change(function(){
   var getVal = $('#z-index').val();
    $('.active').css({zIndex: getVal});
})
$( "#z-index" ).spinner({
  spin: function( event, ui ) {
    var getVal = $('#z-index').val();
    $('.active').css({zIndex: getVal});
  }
});


/*------------ position editor dropdown ---------------*/
$("#position_").change(function() {
    var getChoice = $("#position_ option:selected").text();
    $('.active').css('position', getChoice);
});


$('.position-size').draggable();
});//]]>




/* -----------------------------------------------------------------------------------------*/
/* ---------------------------- the end of position and size editor -------------------------------*/
/* -----------------------------------------------------------------------------------------*/



/* -----------------------------------------------------------------------------------------*/
/* ---------------------------- the start of padding and margin editor -------------------------------*/
/* -----------------------------------------------------------------------------------------*/
$(function(){
	
	$('#margin_padding').draggable();
	
$('.marginInputs').click(function(){
  if(!$(this).hasClass('activeInput')){
     $('.marginInputs.activeInput').removeClass('activeInput');
     $(this).addClass('activeInput');
  }
});

/*------ margin-top ------------------*/
var getMarginTop = '';
$('.active').click(function(){
var getMarginTop = $('.active').css('marginTop').replace("px", "");
$(".margin-top").val(getMarginTop);
});
// set the editor
// the input and slider
$('.margin-top').val(getMarginTop);



$(".margin-top").on('change', function() {
    $("#mt-slider").slider(
        "value", $(this).val()

    );
    var setBW = $('.margin-top').val();
    $('.active').css({marginTop: setBW+'px'});
});

/*------ margin-Left ------------------*/
var getMarginLeft = '';
$('.active').click(function(){
var getMarginLeft = $('.active').css('marginLeft').replace("px", "");
$(".margin-left").val(getMarginLeft);
});
// set the editor
// the input and slider
$('.margin-left').val(getMarginLeft);



$(".margin-left").on('change', function() {
    $("#ml-slider").slider(
        "value", $(this).val()

    );
    var setBW = $('.margin-left').val();
    $('.active').css({marginLeft: setBW+'px'});
});

/*------ margin-Right ------------------*/
var getMarginRight = '';
$('.active').click(function(){
var getMarginRight = $('.active').css('marginRight').replace("px", "");
$(".margin-right").val(getMarginRight);
});
// set the editor
// the input and slider
$('.margin-right').val(getMarginRight);


$(".margin-right").on('change', function() {
    $("#mr-slider").slider(
        "value", $(this).val()

    );
    var setBW = $('.margin-right').val();
    $('.active').css({marginRight: setBW+'px'});
});
/*------ margin-Bottom ------------------*/
var getMarginBottom = '';
$('.active').click(function(){
var getMarginBottom = $('.active').css('marginBottom').replace("px", "");
$(".margin-bottom").val(getMarginBottom);
});
// set the editor
// the input and slider
$('.margin-bottom').val(getMarginBottom);


$(".margin-bottom").on('change', function() {
    $("#mb-slider").slider(
        "value", $(this).val()

    );
    var setBW = $('.margin-bottom').val();
    $('.active').css({marginBottom: setBW+'px'});
});

/*------ padding-top ------------------*/
var getPaddingTop = '';
$('.active').click(function(){
var getPaddingTop = $('.active').css('paddingTop').replace("px", "");
$(".padding-top").val(getPaddingTop);
});
// set the editor
// the input and slider
$('.padding-top').val(getPaddingTop);


$(".padding-top").on('change', function() {
    $("#pt-slider").slider(
        "value", $(this).val()

    );
    var setBW = $('.padding-top').val();
    $('.active').css({paddingTop: setBW+'px'});
});


/*------ padding-Left ------------------*/
var getPaddingLeft = '';
$('.active').click(function(){
var getPaddingLeft = $('.active').css('paddingLeft').replace("px", "");
$(".padding-left").val(getPaddingLeft);
});
// set the editor
// the input and slider
$('.padding-left').val(getPaddingLeft);


$(".padding-left").on('change', function() {
    $("#pl-slider").slider(
        "value", $(this).val()

    );
    var setBW = $('.padding-left').val();
    $('.active').css({paddingLeft: setBW+'px'});
});

/*------ padding-Right ------------------*/
var getPaddingRight = '';
$('.active').click(function(){
var getPaddingRight = $('.active').css('paddingRight').replace("px", "");
$(".padding-right").val(getPaddingRight);
});
// set the editor
// the input and slider
$('.padding-right').val(getPaddingRight);


$(".padding-right").on('change', function() {
    $("#pr-slider").slider(
        "value", $(this).val()

    );
    var setBW = $('.padding-right').val();
    $('.active').css({paddingRight: setBW+'px'});
});
/*------ padding-Bottom ------------------*/
var getPaddingBottom = '';
$('.active').click(function(){
var getPaddingBottom = $('.active').css('paddingBottom').replace("px", "");
$(".padding-bottom").val(getPaddingBottom);
});
// set the editor
// the input and slider
$('.padding-bottom').val(getPaddingBottom);



$(".padding-bottom").on('change', function() {
    $("#pb-slider").slider(
        "value", $(this).val()

    );
    var setBW = $('.padding-bottom').val();
    $('.active').css({paddingBottom: setBW+'px'});
});

$(".mp").draggable();
$("#margin").draggable();
$("#padding").draggable();

});


/* -----------------------------------------------------------------------------------------*/
/* ---------------------------- the end of padding and margin editor -------------------------------*/
/* -----------------------------------------------------------------------------------------*/


/* -----------------------------------------------------------------------------------------*/
/* ---------------------------- the start of shadow editor -------------------------------*/
/* -----------------------------------------------------------------------------------------*/

jQuery(document).ready(function ($) {
      $('input').change(function(){
        var active = $('.active');
        var bgColor = '#'+$('#bgcolor').val();
        var xOffset = $('.xOffset').val();
        var yOffset = $('.yOffset').val();
        var blur = $('.blur').val();
        var spread = $('.spread').val();
        $(active).css('box-shadow',''+ xOffset +'px '+yOffset+'px '+ blur +'px '+ spread +'px '+bgColor);
      });
    });


	$('.shadow').draggable();
	
	/* make the text editor and the code editor */
 $('.generate').click(function(){
	 $('*').removeClass('ui-resizable-autohide ui-resizable ui-draggable ui-draggable-handle resizable-handle ui-resizable-handle ui-resizable-e ui-resizable-s i-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se');
      var source = $(".me3").html();
      $(".showSource").text(source);
	  /*if($('.showSource').has().text('tab ui-draggable ui-draggable-handle ui-resizable ui-resizable-autohide')){
      mystring = $(".showSource").text();
      var newstring = mystring.split('tab ui-draggable ui-draggable-handle ui-resizable ui-resizable-autohide').join(" ");
	  $('.showSource').text(newstring);
      }*/
 });
/* -----------------------------------------------------------------------------------------*/
/* ---------------------------- the end of shadow editor -------------------------------*/
/* -----------------------------------------------------------------------------------------*/
});/* the end of the main file */