
/// <reference types="../@types/jquery" />



// ===== when document is ready =====

$(function(){







    
    // ===== outside loading screen style =====

    $('.spinner').fadeOut( 800 , function () {
        $('#loadingScreen').fadeOut(800 )
            $('body , html').css( 'overflow' , 'auto') ;
    })


    new WOW().init();

// =============== Nice scroll and changing navbar background  =========================

 let sectionOffset =  $('#offers').offset().top ;

 // when window scroll 
 
 $(window).scroll( function(){
 
   let windowScroll =  $(window).scrollTop() ;
 
   if ( windowScroll > sectionOffset -100 ){
     $('.navbar').css( 'backgroundColor' , 'rgba(128, 128, 128, 0.4)') ;
     $('#buttonUp').fadeIn(500) ;
   }
 
   else { 
     $('.navbar').css( 'backgroundColor' , 'transparent') ;
     $('#buttonUp').fadeOut(500) ;
 
   }
 
 });
 
 
 
 // nice scroll when click on any link  
 
 $('a[href^="#"]').click(function( e ){
 
 
    let clickedLink =  e.target.getAttribute('href') ;
 
    let linkOffset =  $(clickedLink).offset().top ;
 
     $('html , body').animate( { scrollTop:  linkOffset  }  , 3000)
 })
 
 
 // nice scroll when click on side button to slide up
 
 $('#buttonUp').click(function(){
 
     $('html , body').animate( { scrollTop : 0} , 1000)
 } )
 
 
 
 
 
 
 
 
 // =============== OWL carousel in product  =========================
 
 
 $('.owl-carousel').owlCarousel({
   loop:true,
   nav:true,
   autoplay:true,
   autoplaySpeed:1000/true,
   autoplayTimeout:2000,
   dots:true,
   responsive:{
       0:{
           items:1
       },
       768:{
           items:2
       },
       1000:{
           items:3
       }
   }
});

 

 



// ===================  sidebar style ====================== //


let sideBarInnerWidth = $('#sideBarInner').innerWidth();
$('#sideBar').css(  'right' , -sideBarInnerWidth ) ;

 // ==== when click on icon ====
 $('.sideBarIcon').click( function (){
    if ( $('#sideBar').css('right') == '0px' ){
     $('#sideBar').animate(  { right : -sideBarInnerWidth } , 1000  ); 
     $('#cods-close-icon').removeClass('fa-xmark');
     $('#cods-close-icon').addClass('fa-cogs')

    }
    else {
     $('#sideBar').animate(  { right : 0} , 1000  );
     $('#cods-close-icon').removeClass('fa-cogs');
     $('#cods-close-icon').addClass('fa-xmark');
     $('#cods-close-icon').removeClass('fa-bounce');


     
    }
  } )
 

// ===== dark mode =====
$('#darkMode').css('display' , 'none')
 $('#lightMode').click( function(){

$('#darkMode').css('display' , 'block')
$('#lightMode').css('display' , 'none')
  $('#offers , #skinProducts , #hairProducts , #bodyProducts ').css('backgroundColor' , 'black' );
  $('.owl-carousel .owl-nav button.owl-next , .owl-carousel .owl-nav button.owl-prev').css('color' , 'white' )
  $('#offers h2 , #hairProducts h2 , #skinProducts h2 , #bodyProducts h2 , #bodyProducts h6 , #hairProducts h6 , #skinProducts h6 , #skinProducts p ').css('color' , 'white')
})

// ===== light mode =====
$('#darkMode').click(function(){
   $('#darkMode').css('display' , 'none')
$('#lightMode').css('display' , 'block')
$('#offers').css('backgroundColor' , '#EEEEEE' )
$('#skinProducts ').css('backgroundColor' , '#F1EAE4' )
$('#hairProducts ').css('backgroundColor' , 'white' )
$('#bodyProducts ').css('backgroundColor' , 'white' )
$('.owl-carousel .owl-nav button.owl-next , .owl-carousel .owl-nav button.owl-prev').css('color' , 'black' )
$('#offers h2 , #hairProducts h2 , #skinProducts h2 , #bodyProducts h2 , #bodyProducts h6 , #hairProducts h6 , #skinProducts h6 , #skinProducts p ').css('color' , 'black')

})



// =================================================================================

  // ==== offers array ====

let offers = [
   {
      id:'1',
      img: './images/1.jpg',
      title: ' دراكون كريم ومزيل عرق ',
      price: '245',
      description: 'للوقاية من الشمس وتفتيح البشرة'
   },
   {
      id:'2',
      img: './images/2.jpg',
      title: 'كريم وغسول أكرن   ',
      price: '130',
      description: 'لعلاج حبوب الشباب'
      
   },
   {
      id:'3',
      img: './images/3.jpg',
      title: '  عرض سيباكلير    ',
      price: '450',
      description: 'غسول +تونر +كريم مرطب +كريم مقشر'
   },
   {
      id:'4',
      img: './images/4.jpg',
      title: '  كولاجرا سيرم  ',
      price: '200',
      description: 'لتوحيد لون البشرة وحمايتها'
   },
   {
      id:'5',
      img: './images/5.jpg',
      title: 'تيلوفيل جل وكريم '  ,
      price: '250',
      description: 'للوقاية من أشعة الشمس'
   },
   {
      id:'6',
      img: './images/6.jpg',
      title: ' ماليندا جل وكريم  ' ,
      price: '360',
      description: 'لتنظيف وترطيب البشرة'
   },
   {
      id:'7',
      img: './images/7.jpg',
      title: ' غسول أرجينتو ' ,
      price: '295',
      description: 'لتفتيح وتوحيد لون البشرة'
   },
   {
      id:'8',
      img: './images/8.jpg',
      title: '  غسول مارين كولاجين ' ,
      price: '150',
      description: 'لترطيب وشد البشرة'
   },
   {
      id:'13',
      img: './images/13.jpg',
      title: ' مجموعة الترطيب جل وكريم ' ,
      price: '165',
      description: 'لترطيب البشرة الحساسة'
   },
   {
      id:'9',
      img: './images/9.jpg',
      title: ' مجموعة البشرة والشعر' ,
      price: '550',
      description: ''
   },

   {
      id:'10',
      img: './images/10.jpg',
      title: ' صن بلوك+ماء ميسيلار+كونسيلير' ,
      price: '375',
      description: ''
   },
   {
      id:'11',
      img: './images/11.jpg',
      title: ' مجموعة السوبر هيالورونيك' ,
      price: '550',
      description: ''
   },
   {
      id:'12',
      img: './images/12.jpg',
      title: '  cleo grow مجموعة  ' ,
      price: ' 375  ',
      description: ''
   },

   {
      id:'14',
      img: './images/14.jpg',
      title: ' عرض تولا بديل الزيت' ,
      price: '295',
      description: ''
   },
   {
      id:'15',
      img: './images/15.jpg',
      title: ' إنفينيتى صن لوشن' ,
      price: '265',
      description: ''
   },
   {
      id:'16',
      img: './images/16.jpg',
      title: ' إنفينيتى صن جل ' ,
      price: '275',
      description: ' '
   },
   {
      id:'17',
      img: './images/17.jpg',
      title: ' لوفى صن بلوك كريم' ,
      price: '220',
      description: ''
   },
  
 
  
   
]

 // ==== displayOffers function ====
displayOffers()

function displayOffers(){
   let offer = '';
   for (let i = 0; i < offers.length; i++) {
      
      offer += `
      <div  class="col-md-6 col-lg-4 wow fadeInUpBig"  data-wow-delay=".5s">
      <div  class="card">
        <figure>
          <img
            src="${offers[i].img}"
            class="w-100"
            alt=" ${offers[i].title} "
          />
        </figure>

         <figcaption class="offers-text ">
          <h6> ${offers[i].title} </h6>
          <p>  ${offers[i].description} </p>
          <span class="h5">السعر : ${offers[i].price} جنيه</span>
        </figcaption>
      </div>
      </div>

      `;
      
   }

   document.getElementById('offersId').innerHTML = offer ;

}

  // ==== productsBody array ====
let productsBody = [
   {
      img: './images/body1.jpg',
      title: ' بادى لوشن بالرمان ',
      price: '170'
   } ,
   {
      img: './images/body2.jpg',
      title: '   lavender calm شاور جل ',
      price: '140'
   } ,
   {
      img: './images/body3.jpg',
      title: '  بادى لوشن بالقرفة',
      price: '170'
   } ,
   {
      img: './images/body4.jpg',
      title: '  كريم مرطب بالرمان',
      price: '150'
   } ,
   {
      img: './images/body5.jpg',
      title: ' white lily شاور جل',
      price: '90'
   } ,
   {
      img: './images/body6.jpg',
      title: '  secret lagoon شاور جل  ',
      price: '135'
   } ,
   {
      img: './images/body7.jpg',
      title: '  شاور جل الفواكه الاستوائية',
      price: '135'
   } ,
   {
      img: './images/body8.jpg',
      title: '  بادى لوشن بالتوت البرى',
      price: '170'
   } ,
   {
      img: './images/body9.jpg',
      title: '   extreme limits for men شاور جل ',
      price: '110'
   } ,
   {
      img: './images/body10.jpg',
      title: ' شاور جل بلو ',
      price: '75'
   } ,
   {
      img: './images/body11.jpg',
      title: '   tropical mexicana شاور جل ',
      price: '140'
   } ,
   {
      img: './images/body12.jpg',
      title: '  شاور جل فريدا',
      price: '85'
   } ,
   {
      img: './images/body13.jpg',
      title: '   pure marie شاور جل ',
      price: '90'
   } ,
   {
      img: './images/body14.jpg',
      title: '  بادى لوشن افون كير ',
      price: '135'
   } ,
   {
      img: './images/body15.jpg',
      title: '  شاور جل بلوب',
      price: '60'
   } ,
   {
      img: './images/body16.jpg',
      title: '   raspberry delight شاور جل ',
      price: '130'
   } ,
   {
      img: './images/body17.jpg',
      title: '  tropical mexicana شاور جل  ',
      price: '130'
   } ,
   {
      img: './images/body18.jpg',
      title: ' بادى لوشن بالافوكادو',
      price: '170'
   } ,
   {
      img: './images/body19.jpg',
      title: '   raspberry delight شاور جل ',
      price: '140'
   } ,


]


  // ==== displayBody function ====

  displayBody()

  function displayBody()
  {
   
   let cartona = '';
   for ( let i = 0 ; i < productsBody.length ; i++ ){

      cartona += `

   <div class="col-md-6 col-lg-4">
     <div class="haircard">
        <figure>
         <img
          src="${productsBody[i].img}"
          class="w-100"
          alt=" ${productsBody[i].title} "/>
       </figure>
      
      <figcaption class="p-3">
        <h6> ${productsBody[i].title} </h6>
        <span class="h5">السعر : ${productsBody[i].price} جنيه</span>
        </figcaption>
      
     </div>
   </div>
  
      `

   }

   document.getElementById('bodyId').innerHTML = cartona ;

  }


  // ==== productsHair array ====
 let productsHair = [
   {
      img: './images/hair1.jpg',
      title: ' أمبولات تريتو',
      price: '40'
   } ,

   {
      img: './images/hair2.jpg',
      title: '  أمبولات توب هير ',
      price: '40'
   } ,

   {
      img: './images/hair3.jpg',
      title: ' أمبولات هير ميكس         ',
      price: '40'
   } ,

   {
      img: './images/hair4.jpg',
      title: ' مجموعة الشعر الليس من بندولين     ',
      price: '248'
   } ,
   {
      img: './images/hair5.jpg',
      title: '  مجموعة ماجيك للشعر         ',
      price: '225'
   } ,
   {
      img: './images/hair6.jpg',
      title: '   مجموعة هير فورت   ',
      price: '450'
   } ,
   {
      img: './images/hair7.jpg',
      title: ' مجموعة سترونج فيل     ',
      price: '555'
   } ,
   {
      img: './images/hair8.jpg',
      title: 'شامبو ضد القشرة',
      price: '125'
   } ,
   {
      img: './images/hair9.jpg',
      title: ' شامبو مقوى ومرطب للشعر        ',
      price: '125'
   } ,
   {
      img: './images/hair10.jpg',
      title: ' غذاء ومقوى للشعر       ',
      price: '125'
   } ,
   {
      img: './images/hair11.jpg',
      title: ' لوشن مضاد لتساقط الشعر       ',
      price: '125'
   } ,
   {
      img: './images/hair12.jpg',
      title: '  شامبو+لوشن لايقاف تساقط الشعر       ',
      price: '295'
   } ,
   {
      img: './images/hair13.jpg',
      title: ' شامبو+بديل زيت+لوشن       ',
      price: '395'
   } ,
   {
      img: './images/hair14.jpg',
      title: ' تولا بيبى شامبو+بديل الزيت       ',
      price: '295'
   } ,
   {
      img: './images/hair15.jpg',
      title: ' كريم الشعر الكيرلى للأطفال       ',
      price: '295'
   } ,
   {
      img: './images/hair16.jpg',
      title: ' تولا شامبو للأطفال       ',
      price: '295'
   } ,
   {
      img: './images/hair17.jpg',
      title: ' تولا شامبو للكبار       ',
      price: '295'
   } ,
   {
      img: './images/hair18.jpg',
      title: ' تولا بيبى شامبو+كريم للشعر       ',
      price: '295'
   } ,
   {
      img: './images/hair19.jpg',
      title: ' تولا هير شامبو+بديل الزيت       ',
      price: '295'
   } ,
   {
      img: './images/hair20.jpg',
      title: ' شامبو وبلسم       ',
      price: '125'
   } ,
   {
      img: './images/hair21.jpg',
      title: ' شامبو وبلسم       ',
      price: '125'
   } ,
   {
      img: './images/hair22.jpg',
      title: ' شامبو وبلسم       ',
      price: '125'
   } ,
   {
      img: './images/hair23.jpg',
      title: ' شامبو أدفانس تيكنيك        ',
      price: '140'
   } ,
   {
      img: './images/hair24.jpg',
      title: ' شامبو أدفانس تيكنيك       ',
      price: '140'
   } ,
   {
      img: './images/hair25.jpg',
      title: '  بلسم بالكرياتين        ',
      price: '110'
   } ,
   {
      img: './images/hair26.jpg',
      title: ' بلسم بالبروتينات       ',
      price: '110'
   } ,
   {
      img: './images/hair27.jpg',
      title: ' شامبو بالبروتينات       ',
      price: '110'
   } ,
   {
      img: './images/hair28.jpg',
      title: '      للشعر girly   مجموعة       ',
      price: '335'
   } ,
 

]

  // ==== displayHair function ====

displayHair()

function displayHair(){

   let cartona = '';
   for ( let i = 0 ; i < productsHair.length ; i++ ){

      cartona += `

   <div class="col-md-6 col-lg-4">
     <div class="haircard">
        <figure>
         <img
          src="${productsHair[i].img}"
          class="w-100"
          alt=" ${productsHair[i].title} "/>
       </figure>
      
      <figcaption class="p-3">
        <h6> ${productsHair[i].title} </h6>
        <span class="h5">السعر : ${productsHair[i].price} جنيه</span>
        </figcaption>
      
     </div>
   </div>
  
      `

   }

   document.getElementById('hairId').innerHTML = cartona ;

}







    
})

   
