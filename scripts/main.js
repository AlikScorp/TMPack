
document.querySelectorAll(".burger-btn").forEach((element) => {
  element.onclick = function () {
    document.querySelector(".burger-menu").classList.toggle("active");
  };
});

$("input, textarea").change().css("color", "white");

$("button[hreflang='ru']").on('click', function() {
  var link = document.createElement('a');
	link.setAttribute('href', '/files/offer_rus.pdf');
	link.setAttribute('target', '_blank');
	link.click();
	return false;
});

$("button[hreflang='en']").on('click', function() {
  var link = document.createElement('a');
	link.setAttribute('href', '/files/offer_eng.pdf');
	link.setAttribute('target', '_blank');
	link.click();
	return false;
});

$(function() {

  $('#submit-form').on('click', function() {

    const first_name = $("#first_name").val();
    const last_name = $("#last_name").val();
    const email = $("#email").val();
    const phone_prefix = $('#phone_prefix').val();
    const phone_number = $('#phone_number').val();
    const country = $('#country').val();
    const city = $('#city').val();
    const fileHandle = $('#file')[0];
    const message = $('#message').val();

    let formData = new FormData();

    formData.append( 'first_name', first_name);
    formData.append( 'last_name', last_name );
    formData.append( 'email', email );
    formData.append( 'phone_number', `+${phone_prefix} ${phone_number}` );
    formData.append( 'country', country );
    formData.append( 'city', city );

    if (fileHandle.files.length > 0) {
        formData.append( 'file', fileHandle.files[0], fileHandle.files[0].name );
    }

    formData.append( 'message', message );
    formData.append( 'subject', 'Request for commercial proposal' );
    
    let request = new XMLHttpRequest();
    request.open('POST', '/mail.php');
    
    request.onloadstart = function() {
        $('.loading').show();
    };
    
    request.onload = function() {
        if ( request.status == 200 ) {
            $('.loading').hide();
            $('.dialogue').show();
            return true;
        }
        else {
            return false;
        }
    };
    
    request.send( formData );
    
  });

  $('.order').on('click', function() {
    $('.dialogue').hide();
  });
  
  $('#submit-call-menu').on('click', function() {
    const form = $('#call-request-form');
    const phone_prefix = form.find('#call-request-prefix').val();
    const phone_number = form.find('#call-request-phone').val();

    if (phone_number !== '') {

      formData = new FormData();

      formData.append( 'first_name', 'N/A');
      formData.append( 'last_name', 'N/A' );
      formData.append( 'email', 'N/A' );
      formData.append( 'phone_number', `+${phone_prefix} ${phone_number}` );
      formData.append( 'country', 'N/A' );
      formData.append( 'city', 'N/A' ); 
      formData.append( 'message', 'N/A' );
      formData.append( 'subject', 'Request a call');
      
      let request = new XMLHttpRequest();
      request.open('POST', '/mail.php');

      request.onloadstart = function() {
        $('.sendWord').hide();
        $('.sk-child').toggleClass('cl-white');
        $('.sendInProgress').show();
      };
    
      request.onload = function() {
        if ( request.status == 200 ) {
            $('.sk-child').toggleClass('cl-white');
            $('.sendInProgress').hide();
            $('.readyWord').show();
            // return true;
        }
        else {
            return false;
        }
      };
    
      request.send( formData );

    }

    return false;

  });

  $('#request-call-button, .call-menu-btn-o').on('click', function() {
    $('.call-menu').show().toggleClass('active');
  });

});

document.querySelectorAll("button").forEach((element) => {
  element.onmousedown = function () {
    element.classList.add("clicked");
  };
  element.onmouseup = function () {
    element.classList.remove("clicked");
  };
});

document.querySelector(".file").onchange = function (event) {
  document.querySelector(".fileText").innerHTML = event.target.files[0].name;
};

// document.querySelectorAll(".order").forEach((element) => {
//   element.onclick = function (event) {
//     event.preventDefault();
//     document.querySelector(".dialogue").classList.toggle("active");
//   };
// });

// document.querySelectorAll(".call-menu-btn-o").forEach((element) => {
//   element.onclick = function (event) {
//     event.preventDefault();
//     document.querySelector(".call-menu").style.display = 'block';
//     document.querySelector(".call-menu").classList.add("active");
//   };
// });

document.querySelector(".call-menu-btn-c").onclick = function (event) {
  event.preventDefault();
  $(".call-menu").toggleClass("active");
  $(".call-menu").hide();
  $(".sendWord").show();
  $('.sendInProgress').hide();
  $(".readyWord").hide();
  $('#call-request-prefix').val('7');
  $('#call-request-phone').val('');
};

// document.querySelector(".sendCall").onclick = function (event) {
//   event.preventDefault();
//   document.querySelector(".readyWord").style.display = "block";
//   document.querySelector(".sendWord").style.display = "none";
// };

// var linkNav = document.querySelectorAll("a"), //выбираем все ссылки к якорю на странице
//   V = 0.05; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
// for (var i = 0; i < linkNav.length; i++) {
//   linkNav[i].addEventListener(
//     "click",
//     function (e) {
//       //по клику на ссылку
//       e.preventDefault(); //отменяем стандартное поведение
//       var w = window.pageYOffset, // производим прокрутка прокрутка
//         hash = this.href.replace(/[^#]*(.*)/, "$1"); // к id элемента, к которому нужно перейти
//       (t = document.querySelector(hash).getBoundingClientRect().top), // отступ от окна браузера до id
//         (start = null);
//       requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
//       function step(time) {
//         if (start === null) start = time;
//         var progress = time - start,
//           r = t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t);
//         window.scrollTo(0, r);
//         if (r != w + t) {
//           requestAnimationFrame(step);
//         } else {
//           location.hash = hash; // URL с хэшем
//         }
//       }
//     },
//     false
//   );
// }
