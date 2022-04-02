import $ from 'jquery';
import textito from './textito.js'

let cerdito_magico_wrapper = $('#cerdito-magico-wrapper');
let cerdito_magico = $('#cerdito-magico');
let cuentame_btn = $('#cuentame');
let cuentame_btns = $('.contar-cuento');
let message_wrapper = $('#header .message-wrapper');
let cuentito_wrapper = $('#cuentito-wrapper');
let final_wrapper = $('#final-wrapper');
let page_1 = $('#hoja-1');
let page_2 = $('#hoja-2');
let hojas = $('.hojas')
let siguiente_btn = $('#siguiente');
let page = 0;
let textito_wrapper = $('#textito-wrapper')
let bg = $('#background')
let start = $('#start')

hojas.find('img').fadeOut('slow')
textito_wrapper.fadeOut('slow')

const sleep = async function (ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
}

async function runPage(){
    console.log('ok');
    
    setInterval(poblarDeCopitos, 60000);
    poblarDeCopitos();
    
    $(function () {
        cuentame_btns.on('click', cuentame);
        siguiente_btn.on('click',nextPage);
        final_wrapper.fadeOut("slow");
        start.fadeOut("slow");
        
        var audio = new Audio('./merry-go-round_of_life.mp3');
        audio.play();
        // debug
        // cuentame()
        // final()
    });

    $(document).on('scroll',function () {
        let scroll = document.documentElement.scrollTop;

        cerdito_magico_wrapper.css('top', scroll)

        if (scroll > 3){
            cerdito_magico_wrapper.addClass('cerdito-left')
            message_wrapper.fadeOut("slow")
            
        }else{
            cerdito_magico_wrapper.removeClass('cerdito-left')
            message_wrapper.fadeIn("slow")
        }
    });


    
}


function cuentame(){

    bg.removeClass('with-hearts')

    $('html').css('overflow', 'initial');
    $('body').css('overflow', 'initial');
    siguiente_btn.fadeOut('fast');

    page = 0;

    $([document.documentElement, document.body]).animate({
        scrollTop: cuentito_wrapper.offset().top
    }, 5000);

   
    setTimeout(function(){
        textito_wrapper.fadeIn('slow')
    }, 3500);


    setTimeout(loadPage, 4000);

}

function final(){

    bg.addClass('with-hearts')

    final_wrapper.fadeIn('slow')

    $([document.documentElement, document.body]).animate({
        scrollTop: final_wrapper.offset().top
    }, 5000);
    setTimeout(function () {
    }, 3500);
}

function poblarDeCopitos(){
    $('.Dashboard-members').html('');

    for (let i = 0; i < 200; i++) {
        $('.Dashboard-members').append(`
            <div class="Dashboard-members-dot">
                <div class="Member"></div>
            </div>
        `)

    }
}

function nextPage(){
    page = page + 1;
    loadPage();
}

async function loadPage(){
    siguiente_btn.fadeOut('fast');
    page_1.find('p').fadeOut('slow');
    page_2.find('p').fadeOut('slow');
    hojas.find('img').fadeOut('slow');


    if(!textito[page]){
        page=0;
        final();
        await sleep(5000);
    }

    let txt_1 = textito[page][0].txt.replaceAll('\n', '<br>');
    let txt_2 = textito[page][1].txt.replaceAll('\n','<br>');

    let img_1 = textito[page][0].img;
    let img_2 = textito[page][1].img;

    let init_1 = textito[page][0].initial;
    let init_2 = textito[page][1].initial;

    if (init_1){
        page_1.addClass('initial')
    }

    await sleep(500);
    

    page_1.removeClass('initial')
    if (init_1) {
        page_1.addClass('initial')
    }
    page_1.find('p').html(txt_1);
    page_2.find('p').html(txt_2);
    
    page_1.find('p').fadeIn('slow');
    page_2.find('p').fadeIn('slow');

    if (img_1){
        $(img_1).fadeIn('slow')
        console.log($(img_1));
        
    }
    if (img_2) {
        $(img_2).fadeIn('slow')
    }
    await sleep(500);

    siguiente_btn.fadeIn('slow')


}

export default runPage;