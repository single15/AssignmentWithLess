$(document).ready(function() {
    $.getJSON("./js/products.json", function(data) {
        let content = '';
        for(let i = 0; i < data.length; i++) {
            let item = `
                <div class="product-item">
                    <figure class="item-img">
                        <img src="./images/${data[i].src}" alt="${data[i].title}">
                    </figure>
                    <div class="item-details">
                        <h2>${data[i].title}</h2>
                        <div class="item-description">
                            <h3>${data[i].subtitle}</h3>
                            <span>
                                ${data[i].description}
                            </span>
                        </div>
                    </div>
                </div>
            `;

            content = content + item;
        }
        
        $('#product-list').html(content);
    })

    $.getJSON("./js/gallery.json", function(icons){
        let content = '';
        for(let i = 0; i < 30; i++) {
            let item = `<div class="grid-item">
                            <figure>
                                <img src="./images/gallery/${icons[i%icons.length]}.png" alt="">
                            </figure>
                        </div>`;
            content = content + item;
        }
        $('#grid-container').html(content);
    })

    $('button#send-details').click(function() {
        let name = $('#name')[0].value;
        let phone = $('#phone')[0].value;
        let email = $('#email')[0].value;
        let message = $('#message')[0].value;

        if(!name || !phone || !email || !message) {
            alert('Please fill all the details.');
        } else {
            alert('Thanks you for contacting us. we will contact back you shortly!!');
        }
    });
});

$(document).on('scroll', function() {
    if(window.scrollY > 800)  $('#back-to-top').css("visibility", "visible")    
    else $('#back-to-top').css("visibility", "hidden")
});


function onSubmit() {
    let userEmail = document.getElementById('user-email');
    if(userEmail.value) {
        confirm(`You will get updates from us on ${userEmail.value}. Thank you for visiting us!!`)
        userEmail.value = ''
    } else {
        alert('Please enter email.')
    }    
}

function onClickHamburger() {
    let menuList = $('#menu-list')[0];
    let innerHTML = $('#mobile-menu')[0].innerHTML;
    console.log('innerHTML', innerHTML);
    console.log('menuList', menuList);
    if(innerHTML) {
        $('#menus').html(menuList);
        $('#mobile-menu').css("display", "none");        
        $('#mobile-menu').html('');
    }else {
        $('#mobile-menu').css("display", "block");
        $('#mobile-menu').html(menuList);
    }
}



