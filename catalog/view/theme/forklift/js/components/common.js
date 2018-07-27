function init() {
    this.topMenu();
    //this.magnificProductImg();
    //this.feedback();
    //this.getPrice();

    if (window.urlShowAllModels !== undefined) {
        this.showPaginationBlock();
        this.showAllModels();
        this.pagination();
    }
}


export const topMenuActive = () => {
    const arrMenu = document.querySelectorAll('.top-menu__link');
    const baseUrl = document.querySelector('base').getAttribute('href');
    for (let i = 0, len = arrMenu.length; i < len; i++) {
        if(document.location.href === arrMenu[i].href) {
            arrMenu[i].classList.add('active');
        }
    }
    if(document.location.href === baseUrl) {
        arrMenu[0].classList.add('active');
    }
};

// Блок подкатегорий в каталоге
export const subCategories = () => {
    var wrapper = $('.similar-categories');
    var parent = $('.category-box__item > a.active');
    var children = parent.next().next('.category-box__sub-menu');
    var clone = children.clone();
    $(clone).find('.active').parent().remove();
    var links = $(clone).find('a');
    links.each(function (i, item) {
        $(item).removeAttr('title');
        var text = $(item).text();
        $(item).html('<span>' + text + '</span>');
    });
    wrapper.html(clone);
};

export const showPaginationBlock = () => {
    const links = $('.category-products-panel__pagination .links');
    const wrapper = $('.category-products-panel__pagination-section');
    if (links.find('a').length <= 0) {
        wrapper.hide();
    }
};

export const showAllModels = () => {
    const decodedUrl = window.urlShowAllModels.replace(/&amp;/g, '&');
    const showAllModels = $('.show-all-models');
    const container = $('.product-list');
    const loader = $('.category-products-panel__loader');
    showAllModels.on('click', function (e) {
        const self = this;
        e.preventDefault();
        $.ajax({
            url: decodedUrl,
            type: 'GET',
            beforeSend: function () {
                loader.css('opacity', 1);
            }
        }).done(function (result) {
            const res = $(result).find('.product-list').html();
            if (res) {
                loader.css('opacity', 0);
                container.html(res);
                $(self).css({'opacity': '0', 'cursor': 'default'});
                $('.only-models').remove();
                $('.category-products-panel__pagination').css({'opacity': '0', 'cursor': 'default'});
            }
        }).error(() => {});
    });
};

export const pagination = () => {
    const container = $('.product-list');
    const linksWrap = $('.category-products-panel__pagination');
    const links = $('.category-products-panel__pagination .links').find('a');
    const loader = $('.category-products-panel__loader');
    links.each(function (i, item) {
        $(item).on('click', function (e) {
            e.preventDefault();
            $.ajax({
                url: item.href,
                type: 'get',
                beforeSend: function () {
                    loader.css('opacity', 1);
                }
            }).done(function (result) {
                const linksBlock = $(result).find('.category-products-panel__pagination .links');
                const res = $(result).find('.product-list').html();
                if (res) {
                    loader.css('opacity', 0);
                    linksWrap.html(linksBlock);
                    container.html(res);
                    pagination();
                }
            }).error(() => {});
        });
    });
};

export const upBtn = () => {
    var btn = $('.up');
    btn.on('click', function () {
        $('html, body').animate({scrollTop: 0}, 500, 'swing');
    });
};

export const sidebarMenu = () => {
    var items = $('.category-box__arrow-right');
    items.each(function (i, elem) {
        var ul = $(this).next();
        $(this).on('click', function () {
            ul.slideToggle();
            $(this).toggleClass('opened');
        });
    });
};

export const topSearch = () => {
    $('.search-box__btn').bind('click', function () {
        var url = $('base').attr('href') + 'index.php?route=product/search';
        var search = $('input[name=search]').val();
        if (search) {
            url += '&search=' + encodeURIComponent(search);
        }
        document.location = url;
    });
    $('header input[name=\'search\']').bind('keydown', function (e) {
        if (e.keyCode == 13) {
            var url = $('base').attr('href') + 'index.php?route=product/search';
            var search = $('input[name=search]').val();
            if (search) {
                url += '&search=' + encodeURIComponent(search);
            }
            document.location = url;
        }
    });
};


export const magnificProductImg = () => {
    var images = ['.product__image-box_image', '.product-info .image-additional'];
    images.forEach(function (item, i) {
        $(item).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: 1
            }
        });
    });
    this.magnificExtend();
};

export const magnificExtend = () => {
    $.extend(true, $.magnificPopup.defaults, {
        tClose: 'Закрыть (Esc)',
        tLoading: 'Загрузка...',
        gallery: {
            tPrev: 'Предыдущее (Клавиша Стрелка влево)',
            tNext: 'Следующее (Клавиша Стрелка вправо)',
            tCounter: '%curr% из %total%'
        },
        image: {
            tError: '<a href="%url%">Изображение</a> не может быть загружено.'
        },
        ajax: {
            tError: '<a href="%url%">Изображение</a> не может быть загружено.'
        }
    });
};