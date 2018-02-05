
$(document).ready(function () {

    window.mainObj = {
        init: function () {
            this.topMenu();
            this.magnificProductImg();
            this.feedback();
            this.sparesForm();
            this.indexPageForm();
            this.getPrice();
            this.sidebarMenu();
            this.upBtn();
            if (window.urlShowAllModels !== undefined) {
                this.showPaginationBlock();
                this.showAllModels();
                this.pagination();
            }
        },

        trimName: function () {
            var names = $('.product-grid__item_name span');
            names.each(function (i, item) {
                var $str = $(item).text();
                if ($str.length > 38) {
                    $(item).text($str.slice(0, 38) + '...');
                }
            });
        },

        showTopBannerCategory: function () {
            var banner = $('.content-top').find('.banner');
            if (banner.length > 0) {
                $('.content-top').css('background-color', '#EAEAEA');
            }
        },

        topMenu: function () {
            var arrMenu = $('.top-menu__link');
            var baseUrl = $('base').attr('href');
            for (var i = 0, len = arrMenu.length; i < len; i++) {
                if (document.location.href == arrMenu[i].href) {
                    $(arrMenu[i]).addClass('active');
                }
            }
            if (document.location.href == baseUrl) $(arrMenu[0]).addClass('active');
        },

        // sidebarMenu: function() {
        //     var items = $('.category-box__arrow-right');
        //     items.each(function(i, elem) {
        //         var ul = $(this).next();
        //         $(this).on('click', function() {
        //             ul.slideToggle();
        //             $(this).toggleClass('opened');
        //         });
        //     });
        // },

        sidebarMenu: function() {
            var items = $('.category-box__item');
            items.each(function(i, elem) {
                var ul = $(this).next();
                $(this).on('click', function() {
                    $(this).toggleClass('opened');
                });
            });
        },

        // Блок подкатегорий в каталоге
        subCategories: function () {
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
        },

        showPaginationBlock: function () {
            var links = $('.category-products-panel__pagination .links');
            var wrapper = $('.category-products-panel__pagination-section');
            if (links.find('a').length <= 0) {
                wrapper.hide();
            }
        },

        showAllModels: function () {
            var decodedUrl = urlShowAllModels.replace(/&amp;/g, '&');
            var showAllModels = $('.show-all-models');
            var container = $('.product-list');
            var loader = $('.category-products-panel__loader');
            showAllModels.on('click', function (e) {
                var self = this;
                e.preventDefault();
                $.ajax({
                    url: decodedUrl,
                    type: 'get',
                    beforeSend: function () {
                        loader.css('opacity', 1);
                    }
                }).done(function (result) {
                    var res = $(result).find('.product-list').html();
                    if (res) {
                        loader.css('opacity', 0);
                        container.html(res);
                        $(self).css({'opacity': '0', 'cursor': 'default'});
                        $('.only-models').remove();
                        $('.category-products-panel__pagination').css({'opacity': '0', 'cursor': 'default'});
                        //===
                        mainObj.trimName();
                        //===
                    }
                }).error(function (err) {
                    console.log(err);
                });
            });
        },

        pagination: function () {
            var self = this;
            var container = $('.product-list');
            var linksWrap = $('.category-products-panel__pagination');
            var links = $('.category-products-panel__pagination .links').find('a');
            var loader = $('.category-products-panel__loader');
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
                        var linksBlock = $(result).find('.category-products-panel__pagination .links');
                        var res = $(result).find('.product-list').html();
                        if (res) {
                            loader.css('opacity', 0);
                            linksWrap.html(linksBlock);
                            container.html(res);
                            self.pagination();
                            mainObj.trimName();
                        }
                    }).error(function (err) {
                        console.log(err);
                    });
                });
            });
        },

        upBtn: function () {
            var btn = $('.up');
            btn.on('click', function () {
                $('html, body').animate({scrollTop: 0}, 500, 'swing');
            });
        },


        topSearch: function () {
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
        },

        // Форма
        sendForm: function (title, subject, isProductCardBtn) {
            title = $(title).text();
            var btn = $('.popup__send');
            var result = $('.popup__result');
            var name = $('[data-name=name]'),
                phone = $('[data-name=phone]'),
                email = $('[data-name=email]'),
                city = $('[data-name=city]'),
                company = $('[data-name=company]'),
                howLearn = $('[data-name=how-learn]'),
                comment = $('[data-name=comment]');

            phone.mask('+9 (999) 999-99-99');

            btn.on('click', function (e) {
                e.preventDefault();
                var titleResult;
                if (isProductCardBtn) {
                    titleResult = '<span style="font-weight: normal">Модель: </span>' + title;
                }
                if (!name.val() || !phone.val() || !email.val() || !city.val() || !company.val()) {
                    result.html('<span class="popup__result_err">Пожалуйста, заполните все поля, отмеченные звездочкой <sup>*</sup></span>');
                } else {
                    console.log("send ", this);
                    $.ajax({
                        url: './mail/send.php',
                        type: 'post',
                        data: {
                            name: name.val(),
                            phone: phone.val(),
                            email: email.val(),
                            city: city.val(),
                            company: company.val(),
                            howLearn: howLearn.val(),
                            comment: comment.val(),
                            title: titleResult,
                            subject: subject
                        }
                    }).done(function (res) {
                        $.magnificPopup.open({
                            items: {
                                src: $('#popup-ok')
                            },
                            type: 'inline',
                            callbacks: {
                                open: function() {
                                    setTimeout(function() {
                                        $.magnificPopup.close({
                                            removalDelay: 300,
                                            mainClass: 'mfp-fade'
                                        });
                                    }, 3000);
                                }
                            }
                        });
                        if ($(window).width() < 480) {
                            $("html, body").animate({scrollTop: $('#popup-ok').offset().top - 150}, 1000);
                        }
                        result.html(res);
                        setTimeout(function () {
                            name.val('');
                            phone.val('');
                            email.val('');
                            city.val('');
                            company.val('');
                            howLearn.val('');
                            comment.val('');
                            $.magnificPopup.close();
                            //window.location.reload();
                        }, 3000);
                    }).error(function (err) {
                        console.log(err);
                    });
                }
            });
        },

        sparesForm: function(subject) {
            var btn = $('#spares-form .btn');
            var result = $('#spares-form .result');
            var model = $('#spares-form [name=model]'),
                year = $('#spares-form [name=year]'),
                number = $('#spares-form [name=number]'),
                company = $('#spares-form [name=company]'),
                phone = $('#spares-form [name=phone]'),
                email = $('#spares-form [name=email]'),
                city = $('#spares-form [name=city]'),
                spares = $('#spares-form [name=spares]');

            phone.mask('+9 (999) 999-99-99');

            btn.on('click', function(e) {
                e.preventDefault();
                //console.log(model.val(), year.val(), number.val(), phone.val(), email.val(), city.val(), company.val(), spares.val());
                if(!model.val() || !year.val() || !number.val() || !phone.val() || !email.val() || !city.val() || !company.val() || !spares.val()) {
                    result.html('<span class="popup__result_err">Пожалуйста, заполните все поля, отмеченные звездочкой <sup>*</sup></span>');
                } else {
                    $.ajax({
                        url: './mail/send_spares.php',
                        type: 'post',
                        beforeSend: function () {
                            btn.attr('disabled', 'disabled');
                        },
                        data: {
                            model: model.val(),
                            year: year.val(),
                            number: number.val(),
                            phone: phone.val(),
                            email: email.val(),
                            city: city.val(),
                            company: company.val(),
                            spares: spares.val(),
                            subject: subject
                        }
                    }).done(function(res) {
                        if(res === 'true') {
                            btn.removeAttr('disabled');
                            $.magnificPopup.open({
                                items: {
                                    src: $('#popup-ok')
                                },
                                type: 'inline',
                                callbacks: {
                                    open: function() {
                                        setTimeout(function() {
                                            $.magnificPopup.close({
                                                removalDelay: 300,
                                                mainClass: 'mfp-fade'
                                            });
                                        }, 3000);
                                    }
                                }
                            });
                            $("html, body").animate({ scrollTop: $('#popup-ok').offset().top }, 1000);
                            model.val('');
                            year.val('');
                            number.val('');
                            phone.val('');
                            email.val('');
                            city.val('');
                            company.val('');
                            spares.val('');
                            result.empty();
                        }
                    }).error(function(err) {
                        console.log(err);
                    });
                }
            });
        },

        indexPageForm: function () {
            var $btn = $('.f-f .send');
            var $result = $('.f-f .form__result');
            var $carriage = $('.f-f').find('input.f-carriage'),
                $forkLength = $('.f-f').find('input.f-fork-length'),
                $fio = $('.f-f').find('input.f-fio'),
                $company = $('.f-f').find('input.f-company'),
                $city = $('.f-f').find('input.f-city'),
                $phone = $('.f-f').find('input.f-phone'),
                $email = $('.f-f').find('input.f-email');

            $phone.mask('+9 (999) 999-99-99');

            $btn.on('click', function (e) {
                e.preventDefault();
                if (!$carriage.val() || !$forkLength.val() || !$fio.val() || !$company.val() || !$city.val() || !$phone.val() || !$email.val()) {
                    $result.text('Пожалуйста, заполните все поля.');
                } else {
                    $.ajax({
                        url: './mail/indexPage.php',
                        type: 'post',
                        data: {
                            carriage: $carriage.val(),
                            forkLength: $forkLength.val(),
                            fio: $fio.val(),
                            company: $company.val(),
                            city: $city.val(),
                            phone: $phone.val(),
                            email: $email.val()
                        }
                    }).done(function (res) {
                        if (res) {
                            $.magnificPopup.close();
                            $.magnificPopup.open({
                                items: {
                                    src: $('#popup-ok')
                                },
                                type: 'inline',
                                callbacks: {
                                    open: function () {
                                        setTimeout(function () {
                                            $.magnificPopup.close({
                                                removalDelay: 300,
                                                mainClass: 'mfp-fade'
                                            });
                                        }, 3000);
                                    }
                                }
                            });

                            $carriage.val('');
                            $forkLength.val('');
                            $fio.val('');
                            $company.val('');
                            $city.val('');
                            $phone.val('');
                            $email.val('');
                            $result.text('');

                        }
                    }).error(function (err) {
                        console.log(err);
                    });
                }
            });
        },

        // "Запросить стоимость" в карточке товара
        getPrice: function () {
            var self = this;
            $('.get-price').magnificPopup({
                type: 'inline',
                preloader: false,
                focus: '[data-name=name]',
                callbacks: {
                    beforeOpen: function () {
                        if ($(window).width() < 700) {
                            this.st.focus = false;
                        } else {
                            this.st.focus = '[data-name=name]';
                        }
                    },
                    open: function () {
                        $('.popup').find('h2').text('Уточнить стоимость');
                        self.sendForm('.product h1', 'Уточнить стоимость', true);
                    },
                    close: function () {
                        $('.popup__result').html('');
                    }
                }
            });
        },

        // "Оставить заявку" на главной странице
        feedback: function () {
            var self = this;
            $('.feedback').magnificPopup({
                type: 'inline',
                preloader: false,
                focus: '[data-name=name]',
                callbacks: {
                    beforeOpen: function () {
                        if ($(window).width() < 700) {
                            this.st.focus = false;
                        } else {
                            this.st.focus = '[data-name=name]';
                        }
                    },
                    open: function () {
                        $('.popup').find('h2').text($('.email-box__title').text());
                        self.sendForm('', 'Заявка');
                    },
                    close: function () {
                        $('.popup__result').html('');
                    }
                }
            });
        },

        // "Написать нам" на главной странице
        writeToUs: function () {
            var self = this;
            $('.write-to-us').magnificPopup({
                type: 'inline',
                preloader: false,
                focus: '[data-name=name]',
                callbacks: {
                    beforeOpen: function () {
                        if ($(window).width() < 700) {
                            this.st.focus = false;
                        } else {
                            this.st.focus = '[data-name=name]';
                        }
                    },
                    open: function () {
                        $('.popup').find('h2').text($('.write-us__name').text());
                        self.sendForm('', 'Письмо');
                    },
                    close: function () {
                        $('.popup__result').html('');
                    }
                }
            });
        },

        magnificProductImg: function () {
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
        },

        magnificExtend: function () {
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
        }
    };

    mainObj.init();

});
