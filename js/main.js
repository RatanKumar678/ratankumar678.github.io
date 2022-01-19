$(document).ready(function() {

    setTimeout(function() {
        $('body').addClass('loaded');
    }, 7400);

    window_ht = $(window).height();
    window_wt = $(window).width();
    head_ht = $('header').outerHeight();

    $('.window_ht').css('height', window_ht + 'px');

    if (window_wt < 420) {} else {};

    $('.submit-field').click(function() {
        $('.contact-from').hide('slow');
        $('.thankyou').show('slow');
    });

    $('.home-head .l').each(function(index) {
        var $this = $(this);
        setTimeout(function() {
            $this.addClass('rubberBand');
        }, 800);
    });

    setTimeout(function() {
        $('.home-head .l').removeClass('rubberBand');
    }, 3000);


    $(".l").hover(
        function() {
            $(this).addClass("animated rubberBand");
        },
        function() {
            var $this = $(this);
            setTimeout(function() {
                $this.removeClass("animated rubberBand");
            }, 800);

        }
    );

    (function() {


    }());

    function trans_zero(rel_el) {
        $('.page-anim').css({
            'transform': 'scale3d(0.9, 0.9, 0.9) translate3d(0px, 120%, 0)',
            'opacity': '0'
        });
        setTimeout(function() {
            $('.' + rel_el + '-section').css({
                "transform": "scale3d(1, 1, 1) translate3d(0px, 0%, 0)",
                "opacity": "1",
                "z-index": "10",
            });
        }, 300);

    };

    $('.nav-icon,.contact-me,.log-block').click(function() {
        var _rel = $(this).attr('rel');
        $('.nav-icon').removeClass('active');
        $(this).addClass('active');

        if (_rel == 'home') {
            trans_zero(_rel);
            setTimeout(function() {
                $('.home-section').addClass('home-loaded');
            }, 800);
            $('.home-head .l').each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.addClass('rubberBand');
                }, 2000);
            });

        } else {
            setTimeout(function() {
                $('.home-section').removeClass('home-loaded');
            }, 800);
            $('.home-section').css({
                'transform': 'scale3d(0.9, 0.9, 0.9) translate3d(0px, 40%, 0)',
                'opacity': '1',
                'z-index': '10'
            });
            setTimeout(function() {
                $('.home-head .l').removeClass('rubberBand');
            }, 2000);
        }

        if (_rel == 'about') {
            trans_zero(_rel);
        } else {
            $('.about-section').css({
                'transform': 'scale3d(0.86, 0.9, 0.9) translate3d(0px, 35%, 0)',
                'opacity': '0.98',
                'z-index': '9'
            });
        }

        if (_rel == 'skills') {
            trans_zero(_rel);
            setTimeout(function() {
                $('.progress-bar').each(function() {
                    var $this = $(this);
                    var progressbar = $this.data('progress');
                    $this.animate({ width: progressbar + '%' }, "slow");
                });
            }, 1400);

            setTimeout(function() {
                $('.timeline-event').each(function() {
                    var $this = $(this);
                    $this.addClass('fadeInUp animated')
                });
            }, 1400);

        } else {
            $('.skills-section').css({
                'transform': 'scale3d(0.82, 0.9, 0.9) translate3d(0px, 30%, 0)',
                'opacity': '0.96',
                'z-index': '8'
            });
            setTimeout(function() {
                $('.progress-bar').each(function() {
                    var $this = $(this);
                    var progressbar = 0;
                    $this.animate({ width: progressbar + '%' }, "slow");
                });
            }, 2000);
            setTimeout(function() {
                $('.timeline-event').each(function() {
                    var $this = $(this);
                    $this.removeClass('fadeInUp animated')
                });
            }, 1200);
        }

        if (_rel == 'gallery') {
            trans_zero(_rel);
            setTimeout(function() {
                $('.gallery-block').addClass('gallery-loaded');
            }, 1000);
        } else {
            $('.gallery-section').css({
                'transform': 'scale3d(0.78, 0.9, 0.9) translate3d(0px, 25%, 0)',
                'opacity': '0.94',
                'z-index': '7'
            });
            setTimeout(function() {
                $('.gallery-block').removeClass('gallery-loaded');
            }, 800);
        }

        if (_rel == 'contact') {
            trans_zero(_rel);
            $('.' + _rel).addClass('active');
            $('.contact-head .l').each(function(index) {
                var $this = $(this);
                setTimeout(function() {
                    $this.addClass('rubberBand');
                }, 1800);
                setTimeout(function() {
                    $('.contact-block').addClass('contact-loaded');
                }, 1200);
            });
        } else {
            $('.contact-section').css({
                'transform': 'scale3d(0.74, 0.9, 0.9) translate3d(0px, 20%, 0)',
                'opacity': '0.80',
                'z-index': '6'
            });
            setTimeout(function() {
                $('.contact-head .l').removeClass('rubberBand');
            }, 1000);
            setTimeout(function() {
                $('.contact-block').removeClass('contact-loaded');
            }, 1000);
        }
        if (_rel == 'resume') {
            $('.resume-btn').addClass('resume-btn-anim');
        } else {
            $('.resume-btn').removeClass('resume-btn-anim');
        }
    });


    $("html").easeScroll({
        frameRate: 40,
        animationTime: 1400,
        stepSize: 140,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 40,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 100,
        touchpadSupport: true,
        fixedBackground: true
    });

    class Particle {
        constructor(context, x, y, d = 2, color = 'rgba(54, 197, 151, 0.2)', movement = 10, lerp = 0.05) {
            this.context = context;

            this.x = this.currentX = this.targetX = x;
            this.y = this.currentY = this.targetY = y;
            this.d = d;
            this.lerp = lerp;
            this.color = color;
            this.movement = movement;
        }

        draw() {
            var context = this.context,
                r = this.d / 2;
            context.fillStyle = this.color;
            context.beginPath();

            var x = this.x - r,
                y = this.y - r;

            if (Math.abs(this.targetX - this.currentX) < this.movement * 0.1) {
                this.targetX = x + Math.random() * this.movement * (Math.random() < 0.5 ? -1 : 1);
            }
            if (Math.abs(this.targetY - this.currentY) < this.movement * 0.1) {
                this.targetY = y + Math.random() * this.movement * (Math.random() < 0.5 ? -1 : 1);
            }

            this.currentX += (this.targetX - this.currentX) * this.lerp;
            this.currentY += (this.targetY - this.currentY) * this.lerp;

            context.arc(this.currentX, this.currentY, r, 0, Math.PI * 2, false);

            context.closePath();
            context.fill();
        }

        setTarget(x, y) {

        }
    }

    class Canvas {
        constructor(element, particleSpacing = 50) {
            this.canvas = element;
            this.context = element.getContext('2d');

            this.particleSpacing = particleSpacing;

            window.addEventListener('resize', () => this.init());
            this.init();
        }

        init() {
            this.stop();
            this.clear();

            this.resize();

            this.createParticles();
            this.animate();
        }

        resize() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }

        clear() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }

        createParticles() {
            var cols = Math.floor(this.canvas.width / this.particleSpacing),
                rows = Math.floor(this.canvas.height / this.particleSpacing),
                colGutter = (this.particleSpacing + (this.canvas.width - cols * this.particleSpacing)) / 2,
                rowGutter = (this.particleSpacing + (this.canvas.height - rows * this.particleSpacing)) / 2;

            this.particles = [];
            for (let col = 0; col < cols; col++) {
                for (let row = 0; row < rows; row++) {
                    let x = col * this.particleSpacing + colGutter,
                        y = row * this.particleSpacing + rowGutter,
                        particle = new Particle(this.context, x, y);
                    this.particles.push(particle);
                }
            }
        }

        draw() {
            this.clear();
            if (this.particles) {
                for (let i = 0; i < this.particles.length; i++) {
                    this.particles[i].draw();
                }
            }
        }

        animate() {
            this.draw();
            this.animationFrame = window.requestAnimationFrame(() => this.animate());
        }

        stop() {
            window.cancelAnimationFrame(this.animationFrame);
        }
    }
    var cnvs = new Canvas(document.getElementById('canvas'));

    $('body').mousemove(function(e) {
        var x = (e.pageX * -1 / 10);
        $("#canvas").animate({
            left: x + 'px'
        }, 10);
    });


});