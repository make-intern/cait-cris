<!DOCTYPE html>
<html lang="en">
<?php include 'src/includes/head.php';?>
<body>
    <?php //include 'src/includes/header.php';?>
    <section class="o-container">
        <h1>Styleguide</h1>
    </section>
           
    <!-- Colors -->
    <section class="o-container">
        <h2 >Colors</h2>
        <div class="box [ u-df ]">
            <div class="sg-color-block primary_green-100 dt-col-4"> $primary_green-100: #30704C </div>
            <div class="sg-color-block primary_green-75 dt-col-4"> $primary_green-75: #5B7B47 </div>
            <div class="sg-color-block primary_green-50 dt-col-4"> $primary_green-50: #A0AF63 </div>
        </div>
        <div class="box [ u-df ]">
            <div class="sg-color-block secondary_gold-100 dt-col-4"> $secondary_gold-100: #C8AB42 </div>
            <div class="sg-color-block secondary_gold-50 dt-col-4"> $secondary_gold-50: #C6B88E </div>
            <div class="sg-color-block secondary_gold-25 dt-col-4"> $secondary_gold-25: #F9F7EE </div>
        </div>
        <div class="box [ u-df ]">
            <div class="sg-color-block tertiary_green-100 dt-col-4"> $tertiary_green-100: #42AC6A </div>
            <div class="sg-color-block tertiary_green-75 dt-col-4"> $tertiary_green-75: #57B293 </div>
        </div>
    </section>

    <!-- Buttons -->
    <section class="o-container  [ u-df-dt u-df-dt-jc-sb u-df-dt-fw-w ] ">
        <h2 style="flex: 100%;">Buttons</h2>
        <button class="o-button--icon_text c-search__button">Search</button>
        <button class="o-button--blocked ">Learn More</button>
        <button class="o-button--bordered"><span></span><span></span><span class="text">Learn More</span></button>
        <button class="o-button--bordered-sm">
            <span></span>
            <!-- <img src="/dist/images/icon_fb.svg" alt=""> -->
            <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.09448 6.66667H10.6417L10.1983 10H7.09448V20H2.49415V10H0V6.66667H2.49415V4.42708C2.49415 2.96874 2.88213 1.86632 3.65809 1.11979C4.43406 0.37326 5.72731 0 7.53789 0H10.6417V3.33333H8.75725C8.05519 3.33333 7.60255 3.4375 7.39932 3.64583C7.1961 3.85417 7.09448 4.20139 7.09448 4.6875V6.66667Z" fill="#30704C"/>
            </svg>
            <span></span>
        </button>
        <button class="o-button--rounded"><span></span>Learn More<span></span></button>
        <button class="o-button--text"><span></span>Learn More<span></span></button>
        <button class="o-button--icon"><span></span>Learn More<span></span></button>
        
    </section>

    <!-- Cards -->
    <section class="o-container "> <!-- [ u-df-dt u-df-dt-fw-w u-df-dt-jc-sb ] -->
        <h2 style="flex-basis: 100%;">Cards</h2>
        <div class="c-card c-card--small [ u-mb-mb-40 ] " style="background-image: url('dist/images/dummy-image-1.png');">
            <div class="c-card__content">
                <h3>Heading Card Small</h3>
                <button class="o-button--icon">View Property</button>
            </div>
        </div>
        <div class="c-card [ u-mb-mb-40 ]">
            <figure>
                <img src="dist/images/dummy-image-1.png" alt="">
            </figure>
            <div class="c-card__content">
                <h3>Heading Card without button Content</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
            </div>
        </div>
        <div class="c-card [ u-mb-mb-40 ]" >
            <figure>
                <img src="dist/images/dummy-image-1.png" alt="">
            </figure>
            <div class="c-card__content">
                <h3>Heading Card Action with button</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
                <button class="o-button--icon">View Property</button>
            </div>
        </div>
        <div class="c-card--accord [ u-mb-mb-40 ]" style="background-image: url('dist/images/dummy-image-1.png');">
            <div class="c-card__content">
                <h3>Heading Card Accord</h3>
                <button class="o-button--icon">View Property</button>
            </div>
        </div>
        <div class="c-card c-card--news" >
            <figure>
                <img src="https://images.unsplash.com/photo-1557576287-3a35853aec7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="">
            </figure>
            <div class="c-card__content">
                <span>Date</span>
                <h3>Heading Card News</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
                <button class="o-button--icon">View Property</button>
            </div>
        </div>
        <div class="c-card c-card--news-ls [ u-mb-mb-40 ] ">
            <figure>
                <img src="https://images.unsplash.com/photo-1557576287-3a35853aec7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="">
            </figure>
            <div class="c-card__content">
                <span>Date</span>
                <h3>Heading Card News Large</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
            </div>
        </div>
        <div class="c-card c-card--news-ls-mini [ u-mb-mb-40 ] " style="background-image: url('dist/images/dummy-image-3.png');">
            <div class="c-card__content">
                <span>Date</span>
                <h3>Heading Card Small</h3>
            </div>
        </div>
        <div class="c-card c-card--featured c-card--featured-ls [ u-mb-mb-40 ] ">
            <figure>
                <img src="dist/images/dummy-image-5.png" alt="">
            </figure>
            <div class="c-card__content [ u-mb-ml-40 ] ">
                <h3>Heading Card Featured</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
                <button class="o-button--icon">View Property</button>
            </div>
        </div>
        <div class="c-card c-card--featured c-card--featured-ls [ u-mb-mb-40 ] ">
            <figure>
                <img src="dist/images/dummy-image-2.png" alt="">
            </figure>
            <div class="c-card__content [ u-mb-ml-a u-mb-mr-40 ]">
                <h3>Heading Card Featured</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
                <button class="o-button--icon">View Property</button>
            </div>
        </div>
        <div class="c-card c-card--featured c-card--featured-pt [ u-mb-mb-40 ] ">
            <figure>
                <img src="dist/images/dummy-image-5.png" alt="">
            </figure>
            <div class="c-card__content [ u-mb-ml-25 ] ">
                <h3>Heading Card Featured</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
                <button class="o-button--icon">View Property</button>
            </div>
        </div>
        <div class="c-card c-card--featured c-card--featured-pt [ u-mb-mb-40 ] ">
            <figure>
                <img src="dist/images/dummy-image-2.png" alt="">
            </figure>
            <div class="c-card__content [ u-mb-ml-a u-mb-mr-25 ] ">
                <h3>Heading Card Featured</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
                <button class="o-button--icon">View Property</button>
            </div>
        </div>
        <div class="c-card c-card--social-sm" style="background: url('https://images.pexels.com/photos/681333/pexels-photo-681333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"></div>
        <div class="c-card c-card--social-lg" style="background: url('https://images.pexels.com/photos/681333/pexels-photo-681333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"></div>
    </section>
    <section class="o-container">
        <h2>Card List View</h2>
        <div class="c-card list-view " >
            <figure>
                <img src="https://images.unsplash.com/photo-1557576287-3a35853aec7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="">
            </figure>
            <div class="c-card__content">
                <span>Date</span>
                <h3>Heading Card Action</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
            </div>
        </div>
    </section>

    <!-- Hero -->
    <section class="">
        <h2>Hero gallery</h2>
        <div class="c-gallery js-gallery [ u-mb-mb-40 ] ">
            <div class="c-gallery__slides">
                <div class="c-gallery__slide is-active" style="background-image: url('https://images.unsplash.com/photo-1553306342-36c14d4b81a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80');">
                    <div class="c-gallery__slide-content">
                        <h1>Enhancing land and </br> enriching lives</h1>
                        <button class="o-button--bordered"><span></span><span></span><span class="text">Learn More</span></button>
                    </div>
                </div>
                <div class="c-gallery__slide" style="background-image: url('https://images.unsplash.com/photo-1553306342-36c14d4b81a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80');">
                    <div class="c-gallery__slide-content">
                        <h1>Enhancing land and </br> enriching lives</h1>
                        <button class="o-button--bordered"><span></span><span></span><span class="text">Learn More</span></button>
                    </div>
                </div>
                <div class="c-gallery__slide" style="background-image: url('https://images.unsplash.com/photo-1553306342-36c14d4b81a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80');">
                    <div class="c-gallery__slide-content">
                        <h1>Enhancing land and </br> enriching lives</h1>
                        <button class="o-button--bordered"><span></span><span></span><span class="text">Learn More</span></button>
                    </div>
                </div>
                <div class="c-gallery__slide" style="background-image: url('https://images.unsplash.com/photo-1553306342-36c14d4b81a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80');">
                    <div class="c-gallery__slide-content">
                        <h1>Enhancing land and </br> enriching lives</h1>
                        <button class="o-button--bordered"><span></span><span></span><span class="text">Learn More</span></button>
                    </div>
                </div>
            </div>
            <div class="c-gallery__paginations">
                <div class="c-gallery__pagination js-gallery__pagination is-active">
                    <div class="">
                        01
                    </div>
                    <div class="">
                        <h4>Energizing Enterprise</h4>
                        <h3>Vertis North</h3>
                    </div>
                </div>
                <div class="c-gallery__pagination js-gallery__pagination">
                    <div class="">
                        02
                    </div>
                    <div class="">
                        <h4>Gathering Communities</h4>
                        <h3>Nuvali</h3>
                    </div>
                </div>
                <div class="c-gallery__pagination js-gallery__pagination">
                    <div class="">
                        03
                    </div>
                    <div class="">
                        <h4>Pocket Urban Haven</h4>
                        <h3>Cloverleaf</h3>
                    </div>
                </div>
                <div class="c-gallery__pagination js-gallery__pagination">
                    <div class="">
                        04
                    </div>
                    <div class="">
                        <h4>City in Sync</h4>
                        <h3>Arca South</h3>
                    </div>
                </div>
            </div>
        </div>
        <h2>Hero Banner Full</h2>
        <div class="c-hero-banner c-hero-banner--full [ u-mb-mb-40 ] " style="background-image: url('https://images.unsplash.com/photo-1432937202807-b918d6a647ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');">
            <ul class="c-breadcrumbs">
                <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer">Home</a>
                </li>
                <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer">Landing</a>
                </li>
                <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer">Detail</a>
                </li>
            </ul>
            <div class="c-hero-banner__content">
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam odio id libero fringilla maecenas blandit integer. Dui turpis nulla nunc congue nulla. Vitae eros faucibus mi mi. Dolor tellus aliquet ultricies vestibulum.</p>
            </div>
        </div>
        <h2>Hero Banner Mid</h2>
        <div class="c-hero-banner c-hero-banner--mid [ u-mb-mb-40 ] " style="background-image: url('https://images.unsplash.com/photo-1534189972940-d775a2e890a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');">
            <ul class="c-breadcrumbs">
                <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer">Home</a>
                </li>
                <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer">Landing</a>
                </li>
                <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer">Detail</a>
                </li>
            </ul>
            <div class="c-hero-banner__content">
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam odio id libero fringilla maecenas blandit integer. Dui turpis nulla nunc congue nulla. Vitae eros faucibus mi mi. Dolor tellus aliquet ultricies vestibulum.</p>
            </div>
        </div>
    </section>
    
    <!-- Featured -->

    <section class="o-container--full">
        <div class="c-featured">
            <div class="c-featured__heading [ u-df-tb u-df-tb-jc-sb u-df-tb-ai-c ]">
                <h2>Featured Heading</h2>
                <a href="" class="o-button--icon">View More</a>
            </div>
            <div class="c-featured__cards  [ u-df-dt u-df-dt-jc-sb ] ">
                <div class="c-card" >
                    <figure>
                        <img src="dist/images/dummy-image-1.png" alt="">
                    </figure>
                    <div class="c-card__content">
                        <h3>Heading Card Action with button</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
                    </div>
                </div>
                <div class="c-card" >
                    <figure>
                        <img src="dist/images/dummy-image-1.png" alt="">
                    </figure>
                    <div class="c-card__content">
                        <h3>Heading Card Action with button</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
                    </div>
                </div>
                <div class="c-card" >
                    <figure>
                        <img src="dist/images/dummy-image-1.png" alt="">
                    </figure>
                    <div class="c-card__content">
                        <h3>Heading Card Action with button</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="o-container--full">
        <div class="c-featured">
            <div class="c-featured__heading [ u-df-tb u-df-tb-jc-sb u-df-tb-ai-c ]">
                <h2>Featured Heading</h2>
                <a href="" class="o-button--icon">View More</a>
            </div>
            <div class="c-featured__accord  [ u-df-dt u-mb-mb-40 ] ">
                <div class="c-card--accord " style="background-image: url('https://images.unsplash.com/photo-1557576287-3a35853aec7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');">
                    <div class="c-card__content">
                        <h3>Heading Card</h3>
                        <button class="o-button--icon">View Property</button>
                    </div>
                </div>
                <div class="c-card--accord " style="background-image: url('https://images.unsplash.com/photo-1557576287-3a35853aec7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');">
                    <div class="c-card__content">
                        <h3>Heading Card</h3>
                        <button class="o-button--icon">View Property</button>
                    </div>
                </div>
                <div class="c-card--accord " style="background-image: url('https://images.unsplash.com/photo-1557576287-3a35853aec7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');">
                    <div class="c-card__content">
                        <h3>Heading Card</h3>
                        <button class="o-button--icon">View Property</button>
                    </div>
                </div>
                <div class="c-card--accord " style="background-image: url('https://images.unsplash.com/photo-1557576287-3a35853aec7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');">
                    <div class="c-card__content">
                        <h3>Heading Card</h3>
                        <button class="o-button--icon">View Property</button>
                    </div>
                </div>
                <div class="c-card--accord " style="background-image: url('https://images.unsplash.com/photo-1557576287-3a35853aec7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');">
                    <div class="c-card__content">
                        <h3>Heading Card</h3>
                        <button class="o-button--icon">View Property</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="o-container--full">
        <div class="c-featured--wide">
            <div class="c-featured__heading [ u-df-tb u-df-tb-jc-sb u-df-tb-ai-c ]">
                <h2>Featured Heading</h2>
                <a href="" class="o-button--icon">View More</a>
            </div>
            <div class="c-featured__cards--hero ">
                <div class="c-card c-card--news-ls">
                    <figure>
                        <img src="https://images.unsplash.com/photo-1557576287-3a35853aec7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="">
                    </figure>
                    <div class="c-card__content">
                        <span>Date</span>
                        <h3>Heading Card News Large</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
                    </div>
                </div>
                <div class="">
                    <div class="c-card c-card--news-ls-mini [ u-mb-mb-25 ] " style="background-image: url('dist/images/dummy-image-3.png');">
                        <div class="c-card__content">
                            <span>Date</span>
                            <h3>Heading Card Small</h3>
                        </div>
                    </div>
                    <div class="c-card c-card--news-ls-mini " style="background-image: url('dist/images/dummy-image-3.png');">
                        <div class="c-card__content">
                            <span>Date</span>
                            <h3>Heading Card Small</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="o-container--full">
        <div class="c-featured">
            <div class="c-featured__heading [ u-df-tb u-df-tb-jc-sb u-df-tb-ai-c ]">
                <h2>Featured Heading</h2>
                <a href="" class="o-button--icon">View More</a>
            </div>
            <div class="c-featured__video">
                
            </div>
        </div>
    </section>

    <!-- Report -->
    <section class="o-container">
        <h2>Report</h2>
        <div class="c-report [ u-df-mb u-df-mb-fw-w u-df-mb-fd-c u-df-mb-jc-sb u-df-tb-fd-r u-df-tb-ai-c ]  ">
            <div class="c-report__text">
                <h3>Annual Report</h3>
                <h1>Ayala's bigegst success through the years</h1>
                <p>We pioneer standards and practices that reflect the value we place on sustainability in all our developments.</p>
            </div>
            <div class="c-count [ u-df-mb u-df-mb-jc-sb u-df-mb-fd-c u-df-tb-fd-r ]">
                <div class="c-count__item">
                    <h3>Total Revenue</h3>
                    <div class="">
                        <span>Php</span>166 
                    </div>
                    <div class="">
                        Million
                    </div>
                </div>
                <div class="c-count__item">
                    <h3>Jobs Generated</h3>
                    <div class="">
                        249 
                    </div>
                    <div class="">
                        Thousand
                    </div>
                </div>
                <div class="c-count__item">
                    <h3>Occupancy Rate</h3>
                    <div class="">
                        96 
                    </div>
                    <div class="">
                        Percent
                    </div>
                </div>
            </div>
            <button class="o-button--bordered"><span></span><span></span><span class="text">Download Annual Report</span></button>
        </div>
    </section>

     <!-- Articles -->
    <section class="o-container">
        <h2>Articles</h2>
        <div class="c-article__opener">
            In 2008, Nuvali started out as a bare 1,800 -hectare estate. Since then it has developed into an ever-growing sustainable eco-community within a 2,290-hectare enclave, complete with various recreational activities that cater to different fields of interest and different age groups.
        </div>
        <div class="c-article">
            <h1>For the Adrenaline Junkies</h1>
            <h2>For the Adrenaline Junkies</h2>
        </div>
        <div class="c-article__quote">
            Nuvali is known for fostering a union of ecological, social, and economic sustainability in the aspects of living. It is unique for being an estate in which an eco-friendly and active lifestyle is attainable.”
        </div>
        <div class="c-article__image">
            <figure>
                <img src="dist/images/dummy-image-5.png" alt="">
            </figure>
            <p>
                Republ1c Wakepark is Nuvali’s world-class wakeboarding destination where adrenaline junkies and sports enthusiasts can ahead out to for quick and convenient weekend fun.
            </p>
        </div>
        <div class="c-article__image c-article__image--left [ u-df-tb u-df-tb-jc-sb u-df-tb-ai-c  ] ">
            <figure>
                <img src="dist/images/dummy-image-3.png" alt="">
            </figure>
            <h2></h2>
            <div class="c-article__image-content">
                <p>
                    Construction and property management services are led by our subsidiaries Makati Development Corporation and Ayala Property Management Corporation, respectively.
                    We pioneer standards and practices that reflect the value we place on sustainability in all our developments. As a responsible corporate citizen, we act with integrity, foresight, and prudence. Focused on our vision of “enhancing land and enriching lives for more people,” we empower our employees to deliver quality products and services and build long-term value for our shareholders.
                </p>
            </div>
        </div>
        <div class="c-article__image c-article__image--right [ u-df-tb u-df-tb-jc-sb u-df-tb-fd-rr u-df-tb-ai-c ] ">
            <figure>
                <img src="https://images.unsplash.com/photo-1557576287-3a35853aec7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="">
            </figure>
            <div class="c-article__image-content">
                <h2>A legacy of trailblazing development</h2>
                <p>
                    Construction and property management services are led by our subsidiaries Makati Development Corporation and Ayala Property Management Corporation, respectively.
                    We pioneer standards and practices that reflect the value we place on sustainability in all our developments. As a responsible corporate citizen, we act with integrity, foresight, and prudence. Focused on our vision of “enhancing land and enriching lives for more people,” we empower our employees to deliver quality products and services and build long-term value for our shareholders.
                </p>
            </div>
        </div>
        <div class="c-article__tags">
            <span class="label">
                Tags
            </span>
            <a href="">Nuvali</a>
            <a href="">Estate</a>
            <a href="">Sustainability</a>
            <a href="">Mixed Use Development</a>
            <a href="">Residence</a>
            <a href="">Ayala</a>
        </div>
        <div class="c-article__related">
            <h1>More for You</h1>
            <a href="" class="c-article__related-article">
                <span class="date"> oct 2, 2019 </span>
                There’s always something for everyone in Nuvali
            </a>
            <a href="" class="c-article__related-article">
                <span class="date"> oct 2, 2019 </span>
                There’s always something for everyone in Nuvali
            </a>
            <a href="" class="c-article__related-article">
                <span class="date"> oct 2, 2019 </span>
                There’s always something for everyone in Nuvali
            </a>
        </div>
        <div class="c-article__social">
            <h3>Share this Article</h3>
            <button class="o-button--bordered-sm">
                <span></span>
                <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.09448 6.66667H10.6417L10.1983 10H7.09448V20H2.49415V10H0V6.66667H2.49415V4.42708C2.49415 2.96874 2.88213 1.86632 3.65809 1.11979C4.43406 0.37326 5.72731 0 7.53789 0H10.6417V3.33333H8.75725C8.05519 3.33333 7.60255 3.4375 7.39932 3.64583C7.1961 3.85417 7.09448 4.20139 7.09448 4.6875V6.66667Z" fill="#30704C"/>
                </svg>
                <span></span>
            </button>
            <button class="o-button--bordered-sm">
                <span></span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M9.99802 1.80194C12.6692 1.80194 12.9827 1.81385 14.0385 1.86148C15.0149 1.90514 15.5428 2.06787 15.896 2.20679C16.3644 2.38936 16.6978 2.60369 17.047 2.95297C17.3963 3.30224 17.6146 3.63564 17.7932 4.10399C17.9282 4.45723 18.0949 4.98512 18.1385 5.9615C18.1862 7.01727 18.1981 7.33082 18.1981 10.002C18.1981 12.6732 18.1862 12.9867 18.1385 14.0425C18.0949 15.0189 17.9321 15.5467 17.7932 15.9C17.6106 16.3683 17.3963 16.7017 17.047 17.051C16.6978 17.4003 16.3644 17.6186 15.896 17.7972C15.5428 17.9321 15.0149 18.0988 14.0385 18.1425C12.9827 18.1901 12.6692 18.202 9.99802 18.202C7.32685 18.202 7.0133 18.1901 5.95753 18.1425C4.98115 18.0988 4.45327 17.9361 4.10002 17.7972C3.63167 17.6146 3.29827 17.4003 2.949 17.051C2.59972 16.7017 2.38143 16.3683 2.20282 15.9C2.06787 15.5467 1.90117 15.0189 1.85751 14.0425C1.80988 12.9867 1.79798 12.6732 1.79798 10.002C1.79798 7.33082 1.80988 7.01727 1.85751 5.9615C1.90117 4.98512 2.0639 4.45723 2.20282 4.10399C2.38539 3.63564 2.59972 3.30224 2.949 2.95297C3.29827 2.60369 3.63167 2.38539 4.10002 2.20679C4.45327 2.07184 4.98115 1.90514 5.95753 1.86148C7.0133 1.80988 7.33082 1.80194 9.99802 1.80194ZM9.99802 0C7.28319 0 6.94185 0.0119071 5.87418 0.0595356C4.81048 0.107164 4.08414 0.277833 3.4491 0.523914C2.79024 0.777932 2.23457 1.12324 1.6789 1.6789C1.12324 2.23457 0.781901 2.79421 0.523914 3.4491C0.277833 4.08414 0.107164 4.81048 0.0595356 5.87815C0.0119071 6.94185 0 7.28319 0 9.99802C0 12.7128 0.0119071 13.0542 0.0595356 14.1219C0.107164 15.1856 0.277833 15.9119 0.523914 16.5509C0.777932 17.2098 1.12324 17.7654 1.6789 18.3211C2.23457 18.8768 2.79421 19.2181 3.4491 19.4761C4.08414 19.7222 4.81048 19.8928 5.87815 19.9405C6.94582 19.9881 7.28319 20 10.002 20C12.7208 20 13.0581 19.9881 14.1258 19.9405C15.1895 19.8928 15.9159 19.7222 16.5549 19.4761C17.2137 19.2221 17.7694 18.8768 18.3251 18.3211C18.8807 17.7654 19.2221 17.2058 19.4801 16.5509C19.7261 15.9159 19.8968 15.1895 19.9444 14.1219C19.9921 13.0542 20.004 12.7168 20.004 9.99802C20.004 7.27922 19.9921 6.94185 19.9444 5.87418C19.8968 4.81048 19.7261 4.08414 19.4801 3.44513C19.226 2.78627 18.8807 2.2306 18.3251 1.67494C17.7694 1.11927 17.2098 0.777932 16.5549 0.519944C15.9198 0.273864 15.1935 0.103195 14.1258 0.0555666C13.0542 0.0119071 12.7128 0 9.99802 0Z" fill="#30704C"/>
                <path d="M9.99788 4.86572C7.16398 4.86572 4.86194 7.1638 4.86194 10.0017C4.86194 12.8395 7.16001 15.1376 9.99788 15.1376C12.8357 15.1376 15.1338 12.8395 15.1338 10.0017C15.1338 7.1638 12.8357 4.86572 9.99788 4.86572ZM9.99788 13.3317C8.15624 13.3317 6.66388 11.8393 6.66388 9.99769C6.66388 8.15606 8.15624 6.6637 9.99788 6.6637C11.8395 6.6637 13.3319 8.15606 13.3319 9.99769C13.3319 11.8393 11.8395 13.3317 9.99788 13.3317Z" fill="#30704C"/>
                <path d="M15.3367 5.85775C15.9987 5.85775 16.5354 5.3211 16.5354 4.6591C16.5354 3.9971 15.9987 3.46045 15.3367 3.46045C14.6747 3.46045 14.1381 3.9971 14.1381 4.6591C14.1381 5.3211 14.6747 5.85775 15.3367 5.85775Z" fill="#30704C"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="20" height="20" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                <span></span>
            </button>
            <button class="o-button--bordered-sm">
                <span></span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.54427 6.64535V18.374H0.247396V6.64535H4.54427ZM4.81771 3.02381C4.83073 4.14814 3.89323 5.04761 2.39583 5.04761H2.36979C0.92448 5.04761 0 4.14814 0 3.02381C0 1.8758 0.963542 0.999999 2.42188 0.999999C3.89323 0.999999 4.80469 1.8758 4.81771 3.02381ZM11.1979 8.31239C11.7632 7.50922 12.7829 6.37315 15.0651 6.37315C17.8906 6.37315 20 8.05373 20 11.6516V18.374H15.7161V12.1013C15.7161 10.5273 15.0911 9.45028 13.5417 9.45028C12.3568 9.45028 11.6536 10.1722 11.3411 10.8705C11.237 11.1309 11.1979 11.4741 11.1979 11.8291V18.374H6.91406C6.96615 7.74602 6.91406 6.64535 6.91406 6.64535H11.1979V8.31239Z" fill="#30704C"/>
                </svg>
                <span></span>
            </button>
        </div>
    </section>
    
    <!-- Gallery / Slider -->
    
    <section class="c-slidersgallery--socmed">
        <h2>Gallery / Slider</h2>
        <div class="js-slider c-slidersgallery--socmed-slides"> 
            <div class="">
                <div class="c-card c-card--social-lg" style="background: url('https://images.pexels.com/photos/681333/pexels-photo-681333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"></div>
            </div>
            <div class="">
                <div class="c-card c-card--social-sm" style="background: url('https://images.pexels.com/photos/681333/pexels-photo-681333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"></div>
                <div class="c-card c-card--social-sm" style="background: url('https://images.pexels.com/photos/681333/pexels-photo-681333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"></div>
            </div>
            <div class="">
                <div class="c-card c-card--social-lg" style="background: url('https://images.pexels.com/photos/681333/pexels-photo-681333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"></div>
            </div>
            <div class="">
                <div class="c-card c-card--social-sm" style="background: url('https://images.pexels.com/photos/681333/pexels-photo-681333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"></div>
                <div class="c-card c-card--social-sm" style="background: url('https://images.pexels.com/photos/681333/pexels-photo-681333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"></div>
            </div>
        </div>
    </section>

    <section class="c-slidersgallery--vertical">
        <div class="js-slider c-slidersgallery--vertical-slides [ u-df-tb-jc-sb ]">
            <div class="">
                <div class="c-card c-card--featured c-card--featured-ls [ u-mb-mb-40 ] ">
                    <figure>
                        <img src="https://images.pexels.com/photos/681333/pexels-photo-681333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                    </figure>
                    <div class="c-card__content [ u-mb-ml-a u-mb-mr-40 ]">
                        <h3>Heading Card Featured</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
                        <button class="o-button--icon">View Property</button>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="c-card c-card--featured c-card--featured-ls [ u-mb-mb-40 ] ">
                    <figure>
                        <img src="dist/images/dummy-image-2.png" alt="">
                    </figure>
                    <div class="c-card__content [ u-mb-ml-a u-mb-mr-40 ]">
                        <h3>Heading Card Featured</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
                        <button class="o-button--icon">View Property</button>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="c-card c-card--featured c-card--featured-ls [ u-mb-mb-40 ] ">
                    <figure>
                        <img src="dist/images/dummy-image-2.png" alt="">
                    </figure>
                    <div class="c-card__content [ u-mb-ml-a u-mb-mr-40 ]">
                        <h3>Heading Card Featured</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
                        <button class="o-button--icon">View Property</button>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="c-card c-card--featured c-card--featured-ls [ u-mb-mb-40 ] ">
                    <figure>
                        <img src="https://images.pexels.com/photos/681333/pexels-photo-681333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                    </figure>
                    <div class="c-card__content [ u-mb-ml-a u-mb-mr-40 ]">
                        <h3>Heading Card Featured</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
                        <button class="o-button--icon">View Property</button>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="c-card c-card--featured c-card--featured-ls [ u-mb-mb-40 ] ">
                    <figure>
                        <img src="dist/images/dummy-image-2.png" alt="">
                    </figure>
                    <div class="c-card__content [ u-mb-ml-a u-mb-mr-40 ]">
                        <h3>Heading Card Featured</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
                        <button class="o-button--icon">View Property</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="js-slider_nav c-slidersgallery--vertical-nav">
            <div class="c-slidersgallery__nav-item">
                <div class="">
                    01
                </div>
                <div class="">
                    <h4>Ayala Land Premier</h4>
                    <h3>Live your best life</h3>
                </div>
            </div>
            <div class="c-slidersgallery__nav-item ">
                <div class="">
                    02
                </div>
                <div class="">
                    <h4>Alveo</h4>
                    <h3>Reside in style</h3>
                </div>
            </div>
            <div class="c-slidersgallery__nav-item ">
                <div class="">
                    03
                </div>
                <div class="">
                    <h4>Avida</h4>
                    <h3>Get a home near work</h3>
                </div>
            </div>
            <div class="c-slidersgallery__nav-item ">
                <div class="">
                    04
                </div>
                <div class="">
                    <h4>Amaia</h4>
                    <h3>Get a home near work</h3>
                </div>
            </div>
            <div class="c-slidersgallery__nav-item ">
                <div class="">
                    05
                </div>
                <div class="">
                    <h4>Bellavia</h4>
                    <h3>Get a home near work</h3>
                </div>
            </div>
        </div>
    </section>
    

    <!-- Footer --> 
    <section class="o-container">
        <h2>Footer</h2>
    </section>
    <?php include 'src/includes/footer.php';?>
    


        
    <!-- Dump -->
    <!-- Header --> 
    <!-- <section class="o-container">
        <h2>Header</h2>
        <?php //include 'src/includes/header.php';?>
    </section> -->

    <!-- Navigator -->  
    <!-- <section class="o-container">
        <h2>Navigator</h2>
        <div class="c-navigator ">
            <h1>Heading</h1>
            <p>Discover Ayala Land residences all over the country</p>
            <div class="c-filter [ u-df-mb u-df-mb-ai-c u-df-tb-jc-sb ]">
                <div class="c-filter-col [ u-df-mb u-df-mb-ai-c ] ">
                    <button class="o-button--text is-active">Map View</button>
                    <button class="o-button--text" >List View</button>
                </div>
                <div class="c-filter-col [ u-df-mb u-df-mb-ai-c ] ">
                    <span>Filter By</span>
                    <div class="c-filter__select">
                        <select name="" id="">
                            <option value="">Filter</option>
                            <option value="">Filter 1</option>
                        </select>
                    </div>
                    <div class="c-filter__select">
                        <select name="" id="">
                            <option value="">Filter</option>
                            <option value="">Filter 1</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="c-navigator__view c-navigator__view--map is-active" data-view="map">
                <div id="map" class="c-gmap">

                </div>
            </div>
            <div class="c-navigator__view c-navigator__view--list  [ u-df-tb u-df-mb-fd-c u-df-tb-fd-r u-df-tb-ac-s ] " data-view="list">
                <div class="c-view-list__col">
                    <div class="c-view-list__row">
                        <h4>Established Estates</h4>
                        <ul>
                            <li>
                                <a href="">Ayala Alabang</a>
                            </li>
                            <li>
                                <a href="">Bonifacio Global City</a>
                            </li>
                            <li>
                                <a href="">Cebu Park District </a>
                            </li>
                            <li>
                                <a href="">Makati Central Business District</a>
                            </li>
                            <li>
                                <a href="">Nuvali</a>
                            </li>
                        </ul>   
                    </div>
                    <div class="c-view-list__row">
                        <h4>Established Estates</h4>
                        <ul>
                            <li>
                                <a href="">Ayala Alabang</a>
                            </li>
                            <li>
                                <a href="">Bonifacio Global City</a>
                            </li>
                            <li>
                                <a href="">Cebu Park District </a>
                            </li>
                            <li>
                                <a href="">Makati Central Business District</a>
                            </li>
                            <li>
                                <a href="">Nuvali</a>
                            </li>
                        </ul>  
                    </div>
                    <div class="c-view-list__row">
                        <h4>Established Estates</h4>
                        <ul>
                            <li>
                                <a href="">Ayala Alabang</a>
                            </li>
                            <li>
                                <a href="">Bonifacio Global City</a>
                            </li>
                            <li>
                                <a href="">Cebu Park District </a>
                            </li>
                            <li>
                                <a href="">Makati Central Business District</a>
                            </li>
                            <li>
                                <a href="">Nuvali</a>
                            </li>
                        </ul>  
                    </div>
                </div>
                <div class="c-view-list__col">
                    <div class="c-view-list__row">
                        <h4>Established Estates</h4>
                        <ul>
                            <li>
                                <a href="">Ayala Alabang</a>
                            </li>
                            <li>
                                <a href="">Bonifacio Global City</a>
                            </li>
                            <li>
                                <a href="">Cebu Park District </a>
                            </li>
                            <li>
                                <a href="">Makati Central Business District</a>
                            </li>
                            <li>
                                <a href="">Nuvali</a>
                            </li>
                        </ul>  
                    </div>
                    <div class="c-view-list__row">
                        <h4>Established Estates</h4>
                        <ul>
                            <li>
                                <a href="">Ayala Alabang</a>
                            </li>
                            <li>
                                <a href="">Bonifacio Global City</a>
                            </li>
                            <li>
                                <a href="">Cebu Park District </a>
                            </li>
                            <li>
                                <a href="">Makati Central Business District</a>
                            </li>
                            <li>
                                <a href="">Nuvali</a>
                            </li>
                        </ul>  
                    </div>
                </div>
                <div class="c-view-list__col">
                    <div class="c-view-list__row">
                        <h4>Established Estates</h4>
                        <ul>
                            <li>
                                <a href="">Ayala Alabang</a>
                            </li>
                            <li>
                                <a href="">Bonifacio Global City</a>
                            </li>
                            <li>
                                <a href="">Cebu Park District </a>
                            </li>
                            <li>
                                <a href="">Makati Central Business District</a>
                            </li>
                            <li>
                                <a href="">Nuvali</a>
                            </li>
                        </ul>  
                    </div>
                </div>
            </div>
        </div>
    </section> -->

    <!-- Grids for search?? -->  
    <!-- <section class="o-container">
        <h2>Grids</h2>
        <div class="c-grid c-grid--trio ">
            <h1>Grids Heading</h1>
            <h2>Grids Subheading</h2>
            <div class="c-grid__cards [ u-df-dt u-df-dt-jc-sb ] ">
                <div class="c-card c-card--small" style="background-image: url('https://images.unsplash.com/photo-1557576287-3a35853aec7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');">
                    <div class="c-card__content">
                        <h3>Heading Card Small</h3>
                        <button class="o-button--icon">View Property</button>
                    </div>
                </div>
                <div class="c-card c-card--small" style="background-image: url('https://images.unsplash.com/photo-1557576287-3a35853aec7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');">
                    <div class="c-card__content">
                        <h3>Heading Card Small</h3>
                        <button class="o-button--icon">View Property</button>
                    </div>
                </div>
                <div class="c-card c-card--small" style="background-image: url('https://images.unsplash.com/photo-1557576287-3a35853aec7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');">
                    <div class="c-card__content">
                        <h3>Heading Card Small</h3>
                        <button class="o-button--icon">View Property</button>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    
    <!-- Featured with filter -->
    <!-- <section class="o-container">
        <h2>Featured Section with Filter</h2>
        <div class="c-featured">
            <h2>Featured Heading</h2>
            <div class="c-filter [ u-df-mb u-df-mb-ai-c u-df-tb-jc-sb ] ">
                <div class="c-filter-col [ u-df-mb u-df-mb-ai-c ]">
                    <span>View As</span>
                    <button class="o-button--rounded is-active">Grid</button>
                    <button class="o-button--rounded">List</button>
                </div>
                <div class="c-filter-col [ u-df-mb u-df-mb-ai-c ] ">
                    <span>Filter By</span>
                    <div class="c-filter__select">
                        <select name="" id="">
                            <option value="">Article Topic</option>
                            <option value="">Topic 1</option>
                        </select>
                    </div>
                    <span>Sort By</span>
                    <div class="c-filter__select">
                        <select name="" id="">
                            <option value="">Most Recent</option>
                            <option value="">Topic 1</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="c-featured__cards [ u-df-dt u-df-dt-jc-sb ] ">
                <div class="c-card c-card--news" >
                    <figure>
                        <img src="https://images.unsplash.com/photo-1557576287-3a35853aec7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="">
                    </figure>
                    <div class="c-card__content">
                        <span>Date</span>
                        <h3>Heading Card News</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
                        <button class="o-button">Button</button>
                    </div>
                </div>
                <div class="c-card c-card--news" >
                    <figure>
                        <img src="https://images.unsplash.com/photo-1557576287-3a35853aec7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="">
                    </figure>
                    <div class="c-card__content">
                        <span>Date</span>
                        <h3>Heading Card News</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
                        <button class="o-button">Button</button>
                    </div>
                </div>
                <div class="c-card c-card--news" >
                    <figure>
                        <img src="https://images.unsplash.com/photo-1557576287-3a35853aec7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="">
                    </figure>
                    <div class="c-card__content">
                        <span>Date</span>
                        <h3>Heading Card News</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
                        <button class="o-button">Button</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="c-featured">
        <h2 class="">Featured Heading</h2>
            <div class="c-filter [ u-df-mb u-df-mb-jc-fe ] ">
                <div class="c-filter__select" >
                    <select name="" id="">
                        <option value="">View All</option>
                        <option value="">Topic 1</option>
                    </select>
                </div>
            </div>
            <div class="c-featured__cards [ u-df-dt u-df-dt-jc-sb ] ">
                <div class="c-card c-card--news" >
                    <figure>
                        <img src="https://images.unsplash.com/photo-1557576287-3a35853aec7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="">
                    </figure>
                    <div class="c-card__content">
                        <span>Date</span>
                        <h3>Heading Card News</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
                        <button class="o-button">Button</button>
                    </div>
                </div>
                <div class="c-card c-card--news" >
                    <figure>
                        <img src="https://images.unsplash.com/photo-1557576287-3a35853aec7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="">
                    </figure>
                    <div class="c-card__content">
                        <span>Date</span>
                        <h3>Heading Card News</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
                        <button class="o-button">Button</button>
                    </div>
                </div>
                <div class="c-card c-card--news" >
                    <figure>
                        <img src="https://images.unsplash.com/photo-1557576287-3a35853aec7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="">
                    </figure>
                    <div class="c-card__content">
                        <span>Date</span>
                        <h3>Heading Card News</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vestibulum, velit libero tristique molestie. Egestas erat</p>
                        <button class="o-button">Button</button>
                    </div>
                </div>
            </div>
        </div>
    </section> -->

    <!-- Card Gallery -->
    <!-- <section class="o-container">
        <h2>Card gallery</h2>
        <div class="c-card c-card--small" style="background-image: url('https://images.unsplash.com/photo-1557576287-3a35853aec7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');">
            <div class="c-card__content">
                <h3>Heading Card Small</h3>
                <button class="o-button--icon">Button</button>
            </div>
        </div>
    </section> -->
    <script>
        function initMap() {
            // The location of Uluru
            var saatchi = {lat: 14.5344234, lng: 121.0212171};
            // The map, centered at Uluru
            var map = new google.maps.Map(
                document.getElementById('map'), {zoom: 18, center: saatchi});
            // The marker, positioned at Uluru
            var marker = new google.maps.Marker({position: saatchi, map: map});
        }

    </script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDvDVJ1rXd7TKuplzry540-kR4X3FxOr4k&callback=initMap"></script>
</body>
</html>                  