import React from "react";
import "./FullAtom.css";
import "./Font.css";
import "./Reset.css";
import CONSTANTS from '../../../../../constants';


const FullAtom = () => {
    const customFontStyle = {
        fontFamily: "Product Sans, sans-serif",
    };


    return (
        <div class="body" style={customFontStyle}>
            <header class="header">
                
                <section class="header-container">
                    <div class="header-block">
                        <div class="header-content">
                            <a class="header-link" 
                                href="https://www.atom.com/blog/discover-atom/" 
                                target="_blank">Squadhelp is now Atom 
                                <span class="mobile-part">- where everything starts!
                                    </span></a>
                            <button class="header-button"> <a href="https://www.atom.com/blog/discover-atom/"></a> Learn More</button>
                        </div>
                    </div>
                </section>

                <main class="main-container">
                    <div class="main-container-nav"> 
                        <a href="/">  
                                <img class="main-logo" src="https://img.atom.com/public/images/atom-logo.png" alt="logo 'atom'" />
                        </a>    
                        
                        <nav class="main-container-list">
                            <ul class="main-nav">
                                <li class="main-nav-li">
                                    <a class="main-nav-link" href="https://www.atom.com/premium-domains-for-sale">Names For Sale 
                                        <i class="fa-solid fa-chevron-down"></i>
                                    </a>
                                    <ul class="main-nav-drop-list">
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/premium-domains-for-sale">Curated Domain Marketplace </a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/premium-domains-for-sale">Premium Domains</a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/ultra-premium-marketplace/all">Ultra Premium Domains</a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/premium-domains-for-sale/all/length/Short">Short Domains</a>
                                            
                                                <li class="main-nav-sub-li"><a class="main-nav-sub-link child" href="https://www.atom.com/premium-domains-for-sale/all/length/3%20Letters">- 3 Letter Domains</a></li>
                                                <li class="main-nav-sub-li"><a class="main-nav-sub-link child" href="https://www.atom.com/premium-domains-for-sale/all/length/4%20Letters">- 4 Letter Domains</a></li>
                                                <li class="main-nav-sub-li"><a class="main-nav-sub-link child" href="https://www.atom.com/premium-domains-for-sale/all/length/5%20Letters">- 5 Letter Domains</a></li>
                                            
                                        </li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/premium-domains-for-sale/all/type_of_name/One%20Word">One Word Domains</a></li>
                                    </ul>
                                </li>

                                <li class="main-nav-li">
                                    <a class="main-nav-link" href="https://www.atom.com/branding-marketing-naming-contests">Naming Contests
                                        <i class="fa-solid fa-chevron-down"></i>
                                    </a>
                                    <ul class="main-nav-drop-list">
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/start-contest">Start A Contest</a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/how-it-works">How It Works</a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/pricing">Contest Pricing</a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/managed-contests">Agency Services</a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/our-work">Our Work</a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/winners">Recent Winners</a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/branding-marketing-naming-contests/all">Active Contests</a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/join-as-creative">Become A Creative</a></li>
                                    </ul>
                                </li>
                                
                                <li class="main-nav-li">
                                    <a class="main-nav-link" href="https://www.atom.com/how-it-works#">Other Services 
                                        <i class="fa-solid fa-chevron-down"></i>
                                    </a>
                                    <ul class="main-nav-drop-list">
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/logos">Logo Contest</a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/taglines">Tagline Contest</a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/brand-identity-design">Brand Identity Design</a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/audience-testing">Audience Testing</a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://helpdesk.atom.com/en/articles/389625-trademark-research-service7">Trademark Research</a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://helpdesk.atom.com/squadhelp-services/trademark-filing-package">Trademark Filing</a></li>
                                    </ul>
                                </li>

                                <li class="main-nav-li">
                                    <a class="main-nav-link" href="https://www.atom.com/managed-contests">Agency Experience </a>
                                </li>

                                <li class="main-nav-li">
                                    <a class="main-nav-link" href="/">Resources
                                        <i class="fa-solid fa-chevron-down"></i>
                                    </a>
                                    <ul class="main-nav-drop-list">
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/business-name-generator">Business Name Generator</a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/domain-name-generator">Domain Name Generator</a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/youtube-name-generator">YouTube Name Generator</a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/brand-alignment">Brand Alignment Tool</a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/free-trademark-search">Free Trademark Checker</a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/startups">Startup Toolkit</a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/blog/">Blog</a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/our-work">Our Work</a></li>
                                        <li class="main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/testimonials-feedback">Testimonials</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>

                        <div>
                            <nav class="mein-icon">

                                <div class="mein-icon-nav">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>

                                <div class="mein-icon-nav">
                                    <i class="fa-regular fa-circle-user"></i>
                                    <ul class="icon-drop-down">
                                        <li class="icon-link">
                                            <a class="icon-text" href="https://www.atom.com/login">
                                                <i class="fa-solid fa-circle-user icon-nav"></i>Login</a>
                                        </li> 
                                        <li class="icon-link">
                                            <a class="icon-text" href="https://www.atom.com/signup">
                                                <i class="fa-solid fa-circle-user icon-nav"></i>Singup</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="mein-icon-nav">
                                    <i class="fa-solid fa-phone"></i>
                                    <ul class="icon-drop-down">
                                        <li class="icon-link">
                                            <a class="icon-text" href="tel:1-877-355-3585">
                                                <i class="fa-solid fa-phone icon-nav"></i>(877)355-3585</a></li>
                                        <li class="icon-link">
                                            <a class="icon-text" href=""><i class="fa-solid fa-message icon-nav"></i>Chat</a></li>
                                        <li class="icon-link">
                                            <a class="icon-text" href=""><i class="fa-solid fa-envelope icon-nav"></i>Email</a></li>
                                        <li class="icon-link">
                                            <a class="icon-text" href=""><i class="fa-solid fa-circle-notch icon-nav"></i>Help Desk</a></li>
                                    </ul>
                                </div>

                                <div class="mein-icon-nav"><i class="fa-solid fa-heart"></i></div> 

                                <div class="mein-icon-nav menu-icon-mobile" onclick="openMenu()">
                                    <span class="icon-mobile-burger"></span>
                                    <span class="icon-mobile-burger"></span>
                                    <span class="icon-mobile-burger"></span>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <nav class="mobile-main-container-list">   
                        <div class="mobile-main">

                            <div class="mobile-search-container-block">
                                <img class="mobile-search-block-img" src="./images/icon-search.svg" alt="search" />
                                <input class="mobile-search-block-input" type="text" placeholder="Search Over 200,000+ Premium Names" />
                                <button class="mobile-search-block-button"><img class="search-img-arrow" src="./images/icon-arrow-long-right.svg" alt="arrow" /></button>
                          
                            </div>

                            <ul class="mobile-main-nav">        
                                <li class="mobile-main-nav-li ">
                                    <div class="mobile-text">
                                        <p class="mobile-main-nav-link">Names For Sale </p>                
                                        <i class="fa-solid fa-chevron-down"></i>   
                                    </div>
                                        
                                            <ul class="mobile-main-nav-drop-list ">
                                                <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/premium-domains-for-sale">Curated Domain Marketplace </a></li>
                                                <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/premium-domains-for-sale">Premium Domains</a></li>
                                                <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/ultra-premium-marketplace/all">Ultra Premium Domains</a></li>
                                                <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/premium-domains-for-sale/all/length/Short">Short Domains</a>
                                                    
                                                        <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link child" href="https://www.atom.com/premium-domains-for-sale/all/length/3%20Letters">- 3 Letter Domains</a></li>
                                                        <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link child" href="https://www.atom.com/premium-domains-for-sale/all/length/4%20Letters">- 4 Letter Domains</a></li>
                                                        <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link child" href="https://www.atom.com/premium-domains-for-sale/all/length/5%20Letters">- 5 Letter Domains</a></li>
                                                    
                                                </li>
                                                <li class="mobile-main-nav-sub-li"><a class="mobile-main-nav-sub-link" href="https://www.atom.com/premium-domains-for-sale/all/type_of_name/One%20Word">One Word Domains</a></li>
                                            </ul>
                                </li>             
                    
                                <li class="mobile-main-nav-li"> 
                                    <div class="mobile-text">      
                                        <p class="mobile-main-nav-link">Naming Contests </p>    
                                        <i class="fa-solid fa-chevron-down"></i>        
                                    </div>               
                                            <ul class="mobile-main-nav-drop-list">
                                                <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/start-contest">Start A Contest</a></li>
                                                <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/how-it-works">How It Works</a></li>
                                                <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/pricing">Contest Pricing</a></li>
                                                <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/managed-contests">Agency Services</a></li>
                                                <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/our-work">Our Work</a></li>
                                                <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/winners">Recent Winners</a></li>
                                                <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/branding-marketing-naming-contests/all">Active Contests</a></li>
                                                <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/join-as-creative">Become A Creative</a></li>
                                            </ul>
                                </li>        
                                        
                                <li class="mobile-main-nav-li">
                                    <div class="mobile-text">
                                        <p class="mobile-main-nav-link">Other Services</p>  
                                        <i class="fa-solid fa-chevron-down"></i>            
                                    </div>              
                                            <ul class="mobile-main-nav-drop-list">
                                                <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/logos">Logo Contest</a></li>
                                                <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/taglines">Tagline Contest</a></li>
                                                <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/brand-identity-design">Brand Identity Design</a></li>
                                                <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/audience-testing">Audience Testing</a></li>
                                                <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://helpdesk.atom.com/en/articles/389625-trademark-research-service7">Trademark Research</a></li>
                                                <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://helpdesk.atom.com/squadhelp-services/trademark-filing-package">Trademark Filing</a></li>
                                            </ul>
                                </li>        
                            
                                <li class="mobile-main-nav-li">       
                                    <p class="mobile-main-nav-link">Agency Experience </p>        
                                </li>        
                    
                                <li class="mobile-main-nav-li">  
                                    <div class="mobile-text">      
                                        <p class="mobile-main-nav-link">Resources  </p>      
                                        <i class="fa-solid fa-chevron-down"></i>             
                                    </div>      
                                    <ul class="mobile-main-nav-drop-list">       
                                        <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/business-name-generator">Business Name Generator</a></li>
                                        <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/domain-name-generator">Domain Name Generator</a></li>
                                        <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/youtube-name-generator">YouTube Name Generator</a></li>
                                        <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/brand-alignment">Brand Alignment Tool</a></li>
                                        <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/free-trademark-search">Free Trademark Checker</a></li>
                                        <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/startups">Startup Toolkit</a></li>
                                        <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/blog/">Blog</a></li>
                                        <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/our-work">Our Work</a></li>
                                        <li class="mobile-main-nav-sub-li"><a class="main-nav-sub-link" href="https://www.atom.com/testimonials-feedback">Testimonials</a></li>        
                                    </ul>        
                                </li>        
                            </ul>         
                        </div>                
                    </nav>           
                </main>
            </header>
            

                <section class="work-container">
                    <article class="work-container-block">
                        <div class="work-container-content">
                            <div class="work-marker">World's #1 Naming Platform</div>
                            <h1 class="work-title">How Does Atom Work?</h1>
                            <p class="work-text">Atom helps you come up with a great name for your business by combining the power of crowdsourcing with sophisticated 
                                technology and Agency-level validation services.</p>
                            <button class="work-button">  
                                <i class="fa-solid fa-play"></i>
                                <small class="work-button-text">Play Video</small>
                            </button>
                        </div>
                    </article>
                    <article class="work-container-block">
                        <img class="work-img" src="https://www.atom.com/resources/assets/svg/illustrations/app-user.svg" alt="" />
                    </article>
                </section>
            

                <section class="ways-container">

                    <div class="ways-container-info">
                        <div class="ways-container-marker">Our Services</div>
                        <h2 class="ways-container-title">3 Ways To Use Atom</h2>
                        <p class="ways-container-subtitle">Atom offers 3 ways to get you a perfect name for your business.</p>
                    </div>
                    
                <div class="ways-content">
                    
                        <article class="ways-content-block">
                                <img class="ways-contant-icon" src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}g1.svg`} alt="lightning" />
                                <h3 class="ways-contant-title">Launch a Contest</h3>
                                <p class="ways-content-info">Work with hundreds of creative experts to get custom name suggestions for your business or brand.
                                    All names are auto-checked for URL availability.</p>
                                <a class="ways-button" href= "">    
                                    <p class="ways-botton-text">Launch a Contest</p>
                                    <img class="ways-arrow" src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}icon-arrow-long-right.svg`} alt="arrow-right" />
                                </a>
                        </article>

                        <article class="ways-content-block">
                                <img class="ways-contant-icon" src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}g2.svg`} alt="tv" />
                                <h3 class="ways-contant-title">Explore Names For Sale</h3>
                                <p class="ways-content-info">Our branding team has curated thousands of pre-made names that you can purchase instantly. All names 
                                    include a matching URL and a complimentary Logo Design</p>
                                <a class="ways-button" href= "">      
                                    <p class="ways-botton-text">Explore Names For Sale</p>
                                    <img class="ways-arrow" src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}icon-arrow-long-right.svg`} alt="arrow-right" />
                                </a>
                        </article>

                        <article class="ways-content-block">
                                <img class="ways-contant-icon" src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}g3.svg`} alt="lamp" />
                                <h3 class="ways-contant-title">Agency-level Managed Contests</h3>
                                <p class="ways-content-info">Our Managed contests combine the power of crowdsourcing with the rich experience of our branding consultants. Get a complete 
                                    agency-level experience at a fraction of Agency costs</p>
                                <a class="ways-button" href= "">      
                                    <p class="ways-botton-text">Learn More</p>
                                    <img class="ways-arrow" src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}icon-arrow-long-right.svg`} alt="arrow-right" />
                                </a>
                        </article>
                </div>
                    
                </section>
            
        
                <section class="win-container">
                    <div class="win-main-title">
                        <img class="win-icon" src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}icon-win.svg`} alt="winner's cup" />
                        <h3 class="win-title">How Do Naming Contests Work?</h3>
                    </div>

                    <div class="win-content">

                        <article class="win-content-block">
                                <div class="win-step">
                                    <p class="win-step-text">Step 1</p>
                                </div>
                                <p class="win-content-text">Fill out your Naming Brief and 
                                    begin receiving name ideas in minutes</p>
                            <img class="win-arrow" src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}arrow-right-blue.svg`} alt="arrow" />
                        </article>

                        <article class="win-content-block">
                                <div class="win-step">
                                    <p class="win-step-text">Step 2</p>
                                </div>
                                <p class="win-content-text">Rate the submissions and provide feedback to creatives. Creatives 
                                    submit even more names based on your feedback.</p>
                                <img class="win-arrow"  src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}arrow-right-blue.svg"`} alt="arrow" />
                        </article>

                        <article class="win-content-block">
                                <div class="win-step">
                                    <p class="win-step-text">Step 3</p>
                                </div>
                                <p class="win-content-text">Our team helps you test your favorite names with your target 
                                    audience. We also assist with Trademark screening.</p>
                            <img class="win-arrow"  src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}arrow-right-blue.svg`} alt="arrow" />
                        </article>

                        <article class="win-content-block">
                                <div class="win-step">
                                    <p class="win-step-text">Step 4</p>
                                </div>
                                <p class="win-content-text">Pick a Winner.
                                    The winner gets paid for their submission.</p>
                        </article>
                    </div>
                    
                </section>
            
            <div class="questions-container">
                <section class="questions-main-container">
                    <h3 class="questions-main-title">Frequently Asked Questions</h3>
                    <nav class="questions-main-nav">
                        <div class="questions-main-link">
                            <a href="#article1">
                                <p class="questions-main-link-text" >Launching A Contest</p>
                            </a>
                        </div>
                        <div class="questions-main-link">
                            <a href="#article2">
                                <p class="questions-main-link-text">Buying From Marketplace</p>
                            </a>
                        </div>
                        <div class="questions-main-link">
                            <a href="#article3">
                                <p class="questions-main-link-text">Managed Contests</p>
                            </a>
                        </div>
                        <div class="questions-main-link">
                            <a class="questions" href="#article4">
                                <p class="questions-main-link-text">For Creatives</p>
                            </a>
                        </div>
                    </nav>
                </section>


                <section class="questions-paragraph">
                    
                        <h4 id="article1" class="questions-paragraph-title">Launching A Contest</h4>

                    <article class="questions-paragraph-point accordeon">
                        <h5 class="questions-paragraph-subtitle ">How long does it take to start receiving submissions?  <svg class="paragraph-plus" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z" fill="#307DF6"/>
                            </svg></h5>
                        <p class="questions-paragraph-text">For Naming contests, you will start receiving your submissions within few minutes of launching your contest. Since our creatives are located across the globe, you can expect to receive submissions 24 X 7 throughout the duration of the brainstorming phase.</p>
                    </article>
                    <article class="questions-paragraph-point accordeon">
                        <h5 class="questions-paragraph-subtitle">
                            How long do Naming Contests last?  <svg class="paragraph-plus" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z" fill="#307DF6"/>
                                </svg></h5>
                        <p class="questions-paragraph-text">You can choose a duration from 1 day to 7 days. We recommend a duration of 3 Days or 5 Days. This allows for sufficient time for entry submission as well as brainstorming with creatives. If you take advantage of our validation services such as Audience Testing and Trademark Research, both will be an additional 4-7 days (3-5 business days for Audience Testing and 1-2 business days for Trademark Research).</p>
                    </article>
                    <article class="questions-paragraph-point accordeon">
                        <h5 class="questions-paragraph-subtitle">
                            Where are the creatives located?  <svg class="paragraph-plus" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z" fill="#307DF6"/>
                                </svg></h5>
                        <p class="questions-paragraph-text"> About 70% of our Creatives are located in the United States and other English speaking countries (i.e. United Kingdom, Canada, and Australia.). We utilize an advanced rating score algorithm to ensure that high quality creatives receive more opportunities to participate in our contests.</p>
                    </article>
                    <article class="questions-paragraph-point accordeon">
                        <h5 class="questions-paragraph-subtitle">
                            What if I do not like any submissions?  <svg class="paragraph-plus" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z" fill="#307DF6"/>
                                </svg></h5>
                        <p class="questions-paragraph-text border-text">While it is unusually rare that you will not like any names provided, we have a few options in case this problem occurs:
                        </p>
                        <ul class="questions-paragraph-list">
                            <li class="questions-paragraph-li"> If the contest ends and you have not yet found a name that you’d like to move forward with, we can provide complimentary extension of your contest as well as a complimentary consultation with one of our branding consultants (a $99 value). </li>
                            <li class="questions-paragraph-li"> By exploring our premium domain marketplace you can apply the contest award towards the purchase of any name listed for sale. </li>
                            <li class="questions-paragraph-li">If you choose the Gold package or Platinum package and keep the contest as 'Not Guaranteed', you can request a partial refund if you choose not to move forward with any name from you project. (Please note that the refund is for the contest award). Here is a link to our<a class="paragraph-link" href="https://helpdesk.atom.com/en/articles/115621-refund-policy">Refund Policy</a> </li>
                        </ul>
                    </article>
                    <article class="questions-paragraph-point accordeon">
                        <h5 class="questions-paragraph-subtitle">
                            How much does it cost?  <svg class="paragraph-plus" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z" fill="#307DF6"/>
                                </svg></h5>
                        <p class="questions-paragraph-text">Our naming competitions start 
                            at $299, and our logo design competitions start at $299. 
                            Also, there are three additional contest level that each 
                            offer more features and benefits. 
                            See our <a class="paragraph-link" href="/pricing">Pricing Page</a> for details</p>
                    </article>
                    <article class="questions-paragraph-point accordeon">
                        <h5 class="questions-paragraph-subtitle">
                            I need both a Name and a Logo. Do you offer any discount for multiple contests?  <svg class="paragraph-plus" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z" fill="#307DF6"/>
                                </svg></h5>
                        <p class="questions-paragraph-text">Yes! We have many contest bundles - our most popular being our Name, Tagline, and Logo bundle. Bundles allow you to purchase multiple contests at one time and save as much as from $75 - $400. You can learn more about our bundle options on our<a class="paragraph-link" href="/pricing.php?bundle-id=4">Pricing Page</a>.</p>
                    </article>
                    <article class="questions-paragraph-point accordeon">
                        <h5 class="questions-paragraph-subtitle">
                            What if I want to keep my business idea private?  <svg class="paragraph-plus" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z" fill="#307DF6"/>
                                </svg></h5>
                        <p class="questions-paragraph-text accordeon-text">You can select a Non Disclosure Agreement (NDA) option at the time of launching your competition. This will ensure that only those contestants who agree to the NDA will be able to read your project brief and participate in the contest. The contest details will be kept private from other users, as well as search engines.</p>
                    </article>
                    <article class="questions-paragraph-point accordeon">
                        <h5 class="questions-paragraph-subtitle">
                            Can you serve customers outside the US? <svg class="paragraph-plus" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z" fill="#307DF6"/>
                                </svg></h5>
                        <p class="questions-paragraph-text">Absolutely. Atom services organizations across the globe. Our customer come from many countries, such as the United States, Australia, Canada, Europe, India, and MENA. We've helped more than 25,000 customer around the world.</p>
                    </article>
                    <article class="questions-paragraph-point accordeon">
                        <h5 class="questions-paragraph-subtitle">
                            Can I see any examples? <svg class="paragraph-plus" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z" fill="#307DF6"/>
                                </svg></h5>
                        <p class="questions-paragraph-text border-text">Our creatives have submitted more than 6 Million names and thousands of logos on our platform. Here are some examples of Names, Taglines, and Logos that were submitted in recent contests.
                        </p>
                        <ul>
                            <li class="questions-paragraph-li"><a class="paragraph-link" href="">Name Examples</a></li>
                            <li class="questions-paragraph-li"><a class="paragraph-link" href="">Tagline Examples</a></li>
                            <li class="questions-paragraph-li"><a class="paragraph-link" href="">Logo Examples</a></li>
                        </ul>
                    </article>
                </section>
                
                <section class="questions-paragraph">
                    
                        <h4 id="article2" class="questions-paragraph-title">Buying From Marketplace</h4>
                    
                    <article class="questions-paragraph-point accordeon">
                        <h5 class="questions-paragraph-subtitle">
                            What's included with a Domain Purchase? <svg class="paragraph-plus" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z" fill="#307DF6"/>
                                </svg></h5>
                        <p class="questions-paragraph-text accordeon-text">When you purchase a domain from our premium domain marketplace, you will receive the exact match .com URL, a complimentary logo design (along with all source files), as well as a complimentary Trademark report and Audience Testing if you’re interested in validating your name.</p>
                    </article>
                    <article class="questions-paragraph-point accordeon">
                        <h5 class="questions-paragraph-subtitle">
                            How does the Domain transfer process work? <svg class="paragraph-plus" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z" fill="#307DF6"/>
                                </svg></h5>
                        <p class="questions-paragraph-text">Once you purchase a Domain, our transfer specialists will reach out to you (typically on the same business day). In most cases we can transfer the domain to your preferred registrar (such as GoDaddy). Once we confirm the transfer details with you, the transfers are typically initiated to your account within 1 business day.</p>
                    </article>
                    <article class="questions-paragraph-point accordeon">
                        <h5 class="questions-paragraph-subtitle">
                            If I purchase a Domain on installments, can I start using it to setup my website? <svg class="paragraph-plus" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z" fill="#307DF6"/>
                                </svg></h5>
                        <p class="questions-paragraph-text">We offer payment plans for many domains in our Marketplace. If you purchase a domain on a payment plan, we hold the domain in an Escrow account until it is fully paid off. However our team can assist you with making any changes to the domains (such as Nameserver changes), so that you can start using the domain right away after making your first installment payment.</p>
                    </article>
                </section>

                <section class="questions-paragraph">

                    <h4 id="article3" class="questions-paragraph-title">Managed Contests</h4>

                    <article class="questions-paragraph-point accordeon">
                        <h5 class="questions-paragraph-subtitle">
                            What are Managed Contests? <svg class="paragraph-plus" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z" fill="#307DF6"/>
                                </svg></h5>
                        <p class="questions-paragraph-text">The 'Managed' option is a fully managed service by Atom Branding experts. 
                            It includes a formal brief preparation by Atom team and management of your 
                            contest. Managed Contests are a great fit for 
                            companies that are looking for an 'Agency' like 
                            experience and they do not want to manage the 
                            contest directly.
                            <br />
                            Our branding team has directly managed hundreds of branding projects and has learned several best practices that lead to successful project outcomes. Our team will apply all best practices towards the management of your branding project.
                            <br />
                            Learn more about our 
                            <a class="paragraph-link" href="https://www.atom.com/managed-contests">Managed Contest Service</a>
                        </p>
                    </article>
                    <article class="questions-paragraph-point accordeon">
                        <h5 class="questions-paragraph-subtitle">
                            What's a typical timeline for a Managed Contest?  <svg class="paragraph-plus" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z" fill="#307DF6"/>
                                </svg></h5>
                        <p class="questions-paragraph-text border-text">The overall process takes 12-13 days.</p>
                        <ul>
                            <li class="questions-paragraph-li">The Managed projects start with a project kick-off call with your Branding Consultant. You can schedule this call online immediately after making your payment. </li>
                            <li class="questions-paragraph-li">After your kick-off call, the Branding consultant will write your project brief and send for your approval within 1 business day.</li>
                            <li class="questions-paragraph-li">Upon your approval, the contest will go live. The branding consultant will help manage your project throughout the brainstorming phase (typically 5 days). </li>
                            <li class="questions-paragraph-li">Upon the completion of brainstorming phase, the branding consultant will work with you to test the top 6 names from your Shortlist (3-5 Days). In addition, the branding consultant will coordinate the detailed Trademark screening (1-3 days)</li>
                        </ul>
                    </article>
                    <article class="questions-paragraph-point accordeon">
                        <h5 class="questions-paragraph-subtitle">
                            How much do Managed Contests cost?  <svg class="paragraph-plus" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z" fill="#307DF6"/>
                                </svg></h5>
                        <p class="questions-paragraph-text border-text">We offer two levels of Managed Contests. Standard ($1499) and Enterprise ($2999). The Enterprise managed contest includes: </p>
                        <ul>
                            <li class="questions-paragraph-li">(1) a $500 award amount (instead of $300), which will attract our top Creatives and provide more options to choose from; </li>
                            <li class="questions-paragraph-li">(2) we will ensure a senior member of our branding team is assigned to your project and the branding team will invest about 3X more time in the day-to-day management of your project;</li>
                            <li class="questions-paragraph-li"> (3) you will receive more high-end trademark report and 5X more responses for your audience test. </li>
                            <li class="questions-paragraph-li">Here is a link to our <a class="paragraph-link" href="https://www.atom.com/views/contests/create/managed_contests.php" target="_blank">Pricing page </a> with a detailed comparison of the two packages.</li>
                        </ul>
                    </article>
                    <article class="questions-paragraph-point accordeon">
                        <h5 class="questions-paragraph-subtitle">
                            Where are the Branding Consultants located?  <svg class="paragraph-plus" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z" fill="#307DF6"/>
                                </svg></h5>
                        <p class="questions-paragraph-text">All our branding consultants are based in in our Headquarters (Hoffman Estates, IL). Our branding consultants have many years of experience in managing hundreds of branding projects for companies ranging from early stage startups to Fortune 500 corporations.</p>
                    </article>
                </section>

                <section class="questions-paragraph">
                    
                    <h4 id="article4" class="questions-paragraph-title">For Creatives</h4>
                    
                    <article class="questions-paragraph-point accordeon">
                        <h5 class="questions-paragraph-subtitle">
                            Can anyone join your platform? <svg class="paragraph-plus" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z" fill="#307DF6"/>
                                </svg>
                                </h5>
                        <p class="questions-paragraph-text">We are open to anyone to signup. However, we have an extensive '
                            <a class="paragraph-link" href="https://helpdesk.atom.com/en/articles/91702-percentile-ranking-score" target="_blank">Quality Scoring</a>
                            process which ensures that high quality creatives have the ability to continue to participate in the platform. On the other hand, we limit the participation from those creatives who do not consistently receive high ratings.
                        </p>
                    </article>
                    <article class="questions-paragraph-point accordeon">
                        <h5 class="questions-paragraph-subtitle">
                            Can I start participating immediately upon signing up?  <svg class="paragraph-plus" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z" fill="#307DF6"/>
                                </svg></h5>
                        <p class="questions-paragraph-text">When you initially signup, you are assigned few contests to assess your overall quality of submissions. Based upon the quality of your submissions, you will continue to be assigned additional contests. Once you have received enough high ratings on your submissions, your account will be upgraded to 'Full Access', so that you can begin participating in all open contests.</p>
                    </article>
                    <article class="questions-paragraph-point accordeon">
                        <h5 class="questions-paragraph-subtitle">How Do I Get Paid? <svg class="paragraph-plus" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z" fill="#307DF6"/>
                            </svg></h5>
                        <p class="questions-paragraph-text">We handle creative payouts via Paypal or Payoneer.
                            Depending upon your country of residence, we may 
                            require additional documentation to verify your 
                            identity as well as your Tax status.</p>
                    </article>
                </section>
            </div>
        
            
            <div class="search-container">
                <section class="search-container-section">
                    <div class="search-container-block">
                        <img class="search-block-img" src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}icon-search.svg`} alt="search" />
                        <input class="search-block-input" type="text" placeholder="Search Over 200,000+ Premium Names" />
                        <button class="search-block-button"><img class="search-img-arrow" src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}icon-arrow-long-right.svg`} alt="arrow" /></button>
                    
                    </div>
                    
                    <nav class="search-nav">
                        <p class="search-nav-text">Popular searches</p>    
                        <div class="search-nav-livk"><a class="search-link-text" href="https://www.atom.com/premium-domains-for-sale/for/technology">Tech</a></div>
                        <div class="search-nav-livk"><a class="search-link-text" href="https://www.atom.com/premium-domains-for-sale/for/fashion-clothing">Clothing</a></div>
                        <div class="search-nav-livk"><a class="search-link-text" href="https://www.atom.com/premium-domains-for-sale/for/finance">Finance</a></div>
                        <div class="search-nav-livk"><a class="search-link-text" href="https://www.atom.com/premium-domains-for-sale/for/real-estate">Real Estate</a></div>
                        <div class="search-nav-livk"><a class="search-link-text" href="https://www.atom.com/premium-domains-for-sale/for/cryptocurrency-blockchain">Crypto</a></div>
                        <div class="search-nav-livk"><a class="search-link-text" href="https://www.atom.com/premium-domains-for-sale/all/length/Short">Short</a></div>
                        <div class="search-nav-livk"><a class="search-link-text" href="https://www.atom.com/premium-domains-for-sale/all/type_of_name/One%20Word">One Word</a></div>   
                    </nav>    
                    
                </section>
            </div>
            

            <footer class="footer-menu-container">
                <div class="footer-menu-block accordeon">
                    <h5 class="footer-menu-title">Services</h5>
                    <ul class="footer-menu-ul">
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/premium-domains-for-sale/all">Domain Marketplace</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/ultra-premium-marketplace/all">Ultra Premium Marketplace</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/premium-domains-for-sale">Premium Domains For Sale</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/branding-marketing-naming-contests">Crowdsource Naming</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/premium-domains-for-sale/all/q/brandable">Brandable Domains</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/premium-domains-for-sale/all/length/Short">Short Domains</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/premium-domains-for-sale/all/length/3%20Letters">3 Letter Domains</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/premium-domains-for-sale/all/length/4%20Letters">4 Letter Domains</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/premium-domains-for-sale/all/length/5%20Letters">5 Letter Domains</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/premium-domains-for-sale/all/q/6%20letter">6 Letter Domains</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/premium-domains-for-sale/all/q/7%20letter">7 Letter Domains</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/premium-domains-for-sale/all/type_of_name/One%20Word">One Word Domains</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/brand-identity-design">Brand Identity Design</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://helpdesk.atom.com/squadhelp-services/squadhelp-managed-contest-service">Agency Services</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/logos">Logo Contests</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/taglines">Tagline Contests</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://helpdesk.atom.com/squadhelp-services/trademark-filing-package">Trademark Filing Service</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/audience-testing">Audience Test</a></li>  
                    </ul>
                </div>

                <div class="footer-menu-block accordeon">
                    <h5 class="footer-menu-title">Tools</h5>
                    <ul class="footer-menu-ul">
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/business-name-generator">Business Name Generator</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/domain-name-generator">Domain Name Generator</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/blog/how-to-come-up-with-business-name/">How to Name Your Business</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/free-trademark-search">Free Trademark Checker</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/blog/">Branding Blog</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/how-to-name-your-business">Business Naming eBook</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/startups">Startup Toolkit</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/startup-name-generator">Startup Name Generator</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/band-name-generator">Band Name Generator</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/blog-name-generator">Blog Name Generator</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/youtube-name-generator">YouTube Name Generator</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/domain-extensions">Domain Extensions</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/build-a-brand">Build a Brand</a></li>
                    </ul>
                </div>

                <div class="footer-menu-block">

                    <div class="subblock accordeon">
                        <h5 class="footer-menu-title">Sellers</h5>
                        <ul class="footer-menu-ul">
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/sell-domain-names">Become a Seller</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://helpdesk.atom.com/en/articles/997701-domain-marketplace-terms-conditions-for-sellers">Domain Selling Info</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/ultra-premium-marketplace">Ultra Premium Seller Info</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://discussion.atom.com/">Discussion Forum</a></li>
                        </ul>
                    </div>

                    <div class="subblock accordeon">
                        <h5 class="footer-menu-title">Creatives</h5>
                        <ul class="footer-menu-ul">
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/join-as-creative">Become a Creative</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://helpdesk.atom.com/en/collections/118397-creatives">Creative FAQs</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/branding-marketing-naming-contests/all">Active Contests</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/winners">Recent Winners</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://discussion.atom.com/">Discussion Forum</a></li>
                        </ul>
                    </div>
                </div>

                <div class="footer-menu-block">

                    <div class="subblock accordeon">
                        <h5 class="footer-menu-title">Atom</h5>
                        <ul class="footer-menu-ul">
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/AboutUs">About</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/ContactUs">Contact</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/how-it-works">How It Works</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/testimonials-feedback">Testimonials</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/our-work">Our Work</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://helpdesk.atom.com/">Help & FAQs</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/connect">AtomConnect</a></li>
                        </ul>
                    </div>

                    <div class="subblock accordeon">
                        <h5 class="footer-menu-title">Legal</h5>
                        <ul class="footer-menu-ul">
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/Terms&Conditions">Terms of Service</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/privacy-policy">Privacy Policy</a></li>
                            <li class="footer-menu-li"><a class="footer-menu-link" href="https://www.atom.com/cookie-policy">Cookie Policy</a></li>
                        </ul>
                    </div>    
                </div>
            </footer>    
        
        
            <footer class="footer-container">    
                    <div class="footer-container-block">
                        <p class="footer-copyright-text">Copyright © 2024 Atom.com</p>
                    </div>

                        <div class="footer-container-block excellent-bassed">
                            <div class="footer-container-exellent">
                                <h5 class="footer-excellent-text">Excellent</h5>
                                <div class="star-block">
                                    <img class="footer-excellent-star" src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}trustpilot-star.webp`} alt="star" />
                                    <img class="footer-excellent-star" src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}trustpilot-star.webp`} alt="star" />
                                    <img class="footer-excellent-star" src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}trustpilot-star.webp`} alt="star" />
                                    <img class="footer-excellent-star" src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}trustpilot-star.webp`} alt="star" />
                                    <img class="footer-excellent-star" src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}trustpilot-half-star.webp`} alt="star-half" />
                                </div>
                                <p class="footer-star-text"> 
                                    <img class="footer-excellent-star-green" 
                                src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}trustpilot-brand-icon.webp`} alt="star green" />Trustpilot</p>
                            </div>

                            <div class="footer-container-rating">
                                <span class="footer-rating-numbers"><em>4.7 /5</em></span>
                                <p class="footer-rating-text">based on 336 ratings</p>
                            </div>
                        </div>
                    
                        <div class="footer-container-block">
                            <div class="footer-container-button">
                                <a class="footer-consent-text" href="">Consent Preferences</a>
                            </div>
                            <div class="footer-container-contact">
                                <a class="footer-contact-icon" href="https://www.facebook.com/atomdotcom"><img src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}facebook.svg`} alt="fasebook icon" /></a>
                                <a class="footer-contact-icon" href="https://twitter.com/squadhelp"><img src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}twitter.svg`} alt="twitter icon" /></a>
                                <a class="footer-contact-icon" href="https://www.instagram.com/workwithatom/"><img src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}instagam.svg`} alt="instagram icon" /></a>
                                <a class="footer-contact-icon" href="https://www.linkedin.com/company/atomdotcom/"><img src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}in.svg`} alt="linkedin" /></a>
                                <a class="footer-contact-icon" href="https://www.youtube.com/@atomdotcom"><img src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}youtube.svg`} alt="youtube icon" /></a>
                            </div>
                        </div>
            </footer>
        </div> 
        );
    };   
    
export default FullAtom;
