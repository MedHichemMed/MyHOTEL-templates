(function(){
    console.log("work");

    let sections = [];
    let sectionsHeight = 1;
    let showcaseSection = document.getElementById('showcase');
    let topServicesSection = document.getElementById('top-services');
    let welcomeSection = document.getElementById('welcome');
    let attractionSection = document.getElementById('attraction');
    let standardsSection = document.getElementById('standards');
    let bookRoomSection = document.getElementById('book-room');
    let standards = document.querySelectorAll(".standard");
    let showcaseItems = document.querySelectorAll(".showcase-wrapper");
    let showcaseItemControlLeft = document.getElementById('left');
    let showcaseItemControlRight = document.getElementById('right');
    let mobileNavigation = document.getElementById('mobile-nav');
    let navMenuToggle = document.getElementById('nav-menu-toggle');

    navMenuToggle.onclick = function(){
        toggleClass(mobileNavigation, "open");
    }

    sections.push(
        makeSection(showcaseSection),
        makeSection(topServicesSection),
        makeSection(welcomeSection),
        makeSection(attractionSection),
        makeSection(standardsSection),
        makeSection(bookRoomSection));


    window.onscroll = function(){
        let pageOffset = window.pageYOffset;
        if(pageOffset + 500 > sections[1].sectionOffset){
            addClass(sections[1].section, "opened");
        }
        if(pageOffset + 500 > sections[2].sectionOffset){
            addClass(sections[2].section, "opened");
        }
        if(pageOffset + 500 > sections[3].sectionOffset){
            addClass(sections[3].section, "opened");
        }
        if(pageOffset + 500 > sections[4].sectionOffset){
            addClass(sections[4].section, "opened");
            standards.forEach(function(e, i){
                setTimeout(function(){
                    addClass(e, "visible");
                }, 50 * i)
            })
        }
        if(pageOffset + 500 > sections[5].sectionOffset){
            addClass(sections[5].section, "opened");
        }
    }







    function makeSection(section){
        if(section){
            return {
                sectionName: section.id,
                section: section,
                sectionOffset: section.offsetTop
            }
        }
    }
    function addClass(section, className){
        let classList = section.className.split(' ');
        if(classList.indexOf(className) === -1){
            classList.push(className);
            section.className = classList.join(' ');
        }
    }
    function toggleClass(section, className){
        let classList = section.className.split(' ');
        if(classList.indexOf(className) === -1){
            classList.push(className);
            section.className = classList.join(' ');
        }else{
            removeClass(section, className);
        }
    }

    function removeClass(section, className){
        let classList = section.className.split(' ');
        if(classList.indexOf(className)){
            let newClassList = classList.filter(function(e){
                return e !== className;
            })

            section.className = newClassList.join(' ');
        }
    }

    //automatic sliding
    (function (showcaseItems){
        let next = 0;
        let before = 0;
        let itemsLength = showcaseItems.length;
        let interval = setInterval(function(){
            before = next;
            next++;
            if( next === itemsLength ){
                next = 0;
            }

            addClass(showcaseItems[next], "active");
            removeClass(showcaseItems[before], "active")

        }, 3000);



    }(showcaseItems));




})();
