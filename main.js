            /*********  CHANGE BACKGROUND HEADER           ********/
        function scrollHeader(){
            const header = document.getElementById('header')
            //when scroll is greater than 50 viewport height,add the scroll-header class to the header tag
            if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
        }

        window.addEventListener('scroll', scrollHeader)

/*********   SWIPER JS           ********/

        var swiperPopular = new Swiper(".popular_container", {
            spaceBetween: 32,
            grapCursor: true,
            centeredSlides:true,
            slidesPerview:'auto',
            loop:true,
            
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });

          /*****************        VALUE ACCORDION      ************** */

          const accordionItems = document.querySelectorAll('.value_accordion-item')

          accordionItems.forEach((item) => {
            const accordionHeader = item.querySelector('.value_accordion-header')

            accordionHeader.addEventListener('click', () => {
              const openItem = document.querySelector('.accordion-open')

              toggleItem(item)


              if(openItem && openItem!== item){
                  toggleItem(openItem) 
              }
            })

          })

          const toggleItem = (item) => {
            const accordionContent = item.querySelector('.value_accordion-content')

            if(item.classList.contains('accordion-open')){
              accordionContent.removeAttribute('style')
              item.classList.remove('accordion-open')
            } else{
              accordionContent.style.height = accordionContent.scrollHeight + 'px'
              item.classList.add('accordion-open')
            }
          }


  /**********      SCROLL SECTIONS ACTIVE LINK  ***********/


  