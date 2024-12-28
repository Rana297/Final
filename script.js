
    document.addEventListener('DOMContentLoaded', function() {
        const dropdowns = document.querySelectorAll('.dropdown');

        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('mouseenter', function() {
                this.classList.add('show');
                this.querySelector('.dropdown-menu').classList.add('show');
            });

            dropdown.addEventListener('mouseleave', function() {
                this.classList.remove('show');
                this.querySelector('.dropdown-menu').classList.remove('show');
            });
        });
    });





        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
    
            // Reset error messages
            document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
            document.getElementById('formError').style.display = 'none';
            document.getElementById('successMessage').style.display = 'none';
    
            let isValid = true;
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
    
            if (!name) {
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            }
    
            if (!email) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                document.getElementById('emailError').textContent = 'Invalid email format.';
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }
    
            if (!subject) {
                document.getElementById('subjectError').style.display = 'block';
                isValid = false;
            }
    
            if (!message) {
                document.getElementById('messageError').style.display = 'block';
                isValid = false;
            }
    
            if (isValid) {
                document.getElementById('successMessage').style.display = 'block';
                // Here you would typically send the form data to the server
                console.log("Form submitted successfully!");
            } else {
                document.getElementById('formError').style.display = 'block';
            }
        });
        const slider = document.querySelector('.slider-testimonial');
        const testimonials = document.querySelectorAll('.testimonial');
        const leftArrow = document.querySelector('.left-arrow');
        const rightArrow = document.querySelector('.right-arrow');
        
        let currentIndex = 0; 
        
        function updateSliderPosition() {
            slider.style.transition = 'transform 0.5s ease-in-out'; 
            slider.style.transform = `translateX(-${currentIndex * 100 / 6}%)`;
        }
        
        function slideRight() {
            currentIndex++;
            updateSliderPosition();
            if (currentIndex >= testimonials.length) {
                setTimeout(() => {
                    slider.style.transition = 'none'; 
                    currentIndex = 0; 
                    slider.style.transform = `translateX(-${currentIndex * 100 / 6}%)`;
                }, 500); 
            }
        }
        function slideLeft() {
            currentIndex--;
            updateSliderPosition();
        
            if (currentIndex < 0) {
                setTimeout(() => {
                    slider.style.transition = 'none'; 
                    currentIndex = testimonials.length - 1; 
                    slider.style.transform = `translateX(-${currentIndex * 100 / 6}%)`;
                }, 5);
            }
        }
        
        leftArrow.addEventListener('click', slideLeft);
        rightArrow.addEventListener('click', slideRight);
        
        
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');
        
        window.onscroll = function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        };
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });        
    const perYearButton = document.getElementById("perYear");
const perMonthButton = document.getElementById("perMonth");
const pricingCards = document.querySelector(".pricing-cards");
const defaultPricing = pricingCards.innerHTML;

const yearlyPricing = `
    <div class="card business">
        <div class="price-item">
            <h3>Business</h3>
            <p class="pricing">From <span class="price">$399</span></p>
        </div>
        <ul>
            <div class="feature-item">
                <li ><i class="fa-solid fa-check text-primary"></i> 03 PSD Pack</li>
                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="feature-item">
                <li ><i class="fa-solid fa-check text-primary"></i> 03 Wordpress Pack</li>
                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>   </div>
            <div class="feature-item">
                <li><i class="fa-solid fa-check text-primary"></i> 1200 Support Ticket</li>
                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </ul>
        <button class="get-started business-btn">Get Started Now</button>
    </div>
    <div class="card Ultimate">
        <div class="price-item">
            <h3>Ultimate</h3>
            <p class="pricing">From <span class="price">$799</span></p>
        </div>
        <ul>
            <div class="feature-item">
                <li ><i class="fa-solid fa-check text-primary"></i> 05 PSD Pack</li>
                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
            <div class="feature-item">
                <li ><i class="fa-solid fa-check text-primary"></i> 20 Wordpress Pack</li>
                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="feature-item">
                <li><i class="fa-solid fa-check text-primary"></i> 1000 Support Ticket</li>
                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </ul>
        <button class="get-started">Get Started Now</button>
    </div>
    <div class="card personal">
        <div class="price-item">
            <h3>Personal</h3>
            <p class="pricing">From <span class="price">$1499</span></p>
        </div>
        <ul>
            <div class="feature-item">
                <li ><i class="fa-solid fa-check text-primary"></i> 20 PSD Pack</li>
                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><div class="feature-item">
                <li ><i class="fa-solid fa-check text-primary"></i> 30 Wordpress Pack</li>
                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="feature-item">
                <li ><i class="fa-solid fa-check text-primary"></i> 1500 Support Ticket</li>
                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </ul>
        <button class="get-started">Get Started Now</button>
    </div>
`;
function updatePricing(content) {
    pricingCards.innerHTML = content;
}

perYearButton.addEventListener("click", () => {
    updatePricing(yearlyPricing);
    perYearButton.classList.add("bg-primary", "text-white");
    perMonthButton.classList.remove("bg-primary", "text-white");
    perMonthButton.style.background = "white";
    perMonthButton.style.color = "#0c65ed";
    const businessCard = document.querySelector(".card.business");
    const personalCard = document.querySelector(".card.personal");
    personalCard.classList.add("business"); 
    businessCard.classList.remove("business")
});

perMonthButton.addEventListener("click", () => {
    updatePricing(defaultPricing);
    perMonthButton.classList.add("bg-primary", "text-white");
    perYearButton.classList.remove("bg-primary", "text-white");
    perYearButton.style.background = "white";
    perYearButton.style.color = "#0c65ed";
});
           


        