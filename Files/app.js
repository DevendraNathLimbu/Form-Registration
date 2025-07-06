const btn = document.querySelector('button[type="submit"]');
const inputs = document.querySelectorAll('input');
const file = document.querySelector('.file');
const mail = document.querySelector('.mail');
const image = document.querySelector('.image');
const inputImg = document.querySelector('input[type="file"]');
const clkBtn = document.querySelector('.clkBtn');

const info = document.querySelector('.info');

inputImg.addEventListener('change', (e) => {
  image.style.backgroundImage = `url(${URL.createObjectURL(e.target.files[0])})`;
    image.style.backgroundSize = 'contain';
    clkBtn.classList.remove('hidden');
    clkBtn.style.display = 'flex';
    info.style.color = 'transparent';
});

btn.onclick = (e) => {
    e.preventDefault();
    inputs.forEach(input => {
        if (input.value === '') {
            if(input.type === 'file') {
                file.style.color = 'crimson';
            }
            else if(input.type === 'email') {
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if(!regex.test((input.value))){
                    input.style.borderColor = 'crimson';
                    mail.style.color = 'crimson';
                }
            }
            else{
                input.style.borderColor = 'crimson';
            }
            
        } else {

            if(input.type === 'email') {
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if(regex.test((input.value))){
                    input.style.borderColor = 'white';
                    mail.style.color = 'white';
                }
            }
            else{
                input.classList.remove('error');
            file.style.color = 'white';
            input.style.borderColor = 'white';
            }
        }
    });
}