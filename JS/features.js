document.getElementById('donation-button')
    .addEventListener('click', function () {
        showSectionId('main-section');
    })

document.getElementById('history-button')
    .addEventListener('click', function () {
        showSectionId('history-id');

    })

// ----FAQ Section 
document.getElementById('blog-id')
    .addEventListener('click', function (event) {

        document.getElementById('faq-section').classList.toggle('hidden');
        document.getElementById('main-section').classList.toggle('hidden');
        let blogText = document.querySelector('.blog-btn');
        console.log(blogText);
        if (blogText.innerText === 'Home') {
            blogText.innerText = 'Blog';
        }
        else {
            blogText.innerText = 'Home';
        }


    })


// document.querySelector('.donation_button')
//     .addEventListener('click', function (event) {
//         document.querySelector('.donation_button').classList.add(`bg-[#B4F461]`);
//         document.querySelector('.history_button').classList.remove(`bg-[#B4F461]`);
//         console.log('donation_button');

//     })
// document.querySelector('.history_button')
//     .addEventListener('click', function () {
//         document.querySelector('.donation_button').classList.remove(`bg-[#B4F461]`);
//         document.querySelector('.history_button').classList.add(`bg-[#B4F461]`);
//         console.log('donation_button');

//     })


// -------Modal section 




