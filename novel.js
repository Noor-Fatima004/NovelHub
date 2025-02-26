const novels = [
    { title: "Pir-e-Kamil", author: "Umera Ahmed", description: "A journey of self-discovery and spiritual awakening.It's a story of redemption, reminding us that no matter how lost we feel, there is always a path back to the truth", reviews: "4.9/5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPVrJ_Lb8FHqazERGJVo5YteRb7O88F0MUJSDA9Iqpw_FGfgcURIo-m8d0KHaFdLlRPc&usqp=CAU" },
    { title: "Hasil", author: "Umera Ahmed", description: "A thought-provoking novel about faith and purpose.The novel highlights themes of self-discovery,the complexities of love, and the struggle between personal desires and family expectations.", reviews: "4.5K", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrhKkQxFBKJBb6jd6iis28M-gPYY7Fnu_Blh55Oy0_-60aQQyliyoZA-yowdFw0Ud5_s&usqp=CAU",},
    { title: "Bab-e-Dehr", author: "Mehrunisa Shahmeer", description: "Baab e Dehr presents an opportunity to delve into intricate plot, deep character development, and the cultural nuances that shape the stories.", reviews: "4.7/5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaHgH_x1axZUejYMpQY24Pjg0916EKW0PUf63W2ygrLSv_SJmxpuWCNKXEL3ZUn0Z2NKY&usqp=CAU" },
    { title: "Neelam Ka Markat", author: "Deeba Tabassum", description: "tells the story of a young woman named Neelam who is forced into a loveless marriage due to societal pressures,", reviews: "4.6/5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5UWQRdP75QWOsUv56rYJIlhL8IYZeBGU2jLJ45dMo2IoHC4Qjc6jb5JW7fphBDpL8v7M&usqp=CAU" },
    { title: "Chlo Ab Sath Chltye hien", author: "Shamsa Iqbal", description: " Story of the novel revolves around Social issues and love story. It is very famous, social, romantic Urdu novel that is publishing on group of Prime Urdu Novels", reviews: "5K", image: "https://www.neweramagazine.com/uploadedStuff/Templates/93173485_153016066138287_5711244332497895424_n.jpg" },
    { title: "Mala", author: "Nimra Ahmad", description: "Mala by Nimra Ahmed tells the story of a young woman who navigates personal struggles, societal pressures, and discovers her own strength while facing love and loss.", reviews: "4.8/5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYHHK-82OCfDmprhQWGF0b1EQBbdqV6kVA9A3ichuJSkqdGbcZI1ID0zqkHz3rpXu8Eo&usqp=CAU" },
    { title: "Shehr-e-Zaat", author: "Umera Ahmed", description: "Shehr-e-Zaat by Umera Ahmed follows the spiritual journey of Falak, a young woman who learns to seek inner peace and purpose beyond material desires and worldly love.", reviews: "4.7/5", image: "https://i.pinimg.com/474x/8c/cb/fd/8ccbfdb48c9e7f4e153829411988b54a.jpg" },
    { title: "Alif", author: "Umera Ahmed", description: "A tale of divine connection and love.follows the intertwining lives of a television producer and a spiritual seeker, exploring themes of love and faith", reviews: "4.9/5", image: "https://th.bing.com/th/id/R.ce72e0b4b933ce5d395237fca3bb73a3?rik=xZH31uLHJL7FCQ&pid=ImgRaw&r=0" },
    { title: "Amar Bail", author: "Umera Ahmed", description: "A romantic novel set in bureaucratic backdrop.", reviews: "4.8/5", image: "https://i.pinimg.com/736x/05/84/be/0584beb91995e85119a7bfdd3bc93acf.jpg" },
    { title: "Bismil", author: "Mehrunisa Shahmeer", description: "Bismil by Mehrunisa Shahmeer is a poignant love story that explores themes of forbidden love, societal norms, and personal sacrifice.", reviews: "4.7/5", image: "https://th.bing.com/th/id/OIP.ub-6dNtGqHDkUR6uEB6Y-gHaFj?rs=1&pid=ImgDetMain" },
    { title: "Yaram", author: "Razia Butt", description: "love story marked by deep, selfless devotion, despite both carrying heavy burdens from their pasts; the novel explores themes of unconditional love, friendship, and loyalty ", reviews: "4.9/5", image: "https://booksclock.com/wp-content/uploads/2023/11/4-2.webp" },
    { title: "Qraqram Ka taj Mehl", author: "Nimra Ahmed", description: "tells a story of love, loss, and self-discovery in the Karakoram mountain range. The novel is a blend of romance, adventure, and the beauty of the Karakoram. ", reviews: "4.8/5", image: "https://kradoretail.com/wp-content/uploads/2024/09/Karakoram-ka-tajmahal.png" },
    { title: "Jannat Kay Pattay", author: "Nimra Ahmed", description: "gripping tale of love, faith, and self-discovery, following the transformative journey of Haya Suleman as she navigates challenges across different cultures and embraces her true identity.", reviews: "4.9/5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXJpLttPCH694GWJkBR67cEjYz8lUIzLjQKzW6PnUvplpJ2hScasriGOEKwnxdsB5kEI&usqp=CAU" },
    { title: "Mushaf", author: "Nimra Ahmed", description: "Discovering the hidden truths of the Quran.", reviews: "4.7/5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS86GJ8qjUOKATov_8Y5SHxhum-1N9GbVL6fA&s" },
    { title: "Namal", author: "Nimra Ahmed", description: "Namal by Nimra Ahmed is a complex thriller intertwining themes of revenge, justice, and family, centered around a murder mystery that unravels deep secrets, conspiracies, and the moral struggles of its characters.", reviews: "4.9/5", image: "https://i0.wp.com/www.vanguardbooks.com/wp-content/uploads/2024/05/A2060-f.jpg?fit=664%2C945&ssl=1" },
    { title: "Usri Yusra", author: "Hussna Hussain", description: "a compelling exploration of resilience and hope, fitting well within fiction and romance.", reviews: "4.8/5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStcW6n4Ym7c708byO8jx4-3EpmyMzgH-J5RA&s" },
    { title: "La Hasil", author: "Umera Ahmed", description: "A tale of unfulfilled desires powerful story about the emptiness of material pursuits and the journey towards spiritual enlightenment", reviews: "4.7/5", image: "https://imgv2-1-f.scribdassets.com/img/document/147793312/original/b59fa83357/1?v=1" },
    { title: "Aab-e-Hayat", author: "Umera Ahmed", description: "Sequel to Pir-e-Kamil, exploring life and faith.", reviews: "4.9/5", image: "https://rasalay.com/wp-content/uploads/2024/04/aab-e-hayat-novel-pdf-by-umera-ahmed.webp" },
    { title: "Halim", author: "Nimra Ahmad", description: "Haalim by Nimra Ahmed is a gripping political thriller blended with elements of fantasy, revolving around Taliya, a strong-willed woman with the supernatural ability to see the future in her dreams", reviews: "4.6/5", image: "https://m.media-amazon.com/images/I/61puLr7Tn2L._AC_UF1000,1000_QL80_.jpg" },
    { title: "Meri Zaat Zarra-e-Benishan", author: "Umera Ahmed", description: "The struggles of a woman against societal norms.", reviews: "4.8/5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZq01sagRxceMsXE0SnS-JBOMqluCeiWnzQA&s" },
];

const container = document.getElementById('novels');

function displayNovels(novelsList) {
    container.innerHTML = '';
    novelsList.forEach(novel => {
        const card = document.createElement('div');
        card.className = 'novel-card';

        card.innerHTML = `
            <img src="${novel.image}" alt="${novel.title}">
            <div class="novel-info">
                <h2 class="novel-title">${novel.title}</h2>
                <p><strong>Author:</strong> ${novel.author}</p>
                <p class="novel-description">${novel.description}</p>
                <p class="novel-reviews">${novel.reviews}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.navbar ul').classList.toggle('show');
});

displayNovels(novels);

