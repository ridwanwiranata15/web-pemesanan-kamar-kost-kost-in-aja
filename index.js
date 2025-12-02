document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // 1. BAGIAN SWIPER JS
    // =========================================
    
    // Cek apakah elemen .swiper ada di halaman agar tidak error jika tidak ditemukan
    if (document.querySelector('.swiper')) {
        const swiper = new Swiper('.swiper', {
            // Konfigurasi Utama
            direction: 'horizontal',
            loop: true,
            slidesPerView: "auto",
            spaceBetween: 30,
            
            // Konfigurasi Autoplay
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },

            // Kecepatan transisi
            speed: 800,

            // UX Mobile
            grabCursor: true,
        });
    }


    // =========================================
    // 2. BAGIAN MODAL JS
    // =========================================

    const modal = document.getElementById('myModal');
    const openBtn = document.getElementById('triggerBtn');
    const closeBtn = document.querySelector('.close-btn');
    const closeActionBtn = document.querySelector('.close-action');
    openBtn.addEventListener("click", () => {
        modal.classList.add("show-modal")
        modal.classList.remove("hide-modal")
    })
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show-modal")
        modal.classList.add("hide-modal")
    })
})

const jumbo = document.querySelector('.jumbo-image img')
const thumbs = document.querySelectorAll('.thumbnails img')

thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        jumbo.src = thumb.src;
        thumbs.forEach(x => x.classList.remove('ring-2', 'ring-blue-500'));
        thumb.classList.add('ring-2', 'ring-blue-500')
    })
})

const packets = document.querySelectorAll('.list-packet')
packets.forEach((packet) => {
    packet.addEventListener("click", () => {
        const radio = packet.querySelector('input[type="radio"]');
         packets.forEach(p => {
            p.querySelector('input[type="radio"]').checked = false;
            p.classList.remove('checked-packet')
        })
        radio.checked = true;
        packet.classList.add('checked-packet')
    })

})


document.addEventListener("DOMContentLoaded", function() {
    // Tunggu 5 detik sebelum memulai proses
    setTimeout(function() {
        var alertBox = document.getElementById('success-alert');
        
        if (alertBox) {
            // 1. Ubah opacity jadi 0 (transparan)
            alertBox.style.opacity = '0';

            // 2. Tunggu transisi selesai (500ms sesuai class duration-500), baru hapus elemen
            setTimeout(function() {
                alertBox.remove(); // Hapus total dari DOM
                // atau alertBox.style.display = 'none'; // Jika hanya ingin disembunyikan
            }, 5000); 
        }
    }, 5000);
});

const sidebar = document.getElementById('sidebar-order')
const toggle = document.getElementById('toggle-sidebar')

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('active')
})