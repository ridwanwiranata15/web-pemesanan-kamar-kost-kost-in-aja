document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        // Konfigurasi Utama
        direction: 'horizontal',
        loop: true, // Mengaktifkan looping (agar tidak mentok di akhir)
        slidesPerView: "auto", // Wajib "auto" karena di HTML pakai class w-fit
        spaceBetween: 30, // Jarak antar kartu (sesuaikan dengan gap yang diinginkan)
        
        // Konfigurasi Autoplay (Geser Otomatis)
        autoplay: {
            delay: 3000, // Waktu tunggu 3 detik sebelum geser
            disableOnInteraction: false, // Autoplay tetap jalan meski user menggeser manual
            pauseOnMouseEnter: true, // (Opsional) Berhenti sebentar saat mouse di atas kartu
        },

        // Kecepatan transisi geser (ms)
        speed: 800, 

        // Agar UX lebih smooth di Mobile
        grabCursor: true, 
    });
});