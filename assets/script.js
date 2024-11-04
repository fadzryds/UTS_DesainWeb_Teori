function viewMore() {
    alert("Lihat informasi lebih lanjut tentang jasa joki tugas kami!");
  }
  
  // Responsif Navbar - Tampilkan/Sembunyikan Nav Links
  document.getElementById("hamburgerMenu").addEventListener("click", function () {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
  });
  
  // Animasi Scroll untuk Elemen
  document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in");
  
    // Fungsi untuk memeriksa apakah elemen masuk ke dalam viewport
    function checkElements() {
      const windowHeight = window.innerHeight;
      elements.forEach(el => {
        const positionFromTop = el.getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          el.classList.add("visible");
        }
      });
    }
  
    // Panggil fungsi checkElements saat halaman di-scroll
    window.addEventListener("scroll", checkElements);
    // Jalankan sekali saat halaman dimuat
    checkElements();
  });
  
  // Fungsi untuk tombol View More
function viewMore() {
  alert("Lihat informasi lebih lanjut tentang jasa joki tugas kami!");
}

// Responsif Navbar - Tampilkan/Sembunyikan Nav Links
document.getElementById("hamburgerMenu").addEventListener("click", function () {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll(".fade-in");

  function checkElements() {
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
      const positionFromTop = el.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkElements);
  checkElements();
});

// Fungsi pesan Joki
function pesanJoki() {
  const tingkat = document.getElementById("tingkat").value;
  const deskripsi = document.getElementById("deskripsi").value;

  if (tingkat && deskripsi) {
    const pesan = `Halo, saya ingin memesan jasa joki untuk tingkat ${tingkat}.\nDeskripsi Tugas: ${deskripsi}`;
    const nomorWA = "6282258847225"; 
    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  } else {
    alert("Mohon lengkapi semua field sebelum memesan.");
  }
}

function playVideo() {
  const video = document.getElementById("reviewVideo");
  const src = video.getAttribute("src");

  video.setAttribute("src", `${src.replace("&mute=1", "")}&autoplay=1`);
}

function submitKomentar() {
  const rating = document.querySelector('input[name="rating"]:checked')?.value;
  const komentar = document.getElementById("komentar").value;
  const komentarContainer = document.querySelector(".komentar");

  if (rating && komentar) {

    const komentarBaru = document.createElement("p");
    komentarBaru.textContent = `"${komentar}" - Peringkat: ${rating} bintang`;

    komentarContainer.appendChild(komentarBaru);

    document.getElementById("formKomentar").reset();
  } else {
    alert("Mohon lengkapi semua field sebelum mengirim.");
  }
}
