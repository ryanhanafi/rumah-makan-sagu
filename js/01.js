
var images = [
    'https://img-global.cpcdn.com/recipes/54f89cc3860a7177/640x640sq70/photo.webp',
    'https://pict.sindonews.net/dyn/850/pena/news/2021/12/31/185/644325/resep-bumbu-ayam-bakar-kecap-untuk-malam-tahun-baru-meresap-sampai-ke-dalam-jge.jpg',
    'https://cdn.idntimes.com/content-images/community/2022/05/resep-sambal-paling-enak-resep-sambal-matah-sambal-matah-bali-sambel-matah-bahan-sambal-matah-tips-sambal-matah-9cde86371d7fc78c91ae80a6ffab250e-137dd82ad7bd32e2570eb6fc27660b5c.jpg'
];

var currentImage = 0;

function changeBackground() {
    if (currentImage === images.length) {
        currentImage = 0;
    }var imageUrl = images[currentImage];
    $('.hero').css('background-image', 'url(' + imageUrl + ')');
    currentImage++;
}

// Change background image every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 5000);

// Initial background image
changeBackground();

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".animate-me");
    const windowHeight = window.innerHeight;
  
    elements.forEach((element) => {
      const elementOffset = element.getBoundingClientRect().top;
  
      // Tambahkan class 'visible' untuk elemen yang baru muncul di tampilan
      if (elementOffset < windowHeight / 2 && !element.classList.contains('visible')) {
        element.classList.add('visible');
      } else if (elementOffset >= windowHeight / 2 && element.classList.contains('visible')) {
        // Hapus class 'visible' jika elemen sudah tidak terlihat
        element.classList.remove('visible');
      }
    });
  });
  

  function sendToWhatsapp(){
	let number = "+6285806875006";

    let name = document.getElementById('nama').value;
    let email = document.getElementById('email').value;
    let tanggal = document.getElementById('tanggal').value;
    let saran = document.getElementById('saran').value;
  
    var url = "https://wa.me/" + number + "?text=" +
      "Nama: " + name + "%0a" +
      "Email: " + email + "%0a" +
      "Tanggal: " + tanggal + "%0a" +
      "Saran: " + saran + "%0a%0a";

	window.open(url, '_blank').focus();
}

function submitOrder() {
  // (Proses pengumpulan rincian pesanan)
  // Tampilkan popup dengan rincian pesanan
  document.getElementById('orderDetails').innerText = orderDetails;
  document.getElementById('orderPopup').style.display = 'block';
}

function closePopup() {
  // Tutup popup
  document.getElementById('orderPopup').style.display = 'none';
}

let orderDetails = ""; // Tambahkan variabel untuk menyimpan rincian pesanan

    function submitOrder() {
      // Ambil rincian pesanan dari formulir
      let customerName = document.getElementById('customerName').value;
      let phoneNumber = document.getElementById('phoneNumber').value;
      let selectedOrder = document.getElementById('selectedOrder').value;
      let orderQuantity = document.getElementById('orderQuantity').value;
      let deliveryAddress = document.getElementById('deliveryAddress').value;

      // Simpan rincian pesanan dalam variabel
      orderDetails = `
        Nama: ${customerName}
        Nomor Telepon: ${phoneNumber}
        Pilihan Pesanan: ${selectedOrder}
        Jumlah: ${orderQuantity}
        Alamat Pengiriman: ${deliveryAddress}
      `;

      // Tampilkan popup dengan rincian pesanan
      document.getElementById('orderDetails').innerText = orderDetails;
      document.getElementById('orderPopup').style.display = 'block';
    }

    function closePopup() {
      // Tutup popup
      document.getElementById('orderPopup').style.display = 'none';

      // Hapus nilai dalam formulir
      document.getElementById('customerName').value = "";
      document.getElementById('phoneNumber').value = "";
      document.getElementById('selectedOrder').value = "";
      document.getElementById('orderQuantity').value = "";
      document.getElementById('deliveryAddress').value = "";
    }

    function confirmOrder() {
      // Tampilkan popup konfirmasi dengan rincian pesanan yang sudah disimpan
      document.getElementById('orderDetails').innerText = orderDetails;
      document.getElementById('orderPopup').style.display = 'block';
    }

    function confirmOrder() {
      // Ambil rincian pesanan dari formulir
      let customerName = document.getElementById('customerName').value;
      let phoneNumber = document.getElementById('phoneNumber').value;
      let selectedOrder = document.getElementById('selectedOrder').value;
      let orderQuantity = document.getElementById('orderQuantity').value;
      let deliveryAddress = document.getElementById('deliveryAddress').value;

      // Format pesan untuk WhatsApp
      let whatsappMessage = `
        Nama: ${customerName}
        Nomor Telepon: ${phoneNumber}
        Pilihan Pesanan: ${selectedOrder}
        Jumlah: ${orderQuantity}
        Alamat Pengiriman: ${deliveryAddress}
      `;

      let whatsappNumber = "+6285806875006";
      var whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(whatsappMessage);

      // Buka jendela WhatsApp baru dengan pesan terisi
      window.open(whatsappUrl, '_blank').focus();
    }