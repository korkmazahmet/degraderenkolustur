const gradientBox = document.querySelector(".gradient-box"); // Gradient kutusunu seçiyoruz
const selectMenu = document.querySelector(".select-box select"); // Seçim menüsünü seçiyoruz
const colorInputs = document.querySelectorAll(".colors input"); // Renk giriş kutularını seçiyoruz
const textarea = document.querySelector("textarea"); // Textarea elementini seçiyoruz
const refreshBtn = document.querySelector(".yenile"); // Yenile butonunu seçiyoruz
const copyBtn = document.querySelector(".kopyala"); // Kopyala butonunu seçiyoruz

// Rastgele bir renk hex kodu oluşturmak için fonksiyon
const getRandomColor = () => {
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0'); // Rastgele bir hex kodu oluştur
    return `#${randomHex}`; // Hex kodunu döndür
}

// Gradient oluşturmak için fonksiyon
const renkOlustur = (isRandom) => {
    if (isRandom) { // Eğer rastgele ise
        colorInputs[0].value = getRandomColor(); // İlk renk kutusunu rastgele bir renkle doldur
        colorInputs[1].value = getRandomColor(); // İkinci renk kutusunu rastgele bir renkle doldur
    }
    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`; // Gradient stilini oluştur
    gradientBox.style.background = gradient; // Gradient kutusunun arka planını ayarla
    textarea.value = `background: ${gradient};`; // Textarea içine CSS kodunu yaz
}

// Renk giriş kutularına input event'i ekliyoruz
colorInputs.forEach(input => {
    input.addEventListener("input", () => renkOlustur(false)); // Giriş yapıldığında renk oluştur
});

// Kodu kopyalamak için fonksiyon
const copyCode = () => {
    navigator.clipboard.writeText(textarea.value); // Textarea içeriğini kopyala
    copyBtn.innerHTML = "Kod Kopyalandı!"; // Kopyala butonunun metnini değiştir
    setTimeout(() => copyBtn.innerText = "Kodu Kopyala", 1500); // 1.5 saniye sonra metni geri değiştir
}

// Seçim menüsüne change event'i ekliyoruz
selectMenu.addEventListener("change", () => renkOlustur(false));

// Yenile butonuna click event'i ekliyoruz
refreshBtn.addEventListener("click", () => renkOlustur(true));

// Kopyala butonuna click event'i ekliyoruz
copyBtn.addEventListener("click", () => copyCode(true));
