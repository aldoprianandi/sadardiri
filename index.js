var image = document.getElementById("Feeling");
var pers = document.getElementById("Pers");
var desc = document.getElementById("Pers_desc");
function Emotions(x) {
    if (x == 0) {
        image.src = "img/Baik.png";
        pers.textContent = "Baik";
        desc.textContent = "Senang mendengarnya! Kami senang kamu merasa baik dan bersemangat hari ini. Terus jaga semangatmu ya! Jangan lupa untuk tetap menjaga kesehatan fisik dan mentalmu.";
    }
    else if (x == 1) {
        image.src = "img/Cemas.png";
        pers.textContent = "Sedih";
        desc.textContent = "Maaf atas ketidaknyamanannya. Kami mengerti bahwa Anda sedih hari ini. Semoga perasaan sedih Anda segera berlalu dan Anda menemukan kenyamanan dan kebahagiaan kembali.";
    }
    else if (x == 2) {
        image.src = "img/Okay.png";
        pers.textContent = "Okay";
        desc.textContent = "Senang mendengar bahwa Anda merasa okay hari ini. Semoga perasaan positif ini terus berlanjut dan memberi Anda energi positif untuk menghadapi hari-hari mendatang. Terus jaga keseimbangan emosional dan manfaatkan perasaan baik ini untuk mencapai tujuan dan kebahagiaan Anda.";
    }
    else if(x == 3){
        image.src = "img/Stress.png";
        pers.textContent = "Stress";
        desc.textContent= "Maaf mendengar bahwa Anda merasa stress. Coba luangkan waktu untuk istirahat dan relaksasi. Berbagi perasaan Anda dengan orang dekat. Jika perlu, cari bantuan profesional. Anda tidak sendirian dan ada harapan untuk merasa lebih baik.";
    }
    else if (x == 4) {
        image.src = "img/Sedih.png";
        pers.textContent = "Cemas";
        desc.textContent = "Coba lakukan teknik pernapasan dan relaksasi untuk mengurangi kecemasan. Jangan ragu untuk berbicara dengan seseorang yang dapat dipercaya. Jika perlu, pertimbangkan mencari bantuan profesional. Tetaplah kuat, ada harapan untuk merasa lebih baik.";
    }
    else if (x == 5) {
        image.src = "img/Lelah.png";
        pers.textContent = "Lelah";
        desc.textContent = "Pastikan Anda mendapatkan istirahat yang cukup dan tidur yang baik. Perhatikan pola makan dan jangan ragu untuk meminta bantuan jika perlu. Semoga Anda segera merasa segar kembali.";
    }

}