function check() {
	var c=0;
	var q1=document.kuis.pertanyaan1.value
	var q2=document.kuis.pertanyaan2.value
	var q3=document.kuis.pertanyaan3.value
	var q4=document.kuis.pertanyaan4.value
	var q5=document.kuis.pertanyaan5.value
	var hasil=document.getElementsById('hasil');
	var kuis=document.getElementsById("kuis");
	if (q1=="Sesak") {c++}
	if (q2=="5M") {c++}
	if (q3=="masker") {c++}
	if (q4=="bener") {c++}
	if (q5=="vaksin") {c++}

	kuis.style.display="none";
	
	if (c<=3) {
		hasil.textContent=`Hasilmu adalah ${c}. Kamu haru belajar lagi!`
	} else {
		hasil.textContent=`Hasilmu adalah ${c}. Tetap terus belajar!`
	}	
}