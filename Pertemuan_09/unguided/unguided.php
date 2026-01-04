<?php
// ==========================================
// 1. MODUL TRANSFORMASI SUHU
// ==========================================
$inputC = 30;
$inputF = 86;

// Menggunakan rumus yang sedikit dimodifikasi penulisannya (1.8 sama dengan 9/5)
$keFahrenheit = ($inputC * 1.8) + 32;
$keCelcius    = ($inputF - 32) / 1.8;
$keKelvin     = $inputC + 273.15;

echo "<strong>[ HASIL KONVERSI SUHU ]</strong><br>";
echo "Data Input: {$inputC}°C dan {$inputF}°F<br>";
echo "— Celcius ke Fahrenheit: " . number_format($keFahrenheit, 1) . " °F<br>";
echo "— Fahrenheit ke Celcius: " . number_format($keCelcius, 1) . " °C<br>";
echo "— Celcius ke Kelvin: " . $keKelvin . " K<br><br>";


// ==========================================
// 2. SISTEM POTONGAN HARGA (REWARD)
// ==========================================
$tagihanGross = 750000;
$rateDiskon = 0;

// Menentukan rate menggunakan pengecekan terbalik agar beda strukturnya
if ($tagihanGross >= 1000000) {
    $rateDiskon = 0.30;
} else if ($tagihanGross >= 500000) {
    $rateDiskon = 0.20;
} else if ($tagihanGross >= 100000) {
    $rateDiskon = 0.10;
}

$potongan    = $tagihanGross * $rateDiskon;
$totalNett   = $tagihanGross - $potongan;

echo "<strong>[ RINCIAN TRANSAKSI ]</strong><br>";
echo "Total Belanja : Rp " . number_format($tagihanGross, 0, '.', '.') . "<br>";
echo "Hemat (" . ($rateDiskon * 100) . "%) : Rp " . number_format($potongan, 0, '.', '.') . "<br>";
echo "Total Bayar   : <u>Rp " . number_format($totalNett, 0, '.', '.') . "</u><br><br>";


// ==========================================
// 3. ANALISIS DATA AKADEMIK MAHASISWA
// ==========================================
$dataSkor = [75, 89, 65, 90, 85, 70, 98, 65, 69, 70, 12];

// Perhitungan statistik
$skorTertinggi = max($dataSkor);
$skorTerendah  = min($dataSkor);
$rerata        = array_sum($dataSkor) / count($dataSkor);

// Filter kelulusan menggunakan array_filter (lebih modern dari foreach)
$listLulus = array_filter($dataSkor, function($s) {
    return $s >= 70;
});

// Mengurutkan data
$skorUrut = $dataSkor;
arsort($skorUrut); // arsort mempertahankan index, rsort mereset index

echo "<strong>[ STATISTIK NILAI ]</strong><br>";
echo "Skor Max: $skorTertinggi | Skor Min: $skorTerendah<br>";
echo "Rata-rata Kelas: " . round($rerata, 2) . "<br>";
echo "Mahasiswa Lulus (Skor >= 70): " . count($listLulus) . " orang<br>";

echo "Daftar Nilai (Ranking): " . implode(", ", $skorUrut);

?>