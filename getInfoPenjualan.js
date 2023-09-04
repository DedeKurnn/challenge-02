const dataPenjualanNovel = [
    {
        idProduct: "BOOK002421",
        namaProduk: "Pulang - Pergi",
        penulis: "Tere Liye",
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idProduct: "BOOK002351",
        namaProduk: "Selamat Tinggal",
        penulis: "Tere Liye",
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: "BOOK002941",
        namaProduk: "Garis Waktu",
        penulis: "Fiersa Besari",
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idProduct: "BOOK002941",
        namaProduk: "Laskar Pelangi",
        penulis: "Andrea Hirata",
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    },
];

const getInfoPenjualan = (dataPenjualan) => {
    let totalKeuntungan;
    let totalModal;
    let penulisTerlaris;

    for (const data of dataPenjualan) {
        totalKeuntungan += data.totalTerjual * data.hargaJual;
        totalModal += data.hargaBeli * (data.totalTerjual + data.sisaStok);
    }

    const produkBukuTerlaris = dataPenjualan.reduce((penjualanTerbanyak, penjualanSekarang) => {
        return penjualanSekarang.totalTerjual > penjualanTerbanyak.totalTerjual
            ? penjualanSekarang
            : penjualanTerbanyak;
    }, dataPenjualan[0]);

    const persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;
};
