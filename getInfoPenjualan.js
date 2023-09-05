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
    // Menghitung total keuntungan dan total modal
    let totalKeuntungan = 0;
    let totalModal = 0;

    for (const data of dataPenjualan) {
        totalKeuntungan += (data.hargaJual - data.hargaBeli) * data.totalTerjual;
        totalModal += data.hargaBeli * (data.totalTerjual + data.sisaStok);
    }
    // Mencari persentase keuntungan
    const persentaseKeuntungan = totalKeuntungan / totalModal;
    // Memformat hasil menjadi mata uang
    const formattedTotalKeuntungan = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(totalKeuntungan);

    const formattedTotalModal = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(totalModal);

    const formattedPersentaseKeuntungan = new Intl.NumberFormat("id-ID", {
        style: "percent",
    }).format(persentaseKeuntungan);

    // Mencari produk buku terlaris
    const produkBukuTerlaris = dataPenjualan.reduce((prevData, currentData) => {
        return currentData.totalTerjual > prevData.totalTerjual ? currentData : prevData;
    }, dataPenjualan[0]);

    // Mencari penulis paling laris
    const totalPenjualanPenulis = [];

    dataPenjualan.forEach((item) => {
        const { penulis, totalTerjual } = item;
        const existingItem = totalPenjualanPenulis.find((element) => element.penulis === penulis);

        if (existingItem) {
            existingItem.totalTerjual += totalTerjual;
        } else {
            totalPenjualanPenulis.push({ penulis, totalTerjual });
        }
    });

    const penulisTerlaris = totalPenjualanPenulis.reduce((prev, current) => {
        return prev.totalTerjual > current.totalTerjual ? prev : current;
    });

    const result = {
        totalKeuntungan: formattedTotalKeuntungan,
        totalModal: formattedTotalModal,
        persentaseKeuntungan: formattedPersentaseKeuntungan,
        produkBukuTerlaris: produkBukuTerlaris.namaProduk,
        penulisTerlaris: penulisTerlaris.penulis,
    };
    return result;
};

console.log(getInfoPenjualan(dataPenjualanNovel));
