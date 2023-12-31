const dataPenjualanPakAldi = [
    {
        namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
        hargaSatuan: 760000,
        kategori: "Sepatu Sport",
        totalTerjual: 90,
    },
    {
        namaProduct: "Sepatu Warrior Tristan Black Brown High",
        hargaSatuan: 960000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 37,
    },
    {
        namaProduct: "Sepatu Warrior Tristan Maroon High",
        hargaSatuan: 360000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 90,
    },
    {
        namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
        hargaSatuan: 120000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 90,
    },
];

function getTotalPenjualan(dataPenjualan) {
    if (!Array.isArray(dataPenjualan)) {
        console.error("Data harus berupa array");
        return;
    }

    if (!dataPenjualan.every((item) => typeof item === "object")) {
        console.error("Array harus berisi objek");
        return;
    }

    return dataPenjualan.reduce((acc, data) => {
        return acc + data.totalTerjual;
    }, 0);
}

console.log(getTotalPenjualan(dataPenjualanPakAldi));
