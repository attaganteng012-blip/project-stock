const btnTambah = document.querySelector('.btn-tambah');
const tabelBody = document.querySelector('.table-stok tbody');
btnTambah.addEventListener('click', function() {
    const nama = document.getElementById('namaBarang').value;
    const jumlah = document.getElementById('jumlahBarang').value;

    if (nama === '' || jumlah === '') {
        alert('Nama dan jumlah barang harus diisi dulu!');
        return;
    }
    const barisBaru = document.createElement('tr');

    barisBaru.innerHTML = `
        <td>-</td>
        <td>${nama}</td>
        <td>${jumlah}</td>
        <td><button class="btn-hapus">Hapus</button></td>
    `;

    tabelBody.appendChild(barisBaru);

    document.getElementById('namaBarang').value = '';
    document.getElementById('jumlahBarang').value = '';
});

tabelBody.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-hapus')) {
        event.target.closest('tr').remove();
    }
});
