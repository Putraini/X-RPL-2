document.addEventListener('DOMContentLoaded', function() {
    // Navbar toggle for small screens
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
  
    navbarToggle.addEventListener('click', function() {
      navbarLinks.classList.toggle('active');
      navbarToggle.classList.toggle('active');
    });
  
    // Header scroll animation
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Intersection Observer for fade-in effect
    const observerOptions = {
      threshold: 0.1
    };
  
    const fadeInObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    document.querySelectorAll('.gallery-item').forEach(item => {
      fadeInObserver.observe(item);
    });
  
    // Function to show student image in the gallery
    const galleryItems = document.querySelectorAll('.gallery-item');
    const studentImages = document.querySelectorAll('.student-image');
  
    function showStudentImage(element, imageName, studentName) {
      // Remove any previously shown student images
      studentImages.forEach(img => img.remove());
  
      // Create new image element
      const imageElement = document.createElement('img');
      imageElement.src = imageName;
      imageElement.alt = studentName;
      imageElement.classList.add('student-image');
  
      // Append image to the container
      element.querySelector('.gallery-item-info').appendChild(imageElement);
    }
  
    // Event listeners for student list items
    document.querySelectorAll('.student-list li').forEach(student => {
      student.addEventListener('click', function() {
        const imageName = this.getAttribute('data-image');
        const studentName = this.querySelector('.student-name').textContent;
        showStudentImage(this, imageName, studentName);
      });
    });
  });
//   js daftar hadir
document.addEventListener('DOMContentLoaded', function() {
    const monthSelect = document.getElementById('monthSelect');
    const yearSelect = document.getElementById('yearSelect');
    const applyFilterBtn = document.getElementById('applyFilterBtn');
    const attendanceContainer = document.getElementById('attendanceContainer');

    // Data dummy untuk kehadiran siswa (ganti dengan data yang sesuai dengan kebutuhan Anda)
    const attendanceData = [
        { name: 'Putra', daysPresent: 30, daysAbsent: 0, daysSick: 0, daysPermission: 0 },
        { name: 'Nabila', daysPresent: 30, daysAbsent: 0, daysSick: 0, daysPermission: 0 },
        { name: 'Izza', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        { name: 'Keiysa', daysPresent: 22, daysAbsent: 3, daysSick: 1, daysPermission: 1 },
        { name: 'Shinta', daysPresent: 20, daysAbsent: 4, daysSick: 0, daysPermission: 0 },
        { name: 'Komang', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        { name: 'Dewi', daysPresent: 22, daysAbsent: 3, daysSick: 1, daysPermission: 1 },
        { name: 'Luna', daysPresent: 20, daysAbsent: 4, daysSick: 0, daysPermission: 0 },
        { name: 'Marsha', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        { name: 'Reta', daysPresent: 22, daysAbsent: 3, daysSick: 1, daysPermission: 1 },
        { name: 'Mila', daysPresent: 20, daysAbsent: 4, daysSick: 0, daysPermission: 0 },
        { name: 'Bagas', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        { name: 'Bayu A.', daysPresent: 22, daysAbsent: 3, daysSick: 1, daysPermission: 1 },
        { name: 'Bayu E.', daysPresent: 20, daysAbsent: 4, daysSick: 0, daysPermission: 0 },
        { name: 'Reno', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        { name: 'Radho', daysPresent: 22, daysAbsent: 3, daysSick: 1, daysPermission: 1 },
        { name: 'Alfin', daysPresent: 20, daysAbsent: 4, daysSick: 0, daysPermission: 0 },
        { name: 'Bagus', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        { name: 'Nabil M.', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        { name: 'Reza', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        { name: 'Ebi', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        { name: 'Rozi', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        { name: 'Rohman', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        { name: 'Afin', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        { name: 'Bayu P.', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        { name: 'Hasyir', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        { name: 'Nabil Z.', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        { name: 'Naufal', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        { name: 'Nabil I.', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        { name: 'Nella', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        { name: 'Nia Rossa', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        { name: 'Nuril', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        { name: 'Olivia', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        { name: 'Osamah', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        { name: 'Radit', daysPresent: 18, daysAbsent: 6, daysSick: 0, daysPermission: 0 },
        // Tambahkan data lainnya sesuai kebutuhan
    ];

    // Function untuk merender data kehadiran
    function renderAttendance(data) {
        attendanceContainer.innerHTML = ''; // Bersihkan konten sebelum menambahkan data baru

        // Animasi fade-in saat menambahkan item
        data.forEach(student => {
            const studentItem = document.createElement('div');
            studentItem.classList.add('attendance-item', 'fade-in');
            studentItem.innerHTML = `
                <h3>${student.name}</h3>
                <p>Hadir: ${student.daysPresent} hari</p>
                <p>Alpa: ${student.daysAbsent} hari</p>
                <p>Sakit: ${student.daysSick} hari</p>
                <p>Izin: ${student.daysPermission} hari</p>
            `;
            attendanceContainer.appendChild(studentItem);
        });
    }

    // Event listener untuk tombol filter
    applyFilterBtn.addEventListener('click', function() {
        const selectedMonth = parseInt(monthSelect.value);
        const selectedYear = parseInt(yearSelect.value);

        // Filter data berdasarkan bulan dan tahun yang dipilih (dummy function, sesuaikan dengan logika Anda)
        const filteredData = attendanceData.filter(student => {
            return true; // Ganti dengan logika filter yang sesuai dengan data Anda
        });

        // Tampilkan data yang difilter
        renderAttendance(filteredData);
    });

    // Render data saat halaman dimuat
    renderAttendance(attendanceData);
});

//   js daftar hadir end
// kas js
// Data keuangan kelas (contoh data statis)
const financialData = {
    totalIncome: 2000000,
    totalExpenses: 500000,
    transactions: [
        { type: 'income', amount: 500000, description: 'Pemasukan dari sponsor' },
        { type: 'expenses', amount: 200000, description: 'Pengeluaran untuk acara kelas' },
        { type: 'expenses', amount: 300000, description: 'Pembelian peralatan kelas' }
    ]
};

// Fungsi untuk merender data keuangan
function renderFinancialData(data) {
    const totalIncomeElem = document.getElementById('totalIncome');
    const totalExpensesElem = document.getElementById('totalExpenses');
    const totalBalanceElem = document.getElementById('totalBalance');
    const transactionListElem = document.getElementById('transactionList');

    // Mengisi ringkasan keuangan
    totalIncomeElem.textContent = data.totalIncome.toLocaleString('id-ID');
    totalExpensesElem.textContent = data.totalExpenses.toLocaleString('id-ID');
    const totalBalance = data.totalIncome - data.totalExpenses;
    totalBalanceElem.textContent = totalBalance.toLocaleString('id-ID');

    // Mengisi daftar transaksi terakhir
    transactionListElem.innerHTML = '';
    data.transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.textContent = `${transaction.description}: ${transaction.amount.toLocaleString('id-ID')} IDR`;
        listItem.classList.add(transaction.type === 'income' ? 'income' : 'expenses');
        transactionListElem.appendChild(listItem);
    });
}

// Panggil fungsi untuk merender data keuangan saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    renderFinancialData(financialData); // Ganti financialData dengan data aktual dari sistem Anda
});

// kas end
document.addEventListener('DOMContentLoaded', function() {
    // Data keuangan kelas (contoh data statis)
    const financialData = {
        totalIncome: 2000000,
        totalExpenses: 500000,
        transactions: [
            { type: 'income', amount: 500000, description: 'Pemasukan dari sponsor' },
            { type: 'expenses', amount: 200000, description: 'Pengeluaran untuk acara kelas' },
            { type: 'expenses', amount: 300000, description: 'Pembelian peralatan kelas' }
        ]
    };

    // Fungsi untuk merender data keuangan
    function renderFinancialData(data) {
        const totalIncomeElem = document.getElementById('totalIncome');
        const totalExpensesElem = document.getElementById('totalExpenses');
        const totalBalanceElem = document.getElementById('totalBalance');
        const transactionListElem = document.getElementById('transactionList');

        // Render total income, expenses, and balance
        totalIncomeElem.textContent = formatCurrency(data.totalIncome);
        totalExpensesElem.textContent = formatCurrency(data.totalExpenses);
        const totalBalance = data.totalIncome - data.totalExpenses;
        totalBalanceElem.textContent = formatCurrency(totalBalance);

        // Render transaction list
        transactionListElem.innerHTML = ''; // Clear previous list items

        data.transactions.forEach(transaction => {
            const transactionItem = document.createElement('li');
            transactionItem.classList.add('transaction-item');

            const transactionType = transaction.type === 'income' ? 'Pemasukan' : 'Pengeluaran';
            const transactionAmount = formatCurrency(transaction.amount);

            transactionItem.innerHTML = `
                <strong>${transactionType}: </strong>${transactionAmount}<br>
                <span>${transaction.description}</span>
            `;

            transactionListElem.appendChild(transactionItem);
        });
    }

    // Format currency function
    function formatCurrency(amount) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR'
        }).format(amount);
    }

    // Initial render of financial data
    renderFinancialData(financialData);

    // Example: Update financial data (simulating data update)
    setTimeout(() => {
        const updatedFinancialData = {
            totalIncome: 2500000,
            totalExpenses: 700000,
            transactions: [
                { type: 'income', amount: 800000, description: 'Pemasukan dari donasi' },
                { type: 'expenses', amount: 300000, description: 'Pengeluaran untuk bahan pelajaran' },
                { type: 'expenses', amount: 200000, description: 'Pembelian perlengkapan kelas' }
            ]
        };

        // Update the UI with new financial data
        renderFinancialData(updatedFinancialData);
    }, 5000); // Simulate update after 5 seconds
});

