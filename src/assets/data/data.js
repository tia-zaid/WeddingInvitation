export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Setia Angkasa S.Pi.',
            child: 'anak perempuan',
            father: 'Ahmadin (Alm)',
            mother: 'Almuaini',
            image: './src/assets/images/setia.png'
        },
        P: {
            id: 2,
            name: 'Ahmad Ramadhan Zaid Al Khairi S.T.',
            child: 'anak laki-laki',
            father: 'Sarbaini, A.Md.',
            mother: 'Lilisnawati',
            image: './src/assets/images/zaid.png'
        },

        couple: './src/assets/images/tia-zaid.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Oktober',
            date: '18',
            day: 'Sabtu',
            hours: {
                start: '09.00',
                finish: '10.30'
            }
        },
        reception: {
            year: '2025',
            month: 'Oktober',
            date: '18',
            day: 'Kamis',
            hours: {
                start: '10.30',
                finish: '12.00'
            }
        },
        address: 'Jalan Tanjung Jati No. 25, Desa Tanjung Jati, Kecamatan Pesisir Selatan, Kabupaten Pesisir Barat, Provinsi Lampung'
    },

    link: {
        calendar: 'https://calendar.app.google/hgtLAb2WwMzUqmUD6',
        map: 'https://maps.app.goo.gl/JCpqEgzQPcynGQpCA',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/BG1.jpg'
        },
        {
            id: 2,
            image: './src/assets/images/BG2.jpg'
        },
        {
            id: 3,
            image: './src/assets/images/BG3.jpg'
        },
        {
            id: 4,
            image: './src/assets/images/BG4.jpg'
        },
        {
            id: 5,
            image: './src/assets/images/BG5.jpg'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Setia Angkasa',
            icon: './src/assets/images/spay.png',
            rekening: '085313651213'
        },
        {
            id: 2,
            name: 'Setia Angkasa',
            icon: './src/assets/images/bri.png',
            rekening: '0188 0105 9291 501'
        },
    ],

    audio: './src/assets/audio/medley.mp3',

    api: 'https://script.google.com/macros/s/AKfycbyw5OmpKIdbs7cc1Q3cjyhxT3V0H46Y6lvVlbMqhphRcVtTu8LE8UHr22FxvLqfwrFXAA/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
