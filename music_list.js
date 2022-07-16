const allMusic = [
    {
        name: 'Thích em hơi nhiều',
        author: 'Wren Evans',
        img: 'assets/image/song_img/thichemhoinhieu.jpg',
        src: './music_list/likeyoutoomuch.mp3'
    },
    {
        name: 'Ngày đầu tiên',
        author: 'Đức Phúc',
        img: 'assets/image/song_img/ngaydautien.jpg',
        src: './music_list/ngaydautien.mp3'
    },
    {
        name: 'Vài câu nói',
        author: 'Grey D',
        img: 'assets/image/song_img/vaicaunoi.jpg',
        src: './music_list/vaicaunoi.mp3'
    },
    {
        name: 'Váy hoa nhí',
        author: 'Hoàng Minh Châu',
        img: 'assets/image/song_img/vayhoanhi.jpg',
        src: './music_list/vayhoanhi.mp3'
    },
    {
        name: 'Ánh sao và bầu trời',
        author: 'Tri',
        img: 'assets/image/song_img/AnhSao.jpg',
        src: './music_list/ánhaovabautroi.mp3'
    },
    {
        name: 'Tình đắng như ly cafe',
        author: 'Nân, Ngơ',
        img: 'assets/image/song_img/tinhdangnhulycafe.jpg',
        src: './music_list/tinhdangnhucafe.mp3'
    },
    {
        name: 'Bên trên tầng lầu',
        author: 'Tăng Duy Tân',
        img: 'assets/image/song_img/bentrentanglau.jpg',
        src: './music_list/bentrentanglau.mp3'
    },
    {
        name: 'Thói quen',
        author: 'Hoàng Dũng',
        img: 'assets/image/song_img/thoiquen.jpg',
        src: './music_list/thoiquen.mp3'
    },
    {
        name: 'Qerry',
        author: 'Tri',
        img: 'assets/image/song_img/querry.jpg',
        src: './music_list/new/querry.mp3'
    },
    {
        name: 'Người khác',
        author: 'Phan Mạnh Quỳnh',
        img: 'assets/image/song_img/nguoikhac.jpg',
        src: './music_list/nguoikhac.mp3'
    },
    {
        name: 'Sài Gòn hôm nay mưa',
        author: 'Hoàng QUyên',
        img: 'assets/image/song_img/saigonmua.jpg',
        src: './music_list/new/saigonngaymua.mp3'
    },
    {
        name: 'In the Dark',
        author: 'TIA x fueled by boba',
        img: 'assets/image/song_img/inthedark.jpg',
        src: './music_list/doahoaluitan.mp3'
    },
    {
        name: 'Lối nhỏ',
        author: 'Đen vâu',
        img: 'assets/image/song_img/smallway.jpg',
        src: './music_list/new/smallway.mp3'
    },
    {
        name: 'Một triệu like',
        author: 'Đen vâu',
        img: 'assets/image/song_img/1millionlike.jpg',
        src: './music_list/new/1millionlike.mp3'
    },
    {
        name: 'Chúng ta của sau này',
        author: 'Tri',
        img: 'assets/image/song_img/chungtacúaunay.jpg',
        src: './music_list/chungtacuasaunay.mp3'
    },
    {
        name: 'Chờ lời anh nói',
        author: 'Ivy, Crou',
        img: 'assets/image/song_img/choloianhnoi.jpg',
        src: './music_list/choloianhnoi.mp3'
    },
    {
        name: 'Chiều hôm ấy',
        author: 'Jaiky',
        img: 'assets/image/song_img/chieuhomay.jpg',
        src: './music_list/chieuhomay.mp3'
    },
    {
        name: 'Cảm ơn',
        author: 'Đen vâu',
        img: 'assets/image/song_img/thanks.jpg',
        src: './music_list/new/camon.mp3'
    },
    {
        name: 'Bước qua nhau',
        author: 'Vũ',
        img: 'assets/image/song_img/bcquanhau.jpg',
        src: './music_list/buocquanhau.mp3'
    },
    {
        name: 'Bước qua mùa cô đơn',
        author: 'Vũ',
        img: 'assets/image/song_img/bcquamuacodon.jpg',
        src: './music_list/buocquamuacodon.mp3'
    },
    {
        name: 'Bông hoa không thuộc về ta',
        author: 'Việt',
        img: 'assets/image/song_img/Bonghoa.jpg',
        src: './music_list/bonghoathuocveta.mp3'
    },
    {
        name: 'Love me like that',
        author: 'Nevertheless ost',
        img: 'assets/image/song_img/lovemelikethat.jpg',
        src: './music_list/lovemelikethat.mp3'
    },
    {
        name: 'Muộn rồi mà sao còn',
        author: 'Sơn Tùng MTP',
        img: 'assets/image/song_img/muonroimasaocon.jpg',
        src: './music_list/new/muonroimasaocon.mp3'
    },   
    {
        name: 'Anh đếch cần gì nhiều ngoài em',
        author: 'Đen vâu',
        img: 'assets/image/song_img/smallway.jpg',
        src: './music_list/new/anhdechcan.mp3'
    },  
    {
        name: 'Đố em biết anh đang nghĩ gì',
        author: 'Đen vâu',
        img: 'assets/image/song_img/smallway.jpg',
        src: './music_list/new/doembiet.mp3'
    },  
    {
        name: 'Thanh xuân',
        author: 'Da lab',
        img: 'assets/image/song_img/Bonghoa.jpg',
        src: './music_list/new/thanhxuan.mp3'
    },  
    {
        name: 'Yêu làm chi',
        author: 'Fay x CM1X',
        img: 'assets/image/song_img/yeulamchi.jpg',
        src: './music_list/new/yeulamchi.mp3'
    },  
    {
        name: 'Bình thường',
        author: 'someone in Internet',
        img: 'assets/image/song_img/Bonghoa.jpg',
        src: './music_list/new/binhthuong.mp3'
    },  
]

