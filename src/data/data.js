export const headerTitle = [
    { title: 'Home', vntitle: 'Trang Chủ', link: '#banner' },
    { title: 'Intro', vntitle: 'Giới Thiệu', link: '#intro' },
    { title: 'Skills', vntitle: 'Kỹ Năng', link: '#skills' },
    { title: 'Projects', vntitle: 'Dự Án', link: '#project' },
    { title: 'Contact', vntitle: 'Liên Hệ', link: '#contact' },
];
export const bannerImg = {
    light: 'https://i.pinimg.com/originals/05/cd/9a/05cd9a0bb4c72e5ba98ece031987955d.gif',
    dark: 'https://i.pinimg.com/originals/6d/80/2f/6d802ffd14b32795b4deb0b886a7815a.gif'
}
export const aboutIntro = {
    data: 'I am a qualified and professional web developer with several of experience in database administration and website design. Strong analytical and creative skills who can done job well even personal or team-work. Team player with an eye for detail and organized.',
    vndata: 'Tôi là một nhà phát triển web chuyên nghiệp và có kinh nghiệm trong quản trị cơ sở dữ liệu cũng như thiết kế website. Tôi có khả năng phân tích và sáng tạo mạnh mẽ, có thể hoàn thành công việc một cách xuất sắc cả khi làm việc độc lập hoặc làm việc cùng đồng đội. Tôi là một người tỉ mỉ và thích làm việc có hệ thống.'
}
export const aboutDetail = [
    { icon: 'fa-solid fa-location-dot', title: 'Address', vntitle: 'Địa chỉ', data: 'District 10, Ho Chi Minh City.', vndata: 'Quận 10, Thành phố Hồ Chí Minh.' },
    { icon: 'fa-solid fa-phone', title: 'Phone Number', vntitle: 'Số điện thoại', data: '(+84) 967 100 751', vndata: '0967 100 751' },
    { icon: 'fa-solid fa-envelope', title: 'Email', vntitle: 'Địa chỉ email', data: 'thaohuynh34.678@gmail.com', vndata: 'thaohuynh34.678@gmail.com' }
]
export const projectDetail = [
    {
        name: 'CourseMate',
        intro: 'The CourseMate is designed to offer IT-related courses, enabling users to easily search for course information, register, and learn courses. Additionally, it assists administrators in managing databases in a more visual and efficient manner.',
        vnintro: 'Trang web CourseMate được xây dựng để mang đến các khóa học liên quan đến IT giúp người dùng có thể dễ dàng theo dõi cũng như tìm hiểu các thông tin về khóa học, đăng ký và theo dõi các khóa học cũng như giúp người quản trị xử lý các dữ liệu khóa học một cách trực quan và hiệu quả hơn.',
        img: '',
        video: './img/pj-coursemate.mp4',
        techs: ['JavaScripts', 'TailwindCSS', 'Axios', 'ReactJS'],
        linkweb: 'https://course-mate-project.vercel.app/',
        linksource: 'https://github.com/DuyNguyenlk22/CourseMate_Project.git',
    },
    {
        name: 'AirBnb BackEnd',
        intro: 'To create a platform that allows users to easily access suitable hotels according to their needs, we have built the operational logic of the AirBnb website to book hotel rooms based on RESTful API principles. My team and I have established the logic that may occur when users and administrators need to access or manage data displayed on the website',
        vnintro: 'Để tạo ra một nền tảng giúp người dùng dễ dàng truy vấn đến các khách sạn phù hợp nhu cầu, chúng tôi đã xây dựng các logic hoạt động của trang web AirBnb giúp đặt phòng khách sạn theo nguyên tắc RESTful API. Tôi và đồng đội đã thiết lập logic của các hoạt động có thể xảy ra khi người dùng và quản trị viên cần truy xuất hay quản lý dữ liệu hiển thị trên trang web',
        img: './img/webairbnb.png',
        video: '',
        techs: ['TypeScripts', 'Docker', 'NestJS', 'MySQL', 'Prisma', 'Swagger'],
        linkweb: '',
        linksource: 'https://github.com/vohaiphuc/cybersoft-be-airbnb.git',
    },
    {
        name: 'CinePlexTix',
        intro: `We have built CinePlexTix with the aim of helping users easily access, search, and book movie tickets, as well as supporting administrators in managing data related to movies, showtimes, and customers to quickly update information displayed on the website according to the business's needs.`,
        vnintro: 'Trang web CinePlexTix được chúng tôi xây dựng nhằm mục đích giúp người dùng có thể dễ dàng tiếp cận, tìm kiếm và đặt vé xem phim cũng như hỗ trợ các quản trị viên quản lý các dữ liệu liên quan đến phim, lịch chiếu và khách hàng để có thể nhanh chóng cập nhật thông tin hiển thị trên trang web theo nhu cầu của doanh nghiệp.',
        img: './img/pj-cineplextix.png',
        video: '',
        techs: ['JavaScripts', 'TailwindCSS', 'Axios', 'Vercel', 'ReactJS'],
        linkweb: 'https://cineplex-tix.vercel.app/',
        linksource: 'https://github.com/ThaoHuynhD/CineplexTix.git',
    },
    {
        name: 'RestMeals',
        intro: 'A website template that we jointly implemented based on the design provided by the UI/UX designer. RestMeals is designed to help customers easily make reservations or order food delivery from the menu categories provided by the business.',
        vnintro: 'Một mẫu trang web do chúng tôi cùng thực hiện dựa theo thiết kế của UI/UX designer. RestMeals được thiết kế để giúp khách hàng có thể dễ dàng đặt chỗ hoặc đặt giao món ăn theo danh mục thực đơn do doanh nghiệp cung cấp.',
        img: './img/pj-restmeals.png',
        video: '',
        techs: ['JavaScripts', 'HTML5 & SCSS', 'Vercel', 'ReactJS'],
        linkweb: 'https://restmeals.vercel.app/',
        linksource: 'https://github.com/ThaoHuynhD/RestMeals.git',
    },
    {
        name: 'CyberPhone',
        intro: `CyberPhone is designed to phone's bussiness, enabling users to easily search for product information and buy it. Additionally, it assists administrators in managing databases in a more visual and efficient manner.`,
        vnintro: 'Trang web CyberPhone được xây dựng phù hợp với việc kinh doanh sản phẩm điện thoại, giúp người dùng có thể dễ dàng tìm hiểu các thông tin về sản phẩm và mua hàng cũng như giúp người quản trị xử lý các dữ liệu sản phẩm một cách trực quan và hiệu quả hơn.',
        img: './img/pj-cyberphone.png',
        video: '',
        techs: ['JavaScripts', 'HTML5', 'SCSS'],
        linkweb: 'https://capstone-js-wheat.vercel.app/',
        linksource: 'https://github.com/ThaoHuynhD/CapstoneJS.git',
    },
    {
        name: 'PoochCare',
        intro: 'A website template that we collaborated on based on the design provided by a UI/UX designer. PoochCare introduces customers to the pet care services offered by the business and helps customers understand more about the business-related information, enhancing brand recognition and trustworthiness with customers.',
        vnintro: 'Một mẫu trang web do chúng tôi cùng thực hiện dựa theo thiết kế của UI/UX designer. PoochCare giới thiệu đến khách hàng về các dịch vụ chăm sóc thú cưng của doanh nghiệp cũng như giúp khách hàng hiểu thêm về các thông tin liên quan đến doanh nghiệp, tăng nhận diện thương hiệu và độ tin cậy của doanh nghiệp đến với khách hàng.',
        img: './img/pj-poochcare.png',
        video: '',
        techs: ['JavaScripts', 'HTML5', 'SCSS', 'Vercel'],
        linkweb: 'https://pooch-care-xi.vercel.app/',
        linksource: 'https://github.com/PoochCares/PoochCareRepo.git',
    },
]
export const tools = [
    { link: './img/icon/icons8-react.svg', title: 'reactjs' },
    { link: './img/icon/icons8-js.svg', title: 'js' },
    { link: './img/icon/icons8-html.svg', title: 'html' },
    { link: './img/icon/icons8-sass.svg', title: 'sass' },
    { link: './img/icon/icons8-docker.svg', title: 'docker' },
    { link: './img/icon/icons8-tailwind.svg', title: 'tailwind' },
    { link: './img/icon/icons8-bootstrap.svg', title: 'bootstrap' },
    { link: './img/icon/icons8-github.svg', title: 'github' },
    { link: './img/icon/icons8-typescript.svg', title: 'typescript' },
    { link: './img/icon/icons8-mysql.svg', title: 'mysql' },
    { link: './img/icon/icons8-nestjs.svg', title: 'nestjs' },
    { link: './img/icon/icons8-prisma.svg', title: 'prisma' },
    { link: './img/icon/icons8-expressjs.svg', title: 'expressjs' },
    { link: './img/icon/icons8-postman.png', title: 'postman' },
    { link: './img/icon/icons8-jwt.svg', title: 'jwt' },
    { link: './img/icon/icons8-swagger.svg', title: 'swagger' },
]
