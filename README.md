
<h1 style="text-align: center;">Coderboy Theme</h1>
<p style="text-align: center;"><img src="https://scontent.fhph1-2.fna.fbcdn.net/v/t1.0-9/26195982_314414552401860_673476996156876329_n.jpg?_nc_cat=0&amp;oh=a558cf0a24fca6252db9630c5f58f9ad&amp;oe=5BAE3053" alt="" width="200" height="200" /></p>
<p style="text-align: center;">Một giao diện blog đơn giản, th&acirc;n thiện. Dễ d&agrave;ng t&ugrave;y chỉnh m&agrave; kh&ocirc;ng cần nhiều kiến thức lập tr&igrave;nh!</p>
<p style="text-align: center;">Thăm quan trang web của m&igrave;nh tại địa chỉ&nbsp;<a title="CoderBoy" href="https://coderboy23.herokuapp.com/" target="_blank" rel="noopener">coderboy23.herokuapp.com</a></p>

Mục lục
-------

*   [Mô tả](#h22sjj0u073i1ry8w1n1o5jgi01e3hc3o)
*   [Cài đặt](#h27sjj0u0hnrohj5yn1xtp6m41jvb4q5)
*   [Sử dụng](#h34sjj0veyewcerq1w1o57m3p1tylbpf)
*   [Tùy chỉnh](#h31sjj0u0pef16dowmz1hk86v71dy14v0)
*   [Host trên Heroku](#h47sjj0vkk231q3t4z814e5mwd11qcly8)
*   [Giấy phép](#h55sjj0vpebdaeo9vka61yuedfn0ns)

Mô tả
-----

Dự án này sử dụng [ButterCMS](https://buttercms.com/) - một headless CMS cung cấp các dịch vụ quản lý bài viết và người viết, giúp lập trình viên chỉ cần quan tâm về mặt giao diện của dự án.

Tính năng bình luận trên trang sử dụng [Disqus](https://disqus.com/) - một dịch vụ lưu trữ comment trên blog.

Để có thể sử dụng giao diện này, bạn cần phải lập 2 tài khoản ButterCMS và Disqus.

Repository này bao gồm một giao diện client được viết bằng [Angular 6](https://angular.io) và một server [Express](https://expressjs.com) để triển khai Server Side Rendering.

Cài đặt
-------

    git clone https://github.com/tranHieuDev23/PersonalBlog.git

hoặc [download repository này về](https://github.com/tranHieuDev23/PersonalBlog/archive/master.zip).

Sử dụng
-------

*   Để serve hoặc build client của blog, các lệnh của Angular CLI vẫn được giữ nguyên - `ng serve` và `ng build`.
*   Để build cả client và server của blog (dành cho Server Side Rendering): `npm run build:ssr`.
*   Để chạy server của blog sau khi build: npm run `serve:ssr`.
*   Để `build:ssr` và `serve:ssr` ngay lập tức: `npm start`.

Tùy chỉnh
---------

### Về nội dung của blog

Các cài đặt liên quan đến nội dung của blog được lưu trữ trong thư mục `/src/app/configs`.

#### `global-config.ts`

File này chứa một số cái đặt quan trọng nhất của chương trình.

*   `ARCHIVE\_PAGE\_SIZE`: Số lượng bài blog mỗi trang khi truy cập vào danh mục bài viết thuộc một category, tag hay của một tag giả nào đó.
*   `BLOG_TITLE`: Tên của blog. Xuất hiện trên các vị trị quan trọng của blog, cũng như khi chia sẻ đường dẫn tới blog.
*   `BLOG_DESCRIPTION`: Mô tả ngắn gọn về blog. Xuất hiện khi bạn chia sẻ đường dẫn tới blog.
*   `BLOG\_FEATURE\_IMAGE_URL`: Đường dẫn tới ảnh đại diện của blog. Xuất hiện khi bạn chia sẻ đường dẫn tới blog.
*   `BUTTERCMS\_API\_TOKEN`: API Token của tài khoản ButterCMS của bạn.
*   `CAROUSEL_PAGES`: Số lượng bài blog tối đa được hiển thị ở đầu trang chủ của blog.
*   `DISQUS_SHORTNAME`: Shortname tương ứng với trang mà bạn tạo ra trên Disqus.
*   `HIGHLIGHTJS_THEME`: Theme dành cho Highlight.js (tô màu code). Nếu bạn thay đổi giá trị này, bạn cần phải đặt file `.css` tương ứng vào thư mục `/src/assets/js/`styles.
*   `HOME\_PAGE\_CATEGORY\_RECENT\_SIZE`: Số lượng bài blog tối đa được hiện thị với mỗi category ở trang chủ của blog.
*   `MESSAGE_404`: Đoạn văn bản xuất hiện tại trang 404 (không tìm thấy nội dung).
*   `SEARCH\_MAXIMUM\_RESULTS`: Số lượng kết quả tìm kiếm tối đa tại mục tìm kiếm.

#### `blog-description.html`

Bạn có thể viết một đoạn mô tả chi tiết về blog của mình tại đây bằng ngôn ngữ Html. Đoạn mô tả này sẽ xuất hiện trên trang About của blog.

#### `footer-content.html`

Bạn có thể viết nội dung được hiển thị ở cuối trang blog tại đây bằng ngôn ngữ Html.

### Về giao diện của trang web

Các cài đặt liên quan đến giao diện của trang web được lưu trữ trong file `/src/variables.scss`.

*   `$font-family-primary`: Font dành cho tiêu đề trang web, tiêu đề bài viết, và các yếu tô nổi bật trên trang.
    
*   `$font-family-secondary`: Font dành cho các lựa chọn trên menu, nội dung bài viết và các yếu tố còn lại trên trang.
    
*   `$font-size-top-bar-item`: Kích cỡ font trên thanh top bar.
    
*   `$color-primary`: Màu sắc chủ đạo của trang web. Được sử dụng trên thanh top bar, menu, tiêu đề bài viết, vân vân...
    
*   `$color-primary-light`: Phiên bản sáng hơn của `$color-primary`
    
*   `$color-accent`: Màu sắc phụ đạo của trang web. Được dùng cho các yếu tố cần sự nổi bật trên trang như đường dẫn, nút bấm, vân vân.
    
*   `$color-accent-dark`: Phiên bản tối màu hơn của `$color-secondary`
    
*   `$timing-global-transition-duration`: Thời gian diễn ra các animation trên trang như chuyển màu top bar, nút bấm, vân vân.
    

Các font phải được import trong file trước khi được đặt vào các biến ở trên.

Đối với các cài đặt về màu sắc, nếu như 4 cài đặt ở trên vẫn chưa đủ, bạn cũng có thể chỉnh sửa trực tiếp lên các biến cụ thể hơn ở trong file.

Host trên Heroku
----------------

Trong project cũng có một file `Procfile` để có thể triển khai project lên Heroku.

**Chú ý quan trọng** rằng do Heroku yêu cầu ứng dụng phải khởi động được lên trong một khoảng thời gian nhất định, lệnh `npm start` sẽ bị quá thời gian và ứng dụng sẽ bị crash. Do đó `Procfile` chỉ gọi lệnh `npm run serve:ssr` và bạn cần phải build ứng dụng ra trước khi triển khai lên Heroku.

Giấy phép
---------

[MIT](https://choosealicense.com/licenses/mit/)