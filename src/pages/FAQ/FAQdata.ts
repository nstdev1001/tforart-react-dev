import { companyInfo } from "../CompanyInfo/companyInfoData";

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  title: string;
  items: FaqItem[];
};

export const faqData: FaqCategory[] = [
  {
    title: "Thông tin chung về công ty",
    items: [
      {
        question: "TFORART là công ty gì?",
        answer:
          "TFORART COMPANY LIMITED (TFORART CO.,LTD) là công ty trách nhiệm hữu hạn ngoài nhà nước chuyên về sản xuất phim điện ảnh, phim video và chương trình truyền hình. Công ty được thành lập ngày 12/09/2024 và đang hoạt động tại Hà Nội, Việt Nam.",
      },
      {
        question: "Lĩnh vực hoạt động chính của TFORART là gì?",
        answer:
          "Hoạt động chính của chúng tôi là sản xuất phim điện ảnh, phim video và chương trình truyền hình. Ngoài ra, chúng tôi còn cung cấp nhiều dịch vụ khác như hoạt động hậu kỳ, phát hành phim, thiết kế chuyên dụng, quảng cáo, và tổ chức sự kiện.",
      },
      {
        question: "Địa chỉ và thông tin liên hệ của TFORART ở đâu?",
        answer: `- Địa chỉ: ${companyInfo.address}\n- Số điện thoại: ${companyInfo.phoneNumber}\n- Email: ${companyInfo.email}`,
      },
    ],
  },
  {
    title: "Dịch vụ của TFORART",
    items: [
      {
        question: "TFORART cung cấp những dịch vụ gì?",
        answer:
          "Chúng tôi cung cấp đa dạng dịch vụ, bao gồm:\n- Sản xuất phim điện ảnh, phim video và chương trình truyền hình\n- Hoạt động hậu kỳ phim\n- Phát hành phim điện ảnh, phim video\n- Thiết kế chuyên dụng và sáng tạo\n- Quảng cáo và xúc tiến thương mại\n- Hoạt động nhiếp ảnh chuyên nghiệp\n- Tư vấn quản lý và nghiên cứu thị trường\n- Cho thuê thiết bị và đồ dùng hữu hình\n- Tổ chức sự kiện, triển lãm, hội nghị",
      },
      {
        question: "Làm thế nào để yêu cầu báo giá dịch vụ?",
        answer: `Để yêu cầu báo giá, quý khách có thể liên hệ với chúng tôi qua:\n- Email: ${companyInfo.email}\n- Điện thoại: ${companyInfo.phoneNumber}\n- Hoặc điền form liên hệ trên website của chúng tôi`,
      },
      {
        question: "TFORART có thể đảm nhận các dự án quy mô lớn không?",
        answer:
          "Vâng, với đội ngũ chuyên nghiệp và trang thiết bị hiện đại, chúng tôi có khả năng thực hiện các dự án ở nhiều quy mô khác nhau, từ các dự án nhỏ đến các dự án lớn với yêu cầu kỹ thuật và sáng tạo cao.",
      },
    ],
  },
  {
    title: "Quy trình làm việc",
    items: [
      {
        question: "Quy trình sản xuất phim/video tại TFORART như thế nào?",
        answer:
          "Quy trình sản xuất của chúng tôi bao gồm các bước chính:\n1. Tư vấn và lên ý tưởng\n2. Xây dựng kịch bản và storyboard\n3. Lập kế hoạch sản xuất\n4. Quay phim\n5. Hậu kỳ (biên tập, dựng phim, xử lý âm thanh, hiệu ứng)\n6. Kiểm duyệt và hoàn thiện\n7. Bàn giao sản phẩm",
      },
      {
        question: "Thời gian hoàn thành một dự án trung bình là bao lâu?",
        answer:
          "Thời gian hoàn thành phụ thuộc vào quy mô và độ phức tạp của dự án. Dự án nhỏ có thể hoàn thành trong vài ngày đến một tuần, trong khi các dự án lớn hơn có thể mất từ vài tuần đến vài tháng. Chúng tôi sẽ cung cấp ước tính thời gian cụ thể khi thảo luận về dự án của bạn.",
      },
      {
        question: "Tôi có thể theo dõi tiến độ dự án của mình không?",
        answer:
          "Có, chúng tôi cung cấp cập nhật tiến độ định kỳ cho khách hàng và luôn sẵn sàng phản hồi các thắc mắc về dự án. Khách hàng có thể yêu cầu xem các bản nháp trong quá trình sản xuất.",
      },
    ],
  },
  {
    title: "Quyền riêng tư & Bảo mật",
    items: [
      {
        question: "TFORART xử lý thông tin cá nhân của tôi như thế nào?",
        answer:
          "Chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn theo Chính sách Quyền Riêng Tư. Thông tin của bạn chỉ được sử dụng cho mục đích cung cấp dịch vụ và cải thiện trải nghiệm khách hàng.",
      },
      {
        question: "TFORART có chia sẻ thông tin của tôi với bên thứ ba không?",
        answer:
          "TFORART cam kết không bán, trao đổi hoặc chuyển giao thông tin cá nhân cho bên thứ ba mà không có sự đồng ý của bạn, trừ khi cần thiết để cung cấp dịch vụ hoặc theo yêu cầu pháp lý.",
      },
      {
        question: "Làm thế nào để yêu cầu xóa thông tin cá nhân của tôi?",
        answer:
          "Bạn có thể yêu cầu xóa thông tin cá nhân bằng cách liên hệ với chúng tôi qua email tforartprod@gmail.com hoặc gọi điện thoại tới số 0365187269. Chúng tôi sẽ xử lý yêu cầu của bạn trong thời gian sớm nhất.",
      },
    ],
  },
  {
    title: "Hợp tác & Đối tác",
    items: [
      {
        question: "Làm thế nào để trở thành đối tác của TFORART?",
        answer:
          'Nếu bạn quan tâm đến việc hợp tác với TFORART, vui lòng liên hệ với chúng tôi qua email tforartprod@gmail.com với tiêu đề "Đề xuất hợp tác". Chúng tôi sẽ xem xét đề xuất và phản hồi trong thời gian sớm nhất.',
      },
      {
        question: "TFORART có nhận thực tập sinh không?",
        answer:
          "Có, chúng tôi thường xuyên tuyển dụng thực tập sinh trong các lĩnh vực sản xuất phim, hậu kỳ, thiết kế và marketing. Vui lòng theo dõi thông báo tuyển dụng trên website hoặc trang mạng xã hội của chúng tôi.",
      },
    ],
  },
  {
    title: "Câu hỏi khác",
    items: [
      {
        question: "TFORART có cung cấp dịch vụ ngoài Hà Nội không?",
        answer:
          "Có, mặc dù văn phòng của chúng tôi đặt tại Hà Nội, chúng tôi cung cấp dịch vụ trên toàn quốc và có thể thảo luận về các dự án quốc tế.",
      },
      {
        question:
          "Làm thế nào để cập nhật thông tin về các dịch vụ mới của TFORART?",
        answer:
          "Bạn có thể đăng ký nhận bản tin của chúng tôi qua email, theo dõi trang mạng xã hội hoặc truy cập website của chúng tôi để cập nhật thông tin mới nhất về dịch vụ và khuyến mãi.",
      },
    ],
  },
];
