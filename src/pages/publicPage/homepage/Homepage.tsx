import React from 'react';
import { Header } from '../../../components/common';
import teacherImage from '../../../assets/images/person.png';
import { IoRocketSharp, IoChatbubbleEllipsesSharp, IoFlag } from 'react-icons/io5';
import './Homepage.css';

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <Header />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-tag">
              <IoFlag className="tag-icon" /> Chinh phục IELTS cùng Thầy Bảo
            </div>
            <h1 className="hero-main-title">
              Học IELTS Không Còn Là<br />
              <span className="hero-highlight">"Ác Mộng" Nữa! <IoRocketSharp className="title-icon" /></span>
            </h1>
            <p className="hero-description">
              Học IELTS không khó, cái khó là bạn chưa gặp đúng trung tâm thôi. 
              Đảm bảo đầu ra, không "phông bạt" !
            </p>
            <div className="hero-stats">
              <div className="stat-box">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Học trò đã "lên đỉnh"</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">50+</div>
                <div className="stat-label">Thầy cô "xịn xò"</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">99%</div>
                <div className="stat-label">Đạt mục tiêu</div>
              </div>
            </div>
            <div className="hero-actions">
              <button className="btn-main">
                <IoRocketSharp className="btn-icon" /> Bắt Đầu Ngay!
              </button>
              <button className="btn-outline">
                <IoChatbubbleEllipsesSharp className="btn-icon" /> Chat với Thầy Bảo
              </button>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-image-container">
              <img src={teacherImage} alt="Giáo viên IELTS" className="hero-teacher-image" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">Về Chúng Tôi</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Hệ Thống Đào Tạo IELTS Hàng Đầu</h3>
              <p>
                Trung tâm IELTS Excellence được thành lập với sứ mệnh mang đến 
                chất lượng đào tạo tiếng Anh quốc tế cho học viên Việt Nam. 
                Với hơn 10 năm kinh nghiệm, chúng tôi tự hào đã đồng hành cùng 
                hàng ngàn học viên chinh phục ước mơ du học và làm việc tại 
                các nước nói tiếng Anh.
              </p>
              <ul className="about-features">
                <li>✓ Đội ngũ giáo viên 100% có chứng chỉ IELTS 8.0+</li>
                <li>✓ Lộ trình học tập cá nhân hóa</li>
                <li>✓ Cam kết đầu ra rõ ràng</li>
                <li>✓ Hỗ trợ học tập 24/7</li>
              </ul>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <h3>10+</h3>
                <p>Năm kinh nghiệm</p>
              </div>
              <div className="stat-item">
                <h3>5000+</h3>
                <p>Học viên</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Giáo viên</p>
              </div>
              <div className="stat-item">
                <h3>95%</h3>
                <p>Tỷ lệ đạt mục tiêu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section">
        <div className="container">
          <h2 className="section-title">Khóa Học Của Chúng Tôi</h2>
          <div className="courses-grid">
            <div className="course-card">
              <div className="course-icon">📚</div>
              <h3>IELTS Foundation</h3>
              <p>Dành cho người mới bắt đầu, xây dựng nền tảng vững chắc</p>
              <ul className="course-details">
                <li>Thời gian: 3 tháng</li>
                <li>Mục tiêu: 4.5 - 5.5</li>
                <li>Lớp nhỏ: 10-15 học viên</li>
              </ul>
              <button className="btn-course">Tìm hiểu thêm</button>
            </div>

            <div className="course-card featured">
              <div className="badge">Phổ biến</div>
              <div className="course-icon">🎯</div>
              <h3>IELTS Intensive</h3>
              <p>Khóa học tập trung, đạt điểm nhanh chóng</p>
              <ul className="course-details">
                <li>Thời gian: 4 tháng</li>
                <li>Mục tiêu: 6.0 - 7.0</li>
                <li>Lớp nhỏ: 8-12 học viên</li>
              </ul>
              <button className="btn-course">Tìm hiểu thêm</button>
            </div>

            <div className="course-card">
              <div className="course-icon">🏆</div>
              <h3>IELTS Advanced</h3>
              <p>Chinh phục điểm cao, chuẩn bị du học</p>
              <ul className="course-details">
                <li>Thời gian: 3 tháng</li>
                <li>Mục tiêu: 7.5 - 8.5+</li>
                <li>Lớp VIP: 5-8 học viên</li>
              </ul>
              <button className="btn-course">Tìm hiểu thêm</button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title">Tại Sao Chọn Chúng Tôi?</h2>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">👨‍🏫</div>
              <h3>Giáo Viên Chất Lượng</h3>
              <p>Đội ngũ giáo viên có trình độ cao, kinh nghiệm giảng dạy IELTS lâu năm</p>
            </div>
            <div className="why-item">
              <div className="why-icon">📖</div>
              <h3>Phương Pháp Hiện Đại</h3>
              <p>Áp dụng phương pháp giảng dạy tiên tiến, tương tác cao</p>
            </div>
            <div className="why-item">
              <div className="why-icon">💻</div>
              <h3>Học Online/Offline</h3>
              <p>Linh hoạt hình thức học, phù hợp với mọi đối tượng</p>
            </div>
            <div className="why-item">
              <div className="why-icon">📊</div>
              <h3>Theo Dõi Tiến Độ</h3>
              <p>Hệ thống theo dõi học tập chi tiết, báo cáo định kỳ</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Sẵn Sàng Bắt Đầu Hành Trình?</h2>
          <p>Đăng ký ngay hôm nay để nhận ưu đãi đặc biệt!</p>
          <div className="cta-buttons">
            <button className="btn btn-large btn-primary">Đăng Ký Ngay</button>
            <button className="btn btn-large btn-outline">Liên Hệ: 0900 123 456</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h4>Trung Tâm IELTS Excellence</h4>
              <p>Nơi ươm mầm ước mơ toàn cầu</p>
            </div>
            <div className="footer-column">
              <h4>Liên Hệ</h4>
              <p>📍 123 Đường ABC, Quận 1, TP.HCM</p>
              <p>📞 0900 123 456</p>
              <p>✉️ info@ieltsexcellence.vn</p>
            </div>
            <div className="footer-column">
              <h4>Giờ Làm Việc</h4>
              <p>Thứ 2 - Thứ 6: 8:00 - 20:00</p>
              <p>Thứ 7 - CN: 8:00 - 18:00</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 IELTS Excellence. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
