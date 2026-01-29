import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Footer } from '../../../components/common';
import teacherImage from '../../../assets/images/person.png';
import { IoRocketSharp, IoChatbubbleEllipsesSharp, IoFlag, IoBookSharp, IoSchoolSharp, IoTrophySharp, IoHeadsetSharp, IoStarSharp } from 'react-icons/io5';
import './Homepage.css';

const Homepage: React.FC = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleZaloClick = () => {
    window.open('https://zalo.me/0919510596', '_blank');
  };

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
              <button className="btn-main" onClick={handleRegisterClick}>
                <IoRocketSharp className="btn-icon" /> Bắt Đầu Ngay!
              </button>
              <button className="btn-outline" onClick={handleZaloClick}>
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
        <div className="about-container">
          <div className="about-header">
            <span className="about-label">Về Chúng Tôi</span>
            <h2 className="about-title">Hệ Thống Đào Tạo IELTS Thầy Bảo</h2>
            <p className="about-subtitle">
              IELTS Thầy Bảo là trung tâm tiếng Anh dành cho những ai muốn học IELTS hiệu quả mà vẫn thoải mái. 
              Ở đây, bạn học giao tiếp và luyện thi thực tế, nói sai không sao, miễn là dám nói và tiến bộ mỗi ngày.
            </p>
          </div>

          <div className="about-content">
            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <IoSchoolSharp className="feature-icon" />
                </div>
                <h3 className="feature-title">Giáo Viên Chất Lượng</h3>
                <p className="feature-description">
                  Đội ngũ giáo viên 100% có chứng chỉ IELTS 8.0+ với kinh nghiệm giảng dạy lâu năm
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <IoTrophySharp className="feature-icon" />
                </div>
                <h3 className="feature-title">Cam Kết Đầu Ra</h3>
                <p className="feature-description">
                  Cam kết đầu ra rõ ràng, học lại miễn phí nếu không đạt mục tiêu
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <IoHeadsetSharp className="feature-icon" />
                </div>
                <h3 className="feature-title">Hỗ Trợ Tận Tình</h3>
                <p className="feature-description">
                  Hỗ trợ học tập 24/7, theo dõi tiến độ chi tiết từng học viên
                </p>
              </div>
            </div>

            <div className="about-action">
              <button className="btn-about">Xem Thêm</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider">
        <div className="divider-line"></div>
        <div className="divider-icon">
          <IoRocketSharp />
        </div>
        <div className="divider-line"></div>
      </div>

      {/* Programs Section */}
      <section className="programs-section">
        <div className="programs-container">
          <div className="programs-header">
            <span className="programs-label">Chương Trình Đào Tạo</span>
            <h2 className="programs-title">Các Chương Trình Học Tại IELTS Thầy Bảo</h2>
            <p className="programs-subtitle">
              Chương trình học đa dạng, phù hợp với mọi trình độ từ cơ bản đến nâng cao
            </p>
          </div>

          <div className="programs-grid">
            <div className="program-card">
              <div className="program-badge">Cơ Bản</div>
              <div className="program-icon-wrapper">
                <IoBookSharp className="program-icon" />
              </div>
              <h3 className="program-title">IELTS Foundation</h3>
              <p className="program-description">
                Dành cho người mới bắt đầu, xây dựng nền tảng vững chắc
              </p>
            </div>

            <div className="program-card featured">
              <div className="program-badge popular">Phổ Biến Nhất</div>
              <div className="program-icon-wrapper">
                <IoTrophySharp className="program-icon" />
              </div>
              <h3 className="program-title">IELTS Intensive</h3>
              <p className="program-description">
                Khóa học tập trung, đạt điểm nhanh chóng và hiệu quả
              </p>
            </div>

            <div className="program-card">
              <div className="program-badge">Nâng Cao</div>
              <div className="program-icon-wrapper">
                <IoStarSharp className="program-icon" />
              </div>
              <h3 className="program-title">IELTS Advanced</h3>
              <p className="program-description">
                Chinh phục điểm cao, chuẩn bị du học và nhập cư định cư
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-decoration cta-decoration-left"></div>
          <div className="cta-decoration cta-decoration-right"></div>
          <div className="cta-content">
            <div className="cta-icon-wrapper">
              <IoRocketSharp className="cta-icon" />
            </div>
            <h2 className="cta-title">Sẵn Sàng Bắt Đầu Hành Trình?</h2>
            <p className="cta-description">
              Đăng ký ngay hôm nay để nhận tư vấn miễn phí và ưu đãi đặc biệt dành cho học viên mới!
            </p>
            <div className="cta-buttons">
              <button className="btn-cta btn-cta-primary" onClick={handleRegisterClick}>
                <IoRocketSharp className="btn-icon" /> Đăng Ký Ngay
              </button>
              <button className="btn-cta btn-cta-secondary" onClick={handleZaloClick}>
                <IoChatbubbleEllipsesSharp className="btn-icon" /> Chat Zalo: 0919 510 596
              </button>
            </div>
            <div className="cta-features">
              <div className="cta-feature-item">
                <IoTrophySharp className="cta-feature-icon" />
                <span>Cam kết đầu ra</span>
              </div>
              <div className="cta-feature-item">
                <IoHeadsetSharp className="cta-feature-icon" />
                <span>Hỗ trợ 24/7</span>
              </div>
              <div className="cta-feature-item">
                <IoSchoolSharp className="cta-feature-icon" />
                <span>Giáo viên 8.0+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
