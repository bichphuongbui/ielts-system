import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Footer } from '../../../components/common';
import { IoRocketSharp, IoSchoolSharp, IoTrophySharp, IoHeadsetSharp, IoPeopleSharp, IoBookSharp, IoTimeSharp, IoStarSharp } from 'react-icons/io5';
import ieltsImage from '../../../assets/images/ielts.jpg';
import logoImage from '../../../assets/images/logo.png';
import './About.css';

const About: React.FC = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="about-page">
      <Header />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="hero-content">
            <span className="hero-label">Về Chúng Tôi</span>
            <h1 className="hero-title">Hệ Thống Đào Tạo<br />IELTS Thầy Bảo</h1>
            <div className="hero-logo">
              <img src={logoImage} alt="IELTS Thầy Bảo Logo" className="hero-logo-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <div className="founder-container">
          <div className="founder-content">
            <div className="founder-image-wrapper">
              <div className="founder-badge">
                <IoStarSharp className="badge-icon" />
                <span>IELTS 8.5</span>
              </div>
              <div className="founder-image">
                <img src={ieltsImage} alt="IELTS Certificate 8.5 - Thầy Bảo" className="certificate-image" />
              </div>
            </div>
            <div className="founder-info">
              <span className="section-label">Người Sáng Lập</span>
              <h2 className="section-title">Thầy Bảo - Founder & Giảng Viên Chính</h2>
              <p className="founder-description">
                Với niềm đam mê giảng dạy và mong muốn giúp học viên Việt Nam chinh phục IELTS, 
                Thầy Bảo đã xây dựng hệ thống đào tạo IELTS chuyên sâu với phương pháp giảng dạy 
                hiệu quả và tận tâm.
              </p>
              <div className="founder-credentials">
                <div className="credential-item">
                  <IoTrophySharp className="credential-icon" />
                  <div className="credential-text">
                    <div className="credential-title">Chứng chỉ IELTS 8.5</div>
                    <div className="credential-subtitle">Bằng thật được kiểm chứng</div>
                  </div>
                </div>
                <div className="credential-item">
                  <IoSchoolSharp className="credential-icon" />
                  <div className="credential-text">
                    <div className="credential-title">Tốt nghiệp THPT Chuyên Trần Đại Nghĩa</div>
                    <div className="credential-subtitle">Trường chuyên hàng đầu TP. HCM</div>
                  </div>
                </div>
                <div className="credential-item">
                  <IoSchoolSharp className="credential-icon" />
                  <div className="credential-text">
                    <div className="credential-title">Tốt nghiệp Phổ Thông Năng Khiếu ĐHQG-TP. HCM</div>
                    <div className="credential-subtitle">Trường năng khiếu trực thuộc ĐHQG, cơ sở giáo dục hàng đầu TPHCM</div>
                  </div>
                </div>
                <div className="credential-item">
                  <IoPeopleSharp className="credential-icon" />
                  <div className="credential-text">
                    <div className="credential-title">Giáo viên Trường THPT Nguyễn Khuyến</div>
                    <div className="credential-subtitle">Giảng dạy Anh Văn</div>
                  </div>
                </div>
                <div className="credential-item">
                  <IoTimeSharp className="credential-icon" />
                  <div className="credential-text">
                    <div className="credential-title">Hơn 7 năm kinh nghiệm</div>
                    <div className="credential-subtitle">Đào tạo IELTS, TOEIC & Anh Văn Giao tiếp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-container">
          <div className="story-content">
            <div className="story-text">
              <span className="section-label">Câu Chuyện Của Chúng Tôi</span>
              <h2 className="section-title">Hành Trình 7+ Năm Phát Triển</h2>
              <p className="story-paragraph">
                IELTS Thầy Bảo được thành lập với sứ mệnh giúp học viên Việt Nam tự tin chinh phục kỳ thi IELTS để theo đuổi giấc mơ du học và phát triển sự nghiệp quốc tế.
              </p>
              <p className="story-paragraph">
                Với đội ngũ giáo viên 100% có chứng chỉ IELTS 8.0+ và phương pháp giảng dạy hiện đại, chúng tôi đã đồng hành cùng hơn 5000+ học viên đạt được mục tiêu của mình.
              </p>
              <p className="story-paragraph">
                Ở IELTS Thầy Bảo, chúng tôi không chỉ dạy tiếng Anh, mà còn truyền cảm hứng và đồng hành cùng bạn trên con đường phát triển bản thân.
              </p>
            </div>
            <div className="story-stats">
              <div className="stat-card">
                <IoSchoolSharp className="stat-icon" />
                <div className="stat-number">7+</div>
                <div className="stat-label">Năm Kinh Nghiệm</div>
              </div>
              <div className="stat-card">
                <IoPeopleSharp className="stat-icon" />
                <div className="stat-number">5000+</div>
                <div className="stat-label">Học Viên</div>
              </div>
              <div className="stat-card">
                <IoTrophySharp className="stat-icon" />
                <div className="stat-number">50+</div>
                <div className="stat-label">Giáo Viên</div>
              </div>
              <div className="stat-card">
                <IoStarSharp className="stat-icon" />
                <div className="stat-number">99%</div>
                <div className="stat-label">Đạt Mục Tiêu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Core Values */}
      <section className="values-section">
        <div className="values-container">
          <div className="values-header">
            <span className="section-label">Giá Trị Cốt Lõi</span>
            <h2 className="section-title">Những Giá Trị Chúng Tôi Đem Lại</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon-wrapper">
                <IoSchoolSharp className="value-icon" />
              </div>
              <h3 className="value-title">Chất Lượng Đào Tạo</h3>
              <p className="value-description">
                Đội ngũ giáo viên 100% có chứng chỉ IELTS 8.0+ với kinh nghiệm giảng dạy lâu năm.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper">
                <IoTrophySharp className="value-icon" />
              </div>
              <h3 className="value-title">Cam Kết Kết Quả</h3>
              <p className="value-description">
                Cam kết đầu ra rõ ràng, học lại miễn phí nếu không đạt mục tiêu.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper">
                <IoHeadsetSharp className="value-icon" />
              </div>
              <h3 className="value-title">Hỗ Trợ Tận Tình</h3>
              <p className="value-description">
                Đội ngũ tư vấn và hỗ trợ học tập 24/7, luôn sẵn sàng đồng hành cùng bạn.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper">
                <IoBookSharp className="value-icon" />
              </div>
              <h3 className="value-title">Phương Pháp Hiện Đại</h3>
              <p className="value-description">
                Ứng dụng công nghệ và phương pháp giảng dạy tiên tiến, tương tác cao.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper">
                <IoTimeSharp className="value-icon" />
              </div>
              <h3 className="value-title">Linh Hoạt</h3>
              <p className="value-description">
                Lịch học linh hoạt, học online/offline tùy chọn, phù hợp mọi đối tượng.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper">
                <IoPeopleSharp className="value-icon" />
              </div>
              <h3 className="value-title">Lớp Học Nhỏ</h3>
              <p className="value-description">
                Số lượng học viên hạn chế để đảm bảo chất lượng giảng dạy và chăm sóc tận tình.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="about-cta-container">
          <div className="about-cta-content">
            <h2 className="cta-title">Sẵn Sàng Bắt Đầu Hành Trình?</h2>
            <p className="cta-description">
              Tham gia cùng chúng tôi để chinh phục ước mơ IELTS của bạn
            </p>
            <button className="btn-cta" onClick={handleRegisterClick}>
              <IoRocketSharp className="btn-icon" /> Đăng Ký Ngay
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;