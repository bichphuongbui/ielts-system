import React from 'react';
import { IoLocationSharp, IoCallSharp, IoTimeSharp } from 'react-icons/io5';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-content">
            

            <div className="footer-column">
              <h4 className="footer-title">Liên Hệ</h4>
              <div className="footer-links">
                <a href="#" className="footer-link">
                  <IoLocationSharp className="footer-icon" />
                  <span>99 Đường số 1 Khu Dân Cư Hiệp Thành 1, Thủ Dầu Một, Bình Dương</span>
                </a>
                <a href="tel:0919510596" className="footer-link">
                  <IoCallSharp className="footer-icon" />
                  <span>0919 510 596</span>
                </a>
                
              </div>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Giờ Làm Việc</h4>
              <div className="footer-links">
                <div className="footer-link">
                  <IoTimeSharp className="footer-icon" />
                  <div>
                    <p>Thứ 2 - Thứ 6</p>
                    <p className="time-detail">7:00 - 21:00</p>
                  </div>
                </div>
                <div className="footer-link">
                  <IoTimeSharp className="footer-icon" />
                  <div>
                    <p>Thứ 7 - Chủ Nhật</p>
                    <p className="time-detail">7:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-column footer-map-col">
              <h4 className="footer-title">Địa Điểm</h4>
              <div className="map-wrapper">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4766526209423!2d106.65477249999999!3d11.0028195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529d5522fdf9b%3A0xb1ddc01bce297dd4!2zSUVMVFMgVGjhuqd5IELhuqNv!5e0!3m2!1svi!2s!4v1769658359980!5m2!1svi!2s" 
                  width="100%" 
                  height="220" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IELTS Thầy Bảo Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; 2022 IELTS Thầy Bảo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;