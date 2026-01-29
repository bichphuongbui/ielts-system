import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../../../components/common';
import { IoEyeSharp, IoEyeOffSharp, IoRocketSharp } from 'react-icons/io5';

import './Register.css';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle registration logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="register-page">
      <Header />
      <div className="register-container">
        <div className="register-left">
          <div className="left-content">
            <h1>Bắt Đầu Hành Trình <br /><span className="highlight">Chinh Phục IELTS</span></h1>
            <p>Tham gia cùng <strong>5000+</strong> học viên đã thành công</p>
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Giáo viên 8.0+ IELTS</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Cam kết đầu ra</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Hỗ trợ nhiệt tình</span>
              </div>
            </div>
          </div>
        </div>

        <div className="register-right">
          <div className="register-card">
            <div className="card-header">
              <h2>Đăng ký tài khoản</h2>
            </div>

            <form className="register-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Họ và tên"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>

              <div className="form-group">
                <div className="password-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Tạo mật khẩu"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <IoEyeOffSharp /> : <IoEyeSharp />}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <div className="password-wrapper">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Xác nhận mật khẩu"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <IoEyeOffSharp /> : <IoEyeSharp />}
                  </button>
                </div>
              </div>

              <button type="submit" className="btn-submit">
                <IoRocketSharp /> Đăng Ký
              </button>
            </form>

            <div className="form-footer">
              <p>Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
