import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../../../components/common';
import { IoEyeSharp, IoEyeOffSharp, IoRocketSharp } from 'react-icons/io5';

import './Login.css';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle login logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-page">
      <Header />
      <div className="login-container">
        <div className="login-left">
          <div className="left-content">
            <h1>Chào Mừng <br /><span className="highlight">Trở Lại</span></h1>
            <p>Tiếp tục hành trình <strong>chinh phục IELTS</strong> của bạn</p>
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

        <div className="login-right">
          <div className="login-card">
            <div className="card-header">
              <h2>Đăng nhập</h2>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
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
                    placeholder="Mật khẩu"
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

              <button type="submit" className="btn-submit">
                <IoRocketSharp /> Đăng Nhập
              </button>
            </form>

            <div className="form-footer">
              <p>Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
