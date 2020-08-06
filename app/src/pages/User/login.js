import React, { useState } from 'react';
import { Form, Input, Button } from 'antd'

function Login() {
  const [userName, setUserName] = useState('');

  return (
    <div className="login-page">
      <div className="form-box">
        <div className="tab-box">
          <div className="tab-item active">
            登录
          </div>
          <div className="tab-item">
            注册
          </div>
        </div>
        <Form
        name="login"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      
    </div>
  );
}

export default Login