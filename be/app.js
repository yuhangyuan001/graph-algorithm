// 使用Express框架构建简单后端
// sk-d434f62f758c4abb8eead1320e5f11f0
// Please install OpenAI SDK first: `npm install openai`

import express from 'express'; // 导入Express
import OpenAI from "openai";
import cors from 'cors';
import { marked } from 'marked';

// const express = require('express');
// const cors = require('cors');
const app = express();
const port = 3000; // 设置端口

app.use(express.json()); // 解析JSON请求体
app.use(cors()); // 添加CORS中间件
const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: 'sk-d434f62f758c4abb8eead1320e5f11f0'
});

// 处理GET请求
app.get('/', (req, res) => {
    res.send('欢迎使用AI聊天接口！请使用POST请求访问 /api/chat');
});

// 创建一个API接口
app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message; // 从请求体中获取用户消息
    // const prompt = ',返回的回答中出现[```代码```, ###代码说明]等情况，请结合html标签，使得回答结果看起来美观';
    const prompt = '';
    console.log(userMessage);
    try {
        const response = await openai.chat.completions.create({
            messages: [{ role: "user", content: userMessage },{"role": "assistant", "content": prompt}],
            model: "deepseek-chat",
        });

        const aiReply = response.choices[0].message.content;

        // 格式化返回结果
        const formattedReply = {
            title: "AI 回复",
            content: marked.parse(aiReply),
            timestamp: new Date().toLocaleString(), // 添加时间戳
            type: "html" // 可以根据需要添加类型
        };

        console.log(formattedReply);
        res.json(formattedReply); // 返回格式化的AI回复
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" }); // 返回错误信息
    }
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});