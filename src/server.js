const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit_form', (req, res) => {
    const { name, email, message } = req.body;

    // Ваш код для сохранения данных в базе данных (если нужно)

    // Отправка уведомления в Telegram
    const telegramChatId = '391169516';
    const telegramBotToken = '6663741270:AAES4xb2umE3rqk6-cKPz_jWyy1e-Kupwyc';
    const text = `Новая форма от пользователя:\nИмя: ${name}\nEmail: ${email}\nСообщение: ${message}`;

    const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramChatId}&text=${encodeURIComponent(text)}`;
    
    fetch(telegramUrl, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                res.json({ success: true });
            } else {
                res.status(500).json({ success: false });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).json({ success: false });
        });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});