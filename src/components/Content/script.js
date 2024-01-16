
console.log("hello")

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('/submit_form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Форма успешно отправлена!');
            // Можете добавить код для очистки формы или других дополнительных действий.
        } else {
            alert('Произошла ошибка при отправке формы.');
        }
    })
    .catch(error => console.error('Ошибка:', error));
});