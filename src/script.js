
console.log("starttttttt script")

let formData = document.getElementById('contactForm')

console.log(formData)

formData.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const formData = new FormData(this);

    fetch('/submit_form', {
        method: 'POST',
        headers: {},
        body: formData
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