
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment');
    const name = nameInput.value.trim();
    const comment = commentInput.value.trim();

    if (name === '' || comment === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const commentItem = document.createElement('li');
    commentItem.textContent = `${name}: ${comment}`;
    
    document.getElementById('commentsList').appendChild(commentItem);

    nameInput.value = '';
    commentInput.value = '';
});
