// Skrypt do walidacji formularza, jeśli chcesz dodawać więcej funkcji, np. kalkulacje cenowe
document.querySelector('form').addEventListener('submit', function(event) {
    const quantity = document.getElementById('quantity').value;
    if (quantity < 1) {
        alert('Proszę wybrać prawidłową ilość powietrza.');
        event.preventDefault();
    }
});
