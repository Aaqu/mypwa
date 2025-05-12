document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton');
    const itemList = document.getElementById('itemList');
    let itemCount = 0;

    // Load items from localStorage
    const savedItems = JSON.parse(localStorage.getItem('pwa-items') || '[]');
    savedItems.forEach(item => {
        addItemToList(item);
    });

    addButton.addEventListener('click', () => {
        const newItem = `Item ${++itemCount}`;
        addItemToList(newItem);
        saveItems();
    });

    function addItemToList(item) {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    }

    function saveItems() {
        const items = Array.from(itemList.children).map(li => li.textContent);
        localStorage.setItem('pwa-items', JSON.stringify(items));
    }
}); 