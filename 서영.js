document.addEventListener('DOMContentLoaded', () => {
    // Handle dropdown menus
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        dropbtn.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent document click from closing immediately
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });

        // Close dropdown if clicked outside
        document.addEventListener('click', (event) => {
            if (!dropdown.contains(event.target)) {
                dropdownContent.style.display = 'none';
            }
        });
    });

    // Example of handling dropdown selection (optional)
    const sortDropdown = document.querySelector('.sort-filter .dropdown:first-child');
    if (sortDropdown) {
        sortDropdown.querySelectorAll('a').forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                const selectedText = event.target.textContent;
                const dropbtn = sortDropdown.querySelector('.dropbtn');
                dropbtn.innerHTML = `정렬: ${selectedText} <i class="fas fa-caret-down"></i>`;
                // In a real application, you'd trigger a sort here
                sortDropdown.querySelector('.dropdown-content').style.display = 'none';
            });
        });
    }

    const categoryDropdown = document.querySelector('.category-dropdown');
    if (categoryDropdown) {
        categoryDropdown.querySelectorAll('a').forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                const selectedText = event.target.textContent;
                const dropbtn = categoryDropdown.querySelector('.dropbtn');
                dropbtn.innerHTML = `카테고리: ${selectedText} <i class="fas fa-caret-down"></i>`;
                // In a real application, you'd trigger a filter here
                categoryDropdown.querySelector('.dropdown-content').style.display = 'none';
            });
        });
    }

    // Handle like/comment icons (purely cosmetic here, no backend integration)
    const likeIcons = document.querySelectorAll('.card-footer .likes i.far.fa-heart');
    likeIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            icon.classList.toggle('far'); // Toggle empty heart
            icon.classList.toggle('fas'); // Toggle solid heart
            icon.style.color = icon.classList.contains('fas') ? '#E0245E' : ''; // A common like color
            // In a real app, send an AJAX request to update like count
        });
    });

    // Example of dynamic content loading (conceptual - requires a data source)
    // function loadMoreCards() {
    //     // Simulate fetching data
    //     setTimeout(() => {
    //         const cardGrid = document.querySelector('.card-grid');
    //         const newCard = document.createElement('div');
    //         newCard.classList.add('card', 'card-detox'); // Or other types
    //         newCard.innerHTML = `
    //             <div class="card-header">
    //                 <span class="category">새로운 다짐</span>
    //                 <span class="date">2025-06-25</span>
    //             </div>
    //             <h3 class="card-title">새로운 디지털 습관</h3>
    //             <p class="card-description">
    //                 이것은 JavaScript로 동적으로 추가된 새로운 카드입니다.
    //             </p>
    //             <div class="card-footer">
    //                 <span class="author">새로운 사용자</span>
    //                 <div class="likes">
    //                     <i class="far fa-heart"></i> 0
    //                     <i class="far fa-comment"></i> 0
    //                 </div>
    //             </div>
    //         `;
    //         cardGrid.appendChild(newCard);
    //     }, 500);
    // }

    // Uncomment below if you want to test dynamic loading (e.g., on scroll or button click)
    // const loadMoreButton = document.querySelector('#load-more'); // Assuming you add a load more button in HTML
    // if (loadMoreButton) {
    //     loadMoreButton.addEventListener('click', loadMoreCards);
    // }
});