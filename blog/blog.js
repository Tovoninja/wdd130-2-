document.addEventListener('DOMContentLoaded', () => {
  const articles = [
    {
      id: 1,
      title: 'Septimus Heap Book One: Magyk',
      date: 'July 5, 2022',
      description:
        'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
      imgAlt: 'Book cover for Septimus Heap 1',
      ages: '10-14',
      genre: 'Fantasy',
      stars: '★★★★☆'
    },
    {
      id: 2,
      title: 'Magnus Chase Book One: Sword of Summer',
      date: 'December 12, 2021',
      description:
        'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
      imgSrc:
        'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
      imgAlt: 'Book cover for Magnus Chase 1',
      ages: '12-16',
      genre: 'Fantasy',
      stars: '★★★★☆'
    },
    {
      id: 3,
      title: 'The Horse and His Boy',
      date: 'July 5, 2022',
      description:
        'A loyal boy and his gentle horse share a special bond, exploring the world of Narnia together with trust and friendship.',
      imgSrc: 'boyAndHorse.jpg',
      imgAlt: 'Boy and Horse',
      ages: '10-14',
      genre: 'Fantasy',
      stars: '★★★★★'
    },
    {
      id: 4,
      title: "Charlotte's Web",
      date: 'June 12, 2022',
      description:
        'A pig named Wilbur befriends a wise spider who saves him with her clever web messages.',
      imgSrc: 'charlotte.png',
      imgAlt: "Charlotte's Web",
      ages: '8-12',
      genre: 'Classic',
      stars: '★★★★☆'
    },
    {
      id: 5,
      title: "Harry Potter and the Sorcerer's Stone",
      date: 'May 20, 2022',
      description:
        "Harry discovers he's a wizard and begins his magical journey at Hogwarts School of Witchcraft and Wizardry.",
      imgSrc: 'harrypotter.png',
      imgAlt: 'Harry Potter Book 1',
      ages: '9-14',
      genre: 'Fantasy',
      stars: '★★★★★'
    }
  ];

  const contentSection = document.querySelector('.content');

  // Render books on page load
  articles.forEach(book => {
    const bookHTML = `
      <article class="book">
        <div class="book-info">
          <div class="center-anchor">
            <h2><strong>${book.title}</strong></h2>
            <div class="book-image">
              <img src="${book.imgSrc}" alt="${book.imgAlt}" />
            </div>
          </div>
          <div class="book-meta">
            <p><strong>${book.date}</strong></p>
            <p>${book.ages}</p>
            <p>${book.genre}</p>
            <p>${book.stars}</p>
          </div>
        </div>
        <p class="description">${book.description}</p>
      </article>
    `;
    contentSection.insertAdjacentHTML('beforeend', bookHTML);
  });

  // Filter logic on input
  const searchInput = document.getElementById('searchInput');
  const books = document.querySelectorAll('.book');

  searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();

    books.forEach(book => {
      const title = book.querySelector('h2').textContent.toLowerCase();
      if (title.includes(filter)) {
        book.style.display = '';
      } else {
        book.style.display = 'none';
      }
    });
  });
});
