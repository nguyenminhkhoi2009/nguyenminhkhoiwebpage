const apiUrl = 'https://api.github.com/repos/nguyenminhkhoi2009/nguyenminhkhoi2009/contents/README.md';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Lỗi khi tải file Markdown: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const markdown = decodeURIComponent(escape(atob(data.content)));
        
        const converter = new showdown.Converter();
        const html = converter.makeHtml(markdown);

        const contentElement = document.getElementById('content');
        contentElement.innerHTML = html;
    })
    .catch(error => {
        console.error('Lỗi khi tải file Markdown:', error);
    });
