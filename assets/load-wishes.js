function loadUcapanFromCSV(csvPath, containerId) {
  fetch(csvPath)
    .then(response => response.text())
    .then(data => {
      const rows = data.trim().split('\n').slice(1); // skip header
      const container = document.getElementById(containerId);

      rows.forEach(row => {
        const [name, wish] = row.split(',');
        const div = document.createElement('div');
        div.className = 'ucapan-message';
        div.innerHTML = `<p>"${wish.trim()}"</p><strong>${name.trim()}</strong>`;
        container.appendChild(div);
      });
    }) // ← this closing ) was missing
    .catch(error => console.error('CSV Load Error:', error));
}
