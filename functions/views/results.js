module.exports = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/styles.css">
  <title>Resultaten</title>
</head>
<body>
  <header>
    <h1>Resultaten</h1>
  </header>

  ${data && data.map(plant => `
  <article data-test="plant-article">
    <h2>${ plant.scientific_name }</h2>
    <form action="/.netlify/functions/add-to-plants" method="POST">
      <input name="plant_id" value=${plant.id} type="hidden">
      <button type="submit" data-test="add-to-plants-button">Toevoegen</button>
    </form>
  </article>
  `).join('')}
  
  <script src="/scripts/bundle.js"></script>
</body>
</html>`
