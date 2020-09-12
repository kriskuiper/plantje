module.exports = (errorMessage) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/styles.css">
  <title>Plantly</title>
  <style>
    pre {
      font-family: monospace;
      padding: 0.75em;
      color: #4af626;
      background: black;
      white-space: normal;
      font-size: 1.225em;
    }

    pre > span {
      color: orange;
    }
  </style>
</head>
<body>
  <header>
    <h1>Kapot</h1>
  </header>

  <main>
    <pre><span>Error:</span> ${errorMessage}</pre>
    <p>Sorry man ¯\\_(ツ)_/¯</p>
    <p>De oplossing is om <a href="/">terug te gaan naar home</a></p>
  </main>

  <script src="/scripts/bundle.js"></script>
</body>
</html>`
