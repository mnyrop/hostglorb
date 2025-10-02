<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>hostglorb</title>
  </head>

  <body>
    <h1>hostglorb</h1>
    <ul>
    {%- for file in files -%}
      <li><a href="stuff/{{ file }}">stuff/{{ file }}</a></li>
    {%- endfor -%}
    <ul>
  </body>
</html>