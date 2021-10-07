# Summary

When to use `webpack@5.51.2`, the output css (`dist/css/bundle/example.css`) has `../../img/example/icon.png`.
But if we use `webpack@5.52.0`, the output css has an `img/example/icon.png`.


## webpack@5.51.2 (expected)

```
npm i && npm i -D webpack@5.51.2 && npm run build && cat ./project/dist/css/bundle/example.css
```

↓↓↓

```css
body {
  background-image: url(../../img/bundle/example/icon.png);
}
```


## webpack@5.52.0 (unexpected)

```
npm i && npm i -D webpack@5.52.0 && npm run build && cat ./project/dist/css/bundle/example.css
```

↓↓↓

```css
body {
  background-image: url(img/bundle/example/icon.png);
}
```

