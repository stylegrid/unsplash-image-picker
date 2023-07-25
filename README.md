# unsplash-image-picker

Forked from https://github.com/TheAlphamerc/unsplash-image-picker to support React 18 and wraps the tailwind CSS inside `.picker` class.

## Build & deploy

```
npm run build
```

Push changes up to Git (including in `dist` folder).

## Install

```
npm install --save https://github.com/stylegrid/unsplash-image-picker.git
```

## Use in Next.js

pages/_app.js
```js
import "unsplash-image-picker/dist/index.css";
```

component.js
```js
import UnsplashImagePickerModal from "unsplash-image-picker/dist/index.modern";

<div className="picker">
    <UnsplashImagePickerModal ... />
</div>
```

