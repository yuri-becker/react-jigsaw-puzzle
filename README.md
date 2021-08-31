# react-jigsaw-puzzle
Simple plug-and-play React component for jigsaw puzzles.

It supports resizing and can be fed with any image URL without the need to "tile" the image first.

Check out the [Demo](https://react-jigsaw-puzzle.web.app/) to see if it fits your needs.

## Usage

```tsx
// Minimal usage

import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'

<JigsawPuzzle imageSrc='https://any.image/url.jpg'/>
```

```tsx
// With custom amount of rows and columns

import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'

<JigsawPuzzle
  imageSrc='https://any.image/url.jpg'
  rows={4}
  columns={6}
  onSolved={() => alert('Solved!')}
/>
```

### Properties

| Name | Type | Purpose | Default |
|---|:---:|---|:---:|
| **imageSrc** | *string* | Source of the image. Can be any URL or relative path. | *required* |
| **rows** | *number* | The amount of rows the puzzle will have. | 3 |
| **columns** | *number* | The amount of columns the puzzle with have. | 4 |
| **onSolved** | *function* | Called when the puzzle is solved. | () => {} |  

### Styling

You can simply override or add styles via plain CSS.

The following style classes are used:
* `.jigsaw-puzzle` - The container for the puzzle pieces
* `.jigsaw-puzzle__piece` - Puzzle piece/tile
* `.jigsaw-puzzle__piece--solved` - Puzzle piece in the correct position
* `.jigsaw-puzzle__piece--dragging` - Puzzle piece that is being dragged

## Drawbacks
* The component adjusts its height according to the image's aspect ratio.
That means if the image has a 2:1 aspect ratio and the width is set or calculated to 800px, the puzzle will be 400px high.<br/>
That is probably what you'll want for landscape images, but portrait or square images can easily expand out of the viewport on desktop screens.<br/>
You can work around this by setting either a fixed width or a width dependent on the viewport height (`vh`).
* While in theory you can make a 100x100 puzzle, a large tile amount will result in poor render performance.<br/>
This is because each tile is basically rendering the whole image but "zooms in".<br/>
If you want to make really large puzzles, this is probably not for you. Still, I decided to not limit the tile amount because computers and phones are getting faster by the day.
* I built this for a very specific use-case. If you find bugs or want features added, feel free to either create an issue or make a PR.
* Touch scrolling is disabled while moving a tile by temporarily setting `overflow:hidden` on the `<html>` element.<br/> Keep in mind that this does not prevent the navigation bar from moving in and out on mobile phones if the site is larger than the viewport.
