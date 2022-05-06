function* powersOfTwo() {
  for (let i = 2; ; i *= 2) {
    yield i;
  }
}

export default powersOfTwo;
