function* indexGenerator() {
  for (let i = 1; ; i += 1) {
    yield i;
  }
}

export default indexGenerator;
