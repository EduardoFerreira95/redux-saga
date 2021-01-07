
function* testFn() {
  yield 'hello';
  yield 'world';
}
describe('Redux Saga Tests', () => {
  it('test', () => {
    const genObject = testFn();
    console.log(genObject.next());
    console.log(genObject.next());
    console.log(genObject.next());
  })
})
