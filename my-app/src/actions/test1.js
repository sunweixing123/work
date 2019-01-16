export function testUpdata(data) {
  console.log(data);
  return {
    type: 'test',
    data,
  }
}