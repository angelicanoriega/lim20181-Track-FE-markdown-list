const op=require('../lim20181-Track-FE-markdown-list/onlyPath');


test('MD:path', () => {
expect(op.seeFile('file:C:\Users\MariaAngelica\Documents\laboratoria\markdowm-Fe\lim20181-Track-FE-markdown-list\readme-original\otra-carpeta\dentro.md')).toBe('u')
});

test('MD:path', () => {
  expect(op.onlyFileMd('C:\Users\MariaAngelica\Documents\laboratoria\markdowm-Fe\lim20181-Track-FE-markdown-list\readme-original\otra-carpeta\README.md').path).toBe('C:\Users\MariaAngelica\Documents\laboratoria\markdowm-Fe\lim20181-Track-FE-markdown-list\readme-original\otra-carpeta\README.md');
});
test('MD:value true', () => {
  expect(op.onlyFileMd('C:\Users\MariaAngelica\Documents\laboratoria\markdowm-Fe\lim20181-Track-FE-markdown-list\readme-original\otra-carpeta\README.md').value).toBe(true);
});
test('MD:value false', () => {
  expect(op.onlyFileMd('C:\Users\MariaAngelica\Documents\laboratoria\markdowm-Fe\lim20181-Track-FE-markdown-list\readme-original\ghj.html').value).toBe(false);
});