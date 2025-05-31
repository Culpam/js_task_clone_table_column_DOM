'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tfoot = document.querySelector('tfoot');

let rows = thead.rows;

for (const row of rows) {
  const cells = row.cells;
  const clonedCell = cells[1].cloneNode(true);

  cells[cells.length - 1].before(clonedCell);
}

rows = tbody.rows;

for (const row of rows) {
  const cells = row.cells;
  const clonedCell = cells[1].cloneNode(true);

  cells[cells.length - 1].before(clonedCell);
}

rows = tfoot.rows;

for (const row of rows) {
  const cells = row.cells;
  const clonedCell = cells[1].cloneNode(true);

  cells[cells.length - 1].before(clonedCell);
}
