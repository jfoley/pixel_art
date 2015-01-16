describe('grid generation', function() {
  var containerNode;

  beforeEach(function() {
    containerNode = document.getElementById('jasmine_content');
  });

  afterEach(function() {
    containerNode.innerHTML = "";
  });

  describe('#createCell', function() {
    it('puts a cell in the given container', function() {
      createCell(containerNode);

      expect(containerNode.children.length).toEqual(1);
      expect(containerNode.querySelector('.cell')).toBeDefined();
    });
  });

  describe('#createRow', function() {
    it('creates as many cells as it is given inside the given container', function() {
      createRow(3, containerNode);

      var rowNode = containerNode.getElementsByClassName('row')[0];

      expect(containerNode.getElementsByClassName('row').length).toEqual(1);
      expect(rowNode.children.length).toEqual(3);
    });
  });

  describe('#createGrid', function() {
    it('creates a grid with the given dimensions', function() {
      createGrid(3, 3, containerNode);

      expect(containerNode.getElementsByClassName('row').length).toEqual(3);
      expect(containerNode.querySelectorAll('.cell').length).toEqual(9);
    });
  });

  describe('#clickOnCell', function() {
    it('colors the given cell black', function() {
      createCell(containerNode);
      var cellNode = containerNode.querySelector('.cell');

      clickOnCell(cellNode);

      expect(cellNode.style.backgroundColor).toEqual('black');
    });

    it('colors the cell when a click event happens', function() {
      createCell(containerNode);
      var cellNode = containerNode.querySelector('.cell');

      cellNode.click();

      expect(cellNode.style.backgroundColor).toEqual('black');
    });
  });
});
