describe('pos', function() {
  var allItems;
  var promotions;
  beforeEach(function () {
    allItems = loadAllItems();
    promotions = loadPromotions();
  });

  describe('unit testing', function () {

    describe('test buildcartItems function', function () {
      var inputs;

      beforeEach(function () {
        inputs = [
          'ITEM000001',
          'ITEM000001',
          'ITEM000001',
          'ITEM000001',
          'ITEM000001',
          'ITEM000003-2',
          'ITEM000005',
          'ITEM000005',
          'ITEM000005'
        ];
      });

      it('Return correct cartItems', function () {
        var cartItems = [
          {
            item: {
              barcode: 'ITEM000001',
              name: '雪碧',
              unit: '瓶',
              price: 3.00
            },
            count: 5
          },
          {
            item: {
              barcode: 'ITEM000003',
              name: '荔枝',
              unit: '斤',
              price: 15.00
            },
            count: 2
          },
          {
            item: {
              barcode: 'ITEM000005',
              name: '方便面',
              unit: '袋',
              price: 4.50
            },
            count: 3
          }
        ];
        expect(buildcartItems(inputs, allItems)).toEqual(cartItems);
      });
    });

    describe('test buildSubtotal function', function () {
      var cartItems;

      beforeEach(function () {
        cartItems = [
          {
            item: {
              barcode: 'ITEM000001',
              name: '雪碧',
              unit: '瓶',
              price: 3.00
            },
            count: 5
          },
          {
            item: {
              barcode: 'ITEM000003',
              name: '荔枝',
              unit: '斤',
              price: 15.00
            },
            count: 2
          },
          {
            item: {
              barcode: 'ITEM000005',
              name: '方便面',
              unit: '袋',
              price: 4.50
            },
            count: 3
          }
        ];
      });

      it('Return correct receiptItems', function () {
        var receiptItems = [
          {
            cartItem: {
              item: {
                barcode: 'ITEM000001',
                name: '雪碧',
                unit: '瓶',
                price: 3.00
              },
              count: 5
            },
            subtotal: 12.00,
            saved: 3.00
          },
          {
            cartItem: {
              item: {
                barcode: 'ITEM000003',
                name: '荔枝',
                unit: '斤',
                price: 15.00
              },
              count: 2
            },
            subtotal: 30.00,
            saved: 0.00
          },
          {
            cartItem: {
              item: {
                barcode: 'ITEM000005',
                name: '方便面',
                unit: '袋',
                price: 4.50
              },
              count: 3
            },
            subtotal: 9.00,
            saved: 4.50
          }
        ];
        expect(buildSubtotal(cartItems, promotions)).toEqual(receiptItems);
      });
    });

    describe('test buildTotal function', function () {
      var receiptItems;

      beforeEach(function () {
        receiptItems = [
          {
            cartItem: {
              item: {
                barcode: 'ITEM000001',
                name: '雪碧',
                unit: '瓶',
                price: 3.00
              },
              count: 5
            },
            subtotal: 12.00,
            saved: 3.00
          },
          {
            cartItem: {
              item: {
                barcode: 'ITEM000003',
                name: '荔枝',
                unit: '斤',
                price: 15.00
              },
              count: 2
            },
            subtotal: 30.00,
            saved: 0.00
          },
          {
            cartItem: {
              item: {
                barcode: 'ITEM000005',
                name: '方便面',
                unit: '袋',
                price: 4.50
              },
              count: 3
            },
            subtotal: 9.00,
            saved: 4.50
          }
        ];
      });

      it('Return correct receipt', function () {
        var receipt = {
          receiptItem: [
            {
              cartItem: {
                item: {
                  barcode: 'ITEM000001',
                  name: '雪碧',
                  unit: '瓶',
                  price: 3.00
                },
                count: 5
              },
              subtotal: 12.00,
              saved: 3.00
            },
            {
              cartItem: {
                item: {
                  barcode: 'ITEM000003',
                  name: '荔枝',
                  unit: '斤',
                  price: 15.00
                },
                count: 2
              },
              subtotal: 30.00,
              saved: 0.00
            },
            {
              cartItem: {
                item: {
                  barcode: 'ITEM000005',
                  name: '方便面',
                  unit: '袋',
                  price: 4.50
                },
                count: 3
              },
              subtotal: 9.00,
              saved: 4.50
            }
          ],
          total: 51.00,
          saved: 7.50
        }
        expect(buildTotal(receiptItems)).toEqual(receipt);
      });

    });

  });
  describe('integration testing', function () {
    var allItems;
    var inputs;

    beforeEach(function () {
      allItems = loadAllItems();
      inputs = [
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000003-2',
        'ITEM000005',
        'ITEM000005',
        'ITEM000005'
      ];
    });

    it('should print correct text', function () {

      spyOn(console, 'log');

      printReceipt(inputs);

      var expectText =
        '***<没钱赚商店>收据***\n' +
        '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
        '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
        '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
        '----------------------\n' +
        '总计：51.00(元)\n' +
        '节省：7.50(元)\n' +
        '**********************';

      expect(console.log).toHaveBeenCalledWith(expectText);
    });
  });
});
