describe('pos', function() {
  var allItems;
  beforeEach(function () {
    allItems = loadAllItems();
  });

  describe('unit testing', function () {

    describe('test buildcartItems function', function () {
      var inputs;
      beforeEach(function () {
        inputs = [
          'ITEM000000',
          'ITEM000000',
          'ITEM000000',
          'ITEM000000',
          'ITEM000000',
          'ITEM000001',
          'ITEM000001',
          'ITEM000004'
        ];
      });
      it('return correct cartItems', function () {
        var cartItems = [
          {
            allItems: {
              barcode: 'ITEM000000',
              name: '可口可乐',
              unit: '瓶',
              price: 3.00
            },
            count: 5
          },
          {
            allItems: {
              barcode: 'ITEM000001',
              name: '雪碧',
              unit: '瓶',
              price: 3.00
            },
            count: 2
          },
          {
            allItems: {
              barcode: 'ITEM000004',
              name: '电池',
              unit: '个',
              price: 2.00
            },
            count: 1
          }
        ];
        expect(buildCartItems(inputs, allItems)).toEqual(cartItems);
      });
    });
    describe('test buildReceiptItems function', function () {
      var cartItems;
      beforeEach(function () {
        cartItems = [
          {
            allItems: {
              barcode: 'ITEM000000',
              name: '可口可乐',
              unit: '瓶',
              price: 3.00
            },
            count: 5
          },
          {
            allItems: {
              barcode: 'ITEM000001',
              name: '雪碧',
              unit: '瓶',
              price: 3.00
            },
            count: 2
          },
          {
            allItems: {
              barcode: 'ITEM000004',
              name: '电池',
              unit: '个',
              price: 2.00
            },
            count: 1
          }
        ];
      });
      it('return correct receiptItems', function () {
        var receiptItems = [
          {
            cartItems: {
              allItems: {
                barcode: 'ITEM000000',
                name: '可口可乐',
                unit: '瓶',
                price: 3.00
              },
              count: 5
            },
            subtotal: 12
          },
          {
            cartItems: {
              allItems: {
                barcode: 'ITEM000001',
                name: '雪碧',
                unit: '瓶',
                price: 3.00
              },
              count: 2
            },
            subtotal: 6
          },
          {
            cartItems: {
              allItems: {
                barcode: 'ITEM000004',
                name: '电池',
                unit: '个',
                price: 2.00
              },
              count: 1
            },
            subtotal: 2
          }
        ];
        expect(buildRceciptItems(cartItems)).toEqual(receiptItems);
      });
    });
    describe('test buildRceipt function', function () {
      var receiptItems
      beforeEach(function () {
        receiptItems == [
          {
            cartItems: {
              allItems: {
                barcode: 'ITEM000000',
                name: '可口可乐',
                unit: '瓶',
                price: 3.00
              },
              count: 5
            },
            subtatol: 12
          },
          {
            cartItems: {
              allItems: {
                barcode: 'ITEM000001',
                name: '雪碧',
                unit: '瓶',
                price: 3.00
              },
              count: 2
            },
            subtatol: 6
          },
          {
            cartItems: {
              allItems: {
                barcode: 'ITEM000004',
                name: '电池',
                unit: '个',
                price: 2.00
              },
              count: 1
            },
            subtatol: 2
          }
        ];
      });
      it('return correct receipts', function () {
        var receipts = {
          receiptItems: [
            {
              cartItems: {
                allItems: {
                  barcode: 'ITEM000000',
                  name: '可口可乐',
                  unit: '瓶',
                  price: 3.00
                },
                count: 5
              },
              subtatol: 12
            },
            {
              cartItems: {
                allItems: {
                  barcode: 'ITEM000001',
                  name: '雪碧',
                  unit: '瓶',
                  price: 3.00
                },
                count: 2
              },
              subtatol: 6
            },
            {
              cartItems: {
                allItems: {
                  barcode: 'ITEM000004',
                  name: '电池',
                  unit: '个',
                  price: 2.00
                },
                count: 1
              },
              subtatol: 2
            }
          ],
          tatol: 23
        }
        expect(buildRceipt(receiptItems)).toEqual(receipts);
      });
    });
    describe('integration testing', function () {
      var allItems;

      var inputs;

      beforeEach(function () {
        allItems = loadAllItems();
        inputs = [
          'ITEM000000',
          'ITEM000000',
          'ITEM000000',
          'ITEM000000',
          'ITEM000000',
          'ITEM000001',
          'ITEM000001',
          'ITEM000004'
        ];
      });

      it('should print correct text', function () {

        spyOn(console, 'log');

        printReceipt(inputs);

        var expectText =
          '***<没钱赚商店>收据***\n' +
          '名称：可口可乐，数量：5瓶，单价：3.00(元)，小计：15.00(元)\n' +
          '名称：雪碧，数量：2瓶，单价：3.00(元)，小计：6.00(元)\n' +
          '名称：电池，数量：1个，单价：2.00(元)，小计：2.00(元)\n' +
          '----------------------\n' +
          '总计：23.00(元)\n' +
          '**********************';

        expect(console.log).toHaveBeenCalledWith(expectText);
      });
    });
  });
});
