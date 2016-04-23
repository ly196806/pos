describe('pos', function() {
  describe('unit testing', function () {
    describe('test buildCount function', function () {
      var inputs;
      beforeEach(function () {
        inputs = [
          {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00

          },
          {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
          },
          {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
          },
          {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
          },
          {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
          },
          {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
          },
          {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
          },
          {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
          }
        ];
      });
      it('return correct cartitems', function () {
        var cartItems = [
          {
            item: {
              barcode: 'ITEM000000',
              name: '可口可乐',
              unit: '瓶',
              price: 3.00
            },
            count: 5
          },
          {
            item: {
              barcode: 'ITEM000001',
              name: '雪碧',
              unit: '瓶',
              price: 3.00
            },
            count: 2
          },
          {
            item: {
              barcode: 'ITEM000004',
              name: '电池',
              unit: '个',
              price: 2.00
            },
            count: 1
          }
        ];
        expect(buildCount(inputs)).toEqual(cartItems);
      });
    });
    describe('test buildSubtotal function', function () {
      var cartItems;
      beforeEach(function () {
        cartItems = [
          {
            item: {
              barcode: 'ITEM000000',
              name: '可口可乐',
              unit: '瓶',
              price: 3.00
            },
            count: 5
          },
          {
            item: {
              barcode: 'ITEM000001',
              name: '雪碧',
              unit: '瓶',
              price: 3.00
            },
            count: 2
          },
          {
            item: {
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
              item: {
                barcode: 'ITEM000000',
                name: '可口可乐',
                unit: '瓶',
                price: 3.00
              },
              count: 5
            },
            subtotal: 15.00
          },
          {
            cartItems: {
              item: {
                barcode: 'ITEM000001',
                name: '雪碧',
                unit: '瓶',
                price: 3.00
              },
              count: 2
            },
            subtotal: 6.00
          },
          {
            cartItems: {
              item: {
                barcode: 'ITEM000004',
                name: '电池',
                unit: '个',
                price: 2.00
              },
              count: 1
            },
            subtotal: 2.00
          }
        ];
        expect(buildSubtotal(cartItems)).toEqual(receiptItems);
      });
    });
    describe('test buildTotal function', function () {
      var receiptItems;
      beforeEach(function () {
        receiptItems = [
          {
            cartItems: {
              item: {
                barcode: 'ITEM000000',
                name: '可口可乐',
                unit: '瓶',
                price: 3.00
              },
              count: 5
            },
            subtotal: 15.00
          },
          {
            cartItems: {
              item: {
                barcode: 'ITEM000001',
                name: '雪碧',
                unit: '瓶',
                price: 3.00
              },
              count: 2
            },
            subtotal: 6.00
          },
          {
            cartItems: {
              item: {
                barcode: 'ITEM000004',
                name: '电池',
                unit: '个',
                price: 2.00
              },
              count: 1
            },
            subtotal: 2.00
          }
        ];
      });
      it('return correct receipt', function () {
        var receipt = {
          receiptItems: [
            {
              cartItems: {
                item: {
                  barcode: 'ITEM000000',
                  name: '可口可乐',
                  unit: '瓶',
                  price: 3.00
                },
                count: 5
              },
              subtotal: 15.00
            },
            {
              cartItems: {
                item: {
                  barcode: 'ITEM000001',
                  name: '雪碧',
                  unit: '瓶',
                  price: 3.00
                },
                count: 2
              },
              subtotal: 6.00
            },
            {
              cartItems: {
                item: {
                  barcode: 'ITEM000004',
                  name: '电池',
                  unit: '个',
                  price: 2.00
                },
                count: 1
              },
              subtotal: 2.00
            }
          ],
          total: 23.00
        };
        expect(buildTotal(receiptItems)).toEqual(receipt);
      });
    });

    describe('integration testing', function () {


      var inputs;

      beforeEach(function () {
        inputs = [
          {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00

          },
          {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
          },
          {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
          },
          {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
          },
          {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
          },
          {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
          },
          {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
          },
          {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
          }
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
