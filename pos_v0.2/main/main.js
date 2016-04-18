function printReceipt(inputs) {
  var allItems = loadAllItems();
  var cartItems=buildCartItems(inputs,allItems);
  var receiptItems=buildRceciptItems(cartItems);
  var receipts=buildRceipt(receiptItems);
  toReceipt(receipts);
}
function buildCartItems(inputs,allItems){
  var cartItems = [];
  cartItems[0] = {allItems:allItems[0],count:1};
  var j=0;
  for(var i=1;i<inputs.length;i++){
    if(inputs[i]!=cartItems[j].allItems.barcode) {
      for(var t=0;t<allItems.length;t++) {
        if (allItems[t].barcode === inputs[i])
          cartItems.push({allItems: allItems[t], count: 1});
      }
      j++;
    }
    else{
      cartItems[j].count++;
    }
  }
  return cartItems;
}

function  buildRceciptItems(cartItems) {
  var receiptItems = [];
  cartItems.forEach(function (cartItem) {
    var subtatol= cartItem.count *cartItem.allItems.price;
    receiptItems.push({cartItems: cartItem, subtatol: subtatol});
  });
  return receiptItems;
}
function  buildRceipt(receiptItems) {
  var  tatol=0;
  receiptItems.forEach(function (receiptItem) {
    tatol += receiptItem.subtatol;
  });
  return {receiptItems:receiptItems,tatol:tatol};
}
//输出
function toReceipt(receipt){

  var str=( "***<没钱赚商店>收据***\n" );
  for(var i=0;i<receipt.receiptItems.length-1;i++){
    str+=("名称："+receipt.receiptItems[i].cartItems.allItems.name+"，数量："+receipt.receiptItems[i].cartItems.count+"瓶，单价："+(receipt.receiptItems[i].cartItems.allItems.price).toFixed(2)+"(元)，小计："+(receipt.receiptItems[i].subtatol).toFixed(2)+"(元)\n");
  }
  str+=("名称："+receipt.receiptItems[i].cartItems.allItems.name+"，数量："+receipt.receiptItems[i].cartItems.count+"个，单价："+receipt.receiptItems[i].cartItems.allItems.price.toFixed(2)+"(元)，小计："+receipt.receiptItems[i].subtatol.toFixed(2)+"(元)\n");

  str+=( "----------------------\n");
  str+=("总计："+receipt.tatol.toFixed(2)+"(元)\n");
  str+=("**********************");
  console.log(str);
}
