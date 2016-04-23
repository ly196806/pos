function printReceipt(inputs) {

  var allItems=loadAllItems();
  var cartItems=buildcartItems(inputs,allItems);

  var promotions=loadPromotions();
  var receiptItems=buildSubtotal(cartItems,promotions);

  var receipt=buildTotal(receiptItems);
  var str=toReceipt(receipt);

  console.log(str);
}

function findCount(barcode,allItems) {
  for(var j=0;j<allItems.length;j++){
    if(barcode===allItems[j].barcode){
      var item=allItems[j];
      return item;
    }
  }
}

function findCounts(cartItems,item) {
  for(var j=0;j<cartItems.length;j++){
    if(item.barcode===cartItems[j].item.barcode){
      var cartItem=cartItems[j];
      return cartItem;
    }
  }
}

function buildcartItems(inputs,allItems) {
  
  var cartItems=[];
  
  inputs.forEach(function (input) {
    
    var tagArray=input.split('-');
    var barcode=tagArray[0];
    var count=parseInt(tagArray[1]  || 1);
    
    var item=findCount(barcode,allItems);
    
    var existcartItem=findCounts(cartItems,item);
    
    if(existcartItem){
      existcartItem.count+=count;
    }
    else{
      cartItems.push({item:item,count:count});
    }
  });
  
  return cartItems;
  
}

function buildSubtotal(cartItems,promotions){
  
  var saved=0;
  var subtotal=0;
  var receiptItems=[];
  
  for(var i=0;i<cartItems.length;i++){
    saved=findPromotiontype(cartItems[i],promotions)*cartItems[i].item.price;
    subtotal=cartItems[i].item.price*cartItems[i].count-saved;
    receiptItems[i]={cartItem:cartItems[i],subtotal:subtotal,saved:saved};
  }
  
  return receiptItems;
  
}

function findPromotiontype(cartItem,promotions) {
  for(var i=0;i<promotions.length;i++){
    if(promotions.type==='BUY_TWO_GET_ONE_FREE');
    var barcode=promotions[i].barcodes;
    for(var j=0;j<barcode.length;j++){
      if(barcode[j]===cartItem.item.barcode){
        return parseInt(cartItem.count/3);
      }
    }
  }
  return 0;
}

function buildTotal(receiptItems){
  
  var total=0;
  var saved=0;
  
  for(var i=0;i<receiptItems.length;i++){
    saved+=receiptItems[i].saved;
    total+=receiptItems[i].subtotal;
  }
  
  return {receiptItem:receiptItems,total:total,saved:saved};
  
}

function toReceipt(receipt) {
  
  prints = '***<没钱赚商店>收据***\n';
  
  for (var i = 0; i < receipt.receiptItem.length; i++) {
    prints += ( '名称：' + receipt.receiptItem[i].cartItem.item.name +
    '，数量：' + receipt.receiptItem[i].cartItem.count + receipt.receiptItem[i].cartItem.item.unit +
    '，单价：' + receipt.receiptItem[i].cartItem.item.price.toFixed(2) +
    '(元)，小计：' + (receipt.receiptItem[i].subtotal).toFixed(2) + '(元)\n');
  }
  prints += '----------------------\n';
  prints += ('总计：' + receipt.total.toFixed(2) + '(元)\n');
  prints += ('节省：' + receipt.saved.toFixed(2) + '(元)\n');
  prints += '**********************';
  
  return prints;
  
}
