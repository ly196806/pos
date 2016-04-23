function printReceipt(items) {
  var cartItems=buildSubtotal(items);
  
  var receiptTotal=buildTotal(cartItems);
  
  str=toReceipt(receiptTotal);
  console.log(str);
}

function buildSubtotal(items) {
  var cartItems = [];
  
  for (var i=0;i<items.length;i++){
    
    var subtotal = items[i].price * items[i].count;
    
    cartItems.push({item: items[i], subtotal:subtotal});
  }
  
  return cartItems;
}

function buildTotal(cartItems) {
  
  var total=0;
  
  for(var i=0;i<cartItems.length;i++){

    total+=cartItems[i].subtotal;
  }
  
  return {items:cartItems,total:total};
  
}

function toReceipt(receiptTotal){
  var str='***<没钱赚商店>收据***\n';
  for(var i=0;i<receiptTotal.items.length;i++){
    str+=("名称："+receiptTotal.items[i].item.name+"，数量："+receiptTotal.items[i].item.count+receiptTotal.items[i].item.unit+"，单价："+receiptTotal.items[i].item.price.toFixed(2)+"(元)"
    +"，小计："+receiptTotal.items[i].subtotal.toFixed(2)+"(元)\n");

  }
  str+="----------------------"+"\n总计："+(receiptTotal.total).toFixed(2)+"(元)\n"+"**********************";
  return str;
}
