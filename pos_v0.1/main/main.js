function printReceipt(inputs) {
  var cartItems=buildCount(inputs);
  
  var receiptItems=buildSubtotal(cartItems);
  
  var receipt=buildTotal(receiptItems);
  
  var str=toReceipt(receipt);
  console.log(str);
}

function buildCount(inputs) {
  var cartItems=[];
  
  cartItems[0]={item:inputs[0],count:1};
  var j=0;
  for(var i=1;i<inputs.length;i++) {
    if(inputs[i].barcode===cartItems[j].item.barcode){
      cartItems[j].count++;
    }
    else{
      cartItems.push({item:inputs[i],count:1})
      j++;
    }
  }
  
  return cartItems;
}

function buildSubtotal(cartItems) {
  
  var receiptItems=[];
  
  cartItems.forEach(function (cartItem) {
    
    var subtotal=cartItem.count*cartItem.item.price;
    
    receiptItems.push({cartItems:cartItem,subtotal:subtotal});
  });

  return receiptItems;
  
}

function buildTotal(receiptItems) {
  
  var total=0;
  
  receiptItems.forEach(function (receiptItem) {
    total+=receiptItem.subtotal;
  });
  
  return {receiptItems:receiptItems,total:total};
  
}

function generateReceiptitems(receiptItems) {
  
  var string="";

  receiptItems.forEach(function (receiptItem) {

    var cartItems=receiptItem.cartItems;

    string+="名称："+cartItems.item.name+"，数量："+cartItems.count+cartItems.item.unit+"，单价："+cartItems.item.price.toFixed(2)
      +"(元)，小计："+receiptItem.subtotal.toFixed(2)+"(元)\n";
  });

  return string;
  
}

function toReceipt(receipt) {
  var str="***<没钱赚商店>收据***\n"+generateReceiptitems(receipt.receiptItems)+"----------------------\n"+"总计："+receipt.total.toFixed(2)+
    "(元)\n"+"**********************" ;
  
  return str;

}
