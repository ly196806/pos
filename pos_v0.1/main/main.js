function printReceipt(inputs) {
  var cartitems=buildcount(inputs);
  var receiptitems=buildsubtotal(cartitems);
  var receipt=buildtotal(receiptitems);
  var str=toreceipt(receipt);
  console.log(str);
}
function buildcount(inputs) {
  var cartitems=[];
  cartitems[0]={item:inputs[0],count:1};
  var j=0;
  for(var i=1;i<inputs.length;i++) {
    if(inputs[i].barcode===cartitems[j].item.barcode){
      cartitems[j].count++;
    }
    else{
      cartitems.push({item:inputs[i],count:1})
      j++;
    }
  }
  return cartitems;
}
function buildsubtotal(cartitems) {
  var receiptitems=[];
  cartitems.forEach(function (cartitem) {
    var subtotal=cartitem.count*cartitem.item.price;
    receiptitems.push({cartitems:cartitem,subtotal:subtotal});
  });
  return receiptitems;
}
function buildtotal(receiptitems) {
  var total=0;
  receiptitems.forEach(function (receiptitem) {
    total+=receiptitem.subtotal;
  });
  return {receiptitems:receiptitems,total:total};
}
function generatereceiptitems(receiptitems) {
  var string="";
  receiptitems.forEach(function (receiptitem) {
    var cartitem=receiptitem.cartitems;
    string+="名称："+cartitem.item.name+"，数量："+cartitem.count+cartitem.item.unit+"，单价："+cartitem.item.price.toFixed(2)
      +"(元)，小计："+receiptitem.subtotal.toFixed(2)+"(元)\n";
  });
  return string;
}
function toreceipt(receipt) {
  var str="***<没钱赚商店>收据***\n"+generatereceiptitems(receipt.receiptitems)+"----------------------\n"+"总计："+receipt.total.toFixed(2)+
    "(元)\n"+"**********************" ;
  return str;

}
