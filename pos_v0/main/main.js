//TODO: Please write code in this file.
function printReceipt(items) {
  var cartitems=buildsubtotal(items);
  var receipttotal=builtotal(cartitems);
  str=toreceipt(receipttotal);
  console.log(str);
}

function buildsubtotal(items) {
  var cartitems = [];
  for (var i=0;i<items.length;i++){
    var subtotal = items[i].price * items[i].count;
    cartitems.push({item: items[i], subtotal:subtotal});
  }
  return cartitems;
}
function builtotal(cartitems) {
  var total=0;
  for(var i=0;i<cartitems.length;i++){

    total+=cartitems[i].subtotal;
  }
  return {items:cartitems,total:total};
}
function toreceipt(receipttotal){
  var str='***<没钱赚商店>收据***\n';
  for(var i=0;i<receipttotal.items.length;i++){
    str+=("名称："+receipttotal.items[i].item.name+"，数量："+receipttotal.items[i].item.count+receipttotal.items[i].item.unit+"，单价："+receipttotal.items[i].item.price.toFixed(2)+"(元)"
    +"，小计："+receipttotal.items[i].subtotal.toFixed(2)+"(元)\n");

  }
  str+="----------------------"+"\n总计："+(receipttotal.total).toFixed(2)+"(元)\n"+"**********************";
  return str;
}
