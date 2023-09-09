let cost = Number (prompt('Стоимость товара'));
let money = Number (prompt('Ваш бюджет'));

if(cost == money){
    alert('Покупка выполнена успешно');
}
else{
    if(cost > money){
        let x = cost - money;
         alert('Для покупки не хватает ' + x + 'р');
     }else{
         let y = money - cost;
         alert('Покупка совершена. Ваша сдача ' + y + 'р');
     }
}