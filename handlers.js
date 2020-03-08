const items = [];

const { stock, customers } = require('./data/promo');

const handleToDo = (req, res) =>{
    res.render ('pages/todos', {items: items})
}

const handleData = (req, res) =>{
    const { item } = req.body;
    items.push(item); 
    res.redirect('/todos');
}

const handleCustomer = (req, res) =>{
    
    let customerInfo = req.body
    

    customers.forEach(customer =>{
        if (customer.givenName === customerInfo.givenName){
            res.send({'status':'error', 'error': '550'})
        }
        else if (customer.surname === customerInfo.surname){
            res.send({'status':'error', 'error': '550'})
        }
    });
    if(!customerInfo.size){
        if(stock[customerInfo] == 0){
            res.send({'status':'error', 'error': '450'})
        }
    }
    else if(stock.shirt[customerInfo.size] == 0){
            res.send({'status':'error', 'error': '450'})
    }

    res.send({'status':'success'})

    /*customers.includes((element) => {
        if(element.address === customerInfo.address && element.country === customerInfo.country){
            res.send({'status':'error', 'error': '650'})
            console.log({'status':'error', 'error': '650'})
        }
        else if(element.givenName === customerInfo.givenName && element.lastname === customerInfo.lastname){
            res.send({'status':'error', 'error': '550'})
        } 
        else{
            res.send({'status':'success'})
        }     
    }); */
///FOR THE THE STOCK USE == INSTEAD OF === BECAUSE ITS A LOOSER =
    /*stock.inclues((product) =>{
        if(product.bottle && product.socks ===0 ){
            res.send({'status':'error','error': '450'})
        }
        else if(product.shirt.small && product.shirt.medium && product.shirt.large && product.shirt.extra.large ===0 ){
            res.send({'status':'error','error': '450'})
        }
        if(product.bottle){}
    })*/
}




module.exports = {
handleToDo,
handleData,
handleCustomer
}