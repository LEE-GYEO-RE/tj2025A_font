function getProducts(){
    let products = localStorage.getItem('products')
    if( products == null ){
        products = [];
    }else{
        products = JSON.parse(products)
    }
    return products;
}

function setProducts(products){
    localStorage.setItem('products' , JSON.stringify(products))
}

function productAdd(){
    const pnameInput = document.querySelector('#pnameInput')
    const ppriceInput = document.querySelector('#ppriceInput')
    const pcontentInput = document.querySelector('#pcontentInput')
    const imgInput = document.querySelector('#imgInput')

    const pname = pnameInput.value;
    const pprice = ppriceInput.value;
    const pcontent = pcontentInput.value;
    const pimg = imgInput.files[0];

    let products = getProducts()

    let pcode = products.length == 0 ? 1 : products[products.length-1].pcode +1;

    const obj = {
        pname : pname,
        pcode : pcode,
        pprice : Number(pprice),
        pcontent : pcontent,
        pimg : pimg ? URL.createObjectURL(pimg) : '#',
    }

    products.push(obj);

    pnameInput.value = '';
    ppriceInput.value = '';
    pcontentInput.value = '';

    alert('제품등록 성공')
    setProducts(products);
    productPrint();
}
productPrint();
function productPrint(){
    const productBody = document.querySelector('#productBody');

    let products = getProducts();

    let html = '';

    for( i = 0 ; i <products.length; i++){
        const product = products[i];
        html += `<tr>
                    <td> <img src="${product.pimg}" </td>
                    <td> ${product.pname} </td>
                    <td> ${product.pprice}</td>
                    <td> ${product.pcontent} </td>
                    <button onclick="Delete(${product.pcode})"> 삭제 </button>
                </tr>`
    }    
    productBody.innerHTML = html ;
}

function Delete(pcode){
    let products = getProducts();
    for( i = 0; i<products.length; i ++){
        if( products[i].pcode == pcode){
            products.splice( i , 1 )
            alert('제품을 삭제했습니다.')
            setProducts(products);
            productPrint();
            return;
        }
    }
    alert('삭제할 제품 찾지 못했습니다.')
}