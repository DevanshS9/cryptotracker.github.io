const form = document.querySelector('#searchForm');
const res =  document.querySelector('#tableResult');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const ctype=form.elements.coinType.value;
    fetchPrice(ctype);
})

const fetchPrice=async(ctype)=>{
    const r= await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`);
    console.log(r);
    const name=r.data.coin.name
    const price=r.data.coin.price;
    const volume=r.data.coin.volume;
    const change=r.data.coin.priceChange1d;
    const marketCap=r.data.coin.marketCap;

    res.innerHTML=`<tr style="background-color:navy; color:white; font-weight:600">
    <td> Property</td>
    <td> Value </td>
    </tr>
    <tr style="background-color:white;">
    <td style="color:green;font-weight:500"> Name</td>
    <td> ${name} </td>
    </tr>
    <tr style="background-color:white;">
    <td style="color:green;font-weight:500"> Price</td>
    <td> ${price} </td>
    </tr>
    <tr style="background-color:white;">
    <td style="color:green;font-weight:500"> Volume</td>
    <td> ${volume} </td>
    </tr>
    <tr style="background-color:white;">
    <td style="color:green;font-weight:500"> Change</td>
    <td> ${change} </td>
    </tr>
    <tr style="background-color:white;">
    <td style="color:green;font-weight:500"> Market Cap</td>
    <td> ${marketCap} </td>
    </tr>`;

  
}