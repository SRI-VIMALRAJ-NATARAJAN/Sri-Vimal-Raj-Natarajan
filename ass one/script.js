6/*
coustername = Vimal Raj

calculate bonus points and what is gift they all are elegiable

price range for bouns points and gift

    Range            percentage         Gift voucher

1) 500 - 1000            5%              100 cashback

2) 1000 - 2000           10%             50% JBL speaker

3) 2000 - 3500           20%             Noise Smart watch 

4) 3500 - 5000           30%             Mi neck band

5) 5000 & above          40%             Andhaman Tour Package ticket

*/

console.log("WELCOME TO BIG BASKET")
let customername = "Vimal Raj"
let purchaseamount = 4800 ;

function range(amount)
{
    let bonuspoints = 0; 
    if (amount>=500 && amount<=1000){
        bonuspoints = purchaseamount * 0.05 
         gift = "100 cashback"
    }
    else if(amount>=1001 && amount<=2000){
        bonuspoints = purchaseamount * 0.10  
        gift = "50% JBL speaker" 
    }
    else if(amount>=2001 && amount<=3500){
        bonuspoints = purchaseamount * 0.20 
        gift = "Noise Smartwatch" 
    }
    else if(amount>=3501 && amount<=5000){
        bonuspoints = purchaseamount * 0.30 
        gift = "Mi neckband"
    }
    else{
        bonuspoints = purchaseamount * 0.50
        gift = "Andaman Tour Package ticket"  
    }
    return bonuspoints;
}
if (purchaseamount >=100)
{
    bonuspoints = range(purchaseamount)
   console.log(`HELLO ${customername}! You Have earned ${bonuspoints} points! Congratulations have won the ${gift}!`)
}
else{
    console.log("Thanks for your shopping visit again")
}
