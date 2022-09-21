const amt= document.getElementById('number').value;     
    

var options = {
   
    
    "key": "rzp_test_jafLIZ2m4eLDvc", // Enter the Key ID generated from the Dashboard
    "amount":  "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Jyotiraditya mishra",
    "description": "Donate for your Society",
    "image": "https://zenprospect-production.s3.amazonaws.com/uploads/pictures/6209d6bc1ba7210001ea4741/picture",
    // "order_id": "order_123jkshdk23", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": {
        "name": "",
        "email": "",
        "contact": ""
    },
    
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}