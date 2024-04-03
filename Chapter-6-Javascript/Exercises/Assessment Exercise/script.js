document.getElementById('Total').addEventListener('click', function() {
    var price = document.getElementById('Price').value;
    var ltr = document.getElementById('liter').value;
    document.getElementById('response').innerHTML = "Total Price = " + (parseFloat(price) * parseFloat(ltr));
});
