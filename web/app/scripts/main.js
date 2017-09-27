$(function(){
    $('#btbLogin').click(function(e) {
        e.preventDefault();
        $.post('/microservices/auth/v1/loginAPI.php', $('#frmLogin').serialize(), function(data){
            var result = $.parseJSON(data);
            alert(result.status);
        });
    });

    $("#btnInvoiceGenerate").click(function(e) {
        e.preventDefault();
        $.post('/microservices/invoice/v1/generateInvoiceAPI.php', $("#frmInvoice").serialize(), function(data) {
            alert('Invoice Generated');
        })
    });

    $("#btnOrderPizza").click(function(e) {
        e.preventDefault();
        $.post('/microservices/order/v1/orderAPI.php', $("#orderPizza").serialize(), function(data) {
            alert('Order Created');
        })
    });
});