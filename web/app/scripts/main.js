$(function(){
    $('#btbLogin').click(function(e) {
        e.preventDefault();
        $.post('/microservices/auth/v1/login.php', $('#frmLogin').serialize(), function(data){
            var result = $.parseJSON(data);
            alert(result.status);
        });
    });

    $("#btnInvoiceGenerate").click(function(e) {
        e.preventDefault();
        $.post('/microservices/invoice/v1/generateInvoice.php', $("#frmInvoice").serialize(), function(data) {
            alert('Invoice Generated');
        })
    });

    $("#btnOrderPizza").click(function(e) {
        e.preventDefault();
        $.post('/microservices/order/v1/order.php', $("#orderPizza").serialize(), function(data) {
            alert('Order Created');
        })
    });
});