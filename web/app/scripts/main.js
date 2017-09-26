$(function(){
    $('#btbLogin').click(function(e) {
        e.preventDefault();
        $.post('http://localhost/auth/v1/login.php', $('#frmLogin').serialize(), function(data){
            var result = $.parseJSON(data);
            alert(result.status);
        });
    });
    
    $("#btnInvoiceGenerate").click(function(e) {
        e.preventDefault();
        $.post('http://localhost/invoice/v1/generateInvoice.php', $("#frmInvoice").serialize(), function(data) {
            alert('Invoice Generated');
        })
    });

    $("#btnOrderPizza").click(function(e) {
        e.preventDefault();
        $.post('http://localhost/order/v1/formProcess.php', $("#orderPizza").serialize(), function(data) {
            alert('Order Created');
        })
    });
});