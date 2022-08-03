<script>
$(document).ready(function() {
    $("#usuario_cpf").mask('000.000.000-00');
    $("#usuario_cpf_conjuge").mask('000.000.000-00');
    $("#usuario_cnpj").mask("99.999.999/9999-99");
    $("#usuario_cep").mask("99999-999");
    $("#usuario_telefone").mask("(99) 99999-9999");
    $('.mascara_moeda').mask('000.000.000.000.000,00', { reverse: true });
    $("#valor_medio_101").mask('000.000.000.000.000,00', { reverse: true });
}); 
</script>