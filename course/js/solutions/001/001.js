$(document).ready(function() {

    $('#model option').hide();
    $(`#model option[data="${$('#brand option:selected').val()}"]`).show();
    // '#model option[data="renault"]'
    
    $('#brand').on('change', function() {
        // Retrieve the car brand
        let currentBrand = $('#brand option:selected').val();

        switch(currentBrand) {
            case 'renault':
                $('#model option').hide();
                $('#model option[data="renault"]').show();
                $('#model option[data="renault"]').first().prop('selected', true);
                break;
            case 'peugeot':
                $('#model option').hide();
                $('#model option[data="peugeot"]').show();
                $('#model option[data="peugeot"]').first().prop('selected', true);
                break;
            case 'nissan':
                $('#model option').hide();
                $('#model option[data="nissan"]').show();
                $('#model option[data="nissan"]').first().prop('selected', true);
                break;
            case 'toyota':
                $('#model option').hide();
                $('#model option[data="toyota"]').show();
                $('#model option[data="toyota"]').first().prop('selected', true);
                break;
            default:
                console.error('Oops, something went wrong!');
                break;
        }
    });

    $('button[type="submit"]').on('click', function(e) { 
        // Preventing the submit default behavior
        e.preventDefault();
        $('.result').text(`You have selected the ${$('#brand option:selected').val()} ${$('#model option:selected').val()}.`);
    });

});