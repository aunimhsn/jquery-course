$(document).ready(function() {

    // let marqueSelect = $('#marque').val();
    // let leModele;

    $('#marqueID').on('change', function() {

        // let marqueSelect = $('#marque').val();
        console.log($('#marqueID').val());

        if ($('#marqueID').val() == "peugeot"){
            $('#modele option[data="peugeot"]').first().prop('selected', true);
            $("#modele option").hide();
            $('option[data="peugeot"]').show();
        }

        if ($('#marqueID').val() == "renault"){
            $('#modele option[data="renault"]').first().prop('selected', true);
            $("#modele option").hide();
            $('option[data="renault"]').show();
        }

        if ($('#marqueID').val() == "volkswagen"){
            $('#modele option[data="volkswagen"]').first().prop('selected', true);
            $("#modele option").hide();
            $('option[data="volkswagen"]').show();
        }

    });

    $('.favorite').on('click', function(event) {
        event.preventDefault();

        let selectMarque = $('#marqueID').val();
        let selectModele = $("#modele option:selected").text();
        $("#text").text(`${selectModele} ${selectMarque}`);
    });

});

