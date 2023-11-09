$('#example').DataTable( {
    language: {
        url: '//cdn.datatables.net/plug-ins/1.13.7/i18n/fr-FR.json',
    },
   data:table_employe, 
   
   columns:[
    {data:  'nom'},
    {data: 'prenom'},
    {data: 'dateEmbauche'},
    // {data:  annee_anciennete() },
    {data: 'poste'},
    {data: 'salaireKBrutAnnuel'},
    {data: 'service'},
    {data: 'agence.nom'},
    {data: 'enfant.length'},
    
    ],
    columnDefs: [ 
        {
            targets: 2,
            render: function(data, type, row){
                return new Date(data).toLocaleDateString("fr");
            }
        },
        {
            targets: 7,
            render: function(data, type, row){

                if (data >= 1){
                    return'<span style="color:green">' +data+ '</span>';
                }
                return '<span style="color:orange">' + data + '</span>';
            }
        }
    ]



    });