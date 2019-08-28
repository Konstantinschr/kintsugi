// preparing language file
var aLangKeys = new Array();
aLangKeys['de'] = new Array();
aLangKeys['en'] = new Array();

aLangKeys['de']['introduction'] = 'Nach einem Übergriff, schafft es die Therapeutin für sexuell missbrauchte Fälle nicht ihre eigenen Grundsätze zu befolgen und taucht tief in den Horror ihrer Psyche hinein.';
aLangKeys['de']['about_main'] = 'Mit diesem Projekt wollen wir Opfern von Sexuellen Übergriffen eine Stimme geben. Es uns wichtig, die psychischen Auswirkungen eines traumatischen Erlebnisses in seiner ganzen Brutalität darzustellen. ';
aLangKeys['de']['about_sub'] = 'Der Film portraitiert Frauen, die tiefe seelische Verwundungen erlitten haben und sich aus der Opferrolle befreien.Die Frage ist: Können Risse in der eigenen Biografie durch Selbstermächtigung wieder gekittet werden ?';
aLangKeys['de']['donate-link'] = 'Spenden';
aLangKeys['de']['donate-title'] = 'Spenden';
aLangKeys['de']['donate-text'] = 'Dank unserer engen Kontakte in die Filmbranche konnten wir trotz des geringen privaten Budgets professionelle Team Mitglieder und Schauspieler ins Boot holen und hochwertiges Filmmaterial produzieren.Doch für den zum Fertigstellen fehlen uns 20.000 Euro.Ihr könnt es uns möglich machen, dass dieses wichtige Thema von einer neuen Seite beleuchtet wird. Mehr Informationen zur Spendenkampagne findet Ihr auf unserer Indigogo Seite und auf Facebook.';
aLangKeys['de']['donate-button'] = 'Beteiligen';
aLangKeys['de']['newsletter-text'] = 'Folgt uns auf unserer Reise zum fertigen Film und bekommt wöchentlich Updates zum Projekt, kostenlose Downloads, Videos und Fotos.';


aLangKeys['en']['introduction'] = 'A therapist for victims of sexual abuse, taps into the horror of her psyche after an assault';
aLangKeys['en']['about_main'] = 'With the project we show the horrific consequences of a traumatic experience in all its brutality. Therefore it felt important to us to use a more radical and ruthless form of storytelling.  ';
aLangKeys['en']['about_sub'] = 'While researching of the subject of sexual abuse, we realised that more people than we expected are dealing with it, starting with the people around us. Even the smallest incident of unwanted intimacy is haunting the person who had to experience it for a lifetime and confine those within the easiest every day situations.In extreme, people suffer from physical restrictions up to cell deformations.';
aLangKeys['en']['donate-link'] = 'Donate';
aLangKeys['en']['donate-title'] = 'Donate';
aLangKeys['en']['donate-text'] = 'Due to our contacts within the film industry we managed to put an amazing crew together consisting of people all over the world, despite the minimal private budget that we had.This way we could create a high - quality material which we are proud of.But unfortunately we are lacking the money that s needed for the “final step”.To be exact: minimum 20.000, 00 euro.Help us to make this project happen and please donate some money, every euro counts.More information about the campaign you find on our indigogo and facebook page.';
aLangKeys['en']['donate-button'] = 'Donate';
aLangKeys['en']['newsletter-text'] = 'Follow our journey towards the finished film and get weekly updates, free downloads, videos and photos.';


$(document).ready(function () {

    // onclick behavior
    $('.lang').click(function () {
        var lang = $(this).attr('id'); // obtain language id

        // translate all translatable elements
        $('.tr').each(function (i) {
            $(this).text(aLangKeys[lang][$(this).attr('key')]);
        });

    });

});
