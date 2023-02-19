<script>
   //PARAMETRAGE D'AFFICHAGE DES SECTIONS
$(function() {
      verifierParametrageAffichageSection();
});

function verifierParametrageAffichageSection() {
   var idCollab = {!#CURR_VISIT.id};
   var tabEnCours = getCookie('onglet');
   if (idCollab > 0) {

      rbf_selectNumber("SELECT R100443324 FROM profil_collaborateur WHERE R99402656=" + idCollab + " AND R100443324 > 0", function (idProfilGA) {
        console.log("idProfilGA" + idProfilGA)
         if (idProfilGA > 0) {
            rbf_selectQuery("SELECT id, nom_integration_section, propriete_section#code FROM section_dossier_personnel WHERE R110636420=" + idProfilGA, 99, function (infoSection) {
              console.log("infoSection" + infoSection)

               rbf_selectValue("SELECT mode_gestion_permis#code FROM profil_gestion_administrative WHERE id = " + idProfilGA, function (modeGesitonCode) {
                  console.log("Type gestion permis = " + modeGesitonCode);

                  for (var i in infoSection) {
                     var nomIntegrationSection = infoSection[i][1];
                     var proprieteSection = infoSection[i][2];

                     // console.log("Nom section : " + nomIntegrationSection);
                     // console.log("   - Propriété : " + proprieteSection);

                     if (nomIntegrationSection != "") {

                        var tabSections = [];

                        // Si c'est le permis alors selectionner le bon mode de permis
                        if (nomIntegrationSection == "[documents][permis]") {
                           if (modeGesitonCode == "A") {
                              nomIntegrationSection = "[documents][permis_avance]";
                              var idSectionHide = rbf_getSectionIdByTitle("[documents][permis]");
                              rbf_showOrHideSection(idSectionHide, false);
                             
                           } else {
                              nomIntegrationSection = "[documents][permis]";
                              var idSectionHide1 = rbf_getSectionIdByTitle("[documents][permis_avance]");
                              var idSectionHide2 = rbf_getSectionIdByTitle("[documents][permis_avance][grid]");
                              rbf_showOrHideSection(idSectionHide1, false);
                              rbf_showOrHideSection(idSectionHide2, false);
                           }
                        }

                        var idSection = rbf_getSectionIdByTitle(nomIntegrationSection);
                        if (idSection != null) tabSections.push(idSection);

                        var idSectionGrid = rbf_getSectionIdByTitle(nomIntegrationSection + '[grid]');
                        if (idSectionGrid != null) tabSections.push(idSectionGrid);

                        if (nomIntegrationSection.split(']')[0].split('[')[1] == tabEnCours) {
                           for (var j in tabSections) {
                              // Non visible
                              if (proprieteSection == "NV") {
                                 rbf_showOrHideSection(tabSections[j], false);
                                 $("#rbi_S_" + tabSections[j]).attr("data-param-non-visible", "oui");
                              }
                              // Lecture seule
                              else if (proprieteSection == "LS") {
                                 if (j == 1) {
                                    rbf_setFieldReadOnly(nomIntegrationSection + '[grid]', true, { 'afficherEnTexte': true })
                                 }
                                 //console.log(nomIntegrationSection + " = LS")
                                 $("#rbi_S_" + tabSections[j] + " .btn-primary").hide();
                                 rbf_showOrHideSection(tabSections[j], true);
                                 $('[name="' + nomIntegrationSection + '"] [id^="rbi_F_"]').each(function () {
                                    //console.log('fonction')
                                    var idChamp = $(this).attr('id').replace('rbi_F_', '');
                                    //console.log(idChamp)
                                    rbf_setFieldReadOnly(idChamp, true, { 'afficherEnTexte': true });
                                 });
                                 $('[name="' + nomIntegrationSection + '"] .fa.fa-edit').hide();
                                 $("#rbi_S_" + tabSections[j] + " span").removeClass("red");
                              }
                              // Modifiable directement
                              else if (proprieteSection == "MD") {
                                 console.log("----------------------- Affichage de " + nomIntegrationSection + " = " + tabSections[j]);
                                 rbf_showOrHideSection(tabSections[j], true);
                                 $('[name="' + nomIntegrationSection + '"] [id^="rbi_F_"]').each(function () {
                                    var idChamp = $(this).attr('id').replace('rbi_F_', '');
                                    rbf_setFieldReadOnly(idChamp, false);
                                 })
                                 $('[name="' + nomIntegrationSection + '"] .fa.fa-edit').hide();
                              }
                              // Demande de modification
                              else if (proprieteSection == "DM") {
                                 if (j == 1) {
                                    rbf_setFieldReadOnly(nomIntegrationSection + '[grid]', true, { 'afficherEnTexte': true })
                                 }
                                 rbf_showOrHideSection(tabSections[j], true);
                                 $('[name="' + nomIntegrationSection + '"] [id^="rbi_F_"]').each(function () {
                                    //console.log('fonction')
                                    var idChamp = $(this).attr('id').replace('rbi_F_', '');
                                    //console.log(idChamp)
                                    rbf_setFieldReadOnly(idChamp, true, { 'afficherEnTexte': true });
                                 })
                                 $("#rbi_S_" + tabSections[j] + " .btn-primary").hide();
                                 $('[name="' + nomIntegrationSection + '"] .fa.fa-edit').show();
                                 $("#rbi_S_" + tabSections[j] + " span").removeClass("red");

                              }
                           }
                        }
                        else {
                           console.log("   La section n'est pas l'onglet courant");
                           for (var j in tabSections) {
                              console.log("     > Parcours de la section " + tabSections[j]);
                              // Non visible
                              if (proprieteSection == "NV") {
                                 console.log("       >>> On la masque");
                                 $("#rbi_S_" + tabSections[j]).attr("data-param-non-visible", "oui");
                              }
                           }
                        }
                     }
                  }
               });

               $("#conteneur").show(); // Toute la page a été traitée. On affiche conteneur.

               window.setTimeout(function () {
                  // Masquer les onglets qui sont vides (car les divs sont masquées par paramétrage)
                  $("li[id^='menu_tab']").each(function () {
                     var nomOnglet = $(this).attr("id").split("menu_tab_")[1];
                     console.log(nomOnglet);
                     console.log("Divs masquées par param : " + $("div[name^='[" + nomOnglet + "]'][data-param-non-visible='oui']").length);
                     console.log("Divs : " + $("div[name^='[" + nomOnglet + "]']").length);
                     if ($("div[name^='[" + nomOnglet + "]'][data-param-non-visible='oui']").length == $("div[name^='[" + nomOnglet + "]']").length) {
                        $(this).hide();
                     }
                  });
               }, 1000);

            });
         }
      });
   }
}
</script>
