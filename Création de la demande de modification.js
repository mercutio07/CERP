function traitement() {
   var demandeModification = new Array();

   // COLLAB et Dossier personnel
   demandeModification["R100007201"] = {!id};

   // Dossier personnel
   demandeModification["R72631366"] = {!R99993845#id}; // Collaborateur
   demandeModification["name"] = "Demande de modification - " + "{!R99993845.name#text} - En cours";// nom demande de modification

   // INFORMATIONS COMPLEMENTAIRES D'IDENTITE
   demandeModification["lieu_de_naissance"] = "{!lieu_de_naissance}";
   demandeModification["lieu_de_naissance_demande"] = "{!lieu_de_naissance}";
   demandeModification["R110856315"] = "{!R186984}"; // département de naissance
   demandeModification["R110896233"] = "{!R186984}"; // département de naissance demandé
   demandeModification["R110856318"] = "{!R99994445}"; // Nationalité
   demandeModification["R110896366"] = "{!R99994445}"; // Nationalité demandée
   demandeModification["R185440662"] = "{!R185440628}"; // Autres nationalités
   demandeModification["R185440666"] = "{!R185440628}"; // Autres nationalités demandées
   demandeModification["R110856321"] = "{!R99994427}"; // Pays de naissance
   demandeModification["R110896475"] = "{!R99994427}"; // Pays de naissance demandé
   demandeModification["numero_securite_sociale"] = "{!numero_securite_sociale}";
   demandeModification["N_securite_sociale_demande"] = "{!numero_securite_sociale}";
   demandeModification["cle_securite_sociale"] = "{!cle_securite_sociale}";
   demandeModification["cle_N_securite_sociale_demandee"] = "{!cle_securite_sociale}";
   
   // COORDONNEES POSTALES
   demandeModification["numero_voie_base"] = "{!numero_voie}";
   demandeModification["numero_voie_dem"] = "{!numero_voie}";
   demandeModification["R105119800"] = "{!R105119450}"; // type de voie
   demandeModification["R105119935"] = "{!R105119450}"; // type de voie demandée 
   demandeModification["adresse_ligne_1_base"] = "{!adresse_ligne_1}";
   demandeModification["adresse_ligne_1_dem"] = "{!adresse_ligne_1}";
   demandeModification["adresse_ligne_2_base"] = "{!adresse_ligne_2}";
   demandeModification["adresse_ligne_2_dem"] = "{!adresse_ligne_2}";
   demandeModification["adresse_ligne_3_base"] = "{!adresse_ligne_3}";
   demandeModification["adresse_ligne_3_dem"] = "{!adresse_ligne_3}";
   demandeModification["code_postal_base"] = "{!code_postal}";
   demandeModification["code_postal_dem"] = "{!code_postal}";
   demandeModification["ville_base"] = "{!ville}";
   demandeModification["ville_dem"] = "{!ville}";
   demandeModification["R105119966"] = "{!R99994436}"; // Pays 
   demandeModification["R105119976"] = "{!R99994436}"; // Pays demandé
   demandeModification["R122007914"] = "{!R122007911}"; // Extension de voie 
   demandeModification["R122072108"] = "{!R122007911}"; // Extension de voie demandée

   // AUTRES COORDONNEES
   demandeModification["telephone_fixe"] = "{!telephone_fixe}";
   demandeModification["telephone_fixe_personnel_demande"] = "{!telephone_fixe}";
   demandeModification["telephone_mobile"] = "{!telephone_mobile}";
   demandeModification["telephone_mobile_personnel_demande"] = "{!telephone_mobile}"; 
   demandeModification["adresse_email_perso"] = "{!adresse_email_perso}";
   demandeModification["adresse_e_mail_personnelle_demandee"] = "{!adresse_email_perso}";

   // COORDONNEES PROFESSIONNELLES
   demandeModification["telephone_fixe_professionnel"] = "{!telephone_fixe_professionnel}";
   demandeModification["telephone_fixe_professionnel_demande"] = "{!telephone_fixe_professionnel}";
   demandeModification["telephone_mobile_professionnel"] = "{!telephone_mobile_professionnel}";
   demandeModification["telephone_mobile_professionnel_demande"] = "{!telephone_mobile_professionnel}"; 
   demandeModification["adresse_email_professionnelle"] = "{!adresse_email_professionnelle}";
   demandeModification["adresse_e_mail_professionnelle_demandee"] = "{!adresse_email_professionnelle}";

   // PAIEMENT
   demandeModification["rib_ou_iban"] = "{!rib_ou_iban#code}";
   demandeModification["R122821252"] = "{!R122806448}"; // Mode de paiement
   demandeModification["R122825680"] = "{!R122806448}"; // Mode de paiement demandé
   demandeModification["mode_paiement"] = "{!mode_paiement#code}";
   demandeModification["mode_paiement_demande"] = "{!mode_paiement#code}";
   demandeModification["code_iban"] = "{!code_iban}";
   demandeModification["code_iban_demande"] = "{!code_iban}";
   demandeModification["code_rib_demande"] = "{!code_rib}";
   demandeModification["code_pays_banque"] = "{!code_pays_banque}";
   demandeModification["code_pays_banque_demande"] = "{!code_pays_banque}";
   demandeModification["cle_de_controle_iban_demande"] = "{!cle_de_controle_iban}";
   demandeModification["code_banque_demande"] = "{!code_banque}";
   demandeModification["code_guichet_demande"] = "{!nom_guichet}";
   demandeModification["numero_de_compte_demande"] = "{!numero_de_compte}";
   demandeModification["cle_rib_demande"] = "{!cle_rib}";
   demandeModification["code_bic"] = "{!code_bic}";
   demandeModification["code_bic_demande"] = "{!code_bic}";
   demandeModification["libelle_compte"] = "{!libelle_compte}";
   demandeModification["libelle_compte_demande"] = "{!libelle_compte}";
   demandeModification["nom_banque"] = "{!nom_banque}";
   demandeModification["nom_banque_demande"] = "{!nom_banque}";
   demandeModification["nom_guichet"] = "{!nom_guichet}";
   demandeModification["nom_guichet_demande"] = "{!nom_guichet}";
   //demandeModification["rib_base"] = "{!rib}";
   //demandeModification["rib_dem"] = "{!rib}";
   // demandeModification["rib_base"] = rbv_api.getBinaryData("dossier_personnel", {!id}, "rib");
   // demandeModification["rib_dem"] = rbv_api.getBinaryData("dossier_personnel", {!id}, "rib");

   // DOCUMENTS D'IDENTITE
   demandeModification["type_piece_identite_base"] = "{!type_piece_identite#code}";
   demandeModification["type_piece_identite_dem"] = "{!type_piece_identite#code}";
   demandeModification["autorite_delivrance_base"] = "{!autorite_delivrance}";
   demandeModification["autorite_delivrance_dem"] = "{!autorite_delivrance}";
   if ("{!date_delivrance_identite}" != "") demandeModification["date_delivrance_identite_base"] = new Date("{!date_delivrance_identite}");
   if ("{!date_delivrance_identite}" != "") demandeModification["date_delivrance_identite_dem"] = new Date("{!date_delivrance_identite}");
   if ("{!date_expiration_identite}" != "") demandeModification["date_expiration_identite_base"] = new Date("{!date_expiration_identite}");
   if ("{!date_expiration_identite}" != "") demandeModification["date_expiration_identite_dem"] = new Date("{!date_expiration_identite}");

   // DOCUMENTS D'IDENTITE 2
   //demandeModification["type_piece_identite_base_2"] = "{!type_piece_identite#value}";
   //demandeModification["type_piece_identite_dem_2"] = "{!type_piece_identite#value}";
   //demandeModification["autorite_delivrance_base_2"] = "{!autorite_delivrance}";
   //demandeModification["autorite_delivrance_dem_2"] = "{!autorite_delivrance}";
   //if ("{!date_delivrance_identite}" != "") demandeModification["date_delivrance_identite_base_2"] = new Date("{!date_delivrance_identite}");
   //if ("{!date_delivrance_identite}" != "") demandeModification["date_delivrance_identite_dem_2"] = new Date("{!date_delivrance_identite}");
   //if ("{!date_expiration_identite}" != "") demandeModification["date_expiration_identite_base_2"] = new Date("{!date_expiration_identite}");
   //if ("{!date_expiration_identite}" != "") demandeModification["date_expiration_identite_dem_2"] = new Date("{!date_expiration_identite}");

   // AUTORISATION DE TRAVAIL
   demandeModification["R111516653"] = "{!R186769}"; // Type d'autorisation de travail
   demandeModification["R111516657"] = "{!R186769}"; // Type d'autorisation de travail
   demandeModification["numero_de_piece"] = "{!numero_de_piece}";
   demandeModification["numero_de_piece_dem"] = "{!numero_de_piece}";
   if ("{!date_debut_autorisation_travail}" != "") demandeModification["date_debut_autorisation_base"] = new Date("{!date_debut_autorisation_travail}");
   if ("{!date_debut_autorisation_travail}" != "") demandeModification["date_debut_autorisation_dem"] = new Date("{!date_debut_autorisation_travail}");
   if ("{!date_fin_autorisation_travail}" != "") demandeModification["date_fin_autorisation_base"] = new Date("{!date_fin_autorisation_travail}");
   if ("{!date_fin_autorisation_travail}" != "") demandeModification["date_fin_autorisation_dem"] = new Date("{!date_fin_autorisation_travail}");
   demandeModification["delivree_par_autorisation_travail_base"] = "{!delivree_par_autorisation_travail}";
   demandeModification["delivree_par_autorisation_travail_dem"] = "{!delivree_par_autorisation_travail}";

   // RQTH
   demandeModification["rqth_base"] = "{!rqth#code}";
   demandeModification["rqth_dem"] = "{!rqth#code}";
   demandeModification["taux_incapacite"] = "{!taux_incapacite}";
   demandeModification["taux_incapacite_demande"] = "{!taux_incapacite}";
   demandeModification["num_dossier_rqth_base"] = "{!num_dossier_rqth}";
   demandeModification["num_dossier_rqth_dem"] = "{!num_dossier_rqth}";
   if ("{!date_debut_rqth}" != "") demandeModification["date_debut_rqth_base"] = new Date("{!date_debut_rqth}");
   if ("{!date_debut_rqth}" != "") demandeModification["date_debut_rqth_dem"] = new Date("{!date_debut_rqth}");
   if ("{!date_fin_rqth}" != "") demandeModification["date_fin_rqth_base"] = new Date("{!date_fin_rqth}");
   if ("{!date_fin_rqth}" != "") demandeModification["date_fin_rqth_dem"] = new Date("{!date_fin_rqth}");
   

   // INVALIDITE
   demandeModification["invalidite_base"] = "{!invalidite#code}";
   demandeModification["invalidite_dem"] = "{!invalidite#code}";
   if ("{!date_debut_invalidite}" != "") demandeModification["date_debut_invalidite_base"] = new Date("{!date_debut_invalidite}");
   if ("{!date_debut_invalidite}" != "") demandeModification["date_debut_invalidite_dem"] = new Date("{!date_debut_invalidite}");
   if ("{!date_fin_invalidite}" != "") demandeModification["date_fin_invalidite_base"] = new Date("{!date_fin_invalidite}");
   if ("{!date_fin_invalidite}" != "") demandeModification["date_fin_invalidite_dem"] = new Date("{!date_fin_invalidite}");
   demandeModification["categorie_invalidite_base"] = "{!categorie_invalidite#code}";
   demandeModification["categorie_invalidite_dem"] = "{!categorie_invalidite#code}";
   demandeModification["delivree_par_invalidite_base"] = "{!delivree_par_invalidite}";
   demandeModification["delivree_par_invalidite_dem"] = "{!delivree_par_invalidite}";

   // PERMIS
   demandeModification["permis_b_base"] = "{!permis#code}";
   demandeModification["permis_b_dem"] = "{!permis#code}";
   if ("{!date_expiration_permis_b}" != "") demandeModification["date_expiration_permis_b_base"] = new Date("{!date_expiration_permis_b}");
   if ("{!date_expiration_permis_b}" != "") demandeModification["date_expiration_permis_b_dem"] = new Date("{!date_expiration_permis_b}");
   if ("{!date_obtention_permis}" != "") demandeModification["date_obtention_permis_base"] = new Date("{!date_obtention_permis}");
   if ("{!date_obtention_permis}" != "") demandeModification["date_obtention_permis_dem"] = new Date("{!date_obtention_permis}");
   demandeModification["permis_a"] = "{!justificatif_permis}";
   demandeModification["permis_a_demande"] = "{!justificatif_permis}";
   if ("{!date_obtention_permis_a}" != "") demandeModification["date_obtention_permis_a_base"] = new Date("{!date_obtention_permis_a}");
   if ("{!date_obtention_permis_a}" != "") demandeModification["date_obtention_permis_a_dem"] = new Date("{!date_obtention_permis_a}");
   if ("{!date_expiration_permis_a}" != "") demandeModification["date_expiration_permis_a_base"] = new Date("{!date_expiration_permis_a}");
   if ("{!date_expiration_permis_a}" != "") demandeModification["date_expiration_permis_a_dem"] = new Date("{!date_expiration_permis_a}");

   // SITUATION FAMILIALE
   demandeModification["R109588763"] = {!R105373949#id}; // Situation familiale
   demandeModification["R109588766"] = {!R105373949#id}; // Situation familiale demandée
   if ("{!date_debut_situation_familiale}" != "") demandeModification["date_debut_situation_familiale_base"] = new Date("{!date_debut_situation_familiale}");
   if ("{!date_debut_situation_familiale}" != "") demandeModification["date_debut_situation_familiale_dem"] = new Date("{!date_debut_situation_familiale}");

   var idDemande = 0;

   try {
      rbv_api.log("debug", "Création de la demande");
      idDemande = rbv_api.createRecord("demande_modification_donnees_perso", demandeModification);
      rbv_api.println("ça marche");
     rbv_api.println("idDemande : " + idDemande);
   }
   catch (exception) {
     rbv_api.println("ça ne marche pas : " + exception.message);
      rbv_api.log("debug", "erreur de creation : " + exception.message);
   }

   
    // FICHIERS
    if (idDemande > 0) {
      rbv_api.log("debug", "Il y a une demande : "+idDemande+", transfert des fichiers...");

        //Informations complémentaires d'identité
        var nomAttestationSecuriteSociale = "{!attestation_cpam}";
        if(nomAttestationSecuriteSociale != ""){
            var fichierAttestationSecuriteSociale = rbv_api.getBinaryData("dossier_personnel", {!id}, "attestation_cpam");
            var infosFichier = rbv_api.selectValue("SELECT attestation_cpam FROM dossier_personnel WHERE id=?", {!id});
            infosFichier = infosFichier.split("\n")
            for (var i in infosFichier) {
                if (infosFichier[i].indexOf("contentType=") >= 0) {
                    contentType = infosFichier[i].split("=")[1].replace("\n", "").replace("\r", "");
                }
            }
            rbv_api.setBinaryFieldValue("demande_modification_donnees_perso", idDemande, "attestation_cpam", fichierAttestationSecuriteSociale, contentType, nomAttestationSecuriteSociale);
            rbv_api.setBinaryFieldValue("demande_modification_donnees_perso", idDemande, "attestation_securit_sociale_demandee", fichierAttestationSecuriteSociale, contentType, nomAttestationSecuriteSociale);
        };
        var nomAttestationAyantDroitConjoint = "{!attestation_ayant_droit_conjoint}";
        if(nomAttestationAyantDroitConjoint != ""){
            var fichierAttestationAyantDroitConjoint = rbv_api.getBinaryData("dossier_personnel", {!id}, "attestation_ayant_droit_conjoint");
            var infosFichier = rbv_api.selectValue("SELECT attestation_ayant_droit_conjoint FROM dossier_personnel WHERE id=?", {!id});
            infosFichier = infosFichier.split("\n")
            for (var i in infosFichier) {
                if (infosFichier[i].indexOf("contentType=") >= 0) {
                    contentType = infosFichier[i].split("=")[1].replace("\n", "").replace("\r", "");
                }
            }
            rbv_api.setBinaryFieldValue("demande_modification_donnees_perso", idDemande, "attestation_ayant_droit_conjoint", fichierAttestationAyantDroitConjoint, contentType, nomAttestationAyantDroitConjoint);
            rbv_api.setBinaryFieldValue("demande_modification_donnees_perso", idDemande, "attestation_ayant_droit_conjoint_demande", fichierAttestationAyantDroitConjoint, contentType, nomAttestationAyantDroitConjoint);
        };

        //COORDONNEES POSTALES
        var nomJustifDomicile = "{!justificatif_domicile}";
        if(nomJustifDomicile != ""){
            var fichierJustifDomicile = rbv_api.getBinaryData("dossier_personnel", {!id}, "justificatif_domicile");
            var infosFichier = rbv_api.selectValue("SELECT justificatif_domicile FROM dossier_personnel WHERE id=?", {!id});
            infosFichier = infosFichier.split("\n")
            for (var i in infosFichier) {
                if (infosFichier[i].indexOf("contentType=") >= 0) {
                    contentType = infosFichier[i].split("=")[1].replace("\n", "").replace("\r", "");
                }
            }
            rbv_api.setBinaryFieldValue("demande_modification_donnees_perso", idDemande, "justificatif_domicile", fichierJustifDomicile, contentType, nomJustifDomicile);
            rbv_api.setBinaryFieldValue("demande_modification_donnees_perso", idDemande, "justificatif_domicile_dem", fichierJustifDomicile, contentType, nomJustifDomicile);
        };

        // RIB
        var nomRib = "{!rib}";
        if(nomRib != ""){
            var fichierRib = rbv_api.getBinaryData("dossier_personnel", {!id}, "rib");
            var contentType = "";
            var infosFichier = rbv_api.selectValue("SELECT rib FROM dossier_personnel WHERE id=?", {!id});
            infosFichier = infosFichier.split("\n")
            for (var i in infosFichier) {
                if (infosFichier[i].indexOf("contentType=") >= 0) {
                contentType = infosFichier[i].split("=")[1].replace("\n", "").replace("\r", "");
                }
            }
            rbv_api.setBinaryFieldValue("demande_modification_donnees_perso", idDemande, "rib_base", fichierRib, contentType, nomRib);
            rbv_api.setBinaryFieldValue("demande_modification_donnees_perso", idDemande, "rib_dem", fichierRib, contentType, nomRib);
        }

        //DOCUMENTS D'IDENTITÉ
        var nomPieceJointeIdentite = "{!piece_jointe_identite}";
        if(nomPieceJointeIdentite != ""){
            var fichierPieceJointeIdentite = rbv_api.getBinaryData("dossier_personnel", {!id}, "piece_jointe_identite");
            var infosFichier = rbv_api.selectValue("SELECT piece_jointe_identite FROM dossier_personnel WHERE id=?", {!id});
            infosFichier = infosFichier.split("\n")
            for (var i in infosFichier) {
                if (infosFichier[i].indexOf("contentType=") >= 0) {
                    contentType = infosFichier[i].split("=")[1].replace("\n", "").replace("\r", "");
                }
            }
            rbv_api.setBinaryFieldValue("demande_modification_donnees_perso", idDemande, "piece_jointe_identite_base", fichierPieceJointeIdentite, contentType, nomPieceJointeIdentite);
            rbv_api.setBinaryFieldValue("demande_modification_donnees_perso", idDemande, "piece_jointe_identite_dem", fichierPieceJointeIdentite, contentType, nomPieceJointeIdentite);
        };
      
      // AUTORISATIONS
      var nomAutorisation = "{!document_autorisation_travail}";
      if(nomAutorisation != ""){
         rbv_api.log("debug", " - Autorisations de travail ...");
         var fichierAutorisation = rbv_api.getBinaryData("dossier_personnel", {!id}, "document_autorisation_travail");
         var contentType = "";
         var infosFichier = rbv_api.selectValue("SELECT document_autorisation_travail FROM dossier_personnel WHERE id=?", {!id});
         infosFichier = infosFichier.split("\n")
         for (var i in infosFichier) {
            if (infosFichier[i].indexOf("contentType=") >= 0) {
               contentType = infosFichier[i].split("=")[1].replace("\n", "").replace("\r", "");
            }
         }
         rbv_api.log("debug", "Infos fichier autorisations : "+infosFichier);

         rbv_api.log("debug", "Nom du fichier : "+nomAutorisation);
         rbv_api.log("debug", "Content type : "+contentType);

         rbv_api.setBinaryFieldValue("demande_modification_donnees_perso", idDemande, "document_autorisation_base", fichierAutorisation, contentType, nomAutorisation);
         rbv_api.setBinaryFieldValue("demande_modification_donnees_perso", idDemande, "document_autorisation_dem", fichierAutorisation, contentType, nomAutorisation);
         rbv_api.log("debug", " - OK autorisations !");
      }

      // RQTH
      var nomRqth = "{!piece_jointe_rqth}";
      if(nomRqth != ""){
         var fichierRqth = rbv_api.getBinaryData("dossier_personnel", {!id}, "piece_jointe_rqth");
         var contentType = "";
         var infosFichier = rbv_api.selectValue("SELECT piece_jointe_rqth FROM dossier_personnel WHERE id=?", {!id});
         infosFichier = infosFichier.split("\n")
         for (var i in infosFichier) {
            if (infosFichier[i].indexOf("contentType=") >= 0) {
               contentType = infosFichier[i].split("=")[1].replace("\n", "").replace("\r", "");
            }
         }
         rbv_api.setBinaryFieldValue("demande_modification_donnees_perso", idDemande, "piece_jointe_rqth_base", fichierRqth, contentType, nomRqth);
         rbv_api.setBinaryFieldValue("demande_modification_donnees_perso", idDemande, "piece_jointe_rqth_dem", fichierRqth, contentType, nomRqth);
      }

      // INVALIDITE
      var nomInvalidite = "{!piece_jointe_invalidite}";
      //rbv_api.log("debug", "Fichier invalidité : "+nomInvalidite);
      if(nomInvalidite != ""){
         //rbv_api.log("debug", " - Invalidité ...");
         var fichierInvalidite = rbv_api.getBinaryData("dossier_personnel", {!id}, "piece_jointe_invalidite");
         var contentType = "";
         var infosFichier = rbv_api.selectValue("SELECT piece_jointe_invalidite FROM dossier_personnel WHERE id=?", {!id});
         infosFichier = infosFichier.split("\n")
         for (var i in infosFichier) {
            if (infosFichier[i].indexOf("contentType=") >= 0) {
               contentType = infosFichier[i].split("=")[1].replace("\n", "").replace("\r", "");
            }
         }
         //rbv_api.log("debug", "Infos fichier invalidité : "+infosFichier);
         rbv_api.setBinaryFieldValue("demande_modification_donnees_perso", idDemande, "piece_jointe_invalidite_base", fichierInvalidite, contentType, nomInvalidite);
         rbv_api.setBinaryFieldValue("demande_modification_donnees_perso", idDemande, "piece_jointe_invalidite_dem", fichierInvalidite, contentType, nomInvalidite);
         //rbv_api.log("debug", " - OK Invalidité !");
      }

      // PERMIS
      var nomPermis = "{!justificatif_permis}";
      if(nomPermis != ""){
         var fichierPermis = rbv_api.getBinaryData("dossier_personnel", {!id}, "justificatif_permis");
         var infosFichier = rbv_api.selectValue("SELECT justificatif_permis FROM dossier_personnel WHERE id=?", {!id});
         infosFichier = infosFichier.split("\n")
         for (var i in infosFichier) {
            if (infosFichier[i].indexOf("contentType=") >= 0) {
               contentType = infosFichier[i].split("=")[1].replace("\n", "").replace("\r", "");
            }
         }
         rbv_api.setBinaryFieldValue("demande_modification_donnees_perso", idDemande, "justificatif_permis_base", fichierPermis, contentType, nomPermis);
         rbv_api.setBinaryFieldValue("demande_modification_donnees_perso", idDemande, "justificatif_permis_dem", fichierPermis, contentType, nomPermis);
      }

      // SITUATION FAMILIALE
      var nomSituationf = "{!justificatif_situation_familiale}";
      if(nomSituationf != ""){
         var fichierSituationf = rbv_api.getBinaryData("dossier_personnel", {!id}, "justificatif_situation_familiale");
         var infosFichier = rbv_api.selectValue("SELECT justificatif_situation_familiale FROM dossier_personnel WHERE id=?", {!id});
         infosFichier = infosFichier.split("\n")
         for (var i in infosFichier) {
            if (infosFichier[i].indexOf("contentType=") >= 0) {
               contentType = infosFichier[i].split("=")[1].replace("\n", "").replace("\r", "");
            }
         }
         rbv_api.setBinaryFieldValue("demande_modification_donnees_perso", idDemande, "justificatif_situation_familiale_base", fichierSituationf, contentType, nomSituationf);
         rbv_api.setBinaryFieldValue("demande_modification_donnees_perso", idDemande, "justificatif_situation_familiale_dem", fichierSituationf, contentType, nomSituationf);
      }

      // ENFANTS
      var aEnfantsID = rbv_api.getRelatedIds("R99994454", {!id});
      rbv_api.log("debug", "Parcours des enfants ...");
      try {
         if (aEnfantsID.length > 0) {
            var enfantsNouveau = rbv_api.selectQuery("SELECT id, lastName, firstName, date_naissance, a_charge#code, R71480961, enfant__#code, declare_sur_mutuell#code, R138052352 FROM enfant5 WHERE id IN(" + aEnfantsID.join(',') + ")", 99);
            if (enfantsNouveau.length > 0) {
               try {
                  for (var i = 0; i < enfantsNouveau.length; i++) {
                    var aEnfants = new Array();
                    aEnfants["lastName"] = enfantsNouveau[i][1];
                    aEnfants["firstName"] = enfantsNouveau[i][2];
                    aEnfants["date_naissance"] = enfantsNouveau[i][3];
                    aEnfants["R79344772"] = enfantsNouveau[i][5]; // Sexe
                    //aEnfants["R79275847"] = {!R99993845#id}; // Collaborateur
                    //aEnfants["R79275847"] = {!R99993845#id}; // Dossier personnel
                    aEnfants["a_charge"] = rbv_api.getIdByCode("demande_modification_enfant", "a_charge", enfantsNouveau[i][4]); // A charge ?
                    aEnfants["R79294133"] = idDemande;
                    aEnfants["nouvelle_demande_enfants"] = true;
                    aEnfants["R79384774"] = enfantsNouveau[i][0]; // Id enfant
                    aEnfants["enfant__"] = rbv_api.getIdByCode("demande_modification_enfant", "enfant__", enfantsNouveau[i][6]);
                    aEnfants["declare_sur_mutuelle"] = rbv_api.getIdByCode("demande_modification_enfant", "declare_sur_mutuelle", enfantsNouveau[i][7]);
                    aEnfants["R138052355"] = enfantsNouveau[i][8]; // Lien de parenté
                    // rbv_api.log("debug", "Lien de parenté de l'enfant: " + enfantsNouveau[i][8]);
                     try {
                        rbv_api.log("debug", "- Création de demande de modif d'enfant");
                        var newID = rbv_api.createRecord("demande_modification_enfant", aEnfants);
                        rbv_api.log("debug", "--- Demande de modif d'enfant créée. Recherche d'un justificatif");
                       
                        // Création du fichier "Justificatif"
                        var infosFichier = rbv_api.selectValue("SELECT justificatif FROM enfant5 WHERE id=?", enfantsNouveau[i][0]);
                        if (infosFichier && infosFichier != "") {
                           
                           rbv_api.log("debug", "---- Justificatif trouvé !");
                            
                           var contentType = "";
                           var fileName = "";
                           var base64Fichier = (rbv_api.getBinaryData("enfant5", enfantsNouveau[i][0], "justificatif")+"").replace(/\r/g, "").replace(/\n/g, "");
                           infosFichier = infosFichier.split("\n");
                           for (var j in infosFichier) {
                              if (infosFichier[j].indexOf("contentType=") >= 0) {
                                 contentType = infosFichier[j].split("=")[1].replace("\n", "").replace("\r", "");
                              }
                              if (infosFichier[j].indexOf("origFileName=") >= 0) {
                                 fileName = infosFichier[j].split("=")[1].replace("\n", "").replace("\r", "");
                              }
                           }
                           rbv_api.log("debug", "---- Le justificatif est le suivant : "+fileName+" ("+contentType+")");
                           
                           rbv_api.log("debug", "---- Envoi du justificatif sur demande de modif enfant ...");
                           rbv_api.setBinaryFieldValue("demande_modification_enfant", newID, "justificatif", base64Fichier, contentType, fileName);
                           rbv_api.log("debug", "---- Justificatif envoyé ...");
                        }
                        else {
                           rbv_api.log("debug", "---- Cet enfant n'a pas de justificatif");
                        }
                        
                        // On double la ligne pour la demande de modification (pour avoir une ligne "avant" et une ligne "après" demande de modification)
                        var arr = [];
                        arr["nouvelle_demande_enfants"] = false;
                        rbv_api.cloneRecord("demande_modification_enfant", newID, arr);
                     }
                     catch (exception) {
                        rbv_api.log("debug", "Erreur création des enfants 2 : " + exception.message);
                     }
                  }
               } catch (exception) {
                  rbv_api.log("debug", "Erreur création des enfants 1 : " + exception.message);
               }
            }
         }
      }
      catch(exception) {
         rbv_api.log("debug", "Erreur lors de la création des enfants 3: " + exception.message);
      }

      // URGENCE
      var aUrgenceID = rbv_api.getRelatedIds("R99994463", {!id});
      rbv_api.log("debug", "Parcours des personnes à prévenir en cas d'urgence ...");
      try {
         rbv_api.log("debug", "on est dans le premier try");
         if (aUrgenceID.length > 0) {
            rbv_api.log("debug", aUrgenceID);
            var urgenceNouveau = rbv_api.selectQuery("SELECT id, priorite, lastName, firstName, phone, email, lien FROM personne_prevenir_urgence WHERE id IN(" + aUrgenceID.join(',') + ")", 99);
            if (urgenceNouveau.length > 0) {
               rbv_api.log("debug", "Il existe déjà des personnes à prévenir en cas d'urgence ...");
               try {
                  for (var i = 0; i < urgenceNouveau.length; i++) {
                     var aUrgence = new Array();
                     aUrgence["priorite"] = Number(urgenceNouveau[i][1]);
                     aUrgence["lastname"] = urgenceNouveau[i][2];
                     aUrgence["prenom"] = urgenceNouveau[i][3];
                     aUrgence["telephone"] = urgenceNouveau[i][4];
                     aUrgence["email"] = urgenceNouveau[i][5];
                     aUrgence["lien"] = urgenceNouveau[i][6];
                     aUrgence["R110973492"] = idDemande;
                     aUrgence["nouvelle_demande_urgence"] = true;
                     aUrgence["R110973500"] = urgenceNouveau[i][0]; // Id urgence
                     try {
                        rbv_api.log("debug", "Création demande de modif durgence ...");
                        var newIdUrgence = rbv_api.createRecord("demande_modification_urgence", aUrgence);
                        //var newIdUrgence2 = rbv_api.createRecord("demande_modification_urgence", aUrgence); // doublons des lignes pour la modification
                        //rbv_api.setFieldValue("demande_modification_urgence", newIdUrgence2, "nouvelle_demande_urgence", true);
                     }
                     catch (exception) {
                        rbv_api.log("debug", "Erreur création des urgences 2 : " + exception.message);
                     }
                  }
               } catch (exception) {
                  rbv_api.log("debug", "Erreur création des urgences 1 : " + exception.message);
               }
            }
         }
      }
      catch(exception) {
         rbv_api.log("debug", "Erreur lors de la création des urgences 3: " + exception.message);
      }

      // DIPLOMES
      rbv_api.log("debug", "Diplômes ...");
      var aDiplomesID = rbv_api.getRelatedIds("R99994887", {!id});
      try {
         if (aDiplomesID.length > 0) {
            var diplomeNouveau = rbv_api.selectQuery("SELECT id, type_diplome#code, R79264997, R79264944, name, annee_obtention, etablissement_delivrance, R79265035, statut_diplome#code, description FROM diplome2 WHERE id IN(" + aDiplomesID.join(',') + ")", 99); //
            rbv_api.printArr(diplomeNouveau);
            if (diplomeNouveau.length > 0) {
               try {
                  for (i = 0; i < diplomeNouveau.length; i++) {
                    var aDiplomes = new Array();
                    aDiplomes["type_diplome"] = diplomeNouveau[i][1];
                    aDiplomes["R79400330"] = diplomeNouveau[i][2]; // Niveau de diplôme
                    aDiplomes["R79400327"] = diplomeNouveau[i][3]; // Domaine de diplôme
                    aDiplomes["intitule_diplome"] = diplomeNouveau[i][4];
                    aDiplomes["annee_obtention"] = diplomeNouveau[i][5];
                    aDiplomes["etablissement_delivrance"] = diplomeNouveau[i][6];
                    //aDiplomes["R79276173"] = {!R99993845#id}; // Collaborateur
                    //aDiplomes["statut_diplome"] = diplomeNouveau[i][8];
                    aDiplomes["statut_diplome"] = rbv_api.getIdByCode("demande_modification_diplome", "statut_diplome", diplomeNouveau[i][8]);
                    aDiplomes["R79294136"] = idDemande;
                    aDiplomes["nouvelle_demande_diplome"] = true;
                    aDiplomes["R79385276"] = diplomeNouveau[i][0]; // Id diplôme
                    aDiplomes["description"] = diplomeNouveau[i][9];
                    try {
                       rbv_api.log("debug", "- Création de demande de modif de diplome");
                       var newID = rbv_api.createRecord("demande_modification_diplome", aDiplomes);
                       rbv_api.log("debug", "--- Demande de modif de diplome créée. Recherche d'un justificatif");
                       
                       // Création du fichier "Justificatif"
                       var infosFichier = rbv_api.selectValue("SELECT justificatif_diplome FROM diplome2 WHERE id=?", diplomeNouveau[i][0]);
                       if (infosFichier && infosFichier != "") {
                          
                          rbv_api.log("debug", "---- Justificatif trouvé !");
                             
                          var contentType = "";
                          var fileName = "";
                          var base64Fichier = (rbv_api.getBinaryData("diplome2", diplomeNouveau[i][0], "justificatif_diplome")+"").replace(/\r/g, "").replace(/\n/g, "");
                          infosFichier = infosFichier.split("\n");
                          for (var j in infosFichier) {
                             if (infosFichier[j].indexOf("contentType=") >= 0) {
                                contentType = infosFichier[j].split("=")[1].replace("\n", "").replace("\r", "");
                             }
                             if (infosFichier[j].indexOf("origFileName=") >= 0) {
                                fileName = infosFichier[j].split("=")[1].replace("\n", "").replace("\r", "");
                             }
                          }
                          rbv_api.log("debug", "---- Le justificatif est le suivant : "+fileName+" ("+contentType+")");
                          
                          rbv_api.log("debug", "---- Envoi du justificatif sur demande de modif diplome ...");
                          rbv_api.setBinaryFieldValue("demande_modification_diplome", newID, "justificatif_diplome", base64Fichier, contentType, fileName);
                          rbv_api.log("debug", "---- Justificatif envoyé ...");
                       }
                       else {
                          rbv_api.log("debug", "---- Ce diplome n'a pas de justificatif");
                       }
                       
                       // On double la ligne pour la demande de modification (pour avoir une ligne "avant" et une ligne "après" demande de modification)
                       var arr = [];
                       arr["nouvelle_demande_diplome"] = false;
                       rbv_api.cloneRecord("demande_modification_diplome", newID, arr);
                    }
                    catch (exception) {
                       rbv_api.log("debug", "Erreur création des diplomes 2 : " + exception.message);
                    }
                  }
               }
               catch (exception) {
                  rbv_api.log("debug", "Erreur création des diplomes 1 : " + exception.message);
               }
            }
         }
      }
      catch(exception) {
         rbv_api.log("debug", "Erreur lors de la création des diplomes 3: " + exception.message);
      }

      // VEHICULES COLLABORATEUR
      rbv_api.log("debug", "Véhicules ...");
      var aVehiculesID = rbv_api.getRelatedIds("R99994472", {!id});
      try {
         if (aVehiculesID.length > 0) {
            var vehiculeNouveau = rbv_api.selectQuery("SELECT id, marque, modele, immatriculation, cv_fiscaux, date_acquisition, date_cession, carte_grise, carte_verte, R83020658 FROM vehicule_collaborateur WHERE id IN(" + aVehiculesID.join(',') + ")", 99);
            rbv_api.printArr(vehiculeNouveau);
            if (vehiculeNouveau.length > 0) {
               try {
                  for (i = 0; i < vehiculeNouveau.length; i++) {
                     var aVehicules = new Array();
                     aVehicules["marque"] = vehiculeNouveau[i][1];
                     aVehicules["modele"] = vehiculeNouveau[i][2];
                     aVehicules["immatriculation"] = vehiculeNouveau[i][3];
                     aVehicules["cv_fiscaux"] = Number(vehiculeNouveau[i][4]);
                     aVehicules["date_acquisition"] = vehiculeNouveau[i][5];
                     aVehicules["date_cession"] = vehiculeNouveau[i][6];
                     //aVehicules["carte_grise"] = vehiculeNouveau[i][8];
                     //aVehicules["carte_verte"] = vehiculeNouveau[i][9];
                     aVehicules["R194544754"] = vehiculeNouveau[i][9];
                     aVehicules["R110973988"] = idDemande;
                     aVehicules["nouvelle_demande_vehicule"] = true;
                     aVehicules["R110973766"] = vehiculeNouveau[i][0];
                     try {
                       rbv_api.log("debug", "- Création de demande de modif de vehicule");
                       var newID = rbv_api.createRecord("demande_modification_vehicule", aVehicules);
                       rbv_api.log("debug", "--- Demande de modif de vehicule créée. Recherche d'une carte grise");
                      
                       // Création du fichier "Carte grise"
                       var infosFichiers = rbv_api.selectQuery("SELECT carte_grise, carte_verte FROM vehicule_collaborateur WHERE id=?", 100, vehiculeNouveau[i][0]);
                       var infosFichierCarteGrise = infosFichiers[0][0];
                       if (infosFichierCarteGrise && infosFichierCarteGrise != "") {
                          
                          rbv_api.log("debug", "---- Carte grise trouvé !");
                           
                          var contentTypeCarteGrise = "";
                          var fileNameCarteGrise = "";
                          var base64FichierCarteGrise = (rbv_api.getBinaryData("vehicule_collaborateur", vehiculeNouveau[i][0], "carte_grise")+"").replace(/\r/g, "").replace(/\n/g, "");
                          infosFichierCarteGrise = infosFichierCarteGrise.split("\n");
                          for (var j in infosFichierCarteGrise) {
                             if (infosFichierCarteGrise[j].indexOf("contentType=") >= 0) {
                                contentTypeCarteGrise = infosFichierCarteGrise[j].split("=")[1].replace("\n", "").replace("\r", "");
                             }
                             if (infosFichierCarteGrise[j].indexOf("origFileName=") >= 0) {
                                fileNameCarteGrise = infosFichierCarteGrise[j].split("=")[1].replace("\n", "").replace("\r", "");
                             }
                          }
                          rbv_api.log("debug", "---- La carte grise est la suivante : "+fileNameCarteGrise+" ("+contentTypeCarteGrise+")");
                          
                          rbv_api.log("debug", "---- Envoi de la carte grise sur demande de modif vehicule ...");
                          rbv_api.setBinaryFieldValue("demande_modification_vehicule", newID, "carte_grise", base64FichierCarteGrise, contentTypeCarteGrise, fileNameCarteGrise);
                          rbv_api.log("debug", "---- Carte grise envoyée ...");
                       }
                       else {
                          rbv_api.log("debug", "---- Ce vehicule n'a pas de carte grise");
                       }
                       var infosFichierCarteVerte = infosFichiers[0][1];
                       if (infosFichierCarteVerte && infosFichierCarteVerte != "") {
                          
                          rbv_api.log("debug", "---- Carte verte trouvé !");
                           
                          var contentTypeCarteVerte = "";
                          var fileNameCarteVerte = "";
                          var base64FichierCarteVerte = (rbv_api.getBinaryData("vehicule_collaborateur", vehiculeNouveau[i][0], "carte_verte")+"").replace(/\r/g, "").replace(/\n/g, "");
                          infosFichierCarteVerte = infosFichierCarteVerte.split("\n");
                          for (var j in infosFichierCarteVerte) {
                             if (infosFichierCarteVerte[j].indexOf("contentType=") >= 0) {
                                contentTypeCarteVerte = infosFichierCarteVerte[j].split("=")[1].replace("\n", "").replace("\r", "");
                             }
                             if (infosFichierCarteVerte[j].indexOf("origFileName=") >= 0) {
                                fileNameCarteVerte = infosFichierCarteVerte[j].split("=")[1].replace("\n", "").replace("\r", "");
                             }
                          }
                          rbv_api.log("debug", "---- La carte verte est la suivante : "+fileNameCarteVerte+" ("+contentTypeCarteVerte+")");
                          
                          rbv_api.log("debug", "---- Envoi de la carte verte sur demande de modif vehicule ...");
                          rbv_api.setBinaryFieldValue("demande_modification_vehicule", newID, "carte_verte", base64FichierCarteVerte, contentTypeCarteVerte, fileNameCarteVerte);
                          rbv_api.log("debug", "---- Carte verte envoyée ...");
                       }
                       else {
                          rbv_api.log("debug", "---- Ce vehicule n'a pas de carte verte");
                       }
                       // On double la ligne pour la demande de modification (pour avoir une ligne "avant" et une ligne "après" demande de modification)
                       var arr = [];
                       arr["nouvelle_demande_vehicule"] = false;
                       rbv_api.cloneRecord("demande_modification_vehicule", newID, arr);
                    }
                    catch (exception) {
                       rbv_api.log("debug", "Erreur création des vehicules 2 : " + exception.message);
                    }
                  }
               }
               catch (exception) {
                  rbv_api.log("debug", "Erreur création des vehicules 1 : " + exception.message);
               }
            }
         }
      }
      catch(exception) {
         rbv_api.log("debug", "Erreur lors de la création des vehicules 3: " + exception.message);
      }

      // PERMIS AVANCE COLLABORATEUR
      rbv_api.log("debug", "Permis ...");
      var aPermisID = rbv_api.getRelatedIds("R139851453", {!id});
      try {
         if (aPermisID.length > 0) {
            var permisNouveau = rbv_api.selectQuery("SELECT id, R140680806, numero_permis, numero_dossier, annee_delivrance, date_obtention_permis, date_expiration_permis, date_delivrance_carte, date_expiration_carte, autorite_delivrance, R139851435 FROM permis_conduire WHERE id IN(" + aPermisID.join(',') + ")", 99);
            rbv_api.printArr(permisNouveau);
            if (permisNouveau.length > 0) {
               try {
                  for (i = 0; i < permisNouveau.length; i++) {
                     var aPermis = new Array();
                     aPermis["R140680845"] = permisNouveau[i][1]; // Type permis
                     aPermis["numero_permis"] = permisNouveau[i][2];
                     aPermis["numero_dossier"] = permisNouveau[i][3];
                     aPermis["annee_delivrance"] = permisNouveau[i][4];
                     aPermis["date_obtention_permis"] = permisNouveau[i][5];
                     aPermis["date_expiration_permis"] = permisNouveau[i][6];
                     aPermis["date_delivrance_carte"] = permisNouveau[i][7];
                     aPermis["date_expiration_carte"] = permisNouveau[i][8];
                     aPermis["autorite_delivrance"] = permisNouveau[i][9];
                     aPermis["R140680409"] = permisNouveau[i][10]; // Pays de délivrance
                     aPermis["nouvelle_demande_permis"] = true;
                     aPermis["R140646641"] = idDemande;
                     aPermis["R140680417"] = permisNouveau[i][0]; // ID du permis
                     
                     try {
                        rbv_api.log("debug", "- Création de demande de modif de permis");
                        var newID = rbv_api.createRecord("demande_modification_permis", aPermis);
                        rbv_api.log("debug", "--- Demande de modif de permis créée. Recherche d'une attestation de points");
                       
                        // Création du fichier "Attestation de points"
                        var infosFichierAttestationValidite = rbv_api.selectValue("SELECT attestation_points FROM permis_conduire WHERE id=?", permisNouveau[i][0]);
                        if (infosFichierAttestationValidite && infosFichierAttestationValidite != "") {
                           
                           rbv_api.log("debug", "---- attestation de points trouvé !");
                            
                           var contentType = "";
                           var fileName = "";
                           var base64Fichier = (rbv_api.getBinaryData("permis_conduire", permisNouveau[i][0], "attestation_points")+"").replace(/\r/g, "").replace(/\n/g, "");
                           infosFichierAttestationValidite = infosFichierAttestationValidite.split("\n");
                           for (var j in infosFichierAttestationValidite) {
                              if (infosFichierAttestationValidite[j].indexOf("contentType=") >= 0) {
                                 contentType = infosFichierAttestationValidite[j].split("=")[1].replace("\n", "").replace("\r", "");
                              }
                              if (infosFichierAttestationValidite[j].indexOf("origFileName=") >= 0) {
                                 fileName = infosFichierAttestationValidite[j].split("=")[1].replace("\n", "").replace("\r", "");
                              }
                           }
                           rbv_api.log("debug", "---- L'attestation de points est le suivant : "+fileName+" ("+contentType+")");
                           
                           rbv_api.log("debug", "---- Envoi de l'attestation de points sur demande de modif permis ...");
                           rbv_api.setBinaryFieldValue("demande_modification_permis", newID, "attestation_points", base64Fichier, contentType, fileName);
                           rbv_api.log("debug", "---- attestation de points envoyé ...");
                        }
                        else {
                           rbv_api.log("debug", "---- Ce permis n'a pas d'attestation de points");
                        }

                        // Création du fichier "Pièce jointe"
                        var infosFichierPieceJointe = rbv_api.selectValue("SELECT piece_jointe FROM permis_conduire WHERE id=?", permisNouveau[i][0]);
                        if (infosFichierPieceJointe && infosFichierPieceJointe != "") {
                           
                           rbv_api.log("debug", "---- pièce jointe trouvé !");
                            
                           var contentType = "";
                           var fileName = "";
                           var base64Fichier = (rbv_api.getBinaryData("permis_conduire", permisNouveau[i][0], "piece_jointe")+"").replace(/\r/g, "").replace(/\n/g, "");
                           infosFichierPieceJointe = infosFichierPieceJointe.split("\n");
                           for (var j in infosFichierPieceJointe) {
                              if (infosFichierPieceJointe[j].indexOf("contentType=") >= 0) {
                                 contentType = infosFichierPieceJointe[j].split("=")[1].replace("\n", "").replace("\r", "");
                              }
                              if (infosFichierPieceJointe[j].indexOf("origFileName=") >= 0) {
                                 fileName = infosFichierPieceJointe[j].split("=")[1].replace("\n", "").replace("\r", "");
                              }
                           }
                           rbv_api.log("debug", "---- La pièce jointe est la suivante : "+fileName+" ("+contentType+")");
                           
                           rbv_api.log("debug", "---- Envoi de la pièce jointe sur demande de modif permis ...");
                           rbv_api.setBinaryFieldValue("demande_modification_permis", newID, "piece_jointe", base64Fichier, contentType, fileName);
                           rbv_api.log("debug", "---- pièce jointe envoyée ...");
                        }
                        else {
                           rbv_api.log("debug", "---- Ce permis n'a pas de pièce jointe");
                        }
                        
                        // On double la ligne pour la demande de modification (pour avoir une ligne "avant" et une ligne "après" demande de modification)
                        var arr = [];
                        arr["nouvelle_demande_permis"] = false;
                        rbv_api.cloneRecord("demande_modification_permis", newID, arr);
                     }
                     catch (exception) {
                        rbv_api.log("debug", "Erreur création des permis 2 : " + exception.message);
                     }
                  }
               }
               catch (exception) {
                  rbv_api.log("debug", "Erreur création des permis(gestion avancée) 1 : " + exception.message);
               }
            }
         }
      }
      catch(exception) {
         rbv_api.log("debug", "Erreur lors de la création des permis(gestion avancée) 3: " + exception.message);
      }

      // EXPERIENCES PROFESSIONNELLES
      rbv_api.log("debug", "Expériences ...");
      var aExperiencesProsID = rbv_api.getRelatedIds("R99994896", {!id});
      try {
         if (aExperiencesProsID.length > 0) {
            var experienceProNouveau = rbv_api.selectQuery("SELECT id, intitule, date_debut, date_fin, employeur, description, derniere_experience FROM experience_professionnelle2 WHERE id IN(" + aExperiencesProsID.join(',') + ")", 99);
            rbv_api.printArr(experienceProNouveau);
            if (experienceProNouveau.length > 0) {
               try {
                  for (i = 0; i < experienceProNouveau.length; i++) {
                     var aExperiencesPros = new Array();
                     aExperiencesPros["intitule"] = experienceProNouveau[i][1];
                     aExperiencesPros["date_debut"] = experienceProNouveau[i][2];
                     aExperiencesPros["date_fin"] = experienceProNouveau[i][3];
                     aExperiencesPros["employeur"] = experienceProNouveau[i][4];
                     aExperiencesPros["description"] = experienceProNouveau[i][5];
                     aExperiencesPros["derniere_experience"] = Number(experienceProNouveau[i][6]) > 0 ? true : false; 
                     aExperiencesPros["R110974178"] = idDemande;
                     aExperiencesPros["nouvelle_demande_experience_pro"] = true;
                     aExperiencesPros["R110974181"] = experienceProNouveau[i][0];
                     try {
                        var newIdexperiencesPro = rbv_api.createRecord("demande_modification_experience_pro", aExperiencesPros);
                        //var newIdexperiencesPro2 = rbv_api.createRecord("demande_modification_experience_pro", aExperiencesPros); // doublons des lignes pour la modification
                        //rbv_api.setFieldValue("demande_modification_experience_pro", newIdexperiencesPro2, "nouvelle_demande_experience_pro", true);
                     }
                     catch (exception) {
                        rbv_api.log("debug", "Erreur création des experiences professionnelles 2 : " + exception.message);
                     }
                  }
               }
               catch (exception) {
                  rbv_api.log("debug", "Erreur création des experiences professionnelles 1 : " + exception.message);
               }
            }
         }
      }
      catch(exception) {
         rbv_api.log("debug", "Erreur lors de la création des experiences professionnelles 3: " + exception.message);
      }

      // LANGUES
      rbv_api.log("debug", "Langues ...");
      var aLanguesID = rbv_api.getRelatedIds("R99994905", {!id});
      try {
         if (aLanguesID.length > 0) {
            var langueNouveau = rbv_api.selectQuery("SELECT id, liste_langue#code, langue_text, liste_niveau#code, R216555850 FROM langue_pratiquee WHERE id IN(" + aLanguesID.join(',') + ")", 99);
            rbv_api.printArr(langueNouveau);
            if (langueNouveau.length > 0) {
               try {
                  for (i = 0; i < langueNouveau.length; i++) {
                     var aLangues = new Array();
                     aLangues["langue"] = langueNouveau[i][1];
                     aLangues["langue_text"] = langueNouveau[i][2];
                     aLangues["R218523407"] = langueNouveau[i][4]; // Langue
                     aLangues["liste_niveau"] = langueNouveau[i][3];
                     aLangues["R110974287"] = idDemande;
                     aLangues["nouvelle_demande_langue"] = true;
                     aLangues["R110974292"] = langueNouveau[i][0];
                     try {
                        var newLangue = rbv_api.createRecord("demande_modification_langue", aLangues);
                        //var newLangue2 = rbv_api.createRecord("demande_modification_langue", aLangues); // doublons des lignes pour la modification
                        //rbv_api.setFieldValue("demande_modification_langue", newLangue2, "nouvelle_demande_langue", true);
                     }
                     catch (exception) {
                        rbv_api.log("debug", "Erreur création des langues 2 : " + exception.message);
                     }
                  }
               }
               catch (exception) {
                  rbv_api.log("debug", "Erreur création des langues 1 : " + exception.message);
               }
            }
         }
      }
      catch(exception) {
         rbv_api.log("debug", "Erreur lors de la création des langues 3: " + exception.message);
      } 
   }
}

traitement();