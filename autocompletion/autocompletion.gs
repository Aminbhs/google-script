/**
 * Created by aminbhs.fr
**/
function emailIsValid_(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function query_(query) {
  if (emailIsValid_(query)) {
    var domain = query.replace(/.*@/, "");
    return domain
  } else {
    return query
  }
}

function fetch_(query) {
  var response = UrlFetchApp.fetch("https://autocomplete.clearbit.com/v1/companies/suggest?query=" + encodeURI(query_(query)));
  Logger.log(response.getContentText());
  Utilities.sleep(1000);
  var out = JSON.parse(response.getContentText());
  return out
}

/**
 * Récupérer l'URL d'une entreprise grâce à son nom.
 *
 * Cette formule permet de récupérer le nom de domaine d'une entreprise grâce à son nom ou à un email pro.
 *
 * Par exemple:
 *
 *   =GetCompanyDomain("Tribly").
 * Développé par aminbhs.fr
 *
 * @param {"Tribly"} name Le nom de l'entreprise ou l'email pro
 * @param {1} index [Optionnel] Valeur par défaut : 1. C'est donc le premier résultat qui apparait. Si le premier résultat ne correspond pas à la requête et qu'il y a d'autres résultats, essayer le suivant : 2, 3 etc.
 *
 * @return L'URL de l'entreprise
 * @customfunction
 **/
function GetCompanyDomain(name,index) {
  var json_out = fetch_(name) ;
  if (json_out && json_out[0]) {
    if (index) {
      var human_index = index-1
      if (json_out[human_index]) {
        return json_out[human_index]['domain'];
      } else {
        return "Null"
      }
    } else {
      return json_out[0]['domain'];
    }
    return json_out[0]['domain'];
  } else {
    return "Null"
  }
}

/**
 * Récupérer le nom d'une entreprise grâce à son nom de domaine.
 *
 * Cette formule permet de récupérer le nom d'une entreprise grâce à son nom de domaine ou un email pro.
 *
 * Par exemple:
 *
 *   =GetCompanyName("tribly.co").
 *
 * Développé par aminbhs.fr
 *
 * @param {"tribly.co"} domain Le nom de domaine de l'entreprise ou un email pro
 * @param {1} index [Optionnel] Valeur par défaut : 1. C'est donc le premier résultat qui apparait. Si le premier résultat ne correspond pas à la requête et qu'il y a d'autres résultats, essayer le suivant : 2, 3 etc.
 *
 * @return Le nom de l'entreprise
 * @customfunction
 **/
function GetCompanyName(domain,index) {
  var json_out = fetch_(domain) ;
  if (json_out && json_out[0]) {
    if (index) {
      var human_index = index-1
      if (json_out[human_index]) {
        return json_out[human_index]['name'];
      } else {
        return "Null"
      }
    } else {
      return json_out[0]['name'];
    }
    return json_out[0]['name'];
  } else {
    return "Null"
  }
}

/**
 * Récupérer l'url du logo de l'entreprise grâce à nom ou son nom de domaine.
 *
 * Cette formule permet de récupérer l'url du logo d'une entreprise grâce à nom ou son nom de domaine ou un email pro.
 *
 * Par exemple:
 *
 *   =GetCompanyLogoURL("tribly.co") OU =GetCompanyLogoURL("tribly").
 *
 * Développé par aminbhs.fr
 * @param query Le nom ou le nom de domaine de l'entreprise ou un email pro.
 *
 * @return L'URL du logo de l'entreprise
 * @customfunction
 **/
function GetCompanyLogoURL(query,index) {
  var json_out = fetch_(query) ;
  if (json_out && json_out[0]) {
    if (index) {
      var human_index = index-1
      if (json_out[human_index]) {
        return json_out[human_index]['logo'];
      } else {
        return "Null"
      }
    } else {
      return json_out[0]['logo'];
    }
    return json_out[0]['logo'];
  } else {
    return "Null"
  }
}

/**
 * Created by aminbhs.fr
**/
