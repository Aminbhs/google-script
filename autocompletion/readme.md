# Autocompletion

Documentation en cours de création. Ce script permet de faire de l'autocompletion gratuitement et directement depuis Google Sheets.  

## Table of Contents
+ [À propos](#about)
+ [Installation](#installation)
+ [Utilisation](#Utilisation)
+ [Contact](#contact)

## À propos <a name = "about"></a>
Ce script a était créé et diffusé via La Newsletter du Marketing Automation.
Ce script permet via des formules de récupérer des informations sur une entreprise via un nom ou une adresse email.
Ce script utilise l'API de Clearbit, un outil d'enrichissement de contact. 
Pour recevoir la vidéo compléte pour installer ce script [inscrivez-vous à la newsletter](https://aminbhs.fr/automation-newsletter)

## Installation <a name = "installation"></a>
Pour installer ce script acéddez à l'éditeur de script dans grâce aux étapes suivantes:  
1. Sur votre ordinateur, ouvrez une feuille de calcul en accédant à <a href="https://sheets.google.com" target="_blank">sheets.google.com</a>.  
2. En haut de l'écran, cliquez sur Outils > Éditeur de scripts  


### Éditeur de scripts

Une fois arrivé dans l'éditeur de script, installez

1. Donner un nom au projet par exemple GetCompanyInfos (optionnel)
2. Renommer le fichier "code.gs" en "autocompletion.gs" (optionnel)
3. Copiez les informations de la ligne 1 à 132 du fichier [autocompletion.gs](./autocompletion.gs)
4. Coller les information dans le fichier "autocompletion.gs" de l'étape 2.
5. En haut de l'écran, cliquez sur Fichier > Enregister



## Utilisation

Vous pouvez maintenant utiliser les formules suivantes dans vos cellules

```
=GetCompanyName()
```

```
=GetCompanyDomain()
```

```
=GetCompanyLogoUrl()
```
End with an example of getting some data out of the system or using it for a little demo.

## Contact <a name = "contact"></a>

Pour toutes question n'hésitez pas à me contacter via le chat sur [aminbhs.fr](https://aminbhs.fr/). ou a hello at aminbhs.fr
